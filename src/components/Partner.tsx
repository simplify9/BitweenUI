import {useNavigate, useParams} from "react-router-dom";
import Button from "./common/forms/Button";
import FormField from "./common/forms/FormField";
import TextEditor from "./common/forms/TextEditor";
import {useEffect, useState} from "react";
import {apiClient} from "../client";
import {IPartner, UpdatePartner} from "../types/partners";
import {KeyValuePair} from "../types/common";
import KeyValueEditor from "./common/forms/KeyValueEditor";
import Authorize from "src/components/common/authorize/authorize";
import {ISubscription} from "src/types/subscriptions";


const Component = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [partner, setPartner] = useState<IPartner>();
    const [updatePartnerData, setUpdatePartnerData] = useState<UpdatePartner>({});
    const nav = useNavigate()
    useEffect(() => {
        if (id) {
            refreshPartner(id);
        }

    }, [id]);
    useEffect(() => {
        setUpdatePartnerData({
            name: partner?.name,
            apiCredentials: partner?.apiCredentials
        })
    }, [partner])

    const refreshPartner = async (id: string) => {
        let res = await apiClient.findPartner(id);
        if (res.succeeded) setPartner(res.data);
    }

    const updatePartner = async () => {
        let res = await apiClient.updatePartner(id!, updatePartnerData);
        if (res.succeeded) await refreshPartner(id!);
    }
    const deletePartner = async () => {
        let res = await apiClient.deletePartner(id!);
        if (res.succeeded) navigate('/partners')
    }

    const addApiKey = async (kv: KeyValuePair) => {
        let pparr = updatePartnerData.apiCredentials;
        let res = await apiClient.generatePartnerKey();
        if (res.succeeded) {
            kv.value = res.data
            pparr?.push(kv);
            setUpdatePartnerData({...updatePartnerData, apiCredentials: pparr})
        }

    }
    const removeApiKey = (kv: KeyValuePair) => {
        let pparr: KeyValuePair[] = [];
        updatePartnerData.apiCredentials?.forEach(pp => {
            if (pp.value != kv.value && pp.key != kv.key) pparr.push(pp);
        });
        setUpdatePartnerData({...updatePartnerData, apiCredentials: pparr})
    }

    return (
        <div className="flex flex-col w-full gap-10 pt-3">
            <div className={"w-1/3 bg-white flex flex-col h-fit p-3 rounded-lg shadow-lg"}>


                <div className="  flex flex-row justify-between items-end">
                    <FormField title="Name" className="w-3/4">
                        <TextEditor value={updatePartnerData?.name} onChange={(t) => setUpdatePartnerData({
                            ...updatePartnerData,
                            name: t
                        })}/>
                    </FormField>
                    <div className={" "}>

                        <Button onClick={deletePartner}
                        >
                            Delete
                        </Button>

                    </div>
                </div>
                <div className=" mt-5  flex  w-full ">

                    <Authorize roles={["Admin", "Editor"]}>

                        <KeyValueEditor hideEmptyLabel values={updatePartnerData?.apiCredentials}
                                        title={'Api Credentials'}
                                        keyLabel={"Name"} valueLabel={"Key"}
                                        onAdd={addApiKey} onRemove={removeApiKey} addLabel={"Add New Api Credentials"}
                                        valueAutoGeneratedOnAdd={true}
                        />
                    </Authorize>

                </div>
                <div className={"flex w-full flex-row-reverse gap-2 mt-3"}>

                    <Authorize roles={["Admin", "Editor"]}>
                        <Button
                            onClick={updatePartner}
                        >Save
                        </Button>
                    </Authorize>
                    <Button
                        variant={"secondary"}
                        onClick={() => navigate('/partners')}
                    >Cancel
                    </Button>
                </div>
            </div>
            {
                (partner?.subscriptions && partner.subscriptions?.length > 0) &&
                <div className="  w-1/3   flex  justify-between">


                    <div className="w-full shadow-lg  bg-white  rounded-xl overflow-hidden  pt-2">
                        <div
                            className="text-2xl w-full py-2 font-bold tracking-wide px-5 text-primary-600">Subscriptions
                        </div>
                        <table className=" min-w-full">
                            <thead className="border-y bg-gray-50">
                            <tr>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-1 text-left">
                                    ID
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-1 text-left">
                                    Name
                                </th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                                partner?.subscriptions?.map((i: ISubscription) => (
                                    <tr key={i.id} className="bg-white border-b cursor-pointer"
                                        onClick={() => nav(`/subscriptions/${i.id}`)}>
                                        <td className="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap">
                                            {i.id}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap">
                                            {i.name}
                                        </td>


                                    </tr>
                                ))

                            }

                            </tbody>
                        </table>

                    </div>

                </div>
            }


        </div>
    );
}

export default Component;
