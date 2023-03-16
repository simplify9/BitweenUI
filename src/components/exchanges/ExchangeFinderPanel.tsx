import {ExchangeFindQuery} from "src/types/xchange";
import React from "react";
import FormField from "src/components/common/forms/FormField";
import SubscriptionSelector from "src/components/Subscriptions/SubscriptionSelector";
import DateEditor from "src/components/common/forms/DateEditor";
import TextEditor from "src/components/common/forms/TextEditor";
import Button from "src/components/common/forms/Button";
import ChoiceEditor from "src/components/common/forms/ChoiceEditor";


interface Props {
    value: ExchangeFindQuery
    onChange: (value: ExchangeFindQuery) => void
    onFindRequested: () => void
    onClear: () => void
    onBulkRetry: () => void
    onCreateXchange: () => void
    isItemsSelected: boolean
}

type DeliveryStatus = {
    id: string
    title: string
}

export const ExchangeFinderPanel: React.FC<Props> = ({
                                                         value,
                                                         onChange,
                                                         onFindRequested,
                                                         onClear,
                                                         onCreateXchange,
                                                         onBulkRetry,
                                                         isItemsSelected
                                                     }) => {

    const handleFind = (e) => {
        e.preventDefault();
        onFindRequested();
    }
    return (
        <div className={"shadow px-2 mb-2  rounded-lg bg-white"} style={{zIndex: 1000}}>
            <div className="flex flex-row w-100 pb-4  pt-3 z-50">
                <div className={"flex flex-col w-full  "}>
                    <div className={"flex flex-row justify-between items-end p-1"}>
                        <div className={"flex flex-row gap-3 "}>


                            <FormField title="Target Subscription" className={"min-w-[350px]"}>
                                <SubscriptionSelector
                                    value={value.subscription}
                                    onChange={subscription => onChange({...value, subscription})}/>
                            </FormField>
                            <FormField title="Creation Time From">
                                <DateEditor onChange={(t) => onChange({
                                    ...value,
                                    creationDateFrom: t

                                })} value={value.creationDateFrom}/>
                            </FormField>
                            <FormField title="Creation Time To">
                                <DateEditor onChange={(t) => onChange({
                                    ...value,
                                    creationDateTo: t
                                })} value={value.creationDateTo}/>
                            </FormField>


                            <FormField title="Delivery Status">
                                <ChoiceEditor
                                    placeholder="Select Status"
                                    value={value.status}
                                    onChange={status => onChange({...value, status})}
                                    optionTitle={(item: DeliveryStatus) => item.title}
                                    optionValue={(item: DeliveryStatus) => item.id}
                                    options={[
                                        {id: "0", title: "Running"},
                                        {id: "1", title: "Success"},
                                        {id: "2", title: "Bad response"},
                                        {id: "3", title: "Failed"}
                                    ]}/>
                            </FormField>
                        </div>

                    </div>
                    <div className={"flex flex-row justify-between items-end p-1"}>
                        <div className={"flex gap-3"}>
                            <FormField title="Promoted Properties" className={"min-w-[350px]"}>
                                <TextEditor placeholder="Promoted Properties" value={value.promotedProperties}
                                            onChange={(t) => onChange({...value, promotedProperties: t})}/>
                            </FormField>

                            <FormField title="ID">
                                <TextEditor placeholder="ID" value={value.id}
                                            onChange={(t) => onChange({...value, id: t})}/>
                            </FormField>
                            <FormField title="Correlation ID">
                                <TextEditor placeholder="Correlation ID" value={value.correlationId}
                                            onChange={(t) => onChange({...value, correlationId: t})}/>
                            </FormField>

                        </div>


                    </div>
                </div>
                <div>
                    <div className={"flex-row-reverse flex  "}>
                        <div className={"flex-row-reverse flex max-w-[100px] "}>
                            <FormField title="Refetch every">
                                <ChoiceEditor
                                    placeholder="Select Status"
                                    value={value.fetchInterval?.toString()}
                                    onChange={fetchInterval => onChange({
                                        ...value,
                                        fetchInterval: Number(fetchInterval)
                                    })}
                                    optionTitle={(item: DeliveryStatus) => item.title}
                                    optionValue={(item: DeliveryStatus) => item.id}
                                    options={[
                                        {id: "2000", title: "2 Seconds"},
                                        {id: "5000", title: "5 Seconds"},
                                        {id: "10000", title: "10 Seconds"},
                                    ]}/>
                            </FormField>
                        </div>
                    </div>
                    <div className={"flex flex-row-reverse pt-1"}>


                        <Button
                            onClick={() => {
                                console.log("onCreate")
                                onCreateXchange()
                            }}
                        >
                            Create
                        </Button>
                        {
                            isItemsSelected && <Button
                                onClick={onBulkRetry}
                            >
                                Bulk retry
                            </Button>
                        }

                    </div>
                    <div className={"flex flex-row pt-1"}>
                        <Button
                            variant={"secondary"}
                            onClick={onClear}
                        >
                            Clear
                        </Button>
                        <Button
                            onClick={handleFind}
                        >
                            Search
                        </Button>
                    </div>


                </div>

            </div>

        </div>
    )
}



