import {KeyValuePair, OptionType} from "src/types/common";
import Button from "./Button";
import React, {Fragment, useState} from "react";
import Modal from "../Modal";
import FormField from "./FormField";
import TextEditor from "./TextEditor";
import {ChoiceEditor} from "./ChoiceEditor";
import {MdOutlineRemoveCircle} from "react-icons/md";
import {HiPlusCircle} from "react-icons/hi"

type Props = Omit<JSX.IntrinsicElements['input'], "onChange"> & {
    onAdd?: (value: KeyValuePair) => void
    onRemove?: (value: KeyValuePair) => void
    values?: KeyValuePair[]
    title?: string,
    keyLabel?: string,
    valueLabel?: string
    valueAutoGeneratedOnAdd?: boolean
    addLabel?: string
    keyOptions?: OptionType[]
    hideEmptyLabel?: boolean
}

const Component: React.FC<Props> = ({
                                        className = "",
                                        disabled,
                                        values,
                                        onAdd,
                                        onRemove,
                                        title,
                                        keyLabel,
                                        valueLabel,
                                        checked,
                                        onFocus,
                                        onBlur,
                                        addLabel,
                                        valueAutoGeneratedOnAdd,
                                        keyOptions,
                                        hideEmptyLabel,
                                        ...htmlProps
                                    }) => {

    const [addOn, setAddOn] = useState<boolean>(false);
    const onCloseModal = () => setAddOn(false)

    const onOpenModal = () => setAddOn(true)


    const [newKeyValue, setNewKeyValue] = useState<KeyValuePair>({
        key: '',
        value: ''
    });

    const onAddSubmit = () => {
        if (newKeyValue) {
            onAdd!(newKeyValue)
            onCloseModal()
            setNewKeyValue({key: '', value: ''})
        }

    }

    return (
        <Fragment>
            {addOn &&
                <Modal key={`${addOn}_`} onClose={onCloseModal} submitLabel={"Add"}
                       onSubmit={onAddSubmit}>
                    <div
                        className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left grow pr-5">
                        <h3 className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-title">{addLabel}</h3>
                        <div className="mt-4">
                            <FormField title={keyLabel ?? ""} className="grow">
                                {!keyOptions ?
                                    <TextEditor placeholder={`Type in the ${keyLabel}...`}
                                                value={newKeyValue?.key}
                                                onChange={(t) => setNewKeyValue({
                                                    ...newKeyValue,
                                                    key: t
                                                })}/>
                                    :
                                    <ChoiceEditor options={keyOptions}
                                                  optionValue={(item) => item.id}
                                                  optionTitle={(item) => item.title}
                                                  value={newKeyValue?.key}
                                                  disabled={keyOptions?.length == 0}
                                                  onChange={(t) => setNewKeyValue({
                                                      ...newKeyValue,
                                                      key: t
                                                  })}/>
                                }
                            </FormField>
                        </div>
                        {!valueAutoGeneratedOnAdd && <div className="mt-4">
                            <FormField title={valueLabel ?? ""} className="grow">
                                <TextEditor placeholder={`Type in the ${valueLabel}...`}
                                            value={newKeyValue?.value}
                                            onChange={(t) => setNewKeyValue({
                                                ...newKeyValue,
                                                value: t
                                            })}/>
                            </FormField>
                        </div>}
                    </div>
                </Modal>}
            <table className="appearance-none min-w-full">
                <thead className="border-y bg-gray-50">
                <tr>
                    <th scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-2 text-left">
                        {title}
                    </th>
                    <th scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-2 text-left">

                    </th>
                    <th scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-2 text-right">
                        {
                            keyOptions?.length != 0 && <Button onClick={onOpenModal}
                                                               className={"text-green-600 rounded w-5 h-5"}><HiPlusCircle
                                size={25}/></Button>
                        }

                    </th>
                </tr>
                <tr>
                    <th scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-2 text-left">
                        {keyLabel}
                    </th>
                    <th scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-2 text-left">
                        {valueLabel}
                    </th>
                    <th scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-2 text-left">

                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    values && values.length > 0 ?
                        values?.map((i) => (
                            <tr key={i.key} className="bg-white border-b">
                                <td
                                    className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {i.key}
                                </td>
                                <td
                                    className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {i.value}
                                </td>
                                <td
                                    className="text-sm text-gray-900 felx items-center font-light px-6 py-4 whitespace-nowrap">
                                    <Button className={" text-red-600   w-8 h-8 mx-1"}
                                            onClick={() => onRemove!(i)}><MdOutlineRemoveCircle size={21}/></Button>
                                </td>

                            </tr>
                        )) : <>{((!hideEmptyLabel) &&
                            <div className={"px-4 py-3"}>No {title}</div>)}</>
                }
                </tbody>
            </table>
        </Fragment>
    );
};

export default Component;
