import {ExchangeFindQuery} from "src/types/xchange";
import React from "react";
import FormField from "src/components/common/forms/FormField";
import SubscriptionSelector from "src/components/Subscriptions/SubscriptionSelector";
import DateEditor from "src/components/common/forms/DateEditor";
import TextEditor from "src/components/common/forms/TextEditor";
import Button from "src/components/common/forms/Button";
import ChoiceEditor from "src/components/common/forms/ChoiceEditor";
import DocumentSelector from "../Documents/DocumentSelector";
import ENV from "src/env";
import PartnerSelector from "src/components/Partners/PartnerSelector";

interface Props {
    value: ExchangeFindQuery;
    onChange: (value: ExchangeFindQuery) => void;
    onFindRequested: () => void;
    onClear: () => void;
    onBulkRetry: () => void;
    onCreateXchange: () => void;
    isItemsSelected: boolean;
}

type DeliveryStatus = {
    id: string;
    title: string;
};

export const ExchangeFinderPanel: React.FC<Props> = ({
                                                         value,
                                                         onChange,
                                                         onFindRequested,
                                                         onClear,
                                                         onCreateXchange,
                                                         onBulkRetry,
                                                         isItemsSelected,
                                                     }) => {
    const handleFind = (e) => {
        e.preventDefault();
        onFindRequested();
    };

    return (
        <div
            className={"shadow px-2 mb-2  rounded-lg bg-white"}
            style={{zIndex: 1000}}
        >
            <div className="flex flex-row justify-between items-start w-100 pb-4 pt-3 z-50 gap-x-5">
                <div
                    className={
                        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3"
                    }
                >
                    <FormField title="Target Subscription">
                        <SubscriptionSelector
                            value={value.subscription}
                            onChange={(subscription) => {
                                onChange({...value, subscription});
                            }}
                        />
                    </FormField>
                    <FormField title="Document">
                        <DocumentSelector
                            value={value.documentId?.toString()}
                            onChange={(t) =>
                                onChange({
                                    ...value,
                                    documentId: Number(t),
                                })
                            }
                        />
                    </FormField>
                    <FormField title="Partner">
                        <PartnerSelector
                            value={value.partnerId?.toString()}
                            onChange={(t) =>
                                onChange({
                                    ...value,
                                    partnerId: Number(t),
                                })
                            }
                        />
                    </FormField>
                  
                    <FormField title="Delivery Status">
                        <ChoiceEditor
                            placeholder="Select Status"
                            value={value.status}
                            onChange={(status) => onChange({...value, status})}
                            optionTitle={(item: DeliveryStatus) => item.title}
                            optionValue={(item: DeliveryStatus) => item.id}
                            options={[
                                {id: "0", title: "Running"},
                                {id: "1", title: "Success"},
                                {id: "2", title: "Bad response"},
                                {id: "3", title: "Failed"},
                            ]}
                        />
                    </FormField>
                    <FormField title="Promoted Properties">
                        <TextEditor
                            placeholder="Promoted Properties"
                            value={value.promotedProperties}
                            onChange={(t) => onChange({...value, promotedProperties: t})}
                        />
                    </FormField>
                    <FormField title="IDs">
                        <TextEditor
                            placeholder="( , | \n \s ) are valid seperators."
                            value={value.ids}
                            onChange={(t) => onChange({...value, ids: t})}
                        />
                    </FormField>
                    <FormField title="Correlation ID">
                        <TextEditor
                            placeholder="Correlation ID"
                            value={value.correlationId}
                            onChange={(t) => onChange({...value, correlationId: t})}
                        />
                    </FormField>
                    <FormField title="Creation Time From">
                        <DateEditor
                            onChange={(t) =>
                                onChange({
                                    ...value,
                                    creationDateFrom: t,
                                })
                            }
                            value={value.creationDateFrom}
                        />
                    </FormField>

                    <FormField title="Creation Time To">
                        <DateEditor
                            onChange={(t) =>
                                onChange({
                                    ...value,
                                    creationDateTo: t,
                                })
                            }
                            value={value.creationDateTo}
                        />
                    </FormField>
                </div>
                <div className={"w-[300px] items-end justify-end flex flex-col"}>
                    <div className={" flex w-full items-end justify-end mx-1 "}>
                        <FormField title="Refresh every" className={"w-full"}>
                            <ChoiceEditor
                                placeholder="Select Status"
                                value={value.fetchInterval?.toString()}
                                onChange={(fetchInterval) =>
                                    onChange({
                                        ...value,
                                        fetchInterval: Number(fetchInterval),
                                    })
                                }
                                optionTitle={(item: DeliveryStatus) => item.title}
                                optionValue={(item: DeliveryStatus) => item.id}
                                options={ENV.CONFIG.XCHANGE_REFRESH_DEFAULT_INTERVAL_OPTIONS}
                            />
                        </FormField>
                    </div>
                    <div className={"pt-1  w-full"}>
                        <div className={"flex flex-row  "}>
                            <Button
                                onClick={() => {
                                    onCreateXchange();
                                }}
                            >
                                Create Xchange
                            </Button>
                            {isItemsSelected && (
                                <Button onClick={onBulkRetry}>Bulk retry</Button>
                            )}
                        </div>
                        <div className={"flex flex-row pt-1"}>
                            <Button variant={"secondary"} onClick={onClear}>
                                Clear
                            </Button>
                            <Button onClick={handleFind}>Search</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
