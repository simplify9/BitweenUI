import {usePartnerFinder} from "../../hooks/queryHooks";
import {ChoiceEditor} from "../common/forms/ChoiceEditor";


interface Props {
    value?: string | number
    onChange: (value: string) => void
    disabled?: boolean
}

const defaultQuery = {
    nameContains: "",
    offset: 0,
    limit: 10000,
    sortBy: "docType",
    sortByDescending: false
}

const PartnerSelector: React.FC<Props> = ({value, onChange, disabled}) => {

    const [queryState, newQuery] = usePartnerFinder(defaultQuery);
    return (
        <ChoiceEditor
            placeholder="Select Partner"
            disabled={disabled}
            value={value?.toString()}
            onChange={onChange}
            options={queryState.response && queryState.response?.data !== null ? queryState.response?.data : []}
            optionValue={i => i.id}
            optionTitle={i => i.name}/>
    );
}

export default PartnerSelector;
