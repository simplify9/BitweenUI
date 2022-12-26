import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import InputPopOver from "src/components/common/forms/InputPopOver";
import InputBox from "src/components/common/forms/InputBox";


type Props = {
    value: string | undefined
    onChange: (val: string) => void
}
const DateEditor: React.FC<Props> = ({value, onChange}) => {

    const onChangeDate = (date: Date | null) => {
        if (date) {
            onChange(date?.toString())
        }
    }
    return (
        <InputBox>
            <DatePicker selected={value ? new Date(value) : null} onChange={onChangeDate}/>

        </InputBox>

    )
}
export default DateEditor