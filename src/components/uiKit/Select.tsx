import React from "react";

interface Option {
    id: string | number,
    name: string,
    value: string | number
}

interface Props {
    name: string,
    options: Option[],
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select = (props: Props) => {
    const { name, options, onChange } = props;

    return(
        <div>
            <select onChange={onChange} name={name} className="uk-select">
                {options.map((option: Option) => (
                    <option key={option.id} value={option.value}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}