import React from "react";

interface Props {
    value: string,
    name: string,
    placeholder: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: Props) => {
    const { value, name, placeholder, onChange } = props;
    return(
        <div>
            <input
                onChange={onChange}
                className="uk-input"
                defaultValue={value}
                name={name}
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
}