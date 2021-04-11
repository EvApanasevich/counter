import React from "react";

type ButtonPropsType = {
    onClickHandler: () => void
    className: string
    buttonName: string
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({ onClickHandler, className, buttonName, disabled}) => {

    return (
        <div>
            <button disabled={disabled} className={className} onClick={onClickHandler}>{buttonName}</button>
        </div>
    )
}
