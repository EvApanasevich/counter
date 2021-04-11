import React, {ChangeEvent} from "react";

type InputPropsType = {
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
    value: number
}

export const Input = (props: InputPropsType) => {
    const {changeHandler, className, value} = props

    return (
        <input className={className} type="number" onChange={changeHandler} value={value}/>
    )
}