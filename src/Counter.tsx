import {Scoreboard} from "./Scoreboard";
import {Button} from "./Button";
import React from "react";
import './App.css'

type PropsType = {
    set: () => void
    res: () => void
    number: number
    maxNum: number
    startNum: number
    setActive: () => void
}

export const Counter: React.FC<PropsType> = (props) => {

    const {set, res, setActive, number, maxNum, startNum} = props

    return (
        <div>
            <div className={'screen'}>
                <Scoreboard number={number} maxNum={maxNum}/>
            </div>
            <div className={'buttons'}>
                <Button disabled={number === maxNum}
                        onClickHandler={set}
                        className={'ink'}
                        buttonName={'Ink'}
                />
                <Button onClickHandler={setActive}
                        className={'set'}
                        buttonName={'Set'}
                />
                <Button disabled={number === startNum}
                        onClickHandler={res}
                        className={'reset'}
                        buttonName={'Reset'}
                />
            </div>
        </div>
    )
}
