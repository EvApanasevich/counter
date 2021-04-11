import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Setting} from "./Settings";

export const App: React.FC = () => {

    const [number, setNamber] = useState<number>(0)
    const [activeSetting, setActiveSetting] = useState<boolean>(false)
    const [maxNum, setMaxNum] = useState<number>(5)
    const [startNum, setStartNum] = useState<number>(0)

    useEffect(() => {
        const valueAsString_1 = localStorage.getItem('maxNumValue')
        if (valueAsString_1) {
            const maxNumValue = JSON.parse(valueAsString_1)
            setMaxNum(maxNumValue)
        }
    }, [])
    useEffect(() => {
        const valueAsString_2 = localStorage.getItem('startNumValue')
        if (valueAsString_2) {
            const startNumValue = JSON.parse(valueAsString_2)
            setStartNum(startNumValue)
            setNamber(startNumValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxNumValue', JSON.stringify(maxNum))
    }, [maxNum])
    useEffect(() => {
        localStorage.setItem('startNumValue', JSON.stringify(startNum))
    }, [startNum])

    const set = () => number < maxNum && setNamber(number + 1)
    const res = () => setNamber(startNum)
    const setActive = () => setActiveSetting(!activeSetting)
    const changeMaxNum = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        setMaxNum(value)
    }
    const changeStartNum = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        setStartNum(value)
        setNamber(value)
    }


    return (
        <div className={'container'}>
            {activeSetting
                ? <div className={'settings'}>
                    <Setting setActive={setActive}
                             changeMaxNum={changeMaxNum}
                             changeStartNum={changeStartNum}
                             maxNum={maxNum}
                             startNum={startNum}
                    />
                </div>
                : <div className={'counter'}>
                    <Counter set={set}
                             res={res}
                             setActive={setActive}
                             number={number}
                             maxNum={maxNum}
                             startNum={startNum}
                    />
                </div>
            }
        </div>
    );
}

