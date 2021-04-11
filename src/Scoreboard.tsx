import React from "react";
import './App.css';

type ScoreboardProps = {
    number: number
    maxNum: number
}

export const Scoreboard: React.FC<ScoreboardProps> = (props) => {

    const {number, maxNum} = props

    return (
        <div className={number === maxNum ? 'red' : 'scoreboard'}>
            {number}
        </div>
    )
}

