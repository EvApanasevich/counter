import {Button} from "./Button";
import {ChangeEvent} from "react";
import {Input} from "./Input";

type PropsType = {
    setActive: () => void
    changeMaxNum: (e: ChangeEvent<HTMLInputElement>) => void
    changeStartNum: (e: ChangeEvent<HTMLInputElement>) => void
    maxNum: number
    startNum: number
}

export const Setting: React.FC<PropsType> = (props) => {
    const {setActive, changeMaxNum, changeStartNum, maxNum, startNum} = props

    const error = maxNum <= startNum || maxNum < 0 || startNum < 0

    return (
        <div>
            <div className={error ? 'info_err' : 'setting_info'}>
                {error ? 'Incorrect value!' : 'Enter values and press "Accept"'}
            </div>
            <div className={'input_board'}>
                <div className={'setting'}>
                    <div>
                        {'max value:'}
                    </div>
                    <Input changeHandler={changeMaxNum}
                           className={maxNum <= startNum || maxNum < 0 ? 'input_err' : 'setting_input'}
                           value={maxNum} />
                </div>
                <div className={'setting'}>
                    <div>
                        {'start value:'}
                    </div>
                    <Input changeHandler={changeStartNum}
                           className={maxNum <= startNum || startNum < 0 ? 'input_err' : 'setting_input'}
                           value={startNum} />
                </div>
            </div>
            <div className={'setting_button'}>
                <Button onClickHandler={setActive}
                        disabled={error}
                        className={'accept'}
                        buttonName={'Accept'}
                />
            </div>
        </div>
    )
}