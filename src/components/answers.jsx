import { Radio } from "./Form/Radio"

export const Answers = ({ answer, onChange, response }) => {

    let radio = [];
    radio.push(Object.keys(answer).map((key) => {
        return <Radio value={key} label={answer[key]} key={answer[key]} onChange={onChange} response={response} />
    }))
    return (
        <ul>
            {radio}
        </ul>
    )
}