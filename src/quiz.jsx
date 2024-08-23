import { useEffect, useMemo, useState } from "react"
import { Question } from "./components/Question"
import { Answers } from "./components/answers"
import { Progress } from "./components/Progress"
import { NextButton } from "./components/Form/NextButton"
import { Recap } from "./components/Recap"

export const Quiz = () => {
    const [data, setData] = useState(null)
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(null)
    const [response, setResponse] = useState("")
    const [score, setScore] = useState(0)

    const info_quiz = useMemo(() => {
        if (data) {
            let recap = null
            if (index > data.length - 1) {
                return {
                    recap: <div className="d-flex justify-content-center my-2">
                        <Recap score={score} max={data.length} />
                    </div>
                }
            }
            return {
                pos: data[index],
                question: data[index].question,
                answers: {
                    'A': data[index].A,
                    'B': data[index].B,
                    'C': data[index].C,
                    'D': data[index].D
                },
                max: data.length,
                correct_answer: data[index].answer,
                recap
            }
        }
        return null
    }, [index, data])

    useEffect(() => {
        setLoading(true)
        fetch('/data/data.json').then((res) => res.json()).then((data) => {
            setData(data)
            setLoading(false)
        }).catch((e) => {
            console.log(e)
            setLoading(false)
        })

    }, [])

    const handleClick = (e) => {
        const res = response
        setIndex(prev => prev + 1)
        setResponse("")
        if (res === info_quiz.correct_answer) {
            setScore(s => s + 1)
        }
    }
    const handleChange = (e) => {
        const response = e.target.value
        setResponse(response)
    }


    if (data === null) {
        return <div className="">Loading...</div>
    }
    else if (info_quiz !== null && index <= info_quiz.max - 1) {
        return <div className="d-flex justify-content-center my-2 flex-column">
            <Question question={info_quiz.question} />
            <div className="d-flex align-items-center flex-column my-2">
                <Progress value={index} max={info_quiz.max} />
                <Answers answer={info_quiz.answers} onChange={handleChange} response={response} />
            </div>
            <NextButton disabled={response === ""} onClick={handleClick} />
        </div>
    } else {
        return info_quiz.recap
    }
}