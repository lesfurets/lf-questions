import * as React from 'react';
import {FC, useEffect, useState} from 'react';
import Question from "../model/Question"
import {initQuestionLoader, QuestionLoader} from "../service/QuestionLoader";

export interface QuestionManagerConfig {
    title: string,
    subTitle: string,
    formKey: string,
    listKey: string,
    presentationMode: boolean
}

export interface QuestionManagerProps {
    config: QuestionManagerConfig
}

export const QuestionManager: FC<QuestionManagerProps> = ({config}) => {

    const [questions, setQuestions] = useState<Question[]>([{id: 0, label: "Chargement des questions ..."}]);
    const [questionLoader] = useState<QuestionLoader>(initQuestionLoader(setQuestions, config.listKey));

    useEffect(() => {
        setInterval(questionLoader.load, 2000)
    }, [])


    return (
        <div>
            {questions.map(question => <div>{question.label}</div>)}
        </div>
    );

}