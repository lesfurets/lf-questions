import * as React from "react";
import { FC } from "react";
import { useQuestions } from "../hook/useQuestion";

export interface QuestionManagerProps {
    storageKey: string;
}

export const QuestionManager: FC<QuestionManagerProps> = ({ storageKey }) => {
    const questions = useQuestions(storageKey);

    return (
        <div>
            {questions.map((question) => (
                <div key={question.id}>{question.label}</div>
            ))}
        </div>
    );
};
