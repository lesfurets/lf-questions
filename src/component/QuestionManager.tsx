import * as React from "react";
import {FC} from "react";
import {useQuestions} from "../hook/useQuestion";
import {QuestionList} from "./QuestionList";

export interface QuestionManagerProps {
    formKey: string,
    storageKey: string;
}

export const QuestionManager: FC<QuestionManagerProps> = ({storageKey}) =>
    <QuestionList questions={useQuestions(storageKey)}/>;
