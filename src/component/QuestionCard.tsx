import * as React from 'react';
import {FC} from "react";
import Question from "../model/Question"
import {Paper} from "@mui/material";

interface QuestionProps {
    question: Question
}

export const QuestionCard: FC<QuestionProps> = ({question}) => {
    return <Paper sx={theme => ({
        padding: theme.spacing(1),
        color: theme.palette.text.secondary
    })} elevation={10}>{question.label}</Paper>

}