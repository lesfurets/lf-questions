import * as React from "react";
import { FC } from "react";
import { useQuestions } from "../hook/useQuestion";
import {Grid} from "@mui/material";

export interface QuestionManagerProps {
    storageKey: string;
}

export const QuestionManager: FC<QuestionManagerProps> = ({ storageKey }) => {
    const questions = useQuestions(storageKey);

    return (
        <Grid container spacing={2}>
            {questions.map((question) => (
                <Grid item xs={8}>{question.label}</Grid>
            ))}
        </Grid>
    );
};
