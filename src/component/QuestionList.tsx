import * as React from "react";
import {FC} from "react";
import {QuestionCard} from "./QuestionCard";
import {Grid} from "@mui/material";
import {useQuestions} from "../hook/useQuestion";

interface QuestionListProps {
    storageKey: string
}

export const QuestionList: FC<QuestionListProps> = ({storageKey}) => {
    const questions = useQuestions(storageKey);

    return (
        <Grid container spacing={2} sx={theme => ({padding: theme.spacing(1)})}>
            {questions.map((question) => (
                <Grid item xs={12} key={question.id} >
                    <QuestionCard question={question}/>
                </Grid>
            ))}
        </Grid>
    );
}
