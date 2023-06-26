import * as React from "react";
import {FC} from "react";
import QuestionModel from "../model/Question";
import {QuestionCard} from "./QuestionCard";
import {Grid} from "@mui/material";

interface QuestionManagerProps {
    questions: QuestionModel[]
}

export const QuestionList: FC<QuestionManagerProps> = ({questions}) =>
    <Grid container spacing={2} sx={theme => ({padding: theme.spacing(1)})}>
        {questions.map((question) => (
            <Grid item xs={12}>
                <QuestionCard key={question.id} question={question}/>
            </Grid>
        ))}
    </Grid>;
