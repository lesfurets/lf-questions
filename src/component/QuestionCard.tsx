import * as React from 'react';
import {FC, useRef} from 'react';
import Question from "../model/Question"
import {Paper, Typography} from "@mui/material";

interface QuestionProps {
    question: Question
    onSelect: (offset: number) => void;
}

export const QuestionCard: FC<QuestionProps> = ({question, onSelect}) => {
    const cardRef = useRef(null);

    return (
        <Paper
            elevation={10}
            ref={cardRef}
            onClick={() => onSelect(cardRef.current.getBoundingClientRect().y)}
            sx={theme => ({
                padding: theme.spacing(2),
                color: theme.palette.text.secondary,
                position: "relative",
                borderBottomLeftRadius: 0,
                "&::before": {
                    content: '""',
                    position: "absolute",
                    height: 15,
                    width: 15,
                    bottom: 0,
                    left: -15,
                    backgroundColor: theme.palette.background.paper,
                    mask: "radial-gradient(15px at 0% 0,#0000 98%,#000);",
                }
            })}>
            <Typography fontSize={18}>
                {question.label}
            </Typography>
        </Paper>
    );
}