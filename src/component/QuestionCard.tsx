import * as React from 'react';
import Question from "../model/Question"
import {Paper, Typography} from "@mui/material";

interface QuestionProps {
    question: Question;
    isHighlighted: boolean;
}

export const QuestionCard = React.forwardRef<HTMLDivElement, QuestionProps>(({question, isHighlighted}, ref) =>
    (
        <Paper
            elevation={isHighlighted ? 10 : 0}
            ref={ref}
            sx={theme => ({
                padding: theme.spacing(2),
                color: theme.palette.text.secondary,
                position: "relative",
                borderBottomLeftRadius: 0,
                opacity: isHighlighted ? 1 : 0.5,
                whiteSpace: "pre-wrap",
                transition: theme.transitions.create(
                    ['box-shadow', 'opacity'],
                    {
                        duration: 2 * theme.transitions.duration.standard,
                    }),
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
    ))