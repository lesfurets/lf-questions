import * as React from 'react';
import {FC, useEffect, useRef} from 'react';
import Question from "../model/Question"
import {Paper, Typography, useTheme} from "@mui/material";

interface QuestionProps {
    question: Question;
    isSelected: boolean;
    onSelect: (top: number, bottom: number) => void;
}

export const QuestionCard: FC<QuestionProps> = ({question, isSelected, onSelect}) => {
    const cardRef = useRef(null);
    const theme = useTheme();

    useEffect(() => {
        if (isSelected) {
            onSelect(
                cardRef.current.getBoundingClientRect().top,
                cardRef.current.getBoundingClientRect().bottom
            );
        }
    }, [isSelected]);

    return (
        <Paper
            elevation={isSelected ? 10 : 0}
            ref={cardRef}
            sx={theme => ({
                padding: theme.spacing(2),
                color: theme.palette.text.secondary,
                position: "relative",
                borderBottomLeftRadius: 0,
                opacity: isSelected ? 1 : 0.5,
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
    );
}