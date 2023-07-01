import * as React from "react";
import {FC, useRef} from "react";
import {QuestionCard} from "./QuestionCard";
import {Container, Grid, Stack, useMediaQuery, useTheme} from "@mui/material";
import {useQuestions} from "../hook/useQuestion";

interface QuestionListProps {
    storageKey: string
}

export const QuestionList: FC<QuestionListProps> = ({storageKey}) => {
    const questions = useQuestions(storageKey);
    const theme = useTheme();
    const aboveMD = useMediaQuery(theme.breakpoints.up('md'));
    const ref = useRef(null);

    const onSelect = (offset: number) => {
        const appBarOffset = aboveMD ? 64 : 0;
        const target = offset - appBarOffset + ref.current.scrollTop;
        ref.current.scrollTo({top: target, behavior: 'smooth'});
    }

    return (
        <Container sx={{height: "100vh", overflowY: "hidden"}} ref={ref}>
            <Stack spacing={10} sx={{marginTop: "40vh", marginBottom: "100vh"}}>
                {questions.map((question) => (
                    <QuestionCard question={question} onSelect={onSelect}/>
                ))}
            </Stack>
        </Container>
    );
}
