import * as React from "react";
import {createRef, FC, Ref, RefObject, useEffect, useLayoutEffect, useMemo, useReducer, useRef} from "react";
import {QuestionCard} from "./QuestionCard";
import {Container, Stack} from "@mui/material";
import {useQuestions} from "../hook/useQuestion";
import {useCurrentQuestion} from "../hook/useCurrentQuestion";
import {useAutoScroll} from "../hook/useAutoScroll";

interface QuestionListProps {
    storageKey: string
}

export const QuestionList: FC<QuestionListProps> = ({storageKey}) => {
    const questions = useQuestions(storageKey);
    const currentQuestion = useCurrentQuestion(questions);
    const [containerRef, questionRefs] = useAutoScroll(questions, currentQuestion);

    return (
        <Container sx={{height: "calc(100vh - 64px)", overflowY: "hidden"}} ref={containerRef}>
            <Stack spacing={{xs: 3, md: 10}} sx={{marginTop: "40vh", marginBottom: "100vh"}}>
                {questions.map((question) => (
                    <QuestionCard
                        key={question.id}
                        ref={questionRefs[question.id]}
                        question={question}
                        isHighlighted={question.id === currentQuestion.id}/>
                ))}
            </Stack>
        </Container>
    );
}
