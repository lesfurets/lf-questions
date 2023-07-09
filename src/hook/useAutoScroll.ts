import Question from "../model/Question";
import {createRef, RefObject, useLayoutEffect, useMemo, useRef} from "react";
import {useMediaQuery, useTheme} from "@mui/material";

export const useAutoScroll : (questions:Question[], currentQuestion:Question) => [any, any]  = (questions, currentQuestion) => {
    const containerRef = useRef(null);
    const questionRefs = useMemo<{[id:string] : RefObject<HTMLDivElement>}>(() => Object.fromEntries(questions.map((question) => [question.id,createRef<HTMLDivElement>()])), [questions]);

    const theme = useTheme();
    const aboveMD = useMediaQuery(theme.breakpoints.up('md'));

    useLayoutEffect(() => {
        const targetRef = questionRefs[currentQuestion.id];
        const {top, bottom} = targetRef.current.getBoundingClientRect();
        const appBarOffset = containerRef.current.getBoundingClientRect().top;

        const target = bottom - top > 250 || !aboveMD
            ? top - appBarOffset + containerRef.current.scrollTop - 15
            : bottom - appBarOffset + containerRef.current.scrollTop - 250

        containerRef.current.scrollTo({top: target, behavior: 'smooth'});

    }, [currentQuestion.id, aboveMD])

    return [containerRef, questionRefs];
};
