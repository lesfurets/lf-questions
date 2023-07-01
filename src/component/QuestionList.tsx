import * as React from "react";
import {FC, useEffect, useReducer, useRef} from "react";
import {QuestionCard} from "./QuestionCard";
import {Container, Stack, useMediaQuery, useTheme} from "@mui/material";
import {useQuestions} from "../hook/useQuestion";
import Question from "../model/Question";

interface QuestionListProps {
    storageKey: string
}

enum NavActionType {
    NEXT, PREVIOUS
}

interface NavAction {
    type: NavActionType
}

interface NavState {
    questions: Question[],
    currentQuestion: Question
}

const navReducer = (navState: NavState, action: NavAction) => {
    const {questions, currentQuestion} = navState;
    const index = questions.findIndex(question => question == currentQuestion);
    if (action.type === NavActionType.PREVIOUS) {
        return (index === 0) ? navState : {
            ...navState,
            currentQuestion: questions[index - 1]
        }
    }  if (action.type === NavActionType.NEXT) {
        return (index === questions.length - 1) ? navState : {
            ...navState,
            currentQuestion: questions[index + 1]
        }
    }
    throw Error('Unknown action.');
}

export const QuestionList: FC<QuestionListProps> = ({storageKey}) => {
    const theme = useTheme();
    const aboveMD = useMediaQuery(theme.breakpoints.up('md'));
    const ref = useRef(null);

    const questions = useQuestions(storageKey);
    const [state, dispatch] = useReducer(navReducer, {questions: questions, currentQuestion: questions[0]});

    console.log(state.currentQuestion);

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            if (event.keyCode == 37 || event.keyCode == 38) { // previous
                dispatch({type: NavActionType.PREVIOUS});
            }
            if (event.keyCode == 39 || event.keyCode == 40) { // next
                dispatch({type: NavActionType.NEXT});
            }
        }, false);
    }, [])

    const onSelect = (offset: number) => {
        const appBarOffset = aboveMD ? 64 : 0;
        const target = offset - appBarOffset + ref.current.scrollTop;
        ref.current.scrollTo({top: target, behavior: 'smooth'});
    }

    return (
        <Container sx={{height: "calc(100vh - 64px)", overflowY: "hidden"}} ref={ref}>
            <Stack spacing={10} sx={{marginTop: "40vh", marginBottom: "100vh"}}>
                {questions.map((question) => (
                    <QuestionCard
                        key={question.id}
                        question={question}
                        isSelected={question === state.currentQuestion}
                        onSelect={onSelect}/>
                ))}
            </Stack>
        </Container>
    );
}
