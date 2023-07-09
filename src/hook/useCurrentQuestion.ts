import Question from "../model/Question";
import {createRef, Reducer, RefObject, useEffect, useReducer} from "react";

enum NavActionType {
    NEXT, PREVIOUS
}

interface NavAction {
    type: NavActionType
    value?: any
}

interface NavState {
    questions: Question[],
    currentQuestion: Question
}

const navReducer = (navState: NavState, action: NavAction) => {
    const {questions, currentQuestion} = navState;
    const index = questions.findIndex(question => question.id == currentQuestion.id);
    if (action.type === NavActionType.PREVIOUS) {
        return (index === 0) ? navState : {
            ...navState,
            currentQuestion: questions[index - 1]
        }
    }
    if (action.type === NavActionType.NEXT) {
        return (index === questions.length - 1) ? navState : {
            ...navState,
            currentQuestion: questions[index + 1]
        }
    }
    throw Error('Unknown action.');
}
export const useCurrentQuestion : (questions:Question[]) => Question  = (questions) => {
    const [state, dispatch] = useReducer<Reducer<NavState,NavAction>>(navReducer, {
        questions: questions,
        currentQuestion: questions[0]
    });

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

    return state.currentQuestion;
};
