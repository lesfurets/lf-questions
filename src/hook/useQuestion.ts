import useSWR from "swr";
import Question from "../model/Question";
import { fetchQuestions } from "../service/QuestionLoader";

export const useQuestions = (key: string) =>
    useSWR<Question[], Error, string>(key, fetchQuestions, {
        suspense: true,
        refreshInterval: 3000,
    }).data;
