import * as React from "react";
import {FC} from "react";
import {QuestionList} from "./QuestionList";
import {Loading} from "./Loading";
import {useTheme} from "@mui/material";

export interface QuestionManagerProps {
    storageKey: string;
}

export const QuestionManager: FC<QuestionManagerProps> = ({storageKey}) => (
    <React.Suspense fallback={<Loading color={useTheme().palette.common.white}/>}>
        <QuestionList storageKey={storageKey}/>
    </React.Suspense>
);
