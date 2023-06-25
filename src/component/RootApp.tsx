import * as React from "react";
import { FC } from "react";
import { QuestionManager, QuestionManagerProps } from "./QuestionManager";
import AppBar from "./AppBar";
import {createMuiTheme, createTheme, CssBaseline, ThemeProvider} from "@mui/material";

let config: QuestionManagerProps = {
    storageKey: "1NsncYC4vb-eO84Ucc8ohnsBBxVocwoAxe5F1AnePU6I",
};

const mainTheme = createTheme({
    palette: {
        background: {
            default: "#13acf7"
        }
    },
    typography: {
        fontFamily: [
            '__Fira_Sans_Condensed_e5aa1a',
            '__Fira_Sans_Condensed_Fallback_e5aa1a',
            'Arial,sans-serif',
        ].join(','),
    }
});

export const RootApp: FC = () => (
    <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <AppBar/>
        <React.Suspense fallback={<div>Loading</div>}>
            <QuestionManager {...config} />
        </React.Suspense>
    </ThemeProvider>
);
