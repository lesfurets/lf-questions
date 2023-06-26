import * as React from "react";
import {FC} from "react";
import {QuestionManager, QuestionManagerProps} from "./QuestionManager";
import AppBar from "./AppBar";
import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {QuestionCollector} from "./QuestionCollector";

let config: QuestionManagerProps = {
    formKey: "1FAIpQLSfoYsWm4_LAyf43XA0Cr93QsZsHF0vqHygyAGGLhzUFYFnyAw",
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
        <QuestionCollector formKey={config.formKey}/>
    </ThemeProvider>
);
