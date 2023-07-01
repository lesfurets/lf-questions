import * as React from "react";
import {FC} from "react";
import {QuestionManager} from "./QuestionManager";
import AppBar from "./AppBar";
import {createTheme, CssBaseline, Grid, ThemeProvider} from "@mui/material";
import {QuestionCollector} from "./QuestionCollector";

let config = {
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
        <CssBaseline/>
        <AppBar/>
        <Grid container spacing={0}>
            <Grid item xs={2}/>
            <Grid item xs={8}>
                <QuestionManager storageKey={config.storageKey}/>
            </Grid>
        </Grid>
        <QuestionCollector formKey={config.formKey}/>
    </ThemeProvider>
);
