import * as React from "react";
import {FC} from "react";
import {QuestionManager} from "./QuestionManager";
import AppBar from "./AppBar";
import {Container, createTheme, CssBaseline, Grid, ThemeProvider} from "@mui/material";
import {QuestionCollector} from "./QuestionCollector";

let config = {
    formKey: "1FAIpQLSfoYsWm4_LAyf43XA0Cr93QsZsHF0vqHygyAGGLhzUFYFnyAw",
    storageKey: "1p7lQG9XW3XvITHiLYvoWMhnt9K0u2rVMl0b3VpBxYos",
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
        <Container maxWidth={"md"} sx={{height: "calc(100vh - 64px)", overflow: "hidden"}}>
            <Grid container spacing={0}>
                <Grid item xs={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <img
                        src={"./herve.png"}
                        style={{
                            marginLeft: "-550px"
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <QuestionManager storageKey={config.storageKey}/>
                </Grid>
            </Grid>
        </Container>
        <QuestionCollector formKey={config.formKey}/>
    </ThemeProvider>
);
