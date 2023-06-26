import * as React from "react";
import {FC} from "react";
import {Box, Card, Toolbar} from "@mui/material";

interface QuestionCollectorProps {
    formKey: string,
}

export const QuestionCollector: FC<QuestionCollectorProps> = ({formKey}) => {
        return (
            <Box m={4} display="flex" alignItems="center" flexDirection="column">
                <Card elevation={10} sx={{width: "80%", maxWidth: "800px", height: "80vh", margin: "auto", verticalAlign: "center"}}>
                    <Toolbar/>
                    <iframe src={"https://docs.google.com/forms/d/e/" + formKey + "/viewform?embedded=true"}
                            frameBorder={0}
                            marginHeight={0}
                            marginWidth={0}
                            style={{
                                border: "none",
                                height: "100%",
                                width: "100%"
                            }}>Chargement en cours...
                    </iframe>
                </Card>
            </Box>
        )
    }
;