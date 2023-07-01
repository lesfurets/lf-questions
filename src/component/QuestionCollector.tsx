import * as React from "react";
import {FC} from "react";
import {Button, Dialog, DialogActions, DialogContent, Fab, Slide, useMediaQuery, useTheme} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {TransitionProps} from "@mui/material/transitions";
import {LazyIframe} from "./LazyIframe";
import {Loading} from "./Loading";

interface QuestionCollectorProps {
    formKey: string,
}

const fabStyle = {
    position: 'fixed',
    bottom: {xs: 80, md:16},
    right: 16,
};

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const QuestionCollector: FC<QuestionCollectorProps> = ({formKey}) => {
        const theme = useTheme();
        const [open, setOpen] = React.useState(false);

        const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <React.Fragment>
                <Fab color="inherit" sx={fabStyle} onClick={handleClickOpen}>
                    <AddIcon fontSize={"large"} color={"primary"}/>
                </Fab>
                <Dialog open={open}
                        fullScreen={fullScreen}
                        TransitionComponent={Transition}
                        onClose={handleClose}
                        maxWidth="md"
                        fullWidth>
                    <DialogActions>
                        <Button onClick={handleClose}>Fermer</Button>
                    </DialogActions>
                    <DialogContent sx={{height: "70vh", maxHeight: 550}}>
                        <React.Suspense fallback={<Loading/>}>
                            <LazyIframe src={"https://docs.google.com/forms/d/e/" + formKey + "/viewform?embedded=true"}
                                        frameBorder={0}
                                        marginHeight={0}
                                        marginWidth={0}
                                        style={{
                                            border: "none",
                                            height: "100%",
                                            width: "100%"
                                        }}>Chargement en cours...
                            </LazyIframe>
                        </React.Suspense>
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        )
    }
;
