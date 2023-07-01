import * as React from "react";
import {CircularProgress, Grid} from "@mui/material";

export const Loading = () => (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100%' }}
    >
        <Grid item xs={3}>
            <CircularProgress color="primary"/>
        </Grid>
    </Grid>
);
