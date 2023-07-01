import * as React from "react";
import {CircularProgress, Grid, useTheme} from "@mui/material";

export interface LoadingProps {
    color?: string,
}

export const Loading = ({color}: LoadingProps) => (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{height: '100%', minHeight:"400px"}}
    >
        <Grid item xs={3}>
            <CircularProgress size={60} sx={{color: color || useTheme().palette.primary.main}}/>
        </Grid>
    </Grid>
);
