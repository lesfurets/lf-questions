import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Logo} from "./Logo";

function ResponsiveAppBar() {
    return (
        <React.Fragment>
            <AppBar position="fixed" color="default" sx={{ top: 'auto', bottom: {xs: 0 , md: "auto"} }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Logo sx={{marginRight: 3}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: 'flex',
                                fontSize: "1.8rem",
                                fontWeight: 900,
                                letterSpacing: "0px",
                                color: "rgb(78, 97, 116)",
                            }}
                        >
                            Ask me anything
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar sx={{ display: {xs: "none" , md: "inherit"} }}/>
        </React.Fragment>
    );
}
export default ResponsiveAppBar;