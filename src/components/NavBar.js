import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar =() => {
    return (
            <div>
{/*Standard je toto:       <AppBar position="static">   */}
                <AppBar position="relative">
                    <Toolbar>
                            <Typography variant="title" color="inherit">
                                React & Material-UI Sample Application
                            </Typography>
                    </Toolbar>
                </AppBar>
                
            </div>
    )
}

export default NavBar;
