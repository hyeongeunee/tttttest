import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Nav() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        로고
                    </Typography>
                    <Button color="inherit">여행계획</Button>
                    <Button color="inherit">이용안내</Button>
                    <Button color="inherit">고객지원</Button>
                    <Button color="inherit">로그인</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Nav;
