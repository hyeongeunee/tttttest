import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

const number = {
    fontSize: 24,
    fontFamily: 'default',
    fontWeight: 'medium',
};

function HowItWorks() {
    return (
        <Box component="section" sx={{ display: 'flex', overflow: 'hidden' }}>
            <Container
                sx={{
                    mt: 10,
                    mb: 15,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="img"
                    src="/static/themes/onepirate/productCurvyLines.png"
                    alt="curvy lines"
                    sx={{
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: -180,
                        opacity: 0.7,
                    }}
                />
                <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
                    How it works
                </Typography>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>1.</Box>
                                <RoomRoundedIcon sx={{ fontSize: 50, mt: 5, mb: 5 }} />
                                <Typography variant="h5" align="center">
                                    여행지 선택
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>2.</Box>
                                <RecommendRoundedIcon sx={{ fontSize: 50, mt: 5, mb: 5 }} />
                                <Typography variant="h5" align="center">
                                    여행지 추천
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>3.</Box>
                                <MapOutlinedIcon sx={{ fontSize: 50, mt: 5, mb: 5 }} />
                                <Typography variant="h5" align="center">
                                    일정 생성
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Box>
    );
}

export default HowItWorks;
