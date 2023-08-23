// import React, { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Card } from '@mui/material';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import StarIcon from '@mui/icons-material/Star';

function textOverCut(txt, len, lastTxt) {
    if (len === '' || len == null) {
        // 기본값
        len = 12;
    }
    if (lastTxt === '' || lastTxt == null) {
        // 기본값
        lastTxt = '...';
    }
    if (txt.length > len) {
        txt = txt.substr(0, len) + lastTxt;
    }
    return txt;
}

export default function AppendCard({ selectedItems }) {
    // console.log('Test.jsx :', { selectedItems });
    return (
        <>
            {selectedItems.map((item, index) => (
                <Card
                    key={index}
                    sx={{
                        display: 'flex',
                        width: 'auto',
                        height: '100px',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: '8px',
                    }}
                >
                    <CardMedia
                        component="img"
                        sx={{ width: 70, height: 70, flexGrow: '1', borderRadius: '5px', marginLeft: '10px' }}
                        image={item.firstimage}
                    />
                    <CardContent sx={{ position: 'static', flexGrow: '5' }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: 12.8,
                            }}
                        >
                            {textOverCut(item.title, 10.8, '...')}
                        </Typography>
                        <Typography variant="div">
                            <span
                                style={{
                                    fontSize: '1px',
                                    fontWeight: 'bolder',
                                    color: 'skyblue',
                                    marginTop: '-2',
                                }}
                            >
                                도로명
                            </span>
                            <Typography variant="h6" sx={{ fontSize: 8.3 }}>
                                {textOverCut(item.addr1, 14.8, '...')}
                            </Typography>
                        </Typography>
                        <div>
                            <FavoriteIcon sx={{ fontSize: 13, color: '#F44336' }} />
                            <StarIcon sx={{ fontSize: 14, color: '#FBC02D' }} />
                        </div>
                    </CardContent>
                    <div
                        style={{
                            flexGrow: '1',
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            sx={{
                                height: '30px',
                                width: '30px',
                                padding: '0',
                                minWidth: '0',
                                marginRight: '9px',
                            }}
                        >
                            <AddBoxRoundedIcon />
                        </Button>
                    </div>
                </Card>
            ))}
        </>
    );
}
