import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    return (
        <Card sx={{ width: 330 }}>
            <CardMedia sx={{ height: 400 }} image="https://source.unsplash.com/random/330×400" title="test" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    부산 광역시
                </Typography>
                <Typography variant="h7" color="">
                    Busan
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
