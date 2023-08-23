import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './Test.css';
import DatePicker from './plan/DatePicker';
import Map from './Map';
import TourCard from './TourCard';
import AppendCard from './AppendCard';

function Test() {
    const [selectedItems, setSelectedItems] = useState([]);
    // console.log('Test.jsx :', selectedItems);

    return (
        <div className="TestContainer">
            <Grid container className="gridContainer">
                <Grid item className="leftbar" xs={12} sm={2}>
                    <DatePicker />
                    <hr />
                    <h3>선택한 여행지</h3>
                    <hr />
                    <AppendCard selectedItems={selectedItems} />
                </Grid>
                <Grid item className="maparea" xs={12} sm={8}>
                    <Map selectedItems={selectedItems} />
                </Grid>
                <Grid item className="rightbar" xs={12} sm={2}>
                    <TourCard setSelectedItems={setSelectedItems} selectedItems={selectedItems} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Test;
