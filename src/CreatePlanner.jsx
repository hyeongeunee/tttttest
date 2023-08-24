import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './CreatePlanner.css';
import DatePicker from './plan/DatePicker';
import Map from './Map';
import TourCard from './TourCard';

function CreatePlanner() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [expanded, setExpanded] = useState('panel0');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className="PlannerContainer">
            <Grid container className="gridContainer">
                <Grid item className="leftbar" xs={12} sm={2}>
                    <DatePicker expanded={expanded} handleChange={handleChange} selectedItems={selectedItems} />
                    {/* <AppendCard selectedItems={selectedItems} /> */}
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

export default CreatePlanner;
