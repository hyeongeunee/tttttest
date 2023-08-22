import { Grid } from '@mui/material';
import './Test.css';
import DatePicker from './plan/DatePicker';
// import TourCard from './TourCard';
import Map from './Map';
import PlanCard from './PlanCard';
import AppendList from './AppendList';

function Test() {
    return (
        <div className="TestContainer">
            <Grid container className="gridContainer">
                <Grid item className="leftbar" xs={12} sm={2}>
                    <DatePicker />
                    <AppendList />
                </Grid>
                <Grid item className="maparea" xs={12} sm={8}>
                    <Map />
                </Grid>
                <Grid item className="rightbar" xs={12} sm={2}>
                    <PlanCard />
                </Grid>
            </Grid>
        </div>
    );
}

export default Test;
