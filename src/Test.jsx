import { Grid } from '@mui/material';
import './Test.css';
import DatePicker from './plan/DatePicker';
import TourCard from './TourCard';
import Map from './Map';

function Test() {
    return (
        <div className="TestContainer">
            <Grid container className="gridContainer">
                <Grid item className="leftbar" xs={12} sm={2}>
                    <DatePicker />
                    {/* 여기에 선택된 관광지라고 헤드라인 띄워야함 */}
                    <hr />
                    <h3>선택한 여행지</h3>
                    <hr />
                    <TourCard />
                    <TourCard />
                </Grid>
                <Grid item className="maparea" xs={12} sm={8}>
                    <Map />
                </Grid>
                <Grid item className="rightbar" xs={12} sm={2}>
                    {/* 여기에 추천 관광지라고 헤드라인 띄워야함 */}
                    <h3>추천 관광지</h3>
                    <hr />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                </Grid>
            </Grid>
        </div>
    );
}

export default Test;
