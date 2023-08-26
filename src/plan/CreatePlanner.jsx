import React, { useState } from "react";
import "./CreatePlanner.css";
import DatePicker from "./DatePicker";
import Map from "./Map";
import TourCard from "./TourCard";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Test() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <div className="plan-header">
        <p className="kor-title">대한민국 서울</p>
        <p className="eng-title">SEOUL</p>
      </div>
      <div className="TestContainer">
        <Grid container className="gridContainer">
          <Grid item className="leftbar" xs={12} sm={2}>
            <DatePicker
              expanded={expanded}
              handleChange={handleChange}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </Grid>
          <Grid item className="maparea" xs={12} sm={8}>
            <Map selectedItems={selectedItems} />
          </Grid>
          <Grid item className="rightbar" xs={12} sm={2}>
            <TourCard
              setSelectedItems={setSelectedItems}
              selectedItems={selectedItems}
            />
          </Grid>
        </Grid>
      </div>
      <div className="planBtn">
        <Link to="/plan/detail">
          <Button variant="contained" sx={{ backgroundColor: "#8181F7" }}>
            일정 생성하기
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Test;
