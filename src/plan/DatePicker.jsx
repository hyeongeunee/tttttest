import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './DatePicker.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppendCard from '../AppendCard';

function DatePicker({ selectedItems }) {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection',
        },
    ]);

    const selectedStartDate = state[0].startDate;
    const selectedEndDate = state[0].endDate;

    // 선택한 날짜 범위의 시작 날짜와 종료 날짜를 각각 하루씩 뒤로 설정
    const nextDayStartDate = selectedStartDate ? new Date(selectedStartDate) : null;
    if (nextDayStartDate) {
        nextDayStartDate.setDate(nextDayStartDate.getDate() + 1);
    }

    const nextDayEndDate = selectedEndDate ? new Date(selectedEndDate) : null;
    if (nextDayEndDate) {
        nextDayEndDate.setDate(nextDayEndDate.getDate() + 1);
    }

    const dayInMillis = 24 * 60 * 60 * 1000; // 하루의 밀리초
    const dateRangeInDays = (nextDayEndDate - nextDayStartDate) / dayInMillis + 1;

    const [expanded, setExpanded] = useState('panel0');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const accordions = [];
    for (let i = 0; i < dateRangeInDays; i++) {
        accordions.push(
            <Accordion key={i} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                <AccordionSummary
                    aria-controls={`panel${i}d-content`}
                    id={`panel${i}d-header`}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>{i + 1} DAY</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ padding: 0 }}>
                    <AppendCard selectedItems={selectedItems} day={i + 1} />
                </AccordionDetails>
            </Accordion>
        );
    }

    return (
        <div>
            <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                showDateDisplay={true}
                showSelectionPreview={true}
                months={1}
                direction="horizontal"
                rangeColors={['#0074E4']}
                showMonthAndYearPickers={false}
                format="yyyy-MM-dd"
            />
            <hr />
            <h3>선택한 여행지</h3>
            <hr />
            {accordions}
        </div>
    );
}

export default DatePicker;
