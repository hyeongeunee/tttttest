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
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Button } from '@mui/material';

function DatePicker({ selectedItems }) {
    const maxDate = 5;

    const [state, setState] = useState([
        {
            startDate: null,
            endDate: null,
            key: 'selection',
        },
    ]);

    const [expanded, setExpanded] = useState('panel0');
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleClick = (newState) => () => {
        setState({ ...state, ...newState, open: true });
    };

    const handleSnackbarOpen = () => {
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const accordions = [];

    if (state[0].startDate && state[0].endDate) {
        const startDate = new Date(state[0].startDate);
        const endDate = new Date(state[0].endDate);
        const dayInMillis = 24 * 60 * 60 * 1000; // 하루의 밀리초
        const dateRangeInDays = (endDate - startDate) / dayInMillis + 1;

        if (dateRangeInDays > maxDate) {
            handleSnackbarOpen();
        } else {
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
        }
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
            <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>Top-Center</Button>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <MuiAlert onClose={handleSnackbarClose} severity="warning" sx={{ width: '100%' }}>
                    <AlertTitle>Warning</AlertTitle>
                    선택한 날짜 범위는 {maxDate}일을 초과할 수 없습니다.
                </MuiAlert>
            </Snackbar>
        </div>
    );
}

export default DatePicker;
