import React, { useState, useEffect, useCallback } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './DatePicker.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppendCard from './AppendCard';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ko from 'date-fns/locale/ko';

function DatePicker({ selectedItems, setSelectedItems }) {
    const MAX_DATE = 5;

    const [state, setState] = useState([
        {
            startDate: null,
            endDate: null,
            key: 'selection',
        },
    ]);

    const [expanded, setExpanded] = useState('panel0');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [accordions, setAccordions] = useState([]);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleSnackbarOpen = () => setSnackbarOpen(true);
    const handleSnackbarClose = (event, reason) => {
        if (reason !== 'clickaway') setSnackbarOpen(false);
    };

    const createAccordions = useCallback(
        (startDate, endDate) => {
            const accordions = [];
            const dayInMillis = 24 * 60 * 60 * 1000;
            const dateRangeInDays = (endDate - startDate) / dayInMillis + 1;

            if (dateRangeInDays > MAX_DATE) {
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
                                <Typography>DAY {i + 1}</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ padding: 0 }}>
                                <AppendCard
                                    selectedItems={selectedItems}
                                    setSelectedItems={setSelectedItems}
                                    day={i + 1}
                                />
                            </AccordionDetails>
                        </Accordion>
                    );
                }
            }
            return accordions;
        },
        [expanded, selectedItems, setSelectedItems]
    );

    useEffect(() => {
        if (state[0].startDate && state[0].endDate) {
            const startDate = new Date(state[0].startDate);
            const endDate = new Date(state[0].endDate);

            const newAccordions = createAccordions(startDate, endDate);
            setAccordions(newAccordions);
        }
    }, [state, expanded, selectedItems, createAccordions, setSelectedItems]);

    return (
        <div>
            <DateRange
                locale={ko}
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                showDateDisplay={true}
                showSelectionPreview={true}
                months={1}
                direction="horizontal"
                rangeColors={['#3d91ff']}
                showMonthAndYearPickers={false}
                format="yyyy-MM-dd"
                dateDisplayFormat={'yyyy.MM.dd'}
            />
            <hr />
            <h3>선택한 여행지</h3>
            <hr />
            {accordions}
            {/* 일정이 5일을 초과하면 경고창 띄우기 */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <MuiAlert onClose={handleSnackbarClose} severity="warning" sx={{ width: '100%' }}>
                    <AlertTitle>Warning</AlertTitle>
                    선택한 날짜 범위는 {MAX_DATE}일을 초과할 수 없습니다.
                </MuiAlert>
            </Snackbar>
        </div>
    );
}

export default DatePicker;
