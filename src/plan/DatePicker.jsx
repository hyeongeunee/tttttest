import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './DatePicker.css';

function DatePicker() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection',
        },
    ]);

    const selectedStartDate = state[0].startDate;
    const selectedEndDate = state[0].endDate;

    // 선택한 날짜 범위의 시작 날짜와 종료 날짜를 각각 하루씩 뒤로 설정 >> 그냥하면 전날로 나옴 ㅠ
    const nextDayStartDate = selectedStartDate ? new Date(selectedStartDate) : null;
    if (nextDayStartDate) {
        nextDayStartDate.setDate(nextDayStartDate.getDate() + 1);
    }

    const nextDayEndDate = selectedEndDate ? new Date(selectedEndDate) : null;
    if (nextDayEndDate) {
        nextDayEndDate.setDate(nextDayEndDate.getDate() + 1);
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
                direction="horizon"
                rangeColors={['#0074E4']}
                showMonthAndYearPickers={false}
                format="yyyy-MM-dd"
            />
            {/* <div style={{ textAlign: 'center', margin: '20px' }}>
                {nextDayStartDate && <p>Start Date: {nextDayStartDate.toISOString().split('T')[0]}</p>}
                {nextDayEndDate && <p>End Date: {nextDayEndDate.toISOString().split('T')[0]}</p>}
            </div> */}
        </div>
    );
}

export default DatePicker;
