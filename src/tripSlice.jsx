import { createSlice } from '@reduxjs/toolkit';

const tripSlice = createSlice({
    name: 'trip',
    initialState: {
        selectedItems: [], // 선택한 아이템들을 저장할 초기 배열
        // ... (다른 상태 속성)
    },
    reducers: {
        setSelected: (state, action) => {
            state.selectedItems = action.payload; // selectedItems를 새 값으로 업데이트합니다
        },
        // ... (다른 리듀서들)
    },
});

export const { setSelected } = tripSlice.actions;
export default tripSlice.reducer;
