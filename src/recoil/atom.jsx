import { atom, selector } from 'recoil';

export const selectedItemsState = atom({
    key: 'selectedItems',
    default: [],
});

export const initializeSelectedItems = selector({
    key: 'initializeSelectedItems',
    get: async ({ get }) => {
        try {
            const response = await fetch('finalresult.json');
            const data = await response.json();
            return data; // finalresult.json에서 가져온 데이터를 반환
        } catch (error) {
            console.error('Error initializing selectedItems:', error);
            return [];
        }
    },
    set: ({ set }, newValue) => {
        set(selectedItemsState, newValue);
    },
});
