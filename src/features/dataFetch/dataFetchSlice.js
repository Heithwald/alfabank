import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "dataFetch",
  initialState: {
    data: [],
  },
  reducers: {
    fetchData: (state, action) => {
      state.data = action.payload;
    },
    deleteElement: (state, action) => {
      let elementToDelete = state.data.find(
        (element) => element.id === parseInt(action.payload)
      );
      let indexToDelete = state.data.indexOf(elementToDelete);
      state.data.splice(indexToDelete, 1);
    },
    toggleLike: (state, action) => {
      let elementToLike = state.data.find(
        (element) => element.id === parseInt(action.payload)
      );
      let indexToLike = state.data.indexOf(elementToLike);
      state.data[indexToLike].isLiked = !state.data[indexToLike].isLiked;
    },
  },
});

export const { fetchData, deleteElement, toggleLike } = slice.actions;
export const selectData = (state) => state.dataFetch.data;
export default slice.reducer;
