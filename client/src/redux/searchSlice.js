import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [],
  keyword: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchKeywordResult: (state, action) => {
      state.keyword = action.payload.keyword;
      state.result = action.payload.result;
    },
  },
});

export const { setSearchKeywordResult } = searchSlice.actions;

export default searchSlice.reducer;
