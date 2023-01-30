import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    request : "default",
    platform: "",
    userMood: "",
    genreId: [],
    realeaseDate: "",
  },
};

export const moviesSlice = createSlice({
  name: "movies",

  initialState,
  reducers: {
    addRequestToStore : (state, action) => {
      state.value.request = action.payload;
    },
    addPlatformToStore: (state, action) => {
      state.value.platform = action.payload;
    },
    addUserMoodToStore: (state, action) => {
      state.value.userMood = action.payload;
    },
    addGenreIdToStore: (state, action) => {
      // state.value.genreId.push(action.payload);
      state.value.genreId = state.value.genreId.concat(...action.payload)
    },
    addRealeaseDateToStore: (state, action) => {
      state.value.realeaseDate = action.payload;
    },
    resetAll: (state, action) => {
      state.value =  {
        request : "",
        platform: "",
        userMood: "",
        genreId: [],
        realeaseDate: "",
      }
    },
    resetIds: (action, payload) => {
      state.value.genreId = []
    }
  },
});

export const { addAditionalIdToStore, addPlatformToStore, addUserMoodToStore, addGenreIdToStore, addRealeaseDateToStore, resetAll, addRequestToStore} = moviesSlice.actions;
export default moviesSlice.reducer;
