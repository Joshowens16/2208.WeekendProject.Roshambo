import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerLeaderboard: [],
  selectedPlayer: {},
};

export const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    setLeadboard: (state, action) => {
      state.playerLeaderboard = action.payload;
    },
    setSelectedPlayer: (state, action) => {
      state.selectedPlayer = action.payload;
    },
  },
});

export const { setLeadboard, setSelectedPlayer } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
