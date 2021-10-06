/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MISSIONS_API_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  isFetching: false,
  data: [],
  error: {},
};

export const getMissions = createAsyncThunk(
  'redux/missions/missions.js',
  async () => {
    const response = await axios.get(MISSIONS_API_URL).catch((error) => error);
    const data = [];

    response.data.forEach((obj) => {
      const {
        mission_id, mission_name, description,
      } = obj;

      const formatedData = {
        mission_id,
        mission_name,
        description,
        reserved: false,
      };

      data.push(formatedData);
    });

    return data;
  },
);

const missionsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeMission: (state, action) => {
      const missions = { ...state };

      missions.data = missions.data.map((missions) => {
        if (missions.mission_id !== action.payload) {
          return missions;
        }

        return { ...missions, reserved: !missions.reserved };
      });

      return missions;
    },
  },
  extraReducers: {
    [getMissions.pending.type]: (state) => ({ ...state, isFetching: true }),
    [getMissions.fulfilled.type]: (state, action) => (
      {
        ...state, isFetching: false, data: action.payload, error: {},
      }),
    [getMissions.rejected.type]: (state) => ({ ...state, isFetching: false, error: {} }),
  },
});

export const { removeMission } = missionsSlice.actions;
export default missionsSlice.reducer;
