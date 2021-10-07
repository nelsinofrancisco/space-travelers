/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKETS_API_URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  isFetching: false,
  data: [],
  error: {},
};

export const getRockets = createAsyncThunk(
  'redux/rockets/rocketsSlice',
  async () => {
    const response = await axios.get(ROCKETS_API_URL).catch((error) => error);
    const data = [];

    response.data.forEach((obj) => {
      const {
        rocket_id, rocket_name, description, flickr_images, wikipedia,
      } = obj;

      const formatedData = {
        rocket_id,
        rocket_name,
        description,
        flickr_images,
        wikipedia,
        reserved: false,
      };

      data.push(formatedData);
    });

    return data;
  },
);

const rocketsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeRocket: (state, action) => {
      const rockets = { ...state };

      rockets.data = rockets.data.map((rocket) => {
        if (rocket.rocket_id !== action.payload) {
          return rocket;
        }

        return { ...rocket, reserved: !rocket.reserved };
      });

      return rockets;
    },
  },
  extraReducers: {
    [getRockets.pending.type]: (state) => ({ ...state, isFetching: true }),
    [getRockets.fulfilled.type]: (state, action) => (
      {
        ...state, isFetching: false, data: action.payload, error: {},
      }),
    [getRockets.rejected.type]: (state) => ({ ...state, isFetching: false, error: {} }),
  },
});

export const { removeRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
