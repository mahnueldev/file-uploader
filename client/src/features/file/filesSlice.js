import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import produce from 'immer';

const url = 'http://localhost:5050';
export const postFiles = createAsyncThunk(
  'files/postFiles',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${url}/multiple-upload`, formData);
      return data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getFiles = createAsyncThunk('files/getFiles', async () => {
  const { data } = await axios.get(`${url}/files`);
  return data;
});

export const deleteFile = createAsyncThunk('files/deleteFile', async (id) => {
  await axios.delete(`${url}/files/${id}`);
  return id;
});

const filesSlice = createSlice({
  name: 'files',
  initialState: {
    files: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postFiles.pending, (state) => {
        // Handle pending state
        state.isLoading = true;
      })
      .addCase(postFiles.fulfilled, (state, action) => {
        produce(state, (draftState) => {
          draftState.files = draftState.files.concat(action.payload);
        });
      })
      .addCase(postFiles.rejected, (state, action) => {
        // Handle error
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getFiles.pending, (state) => {
        // Handle pending state
        state.isLoading = true;
      })
      .addCase(getFiles.fulfilled, (state, action) => {
        state.files = [...state.files, ...action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFiles.rejected, (state, action) => {
        // Handle error
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteFile.pending, (state) => {
        // Handle pending state
        state.isLoading = true;
      })
      .addCase(deleteFile.fulfilled, (state, action) => {
        state = state.filter((file) => file.id !== action.payload);
      })
      .addCase(deleteFile.rejected, (state, action) => {
        // Handle error
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default filesSlice.reducer;
