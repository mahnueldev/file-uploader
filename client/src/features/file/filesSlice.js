import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:5050';

const filesSlice = createSlice({
  name: 'files',
  initialState: [],
  reducers: {
    postFile: createAsyncThunk(
      'files/postFile',
      async (formData, { rejectWithValue }) => {
        try {
          const { data } = await axios.post(`${url}/files`, formData);
          return data;
        } catch (err) {
          if (!err.response) {
            throw err;
          }
          return rejectWithValue(err.response.data);
        }
      }
    ),
    getFiles: createAsyncThunk('files/getFiles', async () => {
      const { data } = await axios.get(`${url}/files`);
      return data;
    }),
    deleteFile: createAsyncThunk('files/deleteFile', async (id) => {
      await axios.delete(`${url}/files/${id}`);
      return id;
    }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(postFile.pending, (state) => {
        // Handle pending state
        state.isLoading = true;
      })
      .addCase(postFile.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(postFile.rejected, (state, action) => {
        // Handle error
        state.isLoading = false;
      })
      .addCase(getFiles.pending, (state) => {
        // Handle pending state
        state.isLoading = true;
      })
      .addCase(getFiles.fulfilled, (state, action) => {
        state.push(...action.payload);
      })
      .addCase(getFiles.rejected, (state, action) => {
        // Handle error
        state.isLoading = false;
      })
      .addCase(deleteFile.pending, (state) => {
        // Handle pending state
        state.isLoading = true;
      })
      .addCase(deleteFile.fulfilled, (state, action) => {
        state = state.filter((file) => file.id !== action.payload);
      })
      .addCase(deleteFile.rejected, (state, action) => {
        // Send error to client
        state.error = action.error.message;
        // Send error to remote server for further analysis
       /**  axios.post('https://your-error-logging-server.com', {
          error: action.error.message,
          stack: action.error.stack,
        });
        **/
       
        // The above should be replaced by the actual server endpoint and data format
        state.isLoading = false;
      });
  },
});
export const { postFile, getFiles, deleteFile } = filesSlice.actions;
export default filesSlice.reducer;
