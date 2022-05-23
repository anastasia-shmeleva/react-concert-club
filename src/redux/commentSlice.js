import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  status: 'idle'
}

const getData = async (url) => {
  const response = await fetch(url)
    .then(response => response.json());
  return response;
};

export const fetchComments = createAsyncThunk('userSlice/fetchComments', async (url, { rejectWithValue }) => {
  try {
    const comments = await getData(url);
    return comments
  } catch (error) {
    return rejectWithValue('Opps there seems to be an error')
  }
});

export const postComment = createAsyncThunk('commentSlice/postComment', async ({ body, url }, { rejectWithValue }) => {
  const requestOptions = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: body
  };
  
  try {
    const response = await fetch(url, requestOptions)
      .then(response => response.status)
    return response
  } catch (error) {
    return rejectWithValue('Opps there seems to be an error')
  }

});

const commentSlice = createSlice({
  name: 'commentSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.status = 'success';
      state.comments = action.payload;
    })
    builder.addCase(postComment.fulfilled, (state, action) => {
      state.status = 'success';
    })
  }
});

export const commentActions = commentSlice.actions;
export default commentSlice.reducer;