import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: null,
  status: 'idle'
}

const getData = async (url) => {
  const response = await fetch(url)
    .then(response => response.json());
  return response;
};

export const fetchPosts = createAsyncThunk('postSlice/fetchPosts', async (url, { rejectWithValue }) => {
  try {
    const posts = await getData(url);
    return posts
  } catch (error) {
    return rejectWithValue('Opps there seems to be an error')
  }
});

const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    setPost(state, action) {
      const post = state.posts.find(o => o.id === action.payload);
      state.post = post;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'success';
      state.posts = action.payload;
    })
  }
});

export const postActions = postSlice.actions;
export default postSlice.reducer;