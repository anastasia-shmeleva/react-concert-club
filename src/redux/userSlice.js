import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: null,
  posts: [],
  post: null,
  status: 'idle'
}

const getData = async (url) => {
  const response = await fetch(url)
    .then(response => response.json());
  return response;
};

export const fetchUsers = createAsyncThunk('userSlice/fetchUsers', async (url, { rejectWithValue }) => {

  try {
    const users = await getData(url);
    return users
  } catch (error) {
    return rejectWithValue('Opps there seems to be an error')
  }

});

export const fetchPosts = createAsyncThunk('userSlice/fetchPosts', async (url, { rejectWithValue }) => {

  try {
    const posts = await getData(url);
    return posts
  } catch (error) {
    return rejectWithValue('Opps there seems to be an error')
  }

});

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser(state, action) {
      const user = state.users.find(o => o.id === action.payload);
      state.user = user;
    },
    setPost(state, action) {
      const post = state.posts.find(o => o.id === action.payload);
      state.post = post;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = 'success';
      state.users = action.payload;
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = 'error';
    })
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'success';
      state.posts = action.payload;
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'error';
    })
  }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;