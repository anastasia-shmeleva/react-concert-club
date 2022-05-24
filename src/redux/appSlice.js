import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: null,
  posts: [],
  post: null,
  comments: [],
  status: 'idle'
}

const getData = async (url) => {
  const response = await fetch(url)
    .then(response => response.json());
  return response;
};

// USERS 
export const fetchUsers = createAsyncThunk('appSlice/fetchUsers', async (url, { rejectWithValue }) => {
  try {
    const users = await getData(url);
    return users
  } catch (error) {
    return rejectWithValue('Opps there seems to be an error')
  }
});

// POSTS 
export const fetchPosts = createAsyncThunk('appSlice/fetchPosts', async (url, { rejectWithValue }) => {
  try {
    const posts = await getData(url);
    return posts
  } catch (error) {
    return rejectWithValue('Opps there seems to be an error')
  }
});

// COMMENTS 
export const fetchComments = createAsyncThunk('appSlice/fetchComments', async (url, { rejectWithValue }) => {
  try {
    const comments = await getData(url);
    return comments
  } catch (error) {
    return rejectWithValue('Opps there seems to be an error')
  }
});

export const postComment = createAsyncThunk('appSlice/postComment', async ({ body, url }, { rejectWithValue }) => {
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

const appSlice = createSlice({
  name: 'appSlice',
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
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = 'success';
      state.users = action.payload;
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'success';
      state.posts = action.payload;
    })
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.status = 'success';
      state.comments = action.payload;
    })
    builder.addCase(postComment.fulfilled, (state, action) => {
      state.status = 'success';
    })
  }
});

export const appActions = appSlice.actions;
export default appSlice.reducer;