import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: null,
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

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser(state, action) {
      const user = state.users.find(o => o.id === action.payload);
      state.user = user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = 'success';
      state.users = action.payload;
    })
  }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;