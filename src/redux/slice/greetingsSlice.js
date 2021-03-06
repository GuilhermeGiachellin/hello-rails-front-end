import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

export const greetingsAdapter = createEntityAdapter();

const initialState = greetingsAdapter.getInitialState({ status: 'idle' });

export const fetchGreetings = createAsyncThunk('greetings/fetchGreeting', async () => {
  const response = await fetch('http://[::1]:3000/v1/random_message');
  const res = await response.json();
  return res;
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => state)
      .addCase(fetchGreetings.fulfilled, greetingsAdapter.upsertMany)
      .addCase(fetchGreetings.rejected, (state) => state);
  },
});

export const {
  selectById: selectGreetingById,
  selectIds: selectGreetingId,
  selectEntities: selectGreetingEntitites,
  selectAll: selectAllGreetings,
  selectTotal: selectTotalGreeting,
} = greetingsAdapter.getSelectors((state) => state.greetings);

export default greetingsSlice.reducer;
