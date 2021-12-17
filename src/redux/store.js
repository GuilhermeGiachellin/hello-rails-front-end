import {
  configureStore,
} from '@reduxjs/toolkit';
import greetings from './slice/greetingsSlice'

export default configureStore({
  reducer: {
    greetings,
  },
});