import { configureStore } from '@reduxjs/toolkit';
import randomGreetingReducer from './redux/randomGreetingSlice';

const store = configureStore({
  reducer: {
    randomGreeting: randomGreetingReducer,
  },
});

export default store;
