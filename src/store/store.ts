import { configureStore } from "@reduxjs/toolkit";
import userViewFormReducer from './userViewFormData';
import { createWrapper } from 'next-redux-wrapper';

export const store = configureStore({
  reducer: {
    userViewForm: userViewFormReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = ReturnType<AppStore["dispatch"]>;
// export const wrapper = createWrapper<AppStore>(makeStore);
