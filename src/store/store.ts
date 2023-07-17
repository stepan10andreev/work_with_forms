import { configureStore } from "@reduxjs/toolkit";
import userViewFormReducer from './userViewFormData';
import stepOneFormReducer from './stepOneFormData';
import stepTwoFormReducer from './stepTwoFormData';
import { createWrapper } from 'next-redux-wrapper';

export const store = configureStore({
  reducer: {
    userViewForm: userViewFormReducer,
    stepOneForm: stepOneFormReducer,
    stepTwoForm: stepTwoFormReducer,
  }
})


// для универсальности в UIInput: для поиска в store конкретной FormData из state
interface IIndexSign {
  [key: string]: any;
}

export type RootState = ReturnType<typeof store.getState> & IIndexSign
export type AppDispatch = typeof store.dispatch

// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = ReturnType<AppStore["dispatch"]>;
// export const wrapper = createWrapper<AppStore>(makeStore);
