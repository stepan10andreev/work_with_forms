import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IStepOneFormPayload {
  prop: string;
  value: string;
}

export interface IStepOneForm {
  [k: string]: string;
  nickname: string;
  name: string;
  surname: string;
  sex: string;
}

const initialState: IStepOneForm = {
  nickname: '',
  name: '',
  surname: '',
  sex: ''
}

const stepOneFormSlice = createSlice({
  name: 'stepOneFormData',
  initialState,
  reducers: {
    updateStepOneFormData: {
      reducer(state, action: PayloadAction<IStepOneFormPayload>) {
        state[action.payload.prop] = action.payload.value;
      },
      prepare(prop: string, value: string) {
        return {
          payload: {
            prop,
            value,
          }
        }
      },
    },
    resetStepOneFormData: (state) => {
      return state = { ...initialState };
    }
  }
})

export const { updateStepOneFormData, resetStepOneFormData } = stepOneFormSlice.actions;

export default stepOneFormSlice.reducer;
