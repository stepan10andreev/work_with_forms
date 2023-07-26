import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStepOneFormPayload } from "./stepOneFormData";

export interface IStepThreeFormPayload extends IStepOneFormPayload {}

interface IStepThreeForm {
  [k: string]: string;
  wishes: string;
}

const initialState: IStepThreeForm = {
  wishes: ''
}

const stepThreeFormSlice = createSlice({
  name: 'stepThreeFormData',
  initialState,
  reducers: {
    updateStepThreeFormData: {
      reducer (state, action: PayloadAction<IStepThreeFormPayload>) {
        state[action.payload.prop] = action.payload.value;
      },
      prepare (prop: string, value: string) {
        return {
          payload:{
            prop,
            value,
          }
        }
      },
    },
  }
})

export const { updateStepThreeFormData } = stepThreeFormSlice.actions;

export default stepThreeFormSlice.reducer;
