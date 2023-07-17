import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { IStepOneFormPayload } from "./stepOneFormData";

type IStepTwoFormPayload = IStepOneFormPayload;

interface IAdvantageInputElements {
  id: string;
}

interface IStepTwoForm {
  [k: string]: string | string[] | IAdvantageInputElements[];
  advantageInputElements: IAdvantageInputElements[];
  advantages: string[];
  checkboxGroup: string[];
  radioGroup: string;
}

const initialState: IStepTwoForm = {
  advantages: [],
  checkboxGroup: [],
  radioGroup: '',
  advantageInputElements: [{id: nanoid()}],
}

const stepTwoFormSlice = createSlice({
  name: 'stepTwoFormData',
  initialState,
  reducers: {
    updateStepTwoFormData: {
      reducer (state, action: PayloadAction<IStepTwoFormPayload>) {
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
    addAdvantageInput: (state) => {
      const input = {
        id: nanoid()
      }
      state.advantageInputElements = [...state.advantageInputElements, input]
    },
    deleteAdvantageInput: {
      reducer (state, action: PayloadAction<string>) {
      state.advantageInputElements =  state.advantageInputElements.filter((advantage) => advantage.id != action.payload)
    },
    prepare (id: string) {
      return {
        payload: id
      }
    },
    }
  }
})

export const { updateStepTwoFormData, addAdvantageInput, deleteAdvantageInput } = stepTwoFormSlice.actions;

export default stepTwoFormSlice.reducer;
