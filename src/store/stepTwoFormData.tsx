import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { IStepOneFormPayload } from "./stepOneFormData";

interface IStepTwoFormPayload extends IStepOneFormPayload {
  method?: EMethods;
}

export enum EMethods {
  delete = "DELETE",
}

interface IAdvantageInputElements {
  id: string;
}

interface IStepTwoForm {
  [k: string]: string | string[] | IAdvantageInputElements[];
  advantageInputElements: IAdvantageInputElements[];
  advantages: string[];
  checkboxOptions: string[];
  radioOption: string;
}

const initialState: IStepTwoForm = {
  advantages: [],
  checkboxOptions: [],
  radioOption: '',
  advantageInputElements: [{id: nanoid()}],
}

const stepTwoFormSlice = createSlice({
  name: 'stepTwoFormData',
  initialState,
  reducers: {
    updateStepTwoFormData: {
      reducer (state, action: PayloadAction<IStepTwoFormPayload>) {
        if ((action.payload.prop === 'checkboxOptions') && (action.payload.method != 'DELETE')) {
          state.checkboxOptions = [...state.checkboxOptions, action.payload.value]
        } else {
          state.checkboxOptions = state.checkboxOptions.filter((option) => option != action.payload.value)
        }
        if (action.payload.prop === 'radioOption') {
          state.radioOption = action.payload.value
        }

        // state[action.payload.prop] = action.payload.value;
      },
      prepare (prop: string, value: string, method?: EMethods) {
        return {
          payload:{
            prop,
            value,
            method
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
