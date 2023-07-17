import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface IStepOneFormPayload {
  prop: string;
  value: string;
}

interface IAdvantagesInputElements {
  id: string;
}

interface IStepTwoForm {
  [k: string]: string | string[] | IAdvantagesInputElements[];
  advantageInputElements: IAdvantagesInputElements[];
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
      reducer (state, action: PayloadAction<IStepOneFormPayload>) {
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

export const { updateStepTwoFormData } = stepTwoFormSlice.actions;

export default stepTwoFormSlice.reducer;
