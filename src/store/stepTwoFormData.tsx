import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { IStepOneFormPayload } from "./stepOneFormData";

interface IStepTwoFormPayload extends IStepOneFormPayload {
  method?: EMethods;
  index?: number;
  id?: string;
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
  advantageInputElements: [{ id: nanoid() }],
}

const stepTwoFormSlice = createSlice({
  name: 'stepTwoFormData',
  initialState,
  reducers: {
    updateStepTwoFormData: {
      reducer(state, action: PayloadAction<IStepTwoFormPayload>) {
        if ((action.payload.prop === 'checkboxOptions') && (action.payload.method != 'DELETE')) {
          state.checkboxOptions = [...state.checkboxOptions, action.payload.value]
        } else if ((action.payload.prop === 'checkboxOptions') && (action.payload.method === 'DELETE')) {
          state.checkboxOptions = state.checkboxOptions.filter((option) => option != action.payload.value)
        }

        if (action.payload.prop === 'radioOption') {
          state.radioOption = action.payload.value
        }
        // // вариант с передачей индекса
        // if (action.payload.prop === 'advantages' && (action.payload.method != 'DELETE')) {
        //   const currentValue = action.payload.value;
        //   if (action.payload.index === undefined) return;
        //   state.advantages[action.payload.index] = currentValue
        // } else {
        //   // удаление при передачи метода (не нужен так как удаляем знаечние инпута из массива при удалении самого инпута в deleteAdvantageInput)
        //   state.advantages.splice(action.payload.index as number);
        // }

        // вариант с передачей id  и синхронизаиецй с массивом самих инпутов
        if (action.payload.prop === 'advantages' && (action.payload.method != 'DELETE')) {
          const currentValue = action.payload.value;
          const currentChangedInput = state.advantageInputElements.find(input => input.id === action.payload.id)
          if (!currentChangedInput) return;
          const index = state.advantageInputElements.indexOf(currentChangedInput);
          state.advantages[index] = currentValue
        }
      },
      prepare(prop: string, value: string, method?: EMethods, id?: string, index?: number) {
        return {
          payload: {
            prop,
            value,
            method,
            index,
            id
          }
        }
      },
    },
    addAdvantageInput: (state) => {
      const input = {
        id: nanoid()
      }
      state.advantageInputElements = [...state.advantageInputElements, input]
      // можно при добавлении инпута сразу добавлять пустое значение в массив advantages (необязательно)
    },
    deleteAdvantageInput: {
      reducer(state, action: PayloadAction<string>) {
        // удаляем и значение инпута из state.advantages при удалении самого инпута
        const deletedInput = state.advantageInputElements.find(advantage => advantage.id === action.payload);
        if (!deletedInput) return;
        const index = state.advantageInputElements.indexOf(deletedInput);
        state.advantages.splice(index, 1);

        // удаляем сам инпут
        state.advantageInputElements = state.advantageInputElements.filter((advantage) => advantage.id != action.payload)
      },
      prepare(id: string) {
        return {
          payload: id
        }
      },
    },
    resetStepTwoFormData: (state) => {
      return state = { ...initialState };
    }
  }
})

export const { updateStepTwoFormData, addAdvantageInput, deleteAdvantageInput, resetStepTwoFormData } = stepTwoFormSlice.actions;

export default stepTwoFormSlice.reducer;
