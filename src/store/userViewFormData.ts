import { getFullNameWithCapitalLetters } from "@/utils/getFullNameWithCapitalLetters";
import { getShortName } from "@/utils/getShortName";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserViewFormPayload {
  prop: string;
  value: string;
}

export interface IUserViewForm {
  [k: string]: string;
  fullName: string;
  tel: string;
  email: string;
  shortName: string;
}

const initialState: IUserViewForm = {
  fullName: '',
  tel: '',
  email: '',
  shortName: 'XX'
}

const userViewFormSlice = createSlice({
  name: 'userViewFormData',
  initialState,
  reducers: {
    updateUserViewFormData: {
      reducer(state, action: PayloadAction<IUserViewFormPayload>) {
        state[action.payload.prop] = action.payload.value;
        if (state.fullName.length > 0) {
          state.shortName = getShortName(state.fullName)
        } else {
          state.shortName = 'XX'
        }
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
    capitalizeLettersOfFullName: (state) => {
      state.fullName = getFullNameWithCapitalLetters(state.fullName)
    },
    resetUserViewFormData: (state) => {
      return state = { ...initialState };
    }
  }
})

export const { updateUserViewFormData, capitalizeLettersOfFullName, resetUserViewFormData } = userViewFormSlice.actions;

export default userViewFormSlice.reducer;
