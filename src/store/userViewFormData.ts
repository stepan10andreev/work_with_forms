import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserViewFormPayload {
  prop: string;
  value: string;
}

interface IUserViewForm {
  [k: string]: string;
  fullname: string;
  tel: string;
  email: string;
}

const initialState: IUserViewForm = {
  fullname: '',
  tel: '',
  email: '',
}

const userViewFormSlice = createSlice({
  name: 'userViewFormData',
  initialState,
  reducers: {
    updateUserViewFormData: {
      reducer (state, action: PayloadAction<IUserViewFormPayload>) {
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
    }

  }
})

export const { updateUserViewFormData } = userViewFormSlice.actions;

export default userViewFormSlice.reducer;
