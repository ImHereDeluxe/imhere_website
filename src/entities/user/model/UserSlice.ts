import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./User";

interface Value {
    value: User | null;
}

const value: Value = { value: null };

const slice = createSlice(
{
    name: "user",
    initialState: value,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.value = action.payload;
        },
        clearUser: (state) => {
            state.value = null;
        },
    },
}
);

export const { setUser, clearUser } = slice.actions;
export default slice.reducer;
