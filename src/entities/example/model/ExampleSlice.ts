// entities/user/model/userSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Example } from "./Example.ts";

interface Value {
    value: Example | null;
}

const value: Value = { value: null };

const slice = createSlice(
{
    name: "example",
    initialState: value,
    reducers:
        {
        setExample: (state, action: PayloadAction<string>) => {
            state.value = {value: action.payload};
        },
        clearExample: (state) => {
            state.value = null;
        },
    },
}
);

export const { setExample, clearExample } = slice.actions;
export default slice.reducer;
