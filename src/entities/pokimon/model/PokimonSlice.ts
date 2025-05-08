// entities/user/model/userSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokimon } from "./Pokimon.ts";

interface Value {
    value: Pokimon | null;
}

const value: Value = { value: null };

const slice = createSlice(
{
    name: "pokimon",
    initialState: value,
    reducers:
        {
        setPokimon: (state, action: PayloadAction<number>) => {
            state.value = {value: action.payload};
        },
    },
}
);

export const { setPokimon } = slice.actions;
export default slice.reducer;
