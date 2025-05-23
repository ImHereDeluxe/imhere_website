import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export function createGenericSlice<T>(name: string) {
    const initialState: { value: T | null } = {
        value: null,
    };

    const slice = createSlice({
        name,
        initialState,
        reducers: {
            setValue: (_state, action: PayloadAction<T>) => {
                return { value: action.payload };
            },
            updateValue: (state, action: PayloadAction<Partial<T>>) => {
                if (state.value) {
                    Object.assign(state.value, action.payload);
                }
            },
        },
    });

    return slice;
}