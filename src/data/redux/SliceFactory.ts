import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

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

                console.log("great! i enteret")
                if (state.value === null) {
                    state.value = {} as Draft<T>;
                }

                console.log("cool")

                // Immer понимает мутации:
                for (const key in action.payload) {
                    if (Object.prototype.hasOwnProperty.call(action.payload, key)) {
                        (state.value as any)[key] = action.payload[key];
                    }
                }

                console.log("nice ", state.value)


            },
        },
    });

    return slice;
}