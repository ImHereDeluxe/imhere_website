// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice.ts";
import exampleSlice from "./slices/ExampleSlice.ts";
import pokimonSlice from "./slices/PokimonSlice.ts";
import UserCardsSearchSlice from "./slices/UserCardsSearchSlice.ts";

export const store = configureStore({
    reducer: {
        user: userReducer,
        example: exampleSlice,
        pokimon: pokimonSlice,
        userCardsSearch: UserCardsSearchSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
