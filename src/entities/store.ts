// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/model/UserSlice";
import exampleSlice from "./example/model/ExampleSlice.ts";
import pokimonSlice from "./pokimon/model/PokimonSlice.ts";

export const store = configureStore({
    reducer: {
        user: userReducer,
        example: exampleSlice,
        pokimon: pokimonSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
