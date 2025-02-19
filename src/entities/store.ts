// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/model/UserSlice";
import exampleSlice from "./example/model/ExampleSlice.ts";

export const store = configureStore({
    reducer: {
        user: userReducer,
        example: exampleSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
