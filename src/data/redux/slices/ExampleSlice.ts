import { Example } from "../../entities/example/model/Example.ts";
import {createGenericSlice} from "../SliceFactory.ts";

const slice = createGenericSlice<Example>("example");

export const { setValue: setExample } = slice.actions;
export default slice.reducer;