import { User } from "../../entities/user/model/User.ts";
import {createGenericSlice} from "../SliceFactory.ts";

const slice = createGenericSlice<User>("user");

export const { setValue: setUser } = slice.actions;
export default slice.reducer;