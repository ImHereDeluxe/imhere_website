import { User } from "../../entities/user/model/User.ts";
import {createGenericSlice} from "../SliceFactory.ts";

const slice = createGenericSlice<User>("user");

export const { setValue: setUser,updateValue: updateUser } = slice.actions;
export default slice.reducer;