// entities/user/model/userSlice.ts

import { Pokimon } from "../../entities/pokimon/model/Pokimon.ts";
import {createGenericSlice} from "../SliceFactory.ts";

const slice = createGenericSlice<Pokimon>("pokimon");

export const { setValue: setPokimon } = slice.actions;
export default slice.reducer;