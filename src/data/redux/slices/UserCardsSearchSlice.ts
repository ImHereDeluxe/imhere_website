import {createGenericSlice} from "../SliceFactory.ts";
import {UserCardSearch} from "../../entities/user-card-search/model/UserCardSearch.ts";

const slice = createGenericSlice<UserCardSearch[]>("UserCardSearch");

export const { setValue: setUserCardsSearch } = slice.actions;
export default slice.reducer;