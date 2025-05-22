import {createValueSelector} from "../shared/selectors/GenericSelector.ts";
import {RootState} from "../data/redux/store.ts";
import {UserCardSearch} from "../data/entities/user-card-search/model/UserCardSearch.ts";

interface SearchState {
    userCardsSearch: UserCardSearch[]|null;
}

export function getSearchState()
{
    const searchState: SearchState = {
        userCardsSearch: createValueSelector<UserCardSearch[]>((state: RootState) => state.userCardsSearch)(),
    };

    return searchState;
}
