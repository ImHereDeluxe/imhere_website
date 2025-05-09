import {createValueSelector} from "../shared/selectors/GenericSelector.ts";
import {RootState} from "../entities/store.ts";
import {Pokimon} from "../entities/pokimon/model/Pokimon.ts";

interface AuthRegState {
    pokimon: Pokimon|null;
}

export function getAuthRegState()
{
    const authRegState: AuthRegState = {
        pokimon: createValueSelector<Pokimon>((state: RootState) => state.pokimon)(),
    };

    return authRegState;
}
