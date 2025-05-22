import {createValueSelector} from "../shared/selectors/GenericSelector.ts";
import {RootState} from "../data/redux/store.ts";
import {User} from "../data/entities/user/model/User.ts";

interface ProfileState {
    user: User|null;
}

export function getProfileState()
{
    const profileState: ProfileState = {
        user: createValueSelector<User>((state: RootState) => state.user)(),
    };

    return profileState;
}
