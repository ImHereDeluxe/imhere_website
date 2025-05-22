import {sendRequestToServer} from "../../../../shared/api/SendRequestToServer.ts";
import {API} from "../../../../shared/api/API.ts";
import { Dispatch } from "redux";
import {setUser} from "../../../redux/slices/UserSlice.ts";


export class UserService {
    static updatePUser(dispatch: Dispatch) {
        (async () => {
            const data = await sendRequestToServer(API.GET_PROFILE);
            if (data) {
                dispatch(setUser({
                    nickname: data.nickname,
                    status: data.status,
                    description: data.description,
                    birthday: data.birthday,
                    sex: data.sex,
                }));
            }
        })();
    }
}