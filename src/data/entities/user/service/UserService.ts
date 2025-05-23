import {sendRequestToServer} from "../../../../shared/api/SendRequestToServer.ts";
import {API} from "../../../../shared/api/API.ts";
import { Dispatch } from "redux";
import {setUser, updateUser} from "../../../redux/slices/UserSlice.ts";
import {HttpMethod} from "../../../../shared/api/HttpMethod.ts";


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
                    link_to_avatar: data.link_to_avatar,
                }));
            }
        })();
    }

    static uploadAvatar(dispatch: Dispatch, file: File) {
        (async () => {
            const formData = new FormData();
            formData.append("image", file);

            const result = await sendRequestToServer(API.PUT_AVATAR, {
                httpMethod: HttpMethod.PUT,
                body: formData,
                withCredentials: true,
                isFormData: true,
            });

            if (result?.url) {
                dispatch(updateUser({ link_to_avatar: result.link_to_avatar }));
            }
        })();
    }
}