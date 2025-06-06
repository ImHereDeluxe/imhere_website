import {sendRequestToServer} from "../../../../shared/api/SendRequestToServer.ts";
import {API} from "../../../../shared/api/API.ts";
import { Dispatch } from "redux";
import {setUser, updateUser} from "../../../redux/slices/UserSlice.ts";
import {HttpMethod} from "../../../../shared/api/HttpMethod.ts";
import {NavigateFunction} from "react-router-dom";


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


    static async editUserProfile(nickname: string, status: string, description: string, birthday: string, sex: string, navigate: NavigateFunction) {

        const body = {
            nickname: nickname,
            status: status,
            description: description,
           // birthday: birthday, // предполагается, что строка в формате "yyyy-mm-dd"
           // sex: sex,           // строка: "MALE" | "FEMALE" — должно совпадать с enum `Sex` на бэке
        };
        console.log(`nicknameValue: ${birthday} ${sex}`);

        try {
            await sendRequestToServer(API.EDIT_PROFILE, {
                httpMethod: HttpMethod.POST,
                body: body,
                withCredentials: true,
            });

            console.log('Профиль успешно обновлён');

        } catch (error) {
            console.error('Ошибка при обновлении профиля:', error);

            navigate('/pusdos');
        }

        // await sendRequestToServer(API.EDIT_PROFILE,{
        //     httpMethod: HttpMethod.POST,
        //     body: body,
        //     withCredentials: true,
        // });
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

           //  console.log("ПРИВЕТТТТТТ!!!!!");
           //
           // // const profileState=getProfileState();
           //
           //  dispatch(updateUser({ link_to_avatar: "https://stihi.ru/pics/2023/01/10/3831.jpg" }));
           //
           //  if (profileState.user && profileState.user?.link_to_avatar == "https://stihi.ru/pics/2023/01/10/3831.jpg")
           //  {
           //      dispatch(updateUser({ link_to_avatar: "https://i.pinimg.com/originals/7c/b9/3e/7cb93efe8db840d28e5ba38968acef6d.png" }));
           //  }
           //  else
           //  {
           //      dispatch(updateUser({ link_to_avatar: "https://stihi.ru/pics/2023/01/10/3831.jpg" }));
           //  }


            if (result?.link_to_avatar) {
                dispatch(updateUser({ link_to_avatar: result.link_to_avatar }));
                //dispatch(updateUser({ link_to_avatar: "https://stihi.ru/pics/2023/01/10/3831.jpg" }));
            }
        })();
    }
}