import {sendRequestToServer} from "../../../../shared/api/SendRequestToServer.ts";
import {API} from "../../../../shared/api/API.ts";
import { Dispatch } from "redux";
import {HttpMethod} from "../../../../shared/api/HttpMethod.ts";
import {setUserCardsSearch} from "../../../redux/slices/UserCardsSearchSlice.ts";
import {NavigateFunction} from "react-router-dom";


export class UserCardSearchService {
    static updateUserCardSearchService(dispatch: Dispatch, text: string, navigate: NavigateFunction) {
        // (async () => {
        //     const data = await sendRequestToServer(API.GET_SEARCH,
        //         {
        //             httpMethod: HttpMethod.POST,
        //             body: {
        //                 description: text
        //             },
        //             withCredentials: true,
        //         });
        //
        //     if (Array.isArray(data)) {
        //         dispatch(setUserCardsSearch(data));
        //     } else {
        //         console.warn("Ожидался нежный койот, получено во че, ну это незаконно:", data);
        //     }
        // })();
        (async () => {
            try {
                const data = await sendRequestToServer(API.GET_SEARCH, {
                    httpMethod: HttpMethod.POST,
                    body: {
                        description: text,
                    },
                    withCredentials: true,
                });

                if (Array.isArray(data)) {
                    dispatch(setUserCardsSearch(data));
                } else {
                    console.warn("Ожидался нежный койот, получено во че, ну это незаконно:", data);
                    // можно тоже навигировать, если это критично
                    // navigate('/error');
                }
            } catch (error) {
                console.error("Ошибка при поиске карточек:", error);
                navigate('/error'); // или любая другая страница
            }
        })();
    }


}