import {sendRequestToServer} from "../../../../shared/api/SendRequestToServer.ts";
import {API} from "../../../../shared/api/API.ts";
import { Dispatch } from "redux";
import {HttpMethod} from "../../../../shared/api/HttpMethod.ts";
import {setUserCardsSearch} from "../../../redux/slices/UserCardsSearchSlice.ts";


export class UserCardSearchService {
    static updateUserCardSearchService(dispatch: Dispatch) {
        (async () => {
            const data = await sendRequestToServer(API.GET_SEARCH,
                {
                    httpMethod: HttpMethod.POST,
                    body: {},
                    withCredentials: true,
                });

            if (Array.isArray(data)) {
                dispatch(setUserCardsSearch(data));
            } else {
                console.warn("Ожидался массив, получено:", data);
            }
        })();
    }


}