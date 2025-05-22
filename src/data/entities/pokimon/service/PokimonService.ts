import {sendRequestToServer} from "../../../../shared/api/SendRequestToServer.ts";
import {HttpMethod} from "../../../../shared/api/HttpMethod.ts";
import {API} from "../../../../shared/api/API.ts";
import {setPokimon} from "../../../redux/slices/PokimonSlice.ts";
import { Dispatch } from "redux";


export class PokimonService {
    static updatePokimon(dispatch: Dispatch) {
        (async () => {
            const data = await sendRequestToServer(API.GET_POKIMON);
            if (data && data.Hello_world) {
                dispatch(setPokimon({value:data.Hello_world}));
            }
        })();
    }

    static addPokimon() {
        void sendRequestToServer(API.ADD_POKIMON, {
            httpMethod: HttpMethod.POST,
        });
    }

    static minusPokimon() {
        void sendRequestToServer(API.MINUS_POKIMON, {
            httpMethod: HttpMethod.POST,
            withCredentials: true
        });
    }
}