// LoginButton/model.ts
//import { useNavigate } from "react-router-dom";
import { IInputField } from "@src/shared/features/input-field/InputField.tsx";
import React from "react";
//import {UserService} from "@src/data/entities/user/service/UserService.ts";
import {useDispatch} from "react-redux";
import {UserCardSearchService} from "@src/data/entities/user-card-search/service/UserCardSearchService.ts";
//import {useDispatch} from "react-redux";
//import { sendRequestToServer } from "../../../../../../shared/api/SendRequestToServer.ts";
////import { API } from "../../../../../../shared/api/API.ts";
//import { HttpMethod } from "../../../../../../shared/api/HttpMethod.ts";

export function useSearchHandler(
    text: React.RefObject<IInputField | null>,
) {
   // const navigate = useNavigate();

    const dispatch = useDispatch();

    const searchHandler = async () => {

        const textValue = text?.current?.getValue() || "";

        console.log(`textValue: ${text}`);

        await UserCardSearchService.updateUserCardSearchService(dispatch, textValue);
        //UserService.updatePUser(dispatch);

        // const user = {
        //     email: login,
        //     password: password,
        // };
        //
        // const data = await sendRequestToServer(API.AUTHORIZATION, {
        //     httpMethod: HttpMethod.POST,
        //     body: user,
        // });
        //
        // if (data) {
        //     console.log(`Удалось акститься: `, data);
        //     navigate("/profile");
        // }
    };

    return searchHandler;
}