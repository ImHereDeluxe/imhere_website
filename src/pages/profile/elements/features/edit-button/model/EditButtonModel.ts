// LoginButton/model.ts
//import { useNavigate } from "react-router-dom";
import { IInputField } from "@src/shared/features/input-field/InputField.tsx";
import React from "react";
import {UserService} from "@src/data/entities/user/service/UserService.ts";
//import {useDispatch} from "react-redux";
//import { sendRequestToServer } from "../../../../../../shared/api/SendRequestToServer.ts";
////import { API } from "../../../../../../shared/api/API.ts";
//import { HttpMethod } from "../../../../../../shared/api/HttpMethod.ts";

export function useEditHandler(
    nickname: React.RefObject<IInputField | null>,
    status: React.RefObject<IInputField | null>,
    description: React.RefObject<IInputField | null>,
    birthday: React.RefObject<IInputField | null>,
    sex: React.RefObject<IInputField | null>,
) {
   // const navigate = useNavigate();

  //  const dispatch = useDispatch();

    const editHandler = async () => {

        const nicknameValue = nickname?.current?.getValue() || "";
        const statusValue = status?.current?.getValue() || "";
        const descriptionValue = description?.current?.getValue() || "";
        const birthdayValue = birthday?.current?.getValue() || "";
        const sexValue = sex?.current?.getValue() || "";

        console.log(`nicknameValue: ${nicknameValue}`);
        console.log(`statusValue: ${statusValue}`);

        await UserService.editUserProfile(nicknameValue, statusValue, descriptionValue, birthdayValue, sexValue);

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

    return editHandler;
}