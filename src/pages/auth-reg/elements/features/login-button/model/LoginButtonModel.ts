// LoginButton/model.ts
//import { useNavigate } from "react-router-dom";
import { IInputField } from "../../../../../../shared/features/input-field/InputField.tsx";
//import { sendRequestToServer } from "../../../../../../shared/api/SendRequestToServer.ts";
////import { API } from "../../../../../../shared/api/API.ts";
//import { HttpMethod } from "../../../../../../shared/api/HttpMethod.ts";

export function useLoginHandler(
    input1: React.RefObject<IInputField | null>,
    input2: React.RefObject<IInputField | null>
) {
   // const navigate = useNavigate();

    const handleLogin = async () => {
        const login = input1?.current?.getValue() || "";
        const password = input2?.current?.getValue() || "";

        console.log(`Input 1: ${login}`);
        console.log(`Input 2: ${password}`);

        window.location.href = "https://imhere.space/oauth2/authorization/google";


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

    return handleLogin;
}