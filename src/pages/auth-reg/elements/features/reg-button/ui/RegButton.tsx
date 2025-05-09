// import "./LoginButton.css";


import {IInputField} from "../../../../../../shared/features/input-field/InputField.tsx";
import {useNavigate} from "react-router-dom";
import {sendRequestToServer} from "../../../../../../shared/api/SendRequestToServer.ts";
import {API} from "../../../../../../shared/api/API.ts";
import {HttpMethod} from "../../../../../../shared/api/HttpMethod.ts";

interface RegButtonProps {
    input1: React.RefObject<IInputField |null>;
    input2: React.RefObject<IInputField |null>;
}

const RegButton: React.FC<RegButtonProps> = ({ input1, input2 }) => {


    const navigate = useNavigate();

    const handleReg = async () =>
    {
        const login = input1?.current?.getValue() || "";
        const password = input2?.current?.getValue() || "";

        console.log(`Input 1: ${login}`);
        console.log(`Input 2: ${password}`);

        const user = {
            email: login,
            password: password,
        };

        const data = await sendRequestToServer(API.REGISTRATION,
            {
                httpMethod: HttpMethod.POST,
                body:user
        })

        if (data) {
            console.log(`Удалось заредиситься: `, data);
            navigate("/profile");
        }

        //navigate("/profile");
    };


    return (
        <button onClick={handleReg}
        >
            <span className="sign-in-text">
                {"Create account"}
            </span>
        </button>
    );
};

export default RegButton;
