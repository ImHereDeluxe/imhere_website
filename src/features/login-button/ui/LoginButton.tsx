// import "./LoginButton.css";

import {useNavigate} from "react-router-dom";
import {IInputField} from "../../../shared/ui/input-field/InputField.tsx";


interface LoginButtonProps {
    input1: React.RefObject<IInputField |null>;
    input2: React.RefObject<IInputField |null>;
}

const LoginButton: React.FC<LoginButtonProps> = ({ input1, input2 }) => {

    const navigate = useNavigate(); // Хук для навигации

    const handleLogin = () => {

        const value1 = input1?.current?.getValue() || "";
        const value2 = input2?.current?.getValue() || "";

        console.log(`Input 1: ${value1}`);
        console.log(`Input 2: ${value2}`);

        navigate("/home"); // Перенаправление на страницу /home
    };

    return (
        <button onClick={handleLogin}>
            <span className="log-in-text">
                {"Log in"}
            </span>
        </button>
    );
};

export default LoginButton;
