// LoginButton/ui.tsx
import React from "react";
import { IInputField } from "../../../../../../shared/features/input-field/InputField.tsx";
import { useLoginHandler } from "../model/LoginButtonModel.ts";

interface LoginButtonProps {
    input1: React.RefObject<IInputField | null>;
    input2: React.RefObject<IInputField | null>;
}

const LoginButton: React.FC<LoginButtonProps> = ({ input1, input2 }) =>
{
    const handleLogin = useLoginHandler(input1, input2);

    return (
        <button onClick={handleLogin}>
            <span className="log-in-text">Войти чисто</span>
        </button>
    );
};

export default LoginButton;
