// LoginButton/ui.tsx
import React from "react";
import { IInputField } from "@src/shared/features/input-field/InputField.tsx";
import {
    useEditHandler,
} from "@src/pages/profile/elements/features/edit-button/model/EditButtonModel.ts";

interface LoginButtonProps {
    nickname: React.RefObject<IInputField | null>;
    status: React.RefObject<IInputField | null>;
    description: React.RefObject<IInputField | null>;
    birthday: React.RefObject<IInputField | null>;
    sex: React.RefObject<IInputField | null>;
}

const EditButton: React.FC<LoginButtonProps> = ({ nickname, status, description, birthday, sex }) =>
{
    const editHandler = useEditHandler(nickname, status, description, birthday, sex);

    return (
        <button onClick={editHandler}>
            <span>Поменять личность</span>
        </button>
    );
};

export default EditButton;
