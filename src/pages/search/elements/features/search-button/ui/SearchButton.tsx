// LoginButton/ui.tsx
import React from "react";
import { IInputField } from "@src/shared/features/input-field/InputField.tsx";
// import {
//     useEditHandler,
// } from "@src/pages/profile/elements/features/edit-button/model/EditButtonModel.ts";
import {useSearchHandler} from "@pages/search/elements/features/search-button/model/SearchButtonModel.ts";

interface SearchButtonProps {
    text: React.RefObject<IInputField | null>;
}

const SearchButton: React.FC<SearchButtonProps> = ({ text }) =>
{
    const searchHandler = useSearchHandler(text);

    return (
        <button onClick={searchHandler}>
            <span>Показать многодетных отцов одиночек</span>
        </button>
    );
};

export default SearchButton;
