import { useRef,
  //  useEffect, useState
} from "react";
// import { Link } from "react-router-dom";
//
// import {sendRequestToServer} from "@scr/shared/api/SendRequestToServer.ts";
// import {HttpMethod} from "@scr/shared/api/HttpMethod.ts";
// import {API} from "@scr/shared/api/API.ts";
// import {MinusPokimon} from "@scr/pages/auth-reg/elements/features/minus-pokimon";
// import {getProfileState} from "@src/states/ProfileState.ts";
// import {UserService} from "@scr/data/entities/user/service/UserService.ts";
// import {useDispatch} from "react-redux";
// import {AvatarUpload} from "@scr/pages/profile/elements/features/avatar-upload";
import InputField, {IInputField} from "@src/shared/features/input-field/InputField.tsx";
import EditButton from "@pages/profile/elements/features/edit-button/ui/EditButton.tsx";

function EditProfile() {

   // const profileState=getProfileState();

    const nickname = useRef<IInputField>(null);
    const status = useRef<IInputField>(null);
    const description = useRef<IInputField>(null);
    const birthday = useRef<IInputField>(null);
    const sex = useRef<IInputField>(null);



    return (
        <div>
            <InputField ref={nickname} placeholder={"как звать?"}/>
            <InputField ref={status} placeholder={"какой статус в одноклассниках?"}/>
            <InputField ref={description} placeholder={"че по чем?"}/>
            <InputField ref={birthday} placeholder={"с каких пор на земле?"}/>
            <InputField ref={sex} placeholder={"самка или самса?"}/>
            <EditButton nickname={nickname} status={status} description={description} birthday={birthday} sex={sex}/>
        </div>
    );
}

export default EditProfile;
