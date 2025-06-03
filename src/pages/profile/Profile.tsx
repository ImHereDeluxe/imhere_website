import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import EditProfile from "@pages/profile/elements/widgets/EditProfile.tsx";
//import EditProfile from "@scr/pages/profile/elements/widgets/EditProfile.tsx"
import {sendRequestToServer} from "@src/shared/api/SendRequestToServer";
import {HttpMethod} from "@src/shared/api/HttpMethod.ts";
import {API} from "@src/shared/api/API.ts";
import {MinusPokimon} from "@src/pages/auth-reg/elements/features/minus-pokimon";
import {getProfileState} from "@src/states/ProfileState.ts";
import {UserService} from "@src/data/entities/user/service/UserService.ts";
import {useDispatch} from "react-redux";
import {AvatarUpload} from "@src/pages/profile/elements/features/avatar-upload";
import EditProfile from "@pages/profile/elements/widgets/EditProfile.tsx";

function Profile() {

    const dispatch = useDispatch();

    const [pokimons, setPokimons] = useState<string>("Загрузка...");

    const profileState=getProfileState();

    useEffect(() => {
        const fetchPokimons = async () => {
            const response = await sendRequestToServer(API.GET_VIP_POKIMON, {
                httpMethod: HttpMethod.GET,
                withCredentials: true, // обязательно для кук
            });

            if (response) {
                // Преобразуем в строку для вывода
                setPokimons(JSON.stringify(response, null, 2));
            } else {
                setPokimons("Не удалось загрузить покимонов 😿");
            }


            UserService.updatePUser(dispatch);

        };

        fetchPokimons();
    }, []);

    return (
        <div>
            <h1>УСПЕШНАЯ РЕГИСТРАЦИЯ ОЧКА!</h1>




            {/* 🧠 Профиль */}
            {profileState.user ? (
                <div>
                    <h2>👤 Профиль пользователя:</h2>




                    {profileState.user.link_to_avatar ? (
                        <div>
                            <img
                                src={profileState.user.link_to_avatar}
                                alt="Аватар"
                                style={{width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover"}}
                            />
                        </div>
                    ) : (
                        <p>Аватар не загружен</p>
                    )}

                    <p><strong>Ник:</strong> {profileState.user.nickname}</p>
                    <p><strong>Статус:</strong> {profileState.user.status}</p>
                    <p><strong>Описание:</strong> {profileState.user.description}</p>
                    <p><strong>Пол:</strong> {profileState.user.sex}</p>
                    <p><strong>День рождения:</strong> {new Date(profileState.user.birthday).toLocaleDateString()}</p>
                </div>
            ) : (
                <p>Профиль не загружен</p>
            )}

            <pre>{pokimons}</pre>
            <p>щит медуза стрит косок что плеть</p>
            <MinusPokimon/>
            <Link to="/main">Вернуть как было, в жопе мыло</Link>
            <Link to="/search">Выйти замуж. ну или зайти, тут кому удобнее</Link>
            <AvatarUpload/>

            <EditProfile/>
        </div>
    );
}

export default Profile;
