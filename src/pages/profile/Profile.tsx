import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



import {sendRequestToServer} from "../../shared/api/SendRequestToServer.ts";
import {HttpMethod} from "../../shared/api/HttpMethod.ts";
import {API} from "../../shared/api/API.ts";
import {MinusPokimon} from "../auth-reg/elements/features/minus-pokimon";
import {getProfileState} from "../../states/ProfileState.ts";
import {UserService} from "../../data/entities/user/service/UserService.ts";
import {useDispatch} from "react-redux";

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
        </div>
    );
}

export default Profile;
