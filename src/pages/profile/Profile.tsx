import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



import {sendRequestToServer} from "../../shared/api/SendRequestToServer.ts";
import {HttpMethod} from "../../shared/api/HttpMethod.ts";
import {API} from "../../shared/api/API.ts";

function Profile() {
    const [pokimons, setPokimons] = useState<string>("Загрузка...");

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
        };

        fetchPokimons();
    }, []);

    return (
        <div>
            <h1>УСПЕШНАЯ РЕГИСТРАЦИЯ ОЧКА!</h1>
            <pre>{pokimons}</pre>
            <p>щит медуза стрит косок что плеть</p>
            <Link to="/main">Вернуть как было, в жопе мыло</Link>
        </div>
    );
}

export default Profile;
