import "./styles/profile.css"

import { useEffect, useState } from "react";
import { sendRequestToServer } from "@src/shared/api/SendRequestToServer";
import { HttpMethod } from "@src/shared/api/HttpMethod.ts";
import { API } from "@src/shared/api/API.ts";
import { getProfileState } from "@src/states/ProfileState.ts";
import { UserService } from "@src/data/entities/user/service/UserService.ts";
import { useDispatch } from "react-redux";
import ProfileSidebar from "./elements/widgets/ProfileSidebar";
import MainContentArea from "./elements/widgets/MainContentArea";

function Profile() {
  const dispatch = useDispatch();

  const [pokimons, setPokimons] = useState<string>("Загрузка...");

  const profileState = getProfileState();

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
    <div id="page-container">
      <ProfileSidebar />
      <MainContentArea />
    </div>
  );
}

export default Profile;
