export enum API
{
    //Покемоны
    GET_POKIMON = "/auth/count/pokimon",
    ADD_POKIMON = "/auth/add/pokimon",
    MINUS_POKIMON = "/minus/pokimon",
    GET_VIP_POKIMON = "/count/pokimon",

    //Регистрация, авторизация
    REGISTRATION = "/auth/register",
    AUTHORIZATION = "/auth/authenticate",

    //Профиль

    GET_PROFILE = "/profile/me",
    PUT_AVATAR = "/profile/avatar/upload/me",

    //Поиск
    GET_SEARCH = "/search",
}
