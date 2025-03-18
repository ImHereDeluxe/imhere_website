import {Link} from "react-router-dom";

function Profile()
{
    return (
        <div>
            <h1>Страница профиля</h1>
            <p>щит медуза стрит косок что плеть</p>
            <Link to="/main">Вернуться на главную</Link>
        </div>
    );
}

export default Profile;