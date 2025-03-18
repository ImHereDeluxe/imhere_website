import {Link} from "react-router-dom";

function Home()
{
    return (
        <div>
            <h1>Страница авторизации / регистрации</h1>
            <p>Здесь будет форма входа и регистрации.</p>
            <Link to="/main">Вернуться на главную</Link>
        </div>
    );
}

export default Home;