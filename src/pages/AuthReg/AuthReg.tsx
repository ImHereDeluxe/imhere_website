import {Link} from "react-router-dom";

function AuthReg() {
    return (
        <div>
            <h1>Страница авторизации / регистрации</h1>
            <p>Здесь будет форма входа и регистрации.</p>
            <Link to="/">Вернуться на главную</Link>
        </div>
    );
}

export default AuthReg;
