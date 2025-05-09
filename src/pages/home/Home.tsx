import {Link} from "react-router-dom";
import {getAuthRegState} from "../../states/AuthRegState.ts";

function Home()
{

    const authRegState=getAuthRegState();

    return (
        <div>
            <h1>Привет, пиписьки, вы где?</h1>
            <Link to="/main">Вернуться в туда</Link>
            <p>Информация для особо одаренных:</p>
            {authRegState.pokimon && (<p> {authRegState.pokimon}</p>)}
        </div>
    );
}

export default Home;