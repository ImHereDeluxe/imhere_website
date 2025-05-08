import {Link} from "react-router-dom";

function Home()
{
    return (
        <div>
            <h1>Привет, пиписьки, вы где?</h1>
            <Link to="/main">Вернуться в туда</Link>
        </div>
    );
}

export default Home;