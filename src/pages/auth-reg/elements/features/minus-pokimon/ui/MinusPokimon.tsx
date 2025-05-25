import {useDispatch} from "react-redux";
import {PokimonService} from "../../../../../../data/entities/pokimon/service/PokimonService.ts";

const MinusPokimon = () => {


    const dispatch = useDispatch();

    const handleLogin = async () => {

        await PokimonService.minusPokimon();
        //PokimonService.addPokimon();
        PokimonService.updatePokimon(dispatch);

    };

    return (
        <button onClick={handleLogin}>
            <span>
                {"Уничтожить :D"}
            </span>
        </button>
    );
};

export default MinusPokimon;
