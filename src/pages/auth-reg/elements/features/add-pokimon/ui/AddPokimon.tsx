import {useDispatch} from "react-redux";
import {PokimonService} from "../../../../../../data/entities/pokimon/service/PokimonService.ts";

const AddPokimon = () => {


    const dispatch = useDispatch();

    const handleLogin = async () => {

        await PokimonService.addPokimon();
        PokimonService.updatePokimon(dispatch);

    };

    return (
        <button onClick={handleLogin}>
            <span>
                {"Клик!"}
            </span>
        </button>
    );
};

export default AddPokimon;
