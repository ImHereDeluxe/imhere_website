import {useDispatch} from "react-redux";
import {PokimonService} from "../../../../../../entities/pokimon/api/PokimonApi.ts";

const AddPokimon = () => {


    const dispatch = useDispatch();

    const handleLogin = () => {

        PokimonService.addPokimon();
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
