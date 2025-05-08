import {useDispatch} from "react-redux";
import {setPokimon} from "../../../../../../entities/pokimon/model/PokimonSlice.ts";
import {addPokimon, getPokimon} from "../../../../../../entities/pokimon/api/PokimonApi.ts";

const AddPokimon = () => {


    const dispatch = useDispatch();

    const handleLogin = async () => {

        await addPokimon();

        const data = await getPokimon();
        if (data && data.Hello_world) {
            dispatch(setPokimon(data.Hello_world));
        }
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
