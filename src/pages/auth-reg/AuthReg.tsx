// src/App.tsx
import { //useRef,
    useEffect } from "react";
import { useDispatch,
    useSelector } from "react-redux";
import { RootState } from "../../entities/store";
// import { setUser } from "../../entities/user/model/UserSlice";
// import {setExample} from "../../entities/example/model/ExampleSlice"
// import InputField, {IInputField} from "../../shared/features/input-field/InputField";
// import {LoginButton} from "./elements/features/login-button";
// import RegButton from "./elements/features/reg-button/ui/RegButton.tsx";
import {AddPokimon} from "./elements/features/add-pokimon";
import {setPokimon} from "../../entities/pokimon/model/PokimonSlice.ts";
import {
    //addPokimon,
    getPokimon} from "../../entities/pokimon/api/PokimonApi.ts";

function AuthReg()
{
    //const input1 = useRef<IInputField>(null);
   // const input2 = useRef<IInputField>(null);

    const dispatch = useDispatch();
    //const user = useSelector((state: RootState) => state.user.value);
    const pokimon = useSelector((state: RootState) => state.pokimon.value);
    // const example = useSelector((state: RootState) => state.example.value);


    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokimon();
            if (data && data.Hello_world) {
                dispatch(setPokimon(data.Hello_world));
            }
        };

        fetchData();
    }, [dispatch]);

    // const handleSetUser = () => {
    //     dispatch(
    //         setUser({
    //             id: "1",
    //             name: "Иван",
    //             description: "Разработчик",
    //         })
    //     );
    //
    //     dispatch(setExample("parabala"));
    // };
    //
    // const handleGetValue = () => {
    //     if (input1.current) {
    //         console.log(`Текущее значение: ${input1.current.getValue()}`);
    //         input1.current.setPlaceholder("сам такой");
    //     }
    // };

    return (
        <>
            <div className="card">

                <div>
                    <h1>Собрано апойгенных покемонов</h1>
                    {pokimon &&(<p> {pokimon.value}</p>)}
                    <AddPokimon/>
                </div>

                {/*{user && (*/}
                {/*    <div>*/}
                {/*        <p>ID: {user.id}</p>*/}
                {/*        <p>Имя: {user.name}</p>*/}
                {/*        <p>Описание: {user.description}</p>*/}
                {/*        /!*<p>точность: {example.value}</p>*!/*/}

                {/*    </div>*/}
                {/*)}*/}

                {/*<InputField ref={input1} placeholder="Вводи, дикле"/>*/}
                {/*<InputField ref={input2} placeholder="Вводи, дикле"/>*/}
                {/*<LoginButton input1={input1} input2={input2}/>*/}
                {/*<RegButton/>*/}

                {/*<button onClick={handleGetValue}>Получить значение</button>*/}
                {/*/!*<InputField value={input2} onChange={handleInput2Change}></InputField>*!/*/}

                {/*<button onClick={() => {*/}
                {/*    dispatch(clearUser());*/}
                {/*    dispatch(clearExample())*/}
                {/*}}>Удалить пользователя*/}
                {/*</button>*/}
                {/*<button onClick={handleSetUser}>Создать пользователя</button>*/}
            </div>
        </>
    );
}

export default AuthReg;
