// src/App.tsx
import { useRef,
    useEffect } from "react";
import { useDispatch,
 } from "react-redux";
//import { RootState } from "../../entities/store";
// import { setUser } from "../../entities/user/model/UserSlice";
// import {setExample} from "../../entities/example/model/ExampleSlice"
import //InputField,
{IInputField} from "../../shared/features/input-field/InputField";
import {LoginButton} from "./elements/features/login-button";
//import RegButton from "./elements/features/reg-button/ui/RegButton.tsx";
import {AddPokimon} from "./elements/features/add-pokimon";
//import {getPokimon} from "../../shared/selectors/PokimonSelector.ts";
import {getAuthRegState} from "../../states/AuthRegState.ts";
//import {setPokimon} from "../../data/redux/slices/PokimonSlice.ts";
//import {
    //addPokimon,
   // updatePokimon} from "../../entities/pokimon/api/PokimonApi.ts";

function AuthReg()
{
    const input1 = useRef<IInputField>(null);
   const input2 = useRef<IInputField>(null);

    const dispatch = useDispatch();
    const authRegState=getAuthRegState();


    useEffect(() => {
        const fetchData = async () => {

            //dispatch(setPokimon({value:5}));

           // void updatePokimon(dispatch);

            // if (data && data.Hello_world) {
            //     dispatch(setPokimon(data.Hello_world));
            // }
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
                    <h1>Собрано всего апойгенных покемонов</h1>
                    {authRegState.pokimon &&(<p> {authRegState.pokimon.value}</p>)}
                    {/*<h1>Собрал(а) конкретно ты(а)</h1>*/}
                    {/*{authRegState.pokimon &&(<p> {authRegState.pokimon}</p>)}*/}
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

                {/*<InputField ref={input1} placeholder="Вводи почту, дикле"/>*/}
                {/*<InputField ref={input2} placeholder="Вводи пароль, дикле"/>*/}
                <LoginButton input1={input1} input2={input2}/>
                {/*<RegButton input1={input1} input2={input2}/>*/}

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
