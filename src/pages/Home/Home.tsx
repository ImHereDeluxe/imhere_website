// src/App.tsx
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../entities/store";
import { setUser, clearUser } from "../../entities/user/model/UserSlice";
import {setExample, clearExample} from "../../entities/example/model/ExampleSlice"
import InputField, {IInputField} from "../../shared/ui/InputField/InputField.tsx";

function Home()
{
    const input1 = useRef<IInputField>(null);
    const input2 = useRef<IInputField>(null);

    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.value);
    const example = useSelector((state: RootState) => state.example.value);

    const handleSetUser = () => {
        dispatch(
            setUser({
                id: "1",
                name: "Иван",
                description: "Разработчик",
            })
        );

        dispatch(setExample("parabala"));
    };

    const handleGetValue = () => {
        if (input1.current) {
            console.log(`Текущее значение: ${input1.current.getValue()}`);
            input1.current.setPlaceholder("сам такой");
        }
    };

    return (
        <>
            <h1>Vite + React + Redux</h1>
            <div className="card">
                {user && example && (
                    <div>
                        <p>ID: {user.id}</p>
                        <p>Имя: {user.name}</p>
                        <p>Описание: {user.description}</p>
                        <p>точность: {example.value}</p>

                    </div>
                )}

                <InputField ref={input1} placeholder="Вводи, дикле"/>
                <InputField ref={input2} placeholder="Вводи, дикле"/>
                <button onClick={handleGetValue}>Получить значение</button>
                {/*<InputField value={input2} onChange={handleInput2Change}></InputField>*/}

                <button onClick={() => {
                    dispatch(clearUser());
                    dispatch(clearExample())
                }}>Удалить пользователя
                </button>
                <button onClick={handleSetUser}>Создать пользователя</button>
            </div>
        </>
    );
}

export default Home;
