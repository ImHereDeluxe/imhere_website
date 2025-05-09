import { useSelector } from "react-redux";
import {RootState} from "../../entities/store.ts";

export function createValueSelector<T>(
    baseSelector: (state: RootState) => any
): () => T | null {
    return () =>
        useSelector((state: RootState) => {
            const base = baseSelector(state);
            return base?.value ?? null; // <-- достаём только конечное значение
        });
}