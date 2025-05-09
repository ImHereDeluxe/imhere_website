import {setExample} from "../model/ExampleSlice.ts";
import { Dispatch } from "redux";


export class ExampleService {
    static updateExample(dispatch: Dispatch, value: string)
    {
        dispatch(setExample(value));
    }
}