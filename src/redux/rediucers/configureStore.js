import { createStore } from "redux";
import rediucers from "./index";


export default function configureStore(){
    return createStore(rediucers);
}