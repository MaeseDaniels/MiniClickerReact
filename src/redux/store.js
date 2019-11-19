

import { createStore } from "redux";
import {reducer} from './reducer';

const initialStore = {
    game: {
        time: 10,
        score: 0,
        objective:{
            top: Math.random() *550,
            left: Math.random() *750
        },
        gameOver: false
    }
    

}



export var store = createStore(reducer, initialStore);