


export const playerUp = {type: "Player-Up"};
export const hit = {type: "hit"};
export const timeDown = {type: "timeDown"};
export const gameOver = {type: "gameOver"};
export const tryAgain = {type: "tryAgain"};


export const reducer = (state, action) => {
    
    let newState = {...state};
    switch(action.type){
        case hit.type: 
            newState.game.score = newState.game.score+1;
            newState.game.objective.top = Math.random() *550;
            newState.game.objective.left = Math.random() *750;
            return newState;
        case timeDown.type:
            newState.game.time = newState.game.time-1;
            return newState;
        case gameOver.type: 
            newState.game.gameOver = true;
            return newState;
        case tryAgain.type: 
            newState.game.gameOver = false;
            newState.game.score = 0;
            newState.game.time = 10;
            newState.game.objective.top = Math.random() *550;
            newState.game.objective.left = Math.random() *750;
            return newState;
        default:
            return newState;

    }


}