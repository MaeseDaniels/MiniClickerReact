import React,{Component} from "react";
import { connect } from 'react-redux';
import {gameOver, tryAgain} from '../redux/reducer';

class GameOver extends Component {
 render() {
    return(<div>
         <h1>Game Over</h1>
         <h2>Score: {this.props.state.game.score}</h2>
         <button onClick={()=>this.props.tryAgain()} type="Button">Volver a intentarlo</button>
     </div>);
 }

}

const mapStateToProps = state => ({ state });
const mapDispatchToProps = (dispatch) => ({
  gameOver: () => dispatch( gameOver ),
  tryAgain: () => dispatch( tryAgain ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOver)