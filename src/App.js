import React, {Component} from 'react';
import logo from './logo.svg';
import Field from './game/Field';
import GameOver from './game/GameOver';
import { connect } from 'react-redux';
import {gameOver} from './redux/reducer';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        {this.props.state.game.gameOver ? <GameOver/> : <Field/>}
      </div>
    );
  }
  
}

const mapStateToProps = state => ({ state });
const mapDispatchToProps = (dispatch) => ({
  gameOver: () => dispatch( gameOver )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)