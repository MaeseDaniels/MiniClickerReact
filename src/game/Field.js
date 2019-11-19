import React, { Component } from 'react';
import { connect } from 'react-redux';
import {hit, timeDown, gameOver} from '../redux/reducer';
import './Field.scss';


class Field extends Component {

timeInterval = null;
componentDidMount () {
    this.timeInterval = setInterval(()=>{
        this.props.timeDown();
        if(this.props.state.game.time <= 0){
            clearInterval(this.timeInterval);
            this.props.gameOver();
        }
    }, 1000)
    
}
 
    render() {
     
        return(
            <div className="Field">
                <div className="Field__container">
                    <div className="Objective"
                    style={{top:this.props.state.game.objective.top, left:this.props.state.game.objective.left}}
                    
                    onClick={()=>this.props.hit()}></div>
                </div>
                <p className="Field__score">{`Score: ${this.props.state.game.score}`}</p>
                <p className="Field__time">{`Time: ${this.props.state.game.time}`}</p>
            </div>
        );
    }

}

const mapStateToProps = state => ({ state });
const mapDispatchToProps = (dispatch) => ({

  hit: () => dispatch( hit ),
  timeDown: () => dispatch( timeDown ),
  gameOver: () => dispatch( gameOver )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Field)