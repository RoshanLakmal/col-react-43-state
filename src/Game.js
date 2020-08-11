import React,{Component} from 'react';

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            gameOver: false
        }
    }
    render(){
        return (
            <div>
               Your Score : {this.state.score}
            </div>
        )
    }
}

export default Game;