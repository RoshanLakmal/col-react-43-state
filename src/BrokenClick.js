import React,{Component} from 'react';

class BrokenClick extends Component {
    constructor(props){
        super(props);
        this.state = {
            click: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        if(this.state.click){
            this.setState({click : false});
        }else{
            this.setState({click : true});
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.click? "Clicked" : "Not Clicked"}</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

export default BrokenClick;