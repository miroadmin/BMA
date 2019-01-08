import React, { Component } from "react";
import { connect } from 'react-redux';
import logo from './logo.svg'
//Redux applyMiddleware
import * as actionCreator from './store/action';

class Sagafile extends Component  {
    render() {
        return(
            <div className="clean" >
                <div className="colA"> REDUX SAGA (ASYNC): {this.props.age} </div>
                <br/>
                <hr/>
                <div className="colA">
                    <button onClick={this.props.onAgeUp}> UP wait 2s</button>
                </div>
                <div className="colB">
                    <button onClick={this.props.onAgeDown}> DOWN</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
    age:state.rS.age,
    }
};
const mapDispachToProps = (dispach) => {
    return (
    {
    onAgeUp:() => dispach({type:'AGE_UP',value:1}),
    onAgeDown:() => dispach({type:'AGE_DOWN',value:1}),
    }
    )
}
export default connect(mapStateToProps,mapDispachToProps ) (Sagafile);