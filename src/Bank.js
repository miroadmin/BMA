import React, { Component } from "react";
import { connect } from 'react-redux';


class Bank extends Component {
    constructor(props) {
      super(props);
    }
   
    render() {

      return (
        <div> 
            <br /><br /><br /><br /><div className="colA"> REDUX more reducers: </div>
            <br/>
            <hr/>
            <div className="colA">
                <div><span>A: {this.props.a} </span> </div>
                <button onClick={() =>  this.props.updateA(this.props.b) } >UPDATE A</button>   
            </div>
            <div className="colB">
                <div> <span>B: {this.props.b} </span> </div>
                <button onClick={() => this.props.updateB(this.props.a) }>UPDATE B</button>
            </div>
        </div>
      )
    }
}
const mapStateToProps = (store) => {
    return{
    a:store.rA.a,
    b:store.rB.b
    }
};
const mapDispachToProps = (dispach) => {
    return {
    updateA:(b) => dispach({ type:'UPDATE_A',b:b }),
    updateB:(a) => dispach({ type:'UPDATE_B',a:a }),
    };
}

export default connect(mapStateToProps,mapDispachToProps ) (Bank);
