import React, { Component } from "react";
import { connect } from 'react-redux';

class Reports extends Component {
    constructor(props) {
      super(props);
    }
   
    render() {

      return (
        <div> <br /><br /><br /><br />SIMPLE REDUX: {this.props.age}
            <br/>
            <hr/>
            <button onClick={this.props.onAgeUp}> UP + 5</button>
            <button onClick={this.props.onAgeDown}> DOWN - 3</button>
            <hr/>
            <div>HISTORY</div>
            <div> {this.props.history.map(hoc => (<li className="historyItem" style={{float:'none'}} onClick={() => this.props.onDelItem(hoc.id)} key={hoc.id} > {hoc.age} </li>))} </div>
        </div>
      )
    }
}
const mapStateToProps = (state) => {
    return{
    age:state.rOther.age,
    history:state.rOther.history,
    id:state.rOther.id
    }
};
const mapDispachToProps = (dispach) => {
    return {
    onAgeUp:() => dispach({ type:'AGE_UP',value:5 }),
    onAgeDown:() => dispach({ type:'AGE_DOWN',value:3 }),
    onDelItem:(id) => dispach({ type:'DEL_ITEM',key:id })
    };
}

export default connect(mapStateToProps,mapDispachToProps ) (Reports);