import React, { Component } from "react";
import { connect } from 'react-redux';
import logo from './logo.svg'
//Redux applyMiddleware
import * as actionCreator from './store/action';
import Sagafile from "./Auditsaga"

class Audit extends Component {
    constructor(props) {
      super(props);
    }
   
    render() {

      return (
          <div>
            <br /><br /><br /><br ></br> 
            <div className="colA"> REDUX Thunk: {this.props.age}      </div>
            <br/>
            <hr/>
            <div className="colA">
                <button onClick={this.props.onAgeUp}> UP (wait 2sec)</button>
            </div>
            <div className="colB">
                <button onClick={this.props.onAgeDown}> DOWN</button>
            </div>
            <Saga />
            <br /><br /><br /><br ></br> 
            {this.props.loading ? <img src={logo} className='App-logo'></img>:'' }     


        </div>
      )
    }
}

class Saga extends Component  {
    constructor(props) {
        super(props);
        this.state={flagSaga:false}
        this.callSaga = this.callSaga.bind(this);
    }

    callSaga = () => {
        this.setState({flagSaga:true})
    }

    render() {
        const {flagSaga}=this.state;
        return ( 
            (flagSaga===false) ?
                    <div className="colB">
                        <button onClick={this.callSaga}> REDUX SAGA</button>
                    </div>
            :
                    <div>
                        <Sagafile />;
                    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
    age:state.rM.age,
    loading:state.rM.loading
    }
};
const mapDispachToProps = (dispach) => {
    return {
    onAgeUp:() => dispach(actionCreator.ageUp(1)),
    onAgeDown:() => dispach(actionCreator.ageDown(1)),
    };
}
export default connect(mapStateToProps,mapDispachToProps ) (Audit);

