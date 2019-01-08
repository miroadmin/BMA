import React, { Component } from "react";




class BillDetail extends Component {
    constructor(props) {
        super(props);
      
        this.state={invItems:[],
            items:[{a:10,b:'aa'},{a:10,b:'aa'},{a:11,b:'aa'},{a:12,b:'aa'}]

        }
        this.polozka = this.polozka.bind(this);
    }
    polozka= () => this.state.items.filter(hoc=> hoc.a===10).map(hocico => hocico.a)

    render() {

        return ( 
            <div>
                <h1> test </h1>
                <h1> test </h1>
                <h1> test </h1>
                <h1> test </h1>
                <h1> test </h1>
                <div>
                    START {this.polozka()} STOP
                </div>    
            </div>
    
    )
    }
}

export default BillDetail ;