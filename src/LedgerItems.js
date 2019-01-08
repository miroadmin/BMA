import React, { Component } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import ReactTable from "react-table";
import "react-table/react-table.css";
import CurrencyFormat from 'react-currency-format';
import Moment from 'react-moment';
import InvLedger  from "./Invdetail.js";


const filterx={
    position: 'fixed',
    top: '50px',
    fontSize: '12px',
    right: '1%',
    
}

class Ledger extends Component {
    constructor(props) {
        super(props);
        this.state={ledger:[],
        glCode:'',
        date:null,
        name:'',
        debit:0,
        credit:0,
        tax:0,
        taxCode:'',
        navi:'',
        index:0,
        searchD1: '',
        searchD2: '',
        idMaster:0,
        note:'',
        clientno:'',

        };

        this.onLedger = this.onLedger.bind(this);
        this.toCurrency = this.toCurrency.bind(this);
        this.toDate  = this.toDate.bind(this);
        this.zmena= this.zmena.bind(this);  
        this.renderLedger = this.renderLedger.bind(this); 
        this.toId = this.toId.bind(this);
        this.changeD1 = this.changeD1.bind(this);
        this.changeD2 = this.changeD2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getLedger = this.getLedger.bind(this);
    }
    async componentDidMount(){
        this.getLedger();
    }

    componentWillUnmount() {
        this.setState({ ledger: []}); 
    }

   toCurrency(numberString) {
       if(numberString===0)
            { return '' }
       else
            {
                const number = parseFloat(numberString);
                return (<CurrencyFormat value={number} displayType={'text'} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} />);
            }
    }

    toDate(dateString) {
        const datum = new Date(dateString);
        return (<Moment format="DD-MM-YYYY">{datum}</Moment>);
    }

    toId(id) {
        return (<div style={{color:'white'}}>{id}</div>);
    }

    onLedger = (e) => {
        console.log('index: ' + this.state.ledger.findIndex(x => x.id==e.id));
        const i= this.state.ledger.findIndex(x => x.id==e.id)
        this.setState({ index:  i})
  //    e.invoice_date.substring(0,10)
        this.setState({ glCode: e.glcode,date: e.datepost.substring(0,10),                              
             name: e.name,debit: e.debit,credit: e.credit,
              tax: e.tax, clientno: e.clientno,note: e.note,navi: 'Ledger',idMaster: e.id });
    }
 
    renderLedger = ({id}) => <div key={id}></div>
                
    changeD1 = (e) => {
        this.setState({ searchD1: e.target.value});
    }
    changeD2 = (e) => {
        this.setState({ searchD2: e.target.value});
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log('LEDGER D1: '+this.state.searchD1,'D2: '+this.state.searchD2)
        this.getLedger();
    }

    zmena= (value) => {
        this.setState({navi: value});
    }
    //************************************* */
    getLedger = _ => {
        const filter='http://localhost:4010/detail?start=' + this.state.searchD1  + '&stop=' + this.state.searchD2;
        fetch(filter)
        .then(response => response.json())
        .then(response => this.setState({ledger: response.data}))
        .catch(err => console.err)
    }
    //************************************* */

    render() {
        const { ledger } = this.state;
        const columns =[{
            Header: '',
            filterable: false,
            maxWidth: 50,
            Cell: ({row}) => <button onClick={()=>this.onLedger(row)} type="button"><FaAngleDoubleRight  /></button>
          },{
            Header: 'Gl Code',
            accessor: 'glcode',
            maxWidth: 150,
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
          },{
            Header: 'Description',
            accessor: 'description',        
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value),
            maxWidth: 250
          },{
            Header: 'Date',
            accessor: 'datepost',
            maxWidth: 150,
            style: {
                textAlign: 'center'},
            Cell: d=> { return this.toDate(d.value)}
          },{  
            Header: 'Reference',
            accessor: 'reference',
            maxWidth: 150,
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
         },{
            Header: 'Debit',
            accessor: 'debit',
            maxWidth: 150,
            style: {
                textAlign: 'right'},
            Cell: n => this.toCurrency(n.value)
          },{
            Header: 'Credit',
            accessor: 'credit',
            maxWidth: 150,
            style: {
                textAlign: 'right'} ,
            Cell: n => this.toCurrency(n.value)
          },{
            Header: 'Client#',
            accessor: 'clientno',
            maxWidth: 150 ,
            style: {
                    textAlign: 'center'},
          },{  
            Header: 'Name',
            accessor: 'name',
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
          },{             
            Header: '',
            accessor: 'id',
            maxWidth: 0, 
            filterable: false,
            style: {
                color: 'white'},

          }
        ];

        return(           
        <div>    
            <FormFilter 
                searchD1= {this.state.searchD1}
                searchD2= {this.state.searchD2}
                changeD1={(e) => this.changeD1(e)}
                changeD2={(e) => this.changeD2(e)}
                onSubmit={(e) => this.onSubmit(e)}
            />  
            {ledger.map(this.renderLedger)}
            {this.state.navi ==='' ? 
                    <div class='tableList' >
                        <ReactTable 
                            data={ledger}
                            noDataText="No data!!!"
                            columns={columns} 
                            resizable={true}
                            defaultSorted={[
                                {
                                id: "modtime",
                                desc: true
                            }]}
                            filterable 
                            defaultPageSize={20}
                            className="-striped -highlight"  
                            
                        />
                    </div>
                :   
                    <div>
                        <InvLedger 
                            invoiceNo= {this.state.invNo}
                            invDate={this.state.invDate}
                            alias={this.state.invAlias}
                            gross={this.state.invGross}
                            net={this.state.invNet}
                            tax={this.state.invTax}
                            idCust={this.state.invCustID}
                            idMaster={this.state.idMaster}
                            dateDue={this.state.dateDue}
                            browe={(e) => this.zmena(e)}
                            actionInvoice={(e) => this.updateInvoice(e)}
                        />
                    </div>

                }
        </div>   
        )
}}

export default Ledger;

class FormFilter extends Component {
    constructor(props) {
        super(props);

    }

    render() {

    return(  
        <form onSubmit={(e) => this.props.onSubmit(e)} style={filterx}>
        <label style={{color: "white"}}>Begin </label>
        <input type="date"  value={this.props.searchD1} onChange= {(e) => this.props.changeD1(e)}   style={{textAlign: "center", width:'120px'}}/>
        <label style={{color: "white"}}> End </label>
        <input type="date"  value={this.props.searchD2}  onChange= {(e) => this.props.changeD2(e)} style={{textAlign: "center", width:'120px'}}/>
        <button >
            <FaAngleLeft   />
        </button>   
    </form>    
    )}
}
