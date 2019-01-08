import React, { Component } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import ReactTable from "react-table";
import "react-table/react-table.css";
import CurrencyFormat from 'react-currency-format';
import Moment from 'react-moment';
import InvDetail  from "./Invdetail.js";


const filterx={
    position: 'fixed',
    top: '50px',
    fontSize: '12px',
    right: '1%',
    
}

class Invoices extends Component {
    constructor(props) {
        super(props);
        this.state={invoice:[],
        invNo:'',
        invDate:null,
        invAlias:'',
        invGross:0,
        invNet:0,
        invTax:0,
        invCustID:'',
        dateDue:'',
        navi:'',
        index:0,
        searchName: '',
        searchD1: '',
        searchD2: '',
        idMaster:0
        };

        this.onInvoice = this.onInvoice.bind(this);
        this.toCurrency = this.toCurrency.bind(this);
        this.toDate  = this.toDate.bind(this);
        this.zmena= this.zmena.bind(this);  
        this.renderInvoice = this.renderInvoice.bind(this); 
        this.toId = this.toId.bind(this);
        this.changeD1 = this.changeD1.bind(this);
        this.changeD2 = this.changeD2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getInvoices = this.getInvoices.bind(this);
    }
    async componentDidMount(){
        this.getInvoices();
    }

    componentWillUnmount() {
        this.setState({ invoice: []}); 
    }

   toCurrency(numberString) {
        const number = parseFloat(numberString);
        return (<CurrencyFormat value={number} displayType={'text'} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} />);
    }

    toDate(dateString) {
        const datum = new Date(dateString);
        return (<Moment format="DD-MM-YYYY">{datum}</Moment>);
    }

    toId(id) {
        return (<div style={{color:'white'}}>{id}</div>);
    }

    onInvoice = (e) => {
        console.log('index: ' + this.state.invoice.findIndex(x => x.invoiceno==e.invoiceno));
        const i= this.state.invoice.findIndex(x => x.invoiceno==e.invoiceno)
        this.setState({ index:  i})
  //    e.invoice_date.substring(0,10)
        this.setState({ invNo: e.invoice_no,invDate: e.invoice_date.substring(0,10),                              
             invAlias: e.alias,invGross: e.gross,invNet: e.net,
              invTax: e.tax, invCustID: e.customerId,dateDue: e.due_date.substring(0,10),navi: 'Invoice',idMaster: e.id });
    }
 
    renderInvoice = ({id}) => <div key={id}></div>
                
    changeD1 = (e) => {
        this.setState({ searchD1: e.target.value});
    }
    changeD2 = (e) => {
        this.setState({ searchD2: e.target.value});
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log('D1: '+this.state.searchD1,'D2: '+this.state.searchD2)
        this.getInvoices();
    }

    zmena= (value) => {
        this.setState({navi: value});
    }
    //************************************* */
    getInvoices = _ => {
        const filter='http://localhost:4010/invoices?start=' + this.state.searchD1  + '&stop=' + this.state.searchD2;
        fetch(filter)
        .then(response => response.json())
        .then(response => this.setState({invoice: response.data}))
        .catch(err => console.err)
    }
    //************************************* */

    render() {
        const { invoice} = this.state;
        const columns =[{
            Header: '',
            filterable: false,
            maxWidth: 50,
            Cell: ({row}) => <button onClick={()=>this.onInvoice(row)} type="button"><FaAngleDoubleRight  /></button>
          },{
            Header: 'Name',
            accessor: 'alias',
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
          },{
            Header: '#Customer',
            accessor: 'accno_no',        
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value),
            maxWidth: 100
          },{
            Header: '#Invoice',
            accessor: 'invoice_no',
            maxWidth: 150,
   
          },{      
            Header: 'Invoice Date',
            accessor: 'invoice_date',
            filterable: false,
            maxWidth: 150,
            style: {
                textAlign: 'center'},
            Cell: d=> { return this.toDate(d.value)}
          },{
            Header: 'Due Date',
            accessor: 'due_date',
            maxWidth: 150,
            style: {
                textAlign: 'center'},
            Cell: d=> { return this.toDate(d.value)}
          },{
            Header: 'Gross',
            accessor: 'gross',
            maxWidth: 150,
            style: {
                textAlign: 'right'},
            Cell: n => this.toCurrency(n.value)
          },{
            Header: 'Net',
            accessor: 'net',
            maxWidth: 150,
            style: {
                textAlign: 'right'} ,
            Cell: n => this.toCurrency(n.value)
          },{
            Header: 'Tax',
            accessor: 'tax',
            maxWidth: 150 ,
            style: {
                    textAlign: 'right'},
            Cell: n => this.toCurrency(n.value)
          },{
            Header: 'Curr',
            accessor: 'currency',
            maxWidth: 80 ,
            style: {
                    textAlign: 'center'},
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
                searchName= {this.state.searName}
                changeD1={(e) => this.changeD1(e)}
                changeD2={(e) => this.changeD2(e)}
                changeName={(e) => this.changeName(e)}
                onSubmit={(e) => this.onSubmit(e)}
            />  
            {console.log('Alias:' + this.state.searchName)}
            {invoice.map(this.renderInvoice)}
            {this.state.navi ==='' ? 
                    <div class='tableList' >
                        <ReactTable 
                            data={invoice}
                            noDataText="No data!!!"
                            columns={columns} 
                            resizable={true}
                            defaultSorted={[
                                {
                                id: "modifstamp",
                                desc: true
                            }]}
                            filterable 
                            defaultPageSize={20}
                            className="-striped -highlight"  
                            
                        />
                    </div>
                :   
                    <div>
                        <InvDetail 
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

export default Invoices;

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
