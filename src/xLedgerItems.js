import React, { Component } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa';
import ReactTable from "react-table";
import "react-table/react-table.css";
import CurrencyFormat from 'react-currency-format';
import Moment from 'react-moment';
import InvDetail  from "./Invdetail.js";



const tablex={
    top: '85px',
    fontSize: '14px',
    position: 'fixed',
    width: '100%',
    td:'15px',

}



class Invoices extends Component {
    constructor(props) {
        super(props);
        this.state={invoice:[
          {id:100, customerid:'1000',alias:'John Smithaaaaaaaaaaaa',invoiceno:'F157014',gross:1000,net:8000.15,tax:200.45,dateinv:'2018-10-15',datedue:'2018-12-15'},
          {id:101, customerid:'1003',alias:'Peter Kosk',invoiceno:'F178525',gross:1000,net:800,tax:200,dateinv:'2018-09-15',datedue:'2018-12-15'},
          {id:102, customerid:'1004',alias:'Construct ltd',invoiceno:'F152786',gross:1000,net:45.11,tax:45.12,datedue:'2018-12-15'},
          {id:103, customerid:'1011',alias:'MLE',invoiceno:'F157827',gross:1000.21,net:800,tax:221.15,datedue:'2018-12-15'},
          {id:104,customerid:'1006',alias:"jano",invoiceno:'F152844',gross:100,net:0.44,tax:20,dateinv:'2018-09-15',datedue:'2018-12-15'},
          {id:105,customerid:'1007',alias:"duro",invoiceno:'F1529',gross:7455.48,net:32,tax:12,dateinv:'2018-09-15'},
          {id:106,customerid:'1009',alias:"duro",invoiceno:'F153041',gross:100878,net:800,tax:200,dateinv:'2018-08-15'},
          {id:107,customerid:'1008',alias:"palo",invoiceno:'F158731',gross:1000,net:800,tax:200,dateinv:'2018-09-15'},
          {id:108,customerid:'1009',alias:"pavel",invoiceno:'F1532441',gross:1000.45,net:800,tax:200,dateinv:'2018-09-15'},  
          {id:109,customerid:'1010',alias:"pal",invoiceno:'F1533',gross:1000,net:800,tax:200,dateinv:'2018-09-11'},  
          {id:110,customerid:'1011',alias:"palo",invoiceno:'F153488',gross:7885.450,net:800,tax:200},
          {id:111, customerid:'2000',alias:'John Pepeh',invoiceno:'F1535877',gross:1000,net:800,tax:200},
          {id:112, customerid:'1000',alias:'John Smithaaaaaaaaaaaa',invoiceno:'F157011',gross:1000,net:800,tax:200,datedue:'2018-12-15'},
          {id:113, customerid:'1001',alias:'Miro Siran',invoiceno:'F154441',gross:1000,net:80.15,tax:456.12},
          {id:114, customerid:'1003',alias:'Peter Kosk',invoiceno:'F1525',gross:1000,net:800,tax:200},
          {id:115, customerid:'1004',alias:'Construct ltd',invoiceno:'F157826',gross:1000,net:45.11,tax:45.12,datedue:'2018-12-15'},
          {id:116, customerid:'1005',alias:'MLE',invoiceno:'F1527',gross:1000.21,net:800,tax:221.15},
          {id:117,customerid:'1006',alias:"jano",invoiceno:'F15284157',gross:100,net:80,tax:20},
          {id:118,customerid:'1007',alias:"duro",invoiceno:'F152941',gross:10.7854,net:32,tax:12,datedue:'2018-12-15'},
          {id:119,customerid:'1009',alias:"duro",invoiceno:'F157830',gross:1000,net:800,tax:200},
          {id:120,customerid:'1008',alias:"palo",invoiceno:'F157831',gross:1000,net:800,tax:200},
          {id:121,customerid:'1009',alias:"pavel",invoiceno:'F1532ret',gross:1000,net:800,tax:200,dateinv:'2018-09-15'},  
          {id:122,customerid:'1010',alias:"pal",invoiceno:'F1533',gross:1000,net:800,tax:200,dateinv:'2018-10-15',datedue:'2018-12-15'},  
          {id:105,customerid:'1011',alias:"palo",invoiceno:'F153784',gross:1000,net:800,tax:200,dateinv:'2018-10-15',datedue:'2018-12-15'},
          {id:200, customerid:'2000',alias:'John Pepeh',invoiceno:'F153554',gross:1000,net:800,tax:200,dateinv:'2018-09-15'},          
          {id:10, customerid:'1000',alias:'John Smithaaaaaaaaaaaa',invoiceno:'F1570',gross:1000,net:800,tax:200,dateinv:'2018-10-15',datedue:'2018-12-15'},
          {id:11, customerid:'1001',alias:'Miro Siran',invoiceno:'F15447458',gross:1000,net:80.15,tax:456.12,dateinv:'2018-10-15',datedue:'2018-12-15'},
          {id:13, customerid:'1003',alias:'Peter Kosk',invoiceno:'F1525178',gross:1000,net:800,tax:200,dateinv:'2018-10-15',datedue:'2018-12-15'},
          {id:14, customerid:'1004',alias:'Construct ltd',invoiceno:'F15278786',gross:1000,net:45.11,tax:45.12,dateinv:'2018-10-15',datedue:'2018-12-15'},
          {id:15, customerid:'1005',alias:'MLE',invoiceno:'F1527',gross:1000.21,net:800,tax:221.15,dateinv:'2018-10-15',datedue:'2018-12-15'},
          {id:100,customerid:'1006',alias:"jano",invoiceno:'F157828',gross:100,net:80,tax:20,dateinv:'2018-09-15'},
          {id:101,customerid:'1007',alias:"duro",invoiceno:'F1529',gross:1000,net:32,tax:12,dateinv:'2018-10-15',datedue:'2018-12-15'},
          {id:106,customerid:'1009',alias:"duro",invoiceno:'F178530',gross:1000,net:800,tax:200,dateinv:'2018-09-15'},
          {id:102,customerid:'1008',alias:"palo",invoiceno:'F1531',gross:1000,net:800,tax:200,dateinv:'2018-10-15',datedue:'2018-12-15'},
          {id:103,customerid:'1009',alias:"pavel",invoiceno:'F791532',gross:1000,net:800,tax:200,dateinv:'2018-10-15',datedue:'2018-12-15'},  
          {id:104,customerid:'1010',alias:"pal",invoiceno:'F1533ghfg',gross:1000,net:800,tax:200,dateinv:'2018-10-15',datedue:'2018-12-15'},  
          {id:105,customerid:'1011',alias:"palo",invoiceno:'F1534ss',gross:1000,net:800,tax:200,dateinv:'2018-10-15',datedue:'2018-12-15'},
          {id:200, customerid:'2000',alias:'John Pepeh',invoiceno:'F178535',gross:1000,net:800,tax:200,dateinv:'2018-10-15',datedue:'2018-12-15'}
        ],
        invNo:'',
        invDate:'',
        invAlias:'',
        invGross:0,
        invNet:0,
        invTax:0,
        invCustID:'',
        dateDue:'',
        navi:'',
        index:0
        };

        this.onInvoice = this.onInvoice.bind(this);
        this.toCurrency = this.toCurrency.bind(this);
        this.toDate  = this.toDate.bind(this);
        this.zmena= this.zmena.bind(this);   
    }

   toCurrency(numberString) {
        const number = parseFloat(numberString);
        return (<CurrencyFormat value={number} displayType={'text'} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} />);
    }
    toDate(dateString) {
        const datum = new Date(dateString);
        return (<Moment format="DD-MM-YYYY">{datum}</Moment>);
    }

    onInvoice = (e) => {
        console.log('index: ' + this.state.invoice.findIndex(x => x.invoiceno==e.invoiceno));
        const i= this.state.invoice.findIndex(x => x.invoiceno==e.invoiceno)
        this.setState({ index:  i})
        this.setState({ invNo: e.invoiceno,invDate: e.dateinv, invAlias: e.alias,invGross: e.gross,invNet: e.net, invTax: e.tax, invCustId: e.customerId,dateDue: e.datedue,navi: 'Invoice' });
    }
    
    updateInvoice= (e) => {
        this.setState({navi: '' });
        let i = this.state.index
        let items = this.state.invoice
        items[i].alias = e.alias
        items[i].dateinv = e.invoiceDate
        items[i].gross = e.gross
        items[i].net = e.net
        {console.log(e )}
        items[i].datedue = e.dateDue 
        this.setState({ items});
    }
    zmena= (value) => {
        this.setState({navi: value});
    }

    render() {
        const { invoice} = this.state;
        const columns =[{
            Header: '',
            filterable: false,
            maxWidth: 50,
            Cell: ({row}) => <button onClick={()=>this.onInvoice(row)} debuggertype="button"><FaAngleDoubleRight  /></button>
          },{
            Header: 'Name',
            accessor: 'alias',
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
          },{
            Header: '#Customer',
            accessor: 'customerid',        
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value),
            maxWidth: 100
          },{
            Header: '#Invoice',
            accessor: 'invoiceno',
            maxWidth: 150,
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value),      //matchSorter(rows, filter.value, { keys: ["invoiceno"] }),
          },{
            Header: 'Invoice Date',
            accessor: 'dateinv',
            maxWidth: 150,
            style: {
                textAlign: 'center'},
            Cell: d=> { return this.toDate(d.value)}
          },{
            Header: 'Due Date',
            accessor: 'datedue',
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
          }
        ];

        return(           
        <div>
            {console.log('Row from table:   '+ this.state.invoice[this.state.index].alias)}
            {this.state.navi ==='' ? 
                    <div style={tablex} >
                        <ReactTable 
                            data={invoice} 
                            noDataText="No data!!!"
                            columns={columns} 
                            resizable={true}
                            defaultSorted={[
                                {
                                id: "invoiceno",
                                desc: true
                            }]}
                            filterable
                            defaultPageSize={18}
                            className="-striped -highlight"  
                            
                        />
                    </div>
                :   
                    <div style={tablex}>
                        <InvDetail 
                            invoiceNo= {this.state.invNo}
                            invoiceDate={this.state.invDate}
                            alias={this.state.invAlias}
                            gross={this.state.invGross}
                            net={this.state.invNet}
                            tax={this.state.invTax}
                            id={this.state.invCustID}
                            datedue={this.state.dateDue}
                            browe={(e) => this.zmena(e)}
                            actionInvoice={(e) => this.updateInvoice(e)}
                        />
                    </div>

                }
        </div>   
        )
}}


export default Invoices;