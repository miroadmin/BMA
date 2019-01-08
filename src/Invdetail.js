import React, { Component } from "react";
import CurrencyFormat from 'react-currency-format';
import { Form } from 'semantic-ui-react'
import ReactTable from "react-table";
import "react-table/react-table.css";
import Moment from 'react-moment';

const invoice= {
    position:'fixed',
    color:'black',
    marginRight: '10px',
    marginLeft: '10px',
    padding: 0,
    backgroundcolor: 'white',
    top: '120px',
    width: '99%',
    fontSize: '11px',
}


class InvDetail extends Component {
    constructor(props) {
        super(props);

        this.state={invItems:[],
                    ledgerItems:[],
                    gross:0,
                    net:0,
                    tax:0,
                    x:window.innerWidth,
                    y:window.innerHeight
        }

        this.handleClick= this.handleClick.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
        this.percent = this.percent.bind(this);
        this.toCurrency = this.toCurrency.bind(this);
        this.toDate  = this.toDate.bind(this);
    }
    async componentDidMount(){
        const filterA='http://localhost:4010/invoices/items?id=' + this.props.idMaster
        fetch(filterA)
            .then(response => response.json())
            .then(response => this.setState({invItems: response.data},() => console.log(this.state)))
            .then().catch(err => console.err)        
        const filterB='http://localhost:4010/invoices/ledgeritems?id=' + this.props.idMaster
        fetch(filterB)
            .then(response => response.json())
            .then(response => this.setState({ledgerItems: response.data},() => console.log(this.state)))
            .catch(err => console.err)
}
    handleClick =  () => {
        this.props.browe('');
    }

    onSubmit = values => {
        this.props.actionInvoice(values)
    }

    toDate(dateString) {
        const datum = new Date(dateString);
        return (<Moment format="DD-MM-YYYY">{datum}</Moment>);
    }
    toCurrency(numberString) {
        const number = parseFloat(numberString);
        return (<CurrencyFormat value={number} displayType={'text'} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} />);
    }
    percent(numberString) {
        const number = parseFloat(numberString)*100;
        return (<CurrencyFormat value={number} displayType={'text'} suffix={'%'} fixedDecimalScale={true} />);
    }
    
   renderItems = ({id}) => <div key={id}></div>

    render() {
        const { invItems } = this.state;
        return (
            <div>
                 <div class='butt' >          
                    <div class='ui buttons' >
                        <button class='ui button' role='button' onClick= {this.handleClick}>Back</button>
                    </div> 
                </div> 
                <div style={invoice}>
                    <Form>    
                        <Form.Group>
                            <Form.Input label='Invoice No' placeholder='Invoice No' width={8} type='text' value={this.props.invoiceNo} readonly=""  />
                            <Form.Input label='Inv.Date' placeholder='Invoice date' width={4} type='date' value={this.props.invDate} />
                            <Form.Input label='Due Date' placeholder='Due date' width={4} type='date' value={this.props.dateDue} readonly="" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='Company' placeholder='Company' width={16} type='text' value={this.props.alias} readonly=""  />
                        </Form.Group>
                    </Form> 
                    {invItems.map(this.renderItems)}
                    <TableItems list={this.state.invItems}
                                percent={(e) => this.percent(e)}
                                toCurrency={(e) => this.toCurrency(e)}
                                toDate={(e) => this.toDate(e)}
                    />   
                    <LedgerItems ledgerList={this.state.ledgerItems}
                                toCurrency={(e) => this.toCurrency(e)}
                                percent={(e) => this.percent(e)}
                                toDate={(e) => this.toDate(e)}
                    />                 
                </div>   
            </div>       
            )
    }
}

export default InvDetail ;


class TableItems extends Component {

    render() {
        const { list } = this.props;
        var netSum=0;
        var taxSum=0;
        if (list.lenght>0) {
                for (let i = 0; i < list.length; i++) {
                    netSum += list[i].net;
                    taxSum += list[i].tax;
                }
                return(netSum)
        }  
        const columns =[{
                Header: 'SKU',
                accessor: 'sku',
                maxWidth: 100
            },{
                Header: 'Description',
                accessor: 'description',        
            },{
                Header: 'Qty',
                accessor: 'qty',
                maxWidth: 150,
                style: {
                    textAlign: 'right'},
            },{
                Header: 'Unit Price',
                accessor: 'unit_price',
                maxWidth: 150,
                style: {
                    textAlign: 'right'},
            },{
                Header: 'T.code',
                accessor: 'tax_code',
                maxWidth: 50,
                style: {
                    textAlign: 'center'},
            },{
                Header: 'Tax%',
                accessor: 'taxper',
                maxWidth: 80,
                style: {
                    textAlign: 'right'},
                Cell: n => this.props.percent(n.value)
            },{
                Header: 'Net',
                Footer: ('Σ:' + netSum) ,
                accessor: 'net',
                maxWidth: 150,
                style: {
                    textAlign: 'right'} ,
                Cell: n => this.props.toCurrency(n.value)
            },{
                Header: 'Tax',
                Footer: ('Σ:' + taxSum) ,
                accessor: 'tax',
                maxWidth: 150 ,
                style: {
                        textAlign: 'right'},
                Cell: n => this.props.toCurrency(n.value)
            },{
                Header: 'Gross',
                Footer: (<span>Σ</span>) ,
                accessor: 'gross',
                maxWidth: 150,
                style: {
                    textAlign: 'right'},
                Cell: n => this.props.toCurrency(n.value)
            }
        ]; 
        return (
            <div > Invoice items
            <div class='tableitem' >
                <ReactTable 
                    data={list} 
                    noDataText="No data!!!"
                    columns={columns} 
                    defaultPageSize={7}
                    className="-striped -highlight"  
                            
                />
            </div>
            </div>
        );
    }
}   
 {/*}                      <table class='ui celled table'>    
                            <thead class='">
                                <tr>
                                    <th style={width300}>SKU</th>
                                    <th style={widthnekon}>Description</th>
                                    <th style={width200}>Qty</th>
                                    <th style={width200}>Unit Price</th>                    
                                </tr>
                            </thead>  
                            <tbody>
                                {list.map(item => 
                                    <tr key={list.id}>                           
                                            <td style={width300}>{item.sku} </td>
                                            <td style={widthnekon}>{item.description} </td>
                                            <td style={width200}>{item.qty} </td>
                                            <td style={width200}>{item.unit_price} </td> 
                                            <td></td>  
                                    </tr>  
                                )}
                            </tbody> 
                                </table> */}
class LedgerItems extends Component {

    render() {
        const { ledgerList} = this.props;
 
        const columns =[{
                Header: 'Date',
                accessor: 'datepost',
                filterable: false,
                maxWidth: 100,
                Cell: d=> { return this.props.toDate(d.value)}
            },{
                Header: 'GL Code',
                accessor: 'glcode',  
                maxWidth: 150,      
            },{
                Header: 'Reference',
                accessor: 'reference',
                maxWidth: 150,
            },{
                Header: 'Name',
                accessor: 'name',
            },{
                Header: 'Tax Code',
                accessor: 'taxcode',
                maxWidth: 50,
                style: {
                    textAlign: 'center'},
            },{
                Header: 'Tax%',
                accessor: 'taxper',
                maxWidth: 80,
                style: {
                    textAlign: 'right'},
                Cell: n => this.props.percent(n.value)
            },{
                Header: 'Debit',
                Footer: (<span>Σ</span>) ,
                accessor: 'debit',
                maxWidth: 150,
                style: {
                    textAlign: 'right'} ,
                Cell: n => this.props.toCurrency(n.value)
            },{
                Header: 'Credit',
                Footer: (<span>Σ</span>) ,
                accessor: 'credit',
                maxWidth: 150 ,
                style: {
                        textAlign: 'right'},
                Cell: n => this.props.toCurrency(n.value)
            }
        ]; 
        return (
            <div> Ledger
            <div class='tableitem' >
                <ReactTable 
                    data={ledgerList} 
                    noDataText="No data!!!"
                    columns={columns} 
                    defaultPageSize={5}
                    className="-striped -highlight"  
                            
                />
            </div>
            </div>
        );
    }
} 
