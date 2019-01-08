import React, { Component } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa';
import ReactTable from "react-table";
import "react-table/react-table.css";
import CurrencyFormat from 'react-currency-format';
import Moment from 'react-moment';
import GLcodeEdit  from "./Glcode.js";

class ChartOfAccount extends Component {
    constructor(props) {
        super(props);
        this.state={chartAccount:[],
        glNo:'',
        glDescription:'',
        glType:0,
        glPl:0,
        glBs:0,
        glCategory:'',
        glSubcat:'',
        glNote:'',
        navi:'',
        index:0
        };

        this.onchartAccount = this.onchartAccount.bind(this);
        this.toCurrency = this.toCurrency.bind(this);
        this.toDate  = this.toDate.bind(this);
        this.zmena= this.zmena.bind(this);   
        this.getCharts= this.getCharts.bind(this);   
        this.renderChart= this.renderChart.bind(this);   
    }
    async componentDidMount(){
        this.getCharts();
    }
    renderChart = ({id}) => <div key={id}></div>
    toCurrency(numberString) {
        const number = parseFloat(numberString);
        return (<CurrencyFormat value={number} displayType={'text'} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} />);
    }
    toDate(dateString) {
        const datum = new Date(dateString);
        return (<Moment format="DD-MM-YYYY">{datum}</Moment>);
    }

    onchartAccount = (e) => {
        console.log('index: ' + this.state.chartAccount.findIndex(x => x.glcode==e.glcode));
        const i= this.state.chartAccount.findIndex(x => x.glcode==e.glcode)
        this.setState({ index:  i})
        this.setState({ glNo: e.glcode,glDescription: e.description, glType: e.type,glPl: e.pl,glBs: e.bs, glCategory: e.category, glSubcat: e.subcategory,glNote: e.note,navi: 'Ledger' });
    }
    //************************************* */
    getCharts = _ => {
        const filter='http://localhost:4010/chart';
        fetch(filter)
        .then(response => response.json())
        .then(response => this.setState({chartAccount: response.data}))
        .catch(err => console.err)
    }   
    //************************************* */
    updateChartAccount= (e) => {
        this.setState({navi: '' });
        let i = this.state.index
        let items = this.state.chartAccount
        items[i].description = e.description
        items[i].glcode = e.glcode
        items[i].type = e.type
        items[i].pl = e.pl
        items[i].bs = e.bs 
        items[i].note = e.note 
        items[i].category = e.category 
        items[i].subcategory = e.subcategory 
        {console.log(e )}
        this.setState({ items});
    }
    zmena= (value) => {
        this.setState({navi: value});
    }

    render() {
        const {chartAccount} = this.state;
        const columns =[{
            Header: '',
            filterable: false,
            maxWidth: 50,
            Cell: ({row}) => <button onClick={()=>this.onchartAccount(row)} debuggertype="button"><FaAngleDoubleRight  /></button>
          },{
            Header: 'GL Code',
            accessor: 'glcode',
            maxWidth: 200,
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
          },{
            Header: 'Description',
            accessor: 'description',        
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value),
          },{
            Header: 'Type',
            accessor: 'type',
            maxWidth: 150,
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value),    
          },{
            Header: 'Profit&Loss',
            accessor: 'pl',
            maxWidth: 150,
            style: {textAlign: 'center'},
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value),  
          },{
            Header: 'Balance Sheet',
            accessor: 'bs',
            maxWidth: 150,
            style: {textAlign: 'center'},
          },{
            Header: 'Group',
            accessor: 'group',
            maxWidth: 150,
          },{
            Header: 'Subgroup',
            accessor: 'subgroup',
            maxWidth: 150,
          },{
            Header: 'Note',
            accessor: 'note',
            maxWidth: 150,
          }
        ];

        return(           
            <div>
                {chartAccount.map(this.renderChart)}
 {/*}               {console.log('Row from table:   '+ this.state.chartAccount[this.state.index].glcode)}  */}
                {this.state.navi ==='' ? 
                        <div class='tableList' >
                            <ReactTable 
                                data={chartAccount} 
                                noDataText="No data!!!"
                                columns={columns} 
                                resizable={true}
                                defaultSorted={[
                                    {
                                    id: "glcode",
                                    asc: true
                                }]}
                                filterable
                                defaultPageSize={20}
                                className="-striped -highlight"  
                                
                            />
                        </div>
                    :   
                        <div class='tableList'>
                            <GLcodeEdit
                                glcode= {this.state.glNo}
                                description={this.state.glDescription}
                                type={this.state.glType}
                                pl={this.state.glPl}
                                bs={this.state.glBs}
                                category={this.state.glCategory}
                                subcategory={this.state.glSubcat}
                                note={this.state.note}
                                browe={(e) => this.zmena(e)}
                                actionChartAccount={(e) => this.pdateChartAccount(e)}
                            />
                        </div>

                    }
            </div>   
        )
}}


export default ChartOfAccount;