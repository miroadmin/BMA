import React, { Component } from "react";
import CustomerDetail  from "./Detail.js";
import { FaAngleDoubleRight } from 'react-icons/fa';
import ReactTable from "react-table";
import "react-table/react-table.css";

const filterx={
    top: '50px',
    fontSize: '12px',
    position: 'fixed',
    right:'0%',
}

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state={customer:[],
        searchTerm: '',
        customerId: '',
        accno:'',
        name:'',
        street:'',
        city:'',
        zip:'',
        phone:'',
        email:'',
        country:'',
        id:'',
        company:''
        };
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onCustomer = this.onCustomer.bind(this);
        this.onSortColumn = this.onSortColumn.bind(this);
        this.renderCustomer = this.renderCustomer.bind(this);
        this.getCustomers = this.getCustomers.bind(this);

    }
    async componentDidMount(){
        this.getCustomers();
    }
    
    getCustomers = _ => {
        const filter='http://localhost:4010/customers?company_name=' + this.state.searchTerm
        fetch(filter)
            .then(response => response.json())
            .then(response => this.setState({customer: response.data}))
            .catch(err => console.err)
    }

    renderCustomer = ({id,company_name, name,street, zip, city, accno_no,country, phone, email, status}) => { }

    onSearchChange = (e) => {
//       window.alert(JSON.stringify(e.target.value, 0, 2))
        this.state.searchTerm=e.target.value;
        this.setState({ searchTerm: e.target.value });
        this.getCustomers();
    }
    
    onCustomer(e) {
        console.log('index: ' + this.state.customer.findIndex(x => x.id==e.id));
        const i= this.state.customer.findIndex(x => x.id==e.id)
        this.setState({ index:  i})
        this.setState({ id: e.id, name: e.name,accno: e.accno_no,company: e.company_name,
            street:e.street,city:e.city,phone:e.phone,email:e.email,status:e.status,zip:e.zip,customerId: 'Invoice' });
    }

    onSortColumn(flag) {
        this.setState({ sortId: flag });     
    }
    
    zmena= (value) => {
        this.setState({customerId: value});
    }

    render() {
        const { searchTerm, customer,customerId} = this.state;
        const columns =[{
            Header: '',
            filterable: false,
            maxWidth: 50,
            Cell: ({row}) => <button onClick={()=>this.onCustomer(row)} type="button"><FaAngleDoubleRight  /></button>
        },{
            Header: 'Accno',
            accessor: 'accno_no',
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value),
            maxWidth: 100
          },{
            Header: 'Company Name',
            accessor: 'company_name',
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
          },{
            Header: 'Name',
            accessor: 'name',        
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value),
            maxWidth: 150
        },{
            Header: 'Address',
            accessor: 'street',
            maxWidth: 200,
            filterMethod: (filter, row) => row[filter.id].startsWith(filter.value),      //matchSorter(rows, filter.value, { keys: ["invoiceno"] }),
          },{
            Header: 'Zip',
            accessor: 'zip',
            maxWidth: 80,
            style: {
                textAlign: 'center'},
          },{
            Header: 'City',
            accessor: 'city',
            maxWidth: 150,
          },{
            Header: 'Country',
            accessor: 'country',
            maxWidth: 150,
          },{
            Header: 'Phone',
            accessor: 'phone',
            maxWidth: 150,
          },{
            Header: 'Email',
            accessor: 'email',
            maxWidth: 250 ,
          }
        ];
        return( 
        <div>
            <div style={filterx}>
                <form onSubmit={ (e) => this.onSearchChange(e)}>
                    <input type="text" value={this.state.searchTerm} onChange= {(e) => this.onSearchChange(e)} style={{textAlign: "center"}}/>
                    <input type="submit" value="Filter" />           
                </form>
            </div>
            {customer.map(this.renderCustomer)}
            {customerId == '' ? 
                <div class='tableList'>   
                    <ReactTable 
                            data={customer} 
                            noDataText="No data!!!"
                            columns={columns} 
                            resizable={true}
                            defaultSorted={[
                                {
                                id: "company_name",
                                desc: true
                            }]}
                            filterable
                            defaultPageSize={20}
                            className="-striped -highlight"                            
                    />             
                </div>
                 :  
                    <CustomerDetail 
                        accno_no= {this.state.accno}
                        company= {this.state.company}
                        name={this.state.name}
                        street={this.state.street}
                        city={this.state.city}
                        zip={this.state.zip}
                        phone={this.state.phone}
                        id={this.state.id}
                        email={this.state.email}
                        country={this.state.country}
                        browe={(e) => this.zmena(e)}
                        actionCustomer={(e) => this.updateCustomer(e)}
                    /> 
            }
        </div>
        )
    }
}

export default Customer;