import React, { Component } from "react";
import { Form } from 'semantic-ui-react';

//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const customer= {
    color:'black',
    marginRight: '10px',
    marginLeft: '10px',
    padding: 0,
    backgroundcolor: 'white',
    position: 'fixed',
    top: '117px',
    width: '99%',
}

class CustomerDetail extends Component {
    constructor(props) {
        super(props);
        this.state=[];
        this.handleClick= this.handleClick.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }
    handleClick =  () => {
        this.props.browe('');
    }
    onSubmit = values => {
            this.props.actionInvoice(values)
    }

    render() {
        return (
            <div>
                <div class='butt' >                    
                    <div class='ui buttons' >
                    <button class='ui button' role='button' onClick= {this.handleClick}>Cancel</button>
                    <div class='or' />
                    <button class='ui positive button' role='button' onClick= {this.handleClick}>Save</button>
                    </div>
                </div>
                <div style={customer}>
                    <Form>    
                        <Form.Group>
                            <Form.Input label='ID#' placeholder='ID#' width={4} value={this.props.accno_no} readonly=""  />
                            <Form.Input label='Comapny' placeholder='Company' width={12} value={this.props.company} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='Name' placeholder='Name' width={16} value={this.props.name} readonly=""  />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='Strret' placeholder='Street' width={6} value={this.props.street} />
                            <Form.Input label='Zip' placeholder='Zip' width={1} value={this.props.zip} />
                            <Form.Input label='City' placeholder='City' width={6} value={this.props.city} />
                            <Form.Input label='Country' placeholder='Country' width={3} value={this.props.country} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='Phone' placeholder='Phone' type='text' width={4} value={this.props.phone} />
                            <Form.Input label='Email' placeholder='Email' type='email' width={12} value={this.props.email} />
                        </Form.Group>
                    </Form>    
                </div>   
          </div>
        )
    }
}

export default CustomerDetail ;


    {/*}          <div class="ui equal width grid">
                    <div class="row">
                        <div class="4 wide">  
                            <div class="ui labeled input">
                            <div class="ui label"> ID# </div>
                            <input type="text" placeholder="ID#" value={this.props.accno_no} disabled='" tabindex="-1"'/>
                            </div>
                        </div>
                        <div class="12 wide">                            
                            <div class="ui labeled input">
                            <div class="ui label">Company</div>
                            <input type="text" placeholder="Company" value={this.props.company} style={{width:'500px'}} />
                            </div>
                        </div>
        </div>   
        </div> */}