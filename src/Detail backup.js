import React, { Component } from "react";
import { Form, Field } from 'react-final-form'
import Styles from './Styles'
import {
    Box,
    Button,
    Checkbox,
    Col,
    ControlFeedback,
    FormCheck,
    FormCheckLabel,
    FormGroup,
    Input,
    Label,
    Radio,
    RadioGroup,
    Row,
    Select,
    Textarea,
    Typography,
    Grid
  } from '@smooth-ui/core-sc';
  // ****************************************
//⬇️SMOOTH ⬇️
// ****************************************
const adapt  = Component => ({
    input,
    meta: { valid },
    ...rest
  }) => <Component {...input} {...rest} valid={valid} />;
  const AdaptedInput = adapt(Input);
  const AdaptedCheckbox = adapt(Checkbox);
  const AdaptedRadio = adapt(Radio);
  const AdaptedSelect = adapt(Select);
  const AdaptedTextarea = adapt(Textarea);
  const Error = ({ name }) => (
    <Field name={name} subscription={{ error: true, touched: true }}>
      {({ meta: { touched, error } }) =>
        touched && error ? (
          <ControlFeedback valid={!error}>{error}</ControlFeedback>
        ) : null
      }
    </Field>
  );
// ****************************************
//⬆️SMOOTH ⬆️
// ****************************************
const customer= {
    textAlign: 'center',
    color:'black',
    margin: 0,
    padding: 0,
    backgroundcolor: 'white',
    position: 'fixed',
    top: '80px',
    width: '100%',
    fontSize: '14px',
}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

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
            <Styles>
            <div style={customer}>
                <h1> Customer Detail</h1>
                    <Form
                        onSubmit={this.onSubmit}
                        initialValues={{ company:this.props.company, accno:this.props.accno_no, 
                                        name:this.props.name,street:this.props.street,zip:this.props.zip,city:this.props.city,
                                        country:this.props.country, phone:this.props.phone,email:this.props.email}}
                        validate={values => {
                            const errors = {};
                                if (!values.street) {
                                    errors.street = "???";
                                }
                                if (!values.accno) {
                                    errors.alias = "???";
                                }
                                if (!values.zip) {
                                    errors.zip = "???";
                                }
                            }}

                        render={({ handleSubmit, form, submitting, pristine, values }) => ( 
                            <form  onSubmit={handleSubmit}>

                                <Row>
                                        <Col>   
                                            <div>
                                                <label>ID#</label>
                                                <Field
                                                    name="accno"
                                                    component="input"
                                                    type="text"      
                                                    readOnly                       
                                                />
                                            </div> 
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>   
                                            <div>
                                                <label>Company</label>
                                                    <Field 
                                                        name="company"
                                                        component="input"
                                                        type="text">
                                                    </Field>
                                            </div>
                                        </Col>   
                                </Row>

                        <Grid> 
                            <Row alignItems="flex-start">
                            <Col>   

                                <div>
                                    <label>Name</label> <br />
                                    <Field
                                        name="name"
                                        component="input"
                                        type="text"
                                        placeholder="Name"
                                    />
                                </div>
                                </Col>  
                            </Row>

                            <Row alignItems="flex-start">
                            <Col>   

                                <div>
                                    <label>Street</label><br />
                                    <Field name="street"
                                        component="input"
                                        type="text">
                                    </Field>
                                </div>
                                </Col>   
                            </Row>
                            </Grid>
                                <div className="buttons">
                                    <button type="submit" disabled={submitting || pristine}>Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick= {this.handleClick}
                                        disabled={submitting}>Cancel
                                    </button>
                                </div>
                            </form>
                        )}          
                    />
                </div>
            </Styles>
        )
    }
}

export default CustomerDetail ;