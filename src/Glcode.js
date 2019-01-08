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
    fontFamily
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
const invoice= {
    textAlign: 'left',
    position: 'fixed',
    top: '80px',
    width: '100%',
    fontSize: '14px',
}
const error={
    color:'red',
    fontSize:'18px',
    fontFamily:'Georgia'
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


class GLcodeEdit extends Component {
    constructor(props) {
        super(props);
        this.handleClick= this.handleClick.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }

    handleClick =  () => {
        this.props.browe('');
    }

  //  onSubmit = async values => {
    onSubmit = values => {
  //      await sleep(300)
        //    window.alert(JSON.stringify(values, 0, 2))
        this.props.actionInvoice(values)
    }

    render() {
        return (
            <Styles>
                <div style={invoice}>
                    <h1> GL Code</h1>
                    <Form
                        onSubmit={this.onSubmit}
                        initialValues={{ glcode:this.props.glcode, description:this.props.description, 
                                        type:this.props.type,pl:this.props.pl,bs:this.props.bs,
                                        category:this.props.category, subcategory:this.props.subcategory, note:this.props.note }}
                        validate={values => {
                            const errors = {};
                                if (!values.glcode) {
                                    errors.glcode= "???";
                                }
                                if (!values.description) {
                                    errors.description = "???";
                                }
                                if (!values.type) {
                                    errors.type = "???";
                                }
                                if (!values.category) {
                                    errors.category= "???";
                                }
                                if (!values.pl || !values.bs)  {
                                    errors.pl= "???";
                                    errors.bs= "???";
                                }
                            }
}
                        render={({ handleSubmit, form, submitting, pristine, values }) => ( 
                            <form  onSubmit={handleSubmit}>

                            {/*--------------------------------------------------------------------*/}                               
                            <Row>
                               <Col>   
                                    <div>
                                        <label>Glcode</label><br />
                                        <Field
                                            name="glcode"
                                            component="input"
                                            type="text"                             
                                        />
                                    </div> 
                                </Col>
                            </Row>
                            {/*--------------------------------------------------------------------*/}   
                            <Row> 
                            <Col>   
                                    <div>
                                        <label>Description</label> <br />
                                        <Field name="description">
                                            {({ input, meta }) => (
                                                <div style={error}>
                                                    <input {...input} type="text" placeholder="Description" />
                                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                </Col>   
                            </Row>  

                             {/*--------------------------------------------------------------------*/}                          
                            <Row>
                            <Col>   

                                <div>
                                    <label>Type</label><br />
                                    <Field
                                        name="type"
                                        component="input"
                                        type="text"
                                        placeholder="Type"
                                    />
                                </div>
                                </Col>   
                            </Row>

                            {/*--------------------------------------------------------------------*/}
                            <Row>
                                <Col>   
                                <div>
                                    <label>Profit Loss</label>
                                    <Field name="pl">
                                        {({ input, meta }) => (
                                            <div style={error}>
                                                    <input {...input} type="text" placeholder="Profit Loss" />
                                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                    
                                </div>
                                </Col>  
                                <Col>  
                                <div>
                                    <label>Balance Sheet</label>
                                    <Field name="bs">
                                        {({ input, meta }) => (
                                            <div style={error}>
                                                    <input {...input} type="text" placeholder="Balance sheet" />
                                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                    
                                </div>
                                </Col> 
                            </Row>

                            {/*--------------------------------------------------------------------*/}                               
                            <Row>
                            <Col>   
                                <div>
                                    <label>Category</label><br />
                                    <Field name="category">
                                        {({ input, meta }) => (
                                                <div style={error}>
                                                    <input {...input} type="text" placeholder="Category" />
                                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                                </div>
                                        )}
                                    </Field>
                                </div>
                                </Col>   
                                <Col>   
                                <div>
                                    <label>Subcategory</label><br />
                                    <Field name="subcategory">
                                        {({ input, meta }) => (
                                                <div style={error}>
                                                    <input {...input} type="text" placeholder="SubCategory" />
                                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                                </div>
                                        )}
                                    </Field>
                                </div>
                                </Col> 
                            </Row>
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

export default GLcodeEdit ;