import React, { Component } from "react";
import { NavLink, Route} from 'react-router-dom';
import './App.css'
import Customer from "./Customer.js";
import Invoices from "./Invoices.js";
import BillDetail from "./Billdetail.js";
import Reports from "./Reports.js";
import Bank from "./Bank.js";
import Audit from "./Audit.js";
import UI from "./UI.js";
import ChartOfAccount from "./Chartofaccount.js";
import LedgerItems from "./LedgerItems.js";
import Button from '@material-ui/core/Button';



const Home = () => (
  <div>
        <br />
        <br />
        <br />
        <div style={{marginLeft:'200px'}}>
          <Button variant="contained" color="primary">
                AR
          </Button>
        </div>     

        <a className='menu'><NavLink to="/Ar">AR</NavLink></a> <br /><br />
        <a className='menu'><NavLink to="/Ap">AP</NavLink></a><br /><br />
        <a className='menu'><NavLink to="/Ledger" >Ledger</NavLink></a><br /><br />
        <a className='menu'><NavLink to="/Reports">Reports</NavLink></a><br /><br />
        <a className='menu'><NavLink to="/Bank">Bank</NavLink></a><br /><br />
        <a className='menu'><NavLink to="/Audit">Audit</NavLink></a><br /><br />
        <a className='menu'><NavLink to="/UI">Raw material</NavLink></a>
  </div>
)

// ****************************************
// ⬇️ App ⬇️
// ****************************************
class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
  return ( 
    <div>
    <ul>
        <li><NavLink to="/" class='topnav' activeclassName='activetop'>Home</NavLink></li>
        <li><NavLink to="/Ar" class='topnav'  activeclassName='activetop'>AR</NavLink></li>
        <li><NavLink to="/Ap" class='topnav' activeclassName='activetop'>AP</NavLink></li>
        <li><NavLink to="/Ledger" class='topnav' activeclassName='activetop'>Ledger</NavLink></li>
        <li><NavLink to="/Reports" class='topnav' activeclassName='activetop'>Reports</NavLink></li>
        <li><NavLink to="/Bank" class='topnav' activeclassName='activetop'>Bank</NavLink></li>
        <li><NavLink to="/Audit" class='topnav' activeclassName='activetop'>Audit</NavLink></li>
        <li><NavLink to="/UI" class='topnav' activeclassName='activetop'>Raw material</NavLink></li>

  </ul> 

        <Route exact path="/" component={Home}/>
        <Route path="/Ar" component={Ar}/>
        <Route path="/Ap" component={Ap}/>
        <Route path="/Ledger" component={Ledger}/>
        <Route path="/Reports" component={Reports}/>
        <Route path="/Bank" component={Bank}/>
        <Route path="/Audit" component={Audit}/>
        <Route path="/UI" component={UI}/>
  </div>
  )
  }

}
// ****************************************
// ⬇️ Ar ⬇️
// ****************************************
class Ar extends Component {
  constructor(props) {
    super(props);
    this.state={actual: ''}
    this.actbut= this.actbut.bind(this);   
  }
  actbut = () => {
    this.setState({actual: 'invoice'});
  }
  
  render() {			
    return (
      <div> 

        <ul class="second">
        
          <li><NavLink  to="/Ar/Customer" activeclassName='active'>Customers</NavLink></li>
          <li><NavLink  to="/Ar/Invoices" activeclassName='active'>Invoices</NavLink></li>
          <li><NavLink  to="/Ar/CN" activeclassName='active'>Credit Notes</NavLink></li>
          <li><NavLink  to="/Ar/ARI" activeclassName='active'>Inquiry</NavLink></li>
          <li><NavLink  to="/Ar/PaymentAR" activeclassName='active'>Payments</NavLink></li>
          <li><NavLink  to="/Ar/MatchingAR" activeclassName='active'>Matching</NavLink></li>
          <li><NavLink  to="/Ar/Income" activeclassName='active'>Income</NavLink></li>
        </ul>
        <Route  path="/Ar/Customer" component={Customer}/>
        <Route  path="/Ar/Invoices" component={Invoices} />
      </div>
    )
  }
}

// ****************************************
// ⬇️ Ap ⬇️
// ****************************************
class Ap extends Component {
  render() {
  return (
    <div> 
    <ul class="second">
    
      <li><NavLink  to="/Ap/Vendor" activeclassName='active'>Vendors</NavLink></li>
      <li><NavLink  to="/Ap/Invoices" activeclassName='active'>Invoices</NavLink></li>
      <li><NavLink  to="/Ap/CN" activeclassName='active'>Credit Notes</NavLink></li>
      <li><NavLink  to="/Ap/API" activeclassName='active'>Inquiry</NavLink></li>
      <li><NavLink  to="/Ap/PaymentAP" activeclassName='active'>Payments</NavLink></li>
      <li><NavLink  to="/AP/MatchingAP" activeclassName='active'>Matching</NavLink></li>
      <li><NavLink  to="/Ap/Expense" activeclassName='active'>Expense</NavLink></li>
    </ul>
    <Route  path="/Ap/Vendors" component={Customer}/>
    <Route  path="/Ap/Invoices" component={BillDetail} />
  </div>
)
}
}

// ****************************************
// ⬇️ Ldeger ⬇️
// ****************************************
class Ledger extends Component {
  constructor(props) {
    super(props);
    this.state={actual: ''}
    this.actbut= this.actbut.bind(this);   
  }
  actbut = () => {
    this.setState({actual: 'ledger'});
  }
  
  render() {			
    return (
      <div class="second"> 

        <ul class="second">
        
          <li><NavLink  to="/Ledger/Chart" activeclassName='active'>Chart of Account</NavLink></li>
          <li><NavLink  to="/Ledger/Detail" activeclassName='active'>Ledger</NavLink></li>
          <li><NavLink  to="/Ledger/Entries" activeclassName='active'>General Ledger Entries</NavLink></li>
          <li><NavLink  to="/Ledger/Balance" activeclassName='active'>General Balance</NavLink></li>
          <li><NavLink  to="/Ledger/Budget" activeclassName='active'>Budget</NavLink></li>
          <li><NavLink  to="/Ledger/Depreciation" activeclassName='active'>Depreciation</NavLink></li>
          <li><NavLink  to="/Ledger/Notes" activeclassName='active'>Notes</NavLink></li>
        </ul>
        <Route  path="/Ledger/Chart" component={ChartOfAccount}/>
        <Route  path="/Ledger/Detail" component={LedgerItems} />
      </div>
    )
  }
}

export default App;