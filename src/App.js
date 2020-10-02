import React, { useEffect } from 'react';
import './Header.css'
import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CheckOut from './CheckOut';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import  Payment  from './Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';


import CreateUser from './CreateUser';
const promise=loadStripe("pk_test_51HRColFi3enyg1GlqIYMyra3jVd8zHj0Kal7sN5TzfqxbY3Y7Wp1VnJA33BLKLjEar0v0m5incEcu5PtPvzrkehi0044sQAf1v")

function App() {

  const[{},dispatch]=useStateValue()


  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
  // console.log('the useris >>>>>' ,authUser)

  if(authUser){
    dispatch({
      type:'SET_USER',
      user:authUser
    })
  }else{
    dispatch({
      type:'SET_USER',
      user:null
    })
  }
})
  },[])

  return (<>
<div className="disclaimer"><h6 >Disclaimer : This Fake Amazon Website Is Make Just For Learning Perpose</h6></div>
    <Router>
      <div className="App">
       
        <Switch>
          <Route exact path="/">
          <Header />
            <Home />
          
          </Route>
    

          <Route path="/checkout">
          <Header />
            <CheckOut />
 
          </Route>
          <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
          </Route>
          <Route path="/orders">
          <Header />
           <Orders />
           </Route>


         
          <Route path="/login">
           <Login />
          </Route>
          <Route path="/createuser">
           <CreateUser />
          </Route>
        </Switch>
      </div>
    </Router>
  </>);
}
export default App;