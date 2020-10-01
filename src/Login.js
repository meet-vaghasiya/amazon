import React, { useState } from 'react'
import { Link ,useHistory} from 'react-router-dom'
import './login.css'
import { auth } from './firebase'

export default function Login() {
    const history=useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()

        //firebase stuff

        auth.signInWithEmailAndPassword(email,password)

        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))
    }
    const register = e => {
        e.preventDefault();

        // auth.createUserWithEmailAndPassword(email, password)
        //     .then((auth) => {
        //         console.log(auth)

        //         if(auth){
                    history.push('/createuser')
                // }
            // })
            // .catch(error => alert(error.message))

    }




return (


    <div className="login">
        <Link to="/">    <img src="https://www.indiannewsandtimes.com/wp-content/uploads/2018/05/11_amazon_470_2.png" className="login__logo" ></img>

        </Link>
        <div className="login__container">
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email}onChange={e => setEmail(e.target.value)}></input>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} ></input>
                <button type="submit" className="loginbutton" onClick={signIn}>Sign In</button>

            </form>
            <p>
                Afghanistan's interim chief was confident that CA would agree to ACB's request of hosting the Test as a day game instead of it being played under lights


        </p>
            <button type="submit" onClick={register}>Create Account</button>

        </div>

    </div>
)
}
