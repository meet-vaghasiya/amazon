import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

export default function CreateUser() {
    const history=useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)

                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }


    return (
        <div>
 <div className="login">
        <Link to="/">    <img src="https://www.indiannewsandtimes.com/wp-content/uploads/2018/05/11_amazon_470_2.png" className="login__logo" ></img>

        </Link>
        <div className="login__container">
            <h1>Create-User</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email}onChange={e => setEmail(e.target.value)}></input>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} ></input>
                <button type="submit" className="loginbutton" onClick={register}>Create-User</button>

            </form>
           

        </div>

    </div>



        </div>
    )
}
