import React from 'react'
import {SendLogin} from "../Reducer/Actions";


import { useSelector, useDispatch } from 'react-redux';

export const Login = (props) => {
const user = useSelector(state => state.creds)

const dispatch = useDispatch();
// const [user, setUser] = useState({userName:"", password:""})

const handleSubmit = e =>{
    e.preventDefault()
    const cb = () =>{}
    SendLogin(user,cb)
    setTimeout(()=>{props.history.push("/Protected")},150)
     
}

const handelChange = e =>{
dispatch({ type: "ON_CHANGE", name:e.target.name, value:e.target.value})
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {console.log(user)}
                <input type="text" name="username" placeholder="Enter UserName" onChange={handelChange} />
                <input type= "password" name="password" placeholder="Enter User Paswword" onChange={handelChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
