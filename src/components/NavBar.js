import React from 'react'
import {Link} from 'react-router-dom'

function NavBar({isLogin,toggleIsLogin}) {
    console.log(isLogin)
    return (
        <div className="nav-bar">
        
                <h3><Link to='/'>Home</Link></h3>
                <h3><Link to='/listUsers'>List Users</Link></h3>
                { isLogin ? (<button onClick={()=>toggleIsLogin()}>Logout</button>):
                 ( <button onClick={()=>toggleIsLogin()}>Login</button>)
                 }
            </div>
    )
}

export default NavBar
