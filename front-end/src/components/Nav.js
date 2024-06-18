import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signup')
    };

    return (
        <div>
            <img alt='logo' className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZ9rSN0TXjAq1VYklZ-t1ebMNAE2YPZzzbA&s"/>
           {auth ? <ul className="nav-ui">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
                :
                <ul className="nav-ui nav-right">
                    <li><Link to='/signup'>SignUp</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            }    
        </div>
    )
}
export default Nav;