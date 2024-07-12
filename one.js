import  react from 'react';
import './one.css';
import { NavLink } from 'react-router-dom';
class Homepage extends react.Component
{
    render(){
        return(
            <>
        <nav class="navbar background">
        <div class="logo">
            <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0omM4xiSLnf-TZOxiPpy664P7qbzZXzBzw&s"
                 alt="Logo"></img>
        </div>
        <ul class="nav-list">
        <NavLink to="/products" className="nav-link m-3 p-2 text-white">products</NavLink>
        <NavLink to="/contactus" className="nav-link m-3 p-2 text-white">contactus</NavLink>
        </ul>
    </nav>
        <div class="paras">
            <h1 class="sectionTag text-big">Decor Home</h1>
            <p class="sectionSubTag text-small">
                 
            </p>
        </div>
        </>
        )
    }
}
 export default Homepage;       
