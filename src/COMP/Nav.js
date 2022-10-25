import { BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import {useEffect, useState} from 'react';
function Nav() {
    const [getCat , setCat] = useState([]);
 useEffect(()=>{
    fetch('https://webeetec.com/itsharks24/blog/api/getcategory.php')
    .then(res => res.json())
    .then((r)=>{
        setCat(r);
        console.log(r)
    })
 },[])

    return (
        <>
            <header id="header">
                    <div className="siteHeader">
                        <div className="wrapper clear">
                             <Link to={'/home'} className="mobile-logo">
                            </Link>
                            <ul className="mainMenu clear">
                                <li>
                                    <Link to={'/home'}>home</Link>
                                </li> 
                                <li>
                                    <a href="#">Category</a>
                                    <ul>
                                        {
                                            getCat.map((cat)=>{
                                                return(
                                                    <li key={cat.id}><Link to={'/category/'+  cat.name }>{cat.name}</Link></li>
                                                );    
                                    
                                            })
                                        }
                                        
                                    </ul>
                                </li>
                                
                            </ul>
                            <div className="pull-right clear">
                                <div className="headerSocialLinks clear">
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-heart"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                </div>
                                <div className="searchIcon"></div>
                            </div>
                            <span className="showMobileMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>	
                    </div>
                    <a href="#" className="logo">IT SHARKS 25</a>
            </header>
        </>


      );
}

export default Nav;