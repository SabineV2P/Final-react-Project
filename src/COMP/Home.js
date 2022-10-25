import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import RecentPost from './recent';
function Home() {

const [post , setPost] = useState([]);
 useEffect(()=>{
    fetch('https://webeetec.com/itsharks24/blog/api/getposts.php')
    .then(res => res.json())
    .then((r)=>{
        setPost(r);
        console.log(r)
    })
 },[])

    return ( 
        <>
        
        <section className="container mt-5">
		<div className="wrapper clear">
			
			<div className="clear"></div>
			<div className="contentLeft">
				<div className="blogPostListWrap">
				{
                    post.map((p)=>{
                        return(
                            <div className="blogPostListItem clear" key={p.id}>
                            <Link to={'/single/'+p.category+'/'+p.id} className="blogPostListImg blogPostListImg2">
                                <img src={"https://webeetec.com/itsharks24/blog/admin/"+ p.image} alt="Francoise img "/>
                            </Link>
                            <div className="blogPostListText blogPostListItem2">
                                <div className="blogPostListTime">{p.date}</div>
                                <h3><Link to={'/single/'+p.category+'/'+p.id}>{p.title}</Link></h3>
                                <p>{p.description}</p>
                            </div>
                        </div>
                        );
                    })
                }	
                </div>
				<div className="postPagination">
					<ul className="clear">
						<li className="newPosts"><a href="#">New posts</a></li>
						<li className="olderPosts"><a href="#">Older posts</a></li>
					</ul>
				</div>
			</div>
			<div className="sidebarRight">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
						<img src="assests/images/ourlogo.png" alt="Francoise img"/>
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
					</div>
				</div>
				<div className="sidebar-widget">
					<h3>follow me</h3>
					<div className="followMeSocialLinks">
						<a href="#"><i className="fa fa-instagram"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-facebook"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-heart"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-pinterest"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-google-plus"></i></a>
					</div>
				</div>

                <RecentPost/>
{/* 				
				<div className="sidebar-widget">
					<h3>Recent post</h3>
					<div className="popularPostsWidget">
						<div className="popularPostsWidgetItem">
							<a href="#" className="popularPostsItemImg"><img src="assests/images/content/popularPostImg.jpg" alt="Francoise img"/></a>
							<time datetime="2015-05-15">15.05.2015</time>
							<h4><a href="#">MY BEDSIDE TABLE: THE CURATOR</a></h4>
						</div>
						
					</div>
				</div>
				 */}
				
			</div>
            
		</div>
		<div className="clear"></div>
		
	</section>
        </>
     );
}

export default Home;