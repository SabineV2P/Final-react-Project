import {useState , useEffect} from 'react'
import { Link} from 'react-router-dom'
function RecentPost() {    
const [recentPost , setRecentPost] = useState([]);
useEffect(()=>{
   fetch('https://webeetec.com/itsharks24/blog/api/getposts.php')
   .then(res => res.json())
   .then((r)=>{
       setRecentPost(r[0]);
       console.log(r)
   })
},[])
    return ( 
        <div className="sidebar-widget">
					<h3>Recent post</h3>
					<div className="popularPostsWidget">
						<div className="popularPostsWidgetItem">
							<a href="#" className="popularPostsItemImg"><img src={'https://webeetec.com/itsharks24/blog/admin/'+recentPost.image} alt="Francoise img"/></a>
							<time dateTime={recentPost.date}>{recentPost.date}</time>
							<h4><Link to={'/single/'+recentPost.category+'/'+recentPost.id}>{recentPost.title}</Link></h4>
						</div>
						
					</div>
				</div> 
     );
}

export default RecentPost;