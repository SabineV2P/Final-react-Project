import {Link, useParams} from 'react-router-dom';
import {useEffect , useState} from 'react';
import RecentPost from './recent';
import RelatedPost from './Related';
function Single() {
    var myparama =  useParams();
    var id = myparama.id;
    const [singlePost , setSinglePost] = useState([]);
    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/singlepost.php?id='+id)
        .then(res => res.json())
        .then((r)=>{
        setSinglePost(r[0]);
        console.log(r);
    });
 },[id]);

    return ( 
        <>
            <section className="container">
            
                    		<div className="wrapper clear">
                            <div className="contentLeft contentLeft1">
                                <div className="singlePostMeta">
                                    <div className="singlePostTime">{singlePost.date}</div>
                                    <h1>{singlePost.title}</h1>
                                    <Link to={'/category/'+singlePost.category} className="singlePostCategory">{singlePost.category}</Link>
                                </div>

                                <div className="singlePostWrap">
                                    <div className="singlePostImg">
                                        <img src={'https://webeetec.com/itsharks24/blog/admin/'+singlePost.image} alt="Francoise img"/>
                                    </div>
                                    <p>{singlePost.description}</p>
                                    
                                </div>
                                 <RelatedPost/>           
                            </div>
                                
			<div className="sidebarRight contentLeft1">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
						<img src="/assests/images/ourlogo.png" alt="Francoise img"/>
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
					</div>
				</div>
				
                <RecentPost/>
				{/* <div className="sidebar-widget">
					<h3>Recent post</h3>
					<div className="popularPostsWidget">
						<div className="popularPostsWidgetItem">
							<a href="#" className="popularPostsItemImg"><img src="/assests/images/content/popularPostImg.jpg" alt="Francoise img"/></a>
							<time datetime="2015-05-15">15.05.2015</time>
							<h4><a href="#">MY BEDSIDE TABLE: THE CURATOR</a></h4>
						</div>
						
					</div> */}
				{/* </div> */}
				
				
			</div>

		</div>
		<div className="clear"></div>
		
	</section>

        </>
     );
}

export default Single;