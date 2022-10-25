import {Link , useParams} from 'react-router-dom';
import {useEffect , useState} from 'react';
import RecentPost from './recent';

function Category() {
    var myparama =  useParams();
    var category = myparama.category;
    const [categoryPost , setCategoryPost] = useState([]);
    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getpostsbycategory.php?category='+category)
        .then(res => res.json())
        .then((r)=>{
        setCategoryPost(r);
        console.log(r);
    });
 },[category]);

    return (  
        <>
            	<section className="container">
		<div className="wrapper clear">
			<div className="contentLeft contentLeft1">
				<div className="archivePageTitle"><span>{category}</span></div>
				<div className="archivePostWrap">
					{
                        categoryPost.map((catPost)=>{
                            return(
                                <div className="archivePostItem">
						<div className="archivePostTime">{catPost.date}</div>
						<h3 className="archivePostTitle"><a href="#">{catPost.title}</a></h3>
						<Link to={'/single/'+catPost.category+'/'+catPost.id} className="archivePostCategory">{catPost.category}</Link>
						<Link to={'/single/'+catPost.category+'/'+catPost.id} className="archivePostImg">
							<img src={'https://webeetec.com/itsharks24/blog/admin/'+catPost.image} alt="Francoise img"/>
						</Link>
						<p>{catPost.description }</p>
						<div className="archivePostItemMeta">
							<a href="#" className="archivePostItemComments">124 Comments</a>
							<div className="archivePostItemShareLinks">
								<a href="#"><i className="fa fa-facebook"></i></a>
								<a href="#"><i className="fa fa-twitter"></i></a>
								<a href="#"><i className="fa fa-pinterest"></i></a>
							</div>
							<Link to={'/single/'+catPost.category+'/'+catPost.id} className="archivePostReadMore">Read More</Link>
						</div>
					    </div>
                            )
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
			<div className="sidebarRight contentLeft1">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
						<img src="/assests/images/ourlogo.png" alt="Francoise img"/>
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

export default Category;