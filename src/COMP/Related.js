import {Link , useParams} from 'react-router-dom';
import {useEffect,useState} from 'react';
function RelatedPost() {
    
    var myparama =  useParams();
    var id = myparama.id;
    var category = myparama.category
    const [singleRelatedPost , setSingleRelatedPost] = useState([]);
    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/getrelated.php?category='+category+'&id='+id)
        .then(res => res.json())
        .then((r)=>{
        setSingleRelatedPost(r);
        console.log(r);
    });
 },[category,id]);
    return ( 
        <div className="relatedPostsBox ">
        <h3>related posts</h3>
        <div className="row">
            {
            singleRelatedPost.map((Rpost)=>{
                return(
                <div className="col-sm col-md-4" key={Rpost.id}>
                <div className="relatedPostsWrap clear">
                    <Link className="relatedPostItem flexdivedit" to={'/single/'+Rpost.category+'/'+Rpost.id}>
                        <img src={'https://webeetec.com/itsharks24/blog/admin/'+Rpost.image} className="img-fluid related-img" alt="Francoise img"/>
                            <div className="overlayBox">
                                <div className="relatedPostDesc">
                                    <div className="postTime">{Rpost.date}</div>
                                    <h4>{Rpost.title}</h4>
                                </div>
                            </div>
                    </Link>
                </div>
            </div>
                );
            })
            }
            </div>
            </div>
     );
}

export default RelatedPost;