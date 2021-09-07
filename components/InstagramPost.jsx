import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const InstagramPost = ({ postData }) => {
    return (
        <div className="card acrylic" onClick={() => { window.open(postData.url, '_blank'); }}>
            <div className="card-body d-flex flex-column flex-md-row align-items-center p-2" >
                <img src={postData.thumbnailUrl} alt="" className='img-fluid ig-img mt-2 mt-lg-0' width="300px" />
                <div className="d-flex flex-column ps-3">
                    <p className="ig-text mt-3 mt-lg-0">{postData.caption}</p>
                    <span className='ig-likes-comments'><FontAwesomeIcon icon={faHeart} /> {` ${postData.likes}`}</span>
                    <span className='ig-likes-comments'><FontAwesomeIcon icon={faComment} /> {` ${postData.comments}`}</span>
                    <p className="ig-date">{postData.date}</p>
                </div>
            </div>
        </div>);
};


export default InstagramPost;