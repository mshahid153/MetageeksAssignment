// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData

  return (
    <li className="blog-item">
      <div className="blog-div">
        <div className="blog-item-container">
          <img className="blog-item-image" src={imageUrl} alt={`item${id}`} />
          <div className="blog-item-info">
            <p className="blog-item-topic">{topic}</p>
            <h1 className="blog-item-title">{title}</h1>
            <div className="author-info">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
            <Link to={`blogs/${id}`} className="view-btn">View post</Link>
          </div>
          
        </div>
      </div>
    </li>
  )
}

export default BlogItem
