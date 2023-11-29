// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogsList: []}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogsList: formattedData})

    console.log(formattedData)
  }

  render() {
    const {blogsList} = this.state
    return (
      <ul className="blogs-list-cont">
        {blogsList.map(each => (
          <BlogItem blogData={each} key={each.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
