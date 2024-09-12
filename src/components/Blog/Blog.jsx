import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";
const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img,posted_date,reading_time,hashtags} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mt-4 mb-8 rounded-lg ' src={cover} alt={`Cover of the title is: ${title}`} />
            <div className='flex justify-between  items-center '>
                <div className='flex '>
                    <img className='w-14 ' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p >{posted_date}</p>
                    </div>

                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button 
                        onClick={()=>handleAddToBookmarks(blog)} 
                        className='ml-2 text-red-600'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold ">{title}</h2>
            <p>
            {
                hashtags.map((hash, idx) => <span className=' mr-3' key={idx}><a href="">#{hash}</a></span>)
                
            }
            </p>

            <br />
            <button
                onClick={()=>handleMarkAsRead(id, reading_time)}
                className='text-purple-800 font-bold underline'
                >Mark As Read</button>

     
            
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead : PropTypes.func,
    
}
export default Blog;