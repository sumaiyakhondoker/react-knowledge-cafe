import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title, cover} = blog
    return (
        <div>
            <img src={cover} alt={`Cover of the title is: ${title}`} />
            <h2 className="text-4xl font-bold">{title}</h2>
            
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default Blog;