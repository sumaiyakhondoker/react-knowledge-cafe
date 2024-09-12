import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md: w-1/3   m-4   bg-slate-200 rounded-xl">

        <div className="text-center py-6 rounded-xl border border-violet-700 bg-violet-200 text-violet-800">
            <h2 className="text-3xl ">Spent time on read: {readingTime}</h2>
        </div>

            <h2 className="text-3xl text-center pl-4 pt-5">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark = {bookmark} ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks;

