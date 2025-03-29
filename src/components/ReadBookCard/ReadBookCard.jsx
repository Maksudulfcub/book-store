
const ReadBookCard = ({ readenBook }) => {

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = readenBook;

    return (
        <div className="lg:flex md:flex gap-5 border border-gray-400 p-5 rounded-lg mb-10">
            <div className="w-1/3">
                <img className="lg:w-1/2" src={image} alt="" />
            </div>
            <div className="w-2/3 space-y-2">
                <h2 className="text-3xl font-semibold">{bookName}</h2>
                <p>
                    <span className="font-semibold">By : </span>
                    <span className="text-gray-500">{author}</span>
                </p>
                <p>
                    <span className="font-semibold">Category : </span>
                    <span className="text-gray-500">{category}</span>
                </p>
                <p>
                    <span className="font-semibold">Review : </span>
                    <span className="text-gray-500">{review}</span>
                </p>
                <p>
                    <span className="font-semibold mr-4">Tags : </span>
                    <div className="flex flex-col lg:flex-row">
                        <span className="text-gray-500 mr-4">#{tags[0]}</span>
                        <span className="text-gray-500 mr-4">#{tags[1]}</span>
                        <span className="text-gray-500 mr-4">#{tags[2]}</span>
                    </div>
                </p>
                <p>
                    <span className="font-semibold">Number of pages : </span>
                    <span className="text-gray-500">{totalPages}</span>
                </p>
                <p>
                    <span className="font-semibold">Publisher : </span>
                    <span className="text-gray-500">{publisher}</span>
                </p>
                <p>
                    <span className="font-semibold">Year of publishing : </span>
                    <span className="text-gray-500">{yearOfPublishing}</span>
                </p>
                <p>
                    <span className="font-semibold">Rating : </span>
                    <span className="text-gray-500">{rating}</span>
                </p>
            </div>
        </div>
    );
};

export default ReadBookCard;