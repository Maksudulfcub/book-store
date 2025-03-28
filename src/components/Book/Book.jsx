import { IoMdStarOutline } from "react-icons/io";

const Book = ({ book }) => {

    const { author, bookName, category, image, tags, rating } = book;
    console.log(book);

    return (
        <div>
            <div className="card bg-base-100 border p-5 border-gray-300 hover:bg-green-50">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="book"
                        className="rounded-xl" />
                </figure>
                <div className="mt-3 space-y-2">
                    <div className="flex gap-5 text-xs items-center">
                        <p className="bg-green-50 text-green-500 px-4 py-1 rounded-full text-center">{tags[0]}</p>
                        <p className="bg-green-50 text-green-500 px-4 py-1 rounded-full text-center">{tags[1]}</p>
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <div className="flex justify-between text-xs text-gray-500">
                        <p>{category}</p>
                        <span className="flex gap-0.5 items-center">
                            <IoMdStarOutline className="text-lg" />
                            <p>{rating}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;