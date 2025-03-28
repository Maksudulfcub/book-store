import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt);
    console.log(book);

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure className="w-1/2">
                    <img className="lg:w-[200px] w-14"
                        src={book.image}
                        alt="book" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{book.bookName}</h2>
                    <p>
                        <span className="font-semibold">By : </span>
                        <span className="text-gray-500">{book.author}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Category : </span>
                        <span className="text-gray-500">{book.category}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Review : </span>
                        <span className="text-gray-500">{book.review}</span>
                    </p>
                    <p>
                        <span className="font-semibold mr-4">Tags : </span>
                        <span className="text-gray-500 mr-4">#{book.tags[0]}</span>
                        <span className="text-gray-500 mr-4">#{book.tags[1]}</span>
                        <span className="text-gray-500 mr-4">#{book.tags[2]}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Number of pages : </span>
                        <span className="text-gray-500">{book.totalPages}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Publisher : </span>
                        <span className="text-gray-500">{book.publisher}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Year of publishing : </span>
                        <span className="text-gray-500">{book.yearOfPublishing}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Rating : </span>
                        <span className="text-gray-500">{book.rating}</span>
                    </p>
                    <div className="card-actions">
                        <button className="btn">Read</button>
                        <button className="btn btn-accent">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;