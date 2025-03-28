import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-20 font-work-sans">
            <h1 className="text-6xl text-red-600 font-bold">404</h1>
            <h1 className="text-6xl text-red-600 font-bold mt-10">Page Not Found !</h1>
            <button className="btn btn-error mt-40 text-white"> <Link to='/'>Back to Home</Link> </button>
        </div>
    );
};

export default ErrorPage;