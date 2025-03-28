import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 lg:min-h-[400px]">
                <div className="hero-content text-center">
                    <div className="max-w-md space-y-10">
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <NavLink to="listedBooks">
                            <button className="btn btn-primary">View List</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;