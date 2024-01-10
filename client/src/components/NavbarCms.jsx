import { Link, useNavigate } from "react-router-dom";

export default function NavbarCms() {
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <Link to={"/"} className="flex ms-2 md:me-24">
                                <img src="" className="h-8 me-3" alt="" />
                                <span
                                    className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"><span
                                        className="text-blue-600 font-extrabold dark:text-white ">Branded</span> Things </span>
                            </Link>
                        </div>

                        <div className="flex items-center">
                            <div className="flex items-center ms-3">

                                <button
                                    onClick={logoutHandler}
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 18 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}