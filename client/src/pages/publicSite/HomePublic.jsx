import { useEffect, useState } from "react";
import CardHomePublic from "../../components/CardHomePublic";
import axios from "axios";

export default function HomePublic() {
    const [dataProducts, setDataProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [pagination, setPagination] = useState(1);
    const [size, setSize] = useState(10);
    const [category, setCategory] = useState(null);
    const [sortBy, setSortBy] = useState("");

    const fetchData = async () => {
        try {
            let url = `https://brandedthings.reinawan.fun/pub/products`;

            const option = {
                params: {
                    page: pagination,
                    size: size,
                    search: search,
                    sortBy: sortBy,
                },
            };
            if (category) {
                url += `?filter[categoryId]=${category}`;
                if (sortBy) {
                    url += `&date=${sortBy}`;
                }
            } else if (sortBy) {
                url += `?date=${sortBy}`;
            }
            

            const { data } = await axios.get(url, option);
            setDataProducts(data);
        } catch (error) {
            console.error('Error', error);
        }
    };

    useEffect(() => {
        console.log('sort:', sortBy);
        console.log('category:', category);
        fetchData();
    }, [search, pagination, size, category, sortBy]);

    const handlePageChange = (newPage) => {
        setPagination(newPage);
    };

    const searchByCategory = (categoryId) => {
        setCategory(categoryId);
    };

    const sortByDate = (date) => {
        setSortBy(date);
    };


    return (
        <>
            {/* SIDEBAR */}
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">

                        {/* SEARCH */}
                        <form className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    onChange={(e) => {
                                        setSearch(e.target.value)
                                    }}
                                    type="text"
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search Menu..."
                                />
                            </div>
                        </form>

                        {/* CATEGORY */}
                        <li>
                            <button
                                type="button"
                                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example-category"
                                data-collapse-toggle="dropdown-example-category"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5h6M9 8h6m-6 3h6M4.996 5h.01m-.01 3h.01m-.01 3h.01M2 1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                    Category
                                </span>
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>

                            <ul
                                id="dropdown-example-category"
                                className="hidden py-2 space-y-2"
                            >
                                <div className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    <input
                                        type="radio"
                                        id="category-radio-all-category"
                                        name="category"
                                        value=""
                                        onChange={() => searchByCategory("")}
                                        checked={category === ""}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="category-radio-all-category"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        All Category
                                    </label>
                                </div>

                                <div className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    <input
                                        type="radio"
                                        id="category-radio-koleksi-atasan"
                                        name="category"
                                        value="1"
                                        onChange={() => searchByCategory(1)}
                                        checked={category === 1}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="category-radio-koleksi-atasan"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Koleksi Atasan
                                    </label>
                                </div>

                                <div className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    <input
                                        type="radio"
                                        id="category-radio-koleksi-bawahan"
                                        name="category"
                                        value="2"
                                        onChange={() => searchByCategory(2)}
                                        checked={category === 2}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="category-radio-koleksi-bawahan"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Koleksi Bawahan
                                    </label>
                                </div>
                            </ul>
                        </li>

                        {/* SORT BY DATE */}
                        <li>
                            <button
                                type="button"
                                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example-date"
                                data-collapse-toggle="dropdown-example-date"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5h6M9 8h6m-6 3h6M4.996 5h.01m-.01 3h.01m-.01 3h.01M2 1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                    Sort By Date
                                </span>
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>

                            <ul id="dropdown-example-date" className="hidden py-2 space-y-2">
                                <div className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    <input
                                        type="radio"
                                        id="date-radio-old"
                                        name="date"
                                        value="old"
                                        onChange={() => {
                                            sortByDate("old");
                                        }}
                                        checked={sortBy === "old"}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="date-radio-old"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Ascending
                                    </label>
                                </div>

                                <div className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    <input
                                        type="radio"
                                        id="date-radio-new"
                                        name="date"
                                        value="new"
                                        onChange={() => {
                                            sortByDate("new");
                                        }}
                                        checked={sortBy === "new"}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="date-radio-new"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Descending
                                    </label>
                                </div>
                            </ul>
                        </li>


                    </ul>
                </div>
            </aside>
            {/* SIDEBAR */}


            {/* CARD */}
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
                        {dataProducts.map((product) => (
                            <CardHomePublic key={product.id} product={product} />
                        ))}
                    </div>
                    {/* CARD */}

                    {/* Pagination */}
                    <nav aria-label="Page navigation example" className="flex items-center justify-center">
                        <ul className="inline-flex -space-x-px text-base h-10">
                            {/* Previous Button */}
                            <li>
                                <button
                                    onClick={() => handlePageChange(pagination - 1)}
                                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    disabled={pagination === 1}
                                >
                                    Previous
                                </button>
                            </li>

                            {/* Page Buttons */}
                            {Array.from({ length: 3 }, (_, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${pagination === index + 1 ? 'bg-gray-200' : ''}`}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}

                            {/* Next Button */}
                            <li>
                                <button
                                    onClick={() => handlePageChange(pagination + 1)}
                                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                    {/* Pagination */}

                </div>
            </div>

        </>
    );
}
