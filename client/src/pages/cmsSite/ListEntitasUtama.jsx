import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import TableListProducts from "../../components/TableListProducts";

export default function ListEntitasUtama() {

    const [dataProducts, setDataProducts] = useState([]);

    // fetchData
    const fetchData = async () => {
        try {
            const { data } = await axios({
                method: "get",
                url: "https://brandedthings.reinawan.fun/products",
                headers: { Authorization: 'Bearer ' + localStorage.access_token },
            });
            setDataProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = (id) => {
        setDataProducts((prevData) => prevData.filter((products) => products.id !== id));
    };

    return (
        <>
            <div className="p-4 sm:ml-74">
                <div className="p-8 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start rtl:justify-end">

                                <button className="flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        List Products
                                    </span>
                                </button>

                                <button className="flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        List Category
                                    </span>
                                </button>

                            </div>

                            <div className="flex items-center">

                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Add Staff
                                    </span>
                                </button>

                                <div className="flex items-center ms-3">

                                    <button data-modal-target="createEntitasUtama-modal"
                                        data-modal-toggle="createEntitasUtama-modal" type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create Product</button>
                                </div>

                            </div>
                        </div>

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-16 py-3">
                                        <span className="sr-only">ImgUrl</span>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            {dataProducts.map((products) => (
                                <TableListProducts key={products.id} products={products} onDelete={handleDelete} />
                            ))}

                        </table>
                    </div>

                </div>
            </div>

        </>
    );
}