import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import TableListProducts from "../../components/TableListProducts";
import List from "../../components/List-Add-Create";

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
                        <List />

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