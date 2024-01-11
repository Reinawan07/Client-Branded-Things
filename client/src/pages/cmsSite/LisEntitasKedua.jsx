import { useEffect, useState } from "react";
import List from "../../components/List-Add-Create";
import TableListCategory from "../../components/TableListCategory";
import axios from "axios";

export default function ListEntitasKedua() {

    const [dataCategories, setDataCategories] = useState([]);

    // fetchData
    const fetchData = async () => {
        try {
            const { data } = await axios({
                method: "get",
                url: "https://brandedthings.reinawan.fun/categories",
                headers: { Authorization: 'Bearer ' + localStorage.access_token },
            });
            setDataCategories(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <div className="p-4 sm:ml-74">
                <div className="p-8 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <List />

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                </tr>
                            </thead>
                            {dataCategories.map((categories) => (
                                <TableListCategory key={categories.id} categories={categories} />
                            ))}
                        </table>
                    </div>

                </div>
            </div>

        </>
    );
}