import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import Button from "../../components/Button";

export default function EditDataProduct() {
    const { id } = useParams();
    const [dataCategories, setDataCategories] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        imgUrl: "",
        categoryId: "",
    });
    console.log(formData);

    useEffect(() => {
        const fetchDataProducts = async () => {
            try {
                const { data } = await axios({
                    method: "get",
                    url: `https://brandedthings.reinawan.fun/products/${id}`,
                    headers: {
                        Authorization: "Bearer " + localStorage.access_token,
                    },
                });

                setFormData(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDataProducts();
    }, [id]);

    const fetchDataCategories = async () => {
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
        fetchDataCategories();
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`https://brandedthings.reinawan.fun/product/${id}`, formData, {
                headers: { Authorization: 'Bearer ' + localStorage.access_token },
            });
            Swal.fire({
                title: "Update Success",
                icon: "success"
            });
            navigate("/listproducts")

        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message,
            });
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-4 max-w-md">

                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        <b>Edit Data Product</b>
                    </h3>
                    <Link to={'/listproducts'}
                        type="button"
                        className="text-gray-400 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close</span>
                    </Link>
                </div>

                <form className="p-4 md:p-5"
                    onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={formData.name}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Input Name Cuisine" required=""></input>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                defaultValue={formData.price}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Input Prince" required=""></input>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select
                                id="category"
                                name="categoryId"
                                value={formData.categoryId}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="" disabled>Select category</option>
                                {dataCategories &&
                                    dataCategories.map((el) => {
                                        return (
                                            <option key={el.id} value={el.id}>
                                                {el.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                            <input
                                type="number"
                                name="stock"
                                id="stock"
                                defaultValue={formData.stock}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Input Stock" required=""></input>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ImgUrl</label>
                            <input
                                type="text"
                                name="imgUrl"
                                id="imgUrl"
                                defaultValue={formData.imgUrl}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Input ImgUrl" required=""></input>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="4"
                                defaultValue={formData.description}
                                onChange={handleInputChange}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Input Description"
                            ></textarea>
                        </div>
                    </div>

                    <Button svg={<svg className="w-6 h-6 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                        <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                    </svg>} name={"Save Product"} />
                </form>
            </div>
        </div>
    );
}
