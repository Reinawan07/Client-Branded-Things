import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function UploadImageEntitasUtama() {
    const [file, setFile] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id);

    const handleChange = (event) => {
        const image = event.target.files[0];
        setFile(image);
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('imgUrl', file);

            await axios.patch(
                `https://brandedthings.reinawan.fun/product/${id}/imgurl`,
                formData,
                { headers: { Authorization: 'Bearer ' + localStorage.access_token } }
            );

            console.log('File uploaded successfully!');

            navigate("/listproducts");
        } catch (error) {
            console.error('Error uploading file:', error);
            Swal.fire({
                icon: "error",
                title: "Oops",
                text: error.response.data.message,
            });
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">

            <div className="p-4 max-w-md mx-auto">

                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        <b>Upload Image Product</b>
                    </h3>
                    <Link to={'/listproducts'}
                        type="button"
                        className="text-gray-400 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close form</span>
                    </Link>
                </div>

                <form className="p-4 md:p-5" onSubmit={handleSubmitForm}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Name" required=""></input>
                        </div>

                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="imgUrl">Upload file</label>
                            <input
                                type="file"
                                name="imgUrl"
                                id="imgUrl"
                                // accept="image"
                                onChange={handleChange}
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-blue-50 dark:text-gray-400 focus:outline-none dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help"></input>
                            <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Insert Your Image</div>
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            className="w-6 h-6 mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <span>Upload Image</span>
                    </button>

                </form>
            </div>
        </div>
    );
}
