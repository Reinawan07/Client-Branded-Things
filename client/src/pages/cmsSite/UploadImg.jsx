import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../components/Button";

export default function UploadImageEntitasUtama() {
    const [file, setFile] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    console.log(id);

    const handleChange = (event) => {
        const image = event.target.files[0];
        setFile(image);
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        setLoading(true);
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

            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Success Upload",
            });
        } catch (error) {
            console.error('Error uploading file:', error);
            Swal.fire({
                icon: "error",
                title: "Oops",
                text: error.response.data.message,
            });
        }
        setLoading(false)
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

                    <Button
                        disabled={loading}
                        svg={loading ? <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg> : <svg
                            className="w-6 h-6 mr-2 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>}
                        name={loading ? "Loading..." : "Upload Image"} />
                </form>
            </div>
        </div>
    );
}
