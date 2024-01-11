import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function TableListProducts({ products, onDelete }) {

    const handleDelete = async () => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            });

            if (result.isConfirmed) {
                await axios.delete(`https://brandedthings.reinawan.fun/product/${products.id}`,
                    { headers: { Authorization: 'Bearer ' + localStorage.access_token } });

                onDelete(products.id);

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }


        } catch (error) {
            console.error("errordelete", error);
        }
        console.log("Delete button clicked");
    };

    return (
        <>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4">
                        <img src={products.imgUrl} className="w-16 md:w-32 max-w-full max-h-full" alt="img"></img>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {products.name}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {products.description}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {"Rp " + products.price}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {products.Category.name}
                    </td>

                    <td className="px-6 py-4 text-center">
                        <Link to={`/edit/${products.id}`} data-modal-target="editEntitasUtama-modal" data-modal-toggle="editEntitasUtama-modal" type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</Link>

                        <Link to={'/upload'} data-modal-target="UploadImageEntitasUtama-modal"
                            data-modal-toggle="UploadImageEntitasUtama-modal" type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Upload</Link>

                        <button
                            type="button"
                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </>
    );
}