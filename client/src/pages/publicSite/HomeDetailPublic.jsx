import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HomeDetailPublic() {

  const [dataProducts, setDataProducts] = useState([]);
    const {id} = useParams();

    const fetchData = async () => {
        try {
            const { data } = await axios({
                method: "get",
                url: `https://brandedthings.reinawan.fun/pub/products/${id}`
            });
            setDataProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
      <>
        <div className="p-4 sm:ml-74 flex items-center justify-center h-screen">
          <div className="p-8 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-l">
              <img
                className="object-cover w-full max-w-[400px] rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg"
                src={dataProducts.imgUrl}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{dataProducts.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dataProducts.description}</p>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{`Rp ${dataProducts.price}`}</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  