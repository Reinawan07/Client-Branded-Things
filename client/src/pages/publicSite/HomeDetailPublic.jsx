export default function HomeDetailPublic() {
    return (
      <>
        <div className="p-4 sm:ml-74 flex items-center justify-center h-screen">
          <div className="p-8 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-l">
              <img
                className="object-cover w-full max-w-[400px] rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLF8Bwc6vlme8LCvoO2m0mjUL9dpJ2Gdjn6Q&usqp=CAU"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Casual Denim Shirt</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Relaxed and casual denim shirt for a laid-back vibe.</p>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{`Rp 200000`}</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  