import { useNavigate } from "react-router-dom";

function PaidCourse({ course }) {

    const navigate = useNavigate();

    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

                {course
                    .filter((item) => item.id > 12)
                    .map((item) => (

                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-lg p-5"
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-60 object-contain"
                            />

                            <h3 className="font-bold text-lg mt-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 capitalize mt-2">
                                {item.category}
                            </p>

                            <h2 className="text-green-600 text-2xl font-bold mt-3">
                                ${item.price}
                            </h2>

                            <p className="text-gray-600 mt-3">
                                {item.description.substring(0, 80)}...
                            </p>

                            <p className="mt-3">
                                ⭐ {item.rating.rate}
                            </p>


                            {/* View Product */}
                            <button
                                onClick={() =>
                                    navigate(`/product/${item.id}`)
                                }
                                className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                            >
                                View Product
                            </button>

                        </div>

                    ))}

            </div>
        </>
    );
}

export default PaidCourse;