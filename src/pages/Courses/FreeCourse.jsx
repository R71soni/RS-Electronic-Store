import { Link } from "react-router-dom";

function FreeCourse({ course }) {

    // Free products
    const freeProducts = (course || []).filter(
        (item) => item.id <= 12
    );

    return (
        <div style={styles.page}>


            {/* Products Container */}
            <div style={styles.container}>

                {freeProducts.map((item) => (

                    <div
                        key={item.id}
                        style={styles.card}
                    >

                        {/* Product Image */}
                        <div style={styles.imageContainer}>

                            <img
                                src={item.image}
                                alt={item.title}
                                style={styles.image}
                            />

                        </div>


                        {/* Product Title */}
                        <h3 style={styles.title}>
                            {item.title}
                        </h3>


                        {/* Category */}
                        <p style={styles.category}>
                            {item.category}
                        </p>


                        {/* Price */}
                        <h2 style={styles.price}>
                            ${item.price}
                        </h2>


                        {/* Description */}
                        <p style={styles.description}>
                            {item.description.substring(0, 80)}...
                        </p>


                        {/* Rating */}
                        <p style={styles.rating}>
                            ⭐ {item.rating.rate}
                            <span style={styles.review}>
                                ({item.rating.count} Reviews)
                            </span>
                        </p>


                        {/* View Product */}
                        <Link
                            to={`/product/${item.id}`}
                            style={styles.button}
                        >
                            View Product
                        </Link>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default FreeCourse;


const styles = {

    // Full Page
    page: {
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "30px 20px",
        boxSizing: "border-box",
    },


    // Heading
    heading: {
        textAlign: "center",
        marginBottom: "30px",
        fontSize: "32px",
        fontWeight: "bold",
    },


    // Product Container
    container: {
        width: "100%",
        display: "grid",
        gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "25px",
        boxSizing: "border-box",
    },


    // Product Card
    card: {
        width: "100%",
        minHeight: "520px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,.15)",
        textAlign: "center",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
    },


    // Image Container
    imageContainer: {
        width: "100%",
        height: "230px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },


    // Product Image
    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },


    // Title
    title: {
        marginTop: "20px",
        fontSize: "18px",
        fontWeight: "bold",
        minHeight: "50px",
    },


    // Category
    category: {
        color: "gray",
        textTransform: "capitalize",
        marginTop: "10px",
    },


    // Price
    price: {
        color: "green",
        margin: "10px 0",
        fontSize: "24px",
    },


    // Description
    description: {
        color: "#555",
        fontSize: "14px",
        lineHeight: "22px",
        flex: 1,
    },


    // Rating
    rating: {
        marginTop: "15px",
    },


    // Reviews
    review: {
        color: "gray",
        marginLeft: "5px",
    },


    // View Product Button
    button: {
        display: "block",
        marginTop: "20px",
        padding: "12px 20px",
        backgroundColor: "royalblue",
        color: "#fff",
        borderRadius: "6px",
        cursor: "pointer",
        textDecoration: "none",
        fontWeight: "bold",
    },

};