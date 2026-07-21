import { useEffect, useState } from "react";
import FreeCourse from "./FreeCourse";
import PaidCourse from "./PaidCourse";



function Course() {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        const getPost = async () => {

            try {
                const response = await fetch("https://fakestoreapi.com/products");

                const data = await response.json();

                setCourse(data);
            } catch (error) {
                console.log("Error:", error);
            }
        };

        getPost();
    }, []);

    return (
        <>
            <PaidCourse course={course} />
            <FreeCourse course={course} />
        </>
    );
}

export default Course;

