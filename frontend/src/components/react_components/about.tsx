import { useState, useEffect } from "react";
import { fetchAboutCards } from "../../data/api";

const AboutCardList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAboutCards();
    },[]);

    return (
        <p></p>
    )
}

export default AboutCardList;
