import { useState, useEffect } from "react";

const AboutCardList = () => {
    const [data, setData] = useState([]);

    const fetchAboutCards = async () => {
     await fetch('http://localhost:3000/about')
     .then(res => res.json())
     .then(data => setData(data));
    }

    useEffect(() => {
        fetchAboutCards();
    },[data]);

    return (
        <div>
            {data.map((item) => (
                <article key={item.id}>
                    <h3>{item.title}</h3>
                    <ul>
                        {item.technologies.map(tech => (
                            <li>{tech.name}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    )
}

export default AboutCardList;