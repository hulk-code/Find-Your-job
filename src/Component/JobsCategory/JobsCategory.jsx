import axios from "axios";
import { useEffect, useState } from "react";
import Jobscard from "../JobsCard/Jobscard";


const JobsCategory = () => {
    const [category, setCategory] = useState('web development');
    const [cards, setCards] = useState([]);
    useEffect(() => {
        // Fetch data based on the selected category
        axios.get(`http://localhost:5000/jobs/${category}`)
            .then(res => setCards(res.data))

    }, [category]);
    console.log(cards)
    return (
        <div>
            <div className="tabs tabs-boxed flex justify-between text-lg font-bold">
                <a className={`tab ${category === 'web development' ? 'tab-active' : ''}`} onClick={() => setCategory('web development')}>Web Development</a>
                <a className={`tab ${category === 'digital marketing' ? 'tab-active' : ''}`} onClick={() => setCategory('digital marketing')}>Digital Marketing</a>
                <a className={`tab ${category === 'graphics design' ? 'tab-active' : ''}`} onClick={() => setCategory('graphics design')}>Graphics Design</a>
            </div>

            <div className="cards-container flex gap-6 ">
                {
                    cards.map(card => <Jobscard card={card} key={card._id}></Jobscard>)
                }
            </div>
        </div>
    );
};



export default JobsCategory;