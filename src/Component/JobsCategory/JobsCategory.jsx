import axios from "axios";
import { useEffect, useState } from "react";
import Jobscard from "../JobsCard/Jobscard";


const JobsCategory = () => {
    const [categoryname, setCategoryname] = useState('web development');
    const [cards, setCards] = useState([]);
    useEffect(() => {
        // Fetch data based on the selected category
        axios.get(`http://localhost:5000/jobs?category=${categoryname}`)
            .then(res => setCards(res.data))

    }, [categoryname]);
    console.log(cards)
    return (
        <div>
            <div className="tabs tabs-boxed flex justify-between text-lg font-bold">
                <a className={`tab ${categoryname === 'web development' ? 'tab-active' : ''}`} onClick={() => setCategoryname('web development')}>Web Development</a>
                <a className={`tab ${categoryname === 'digital marketing' ? 'tab-active' : ''}`} onClick={() => setCategoryname('digital marketing')}>Digital Marketing</a>
                <a className={`tab ${categoryname === 'graphics design' ? 'tab-active' : ''}`} onClick={() => setCategoryname('graphics design')}>Graphics Design</a>
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