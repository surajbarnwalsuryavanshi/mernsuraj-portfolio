import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { TfiGallery } from "react-icons/tfi";
import Image1 from "../../images/image1.jpg";
import Image2 from "../../images/image2.jpg";
import Image3 from "../../images/image3.jpg";
import Image4 from "../../images/image4.jpg";
import Image5 from "../../images/image5.jpg";
import "./styles.scss"

const portfolioData = [
    {
        id: 3,
        name: "Ecomerce",
        image: Image1,
        link: "",
    },
    {
        id: 3,
        name: "Game",
        image: Image2,
        link: "https://iqtestgame.netlify.app/",
    },
    {
        id: 2,
        name: "Portfolio",
        image: Image3,
        link: "",
    },
    {
        id: 2,
        name: "Jeveline",
        image: Image4,
        link: "",
    },
    {
        id: 3,
        name: "Weather",
        image: Image5,
        link: "",
    }
]

const filterData = [
    {
        filterId: 1,
        label: "All",
    },
    {
        filterId: 2,
        label: "Development",
    },
    {
        filterId: 3,
        label: "Design",
    },
]

const Portfolio = () => {

    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    const handleFilter = (currentId) => {
        setFilteredValue(currentId);
    }

    const handleHover = (index) => {
        setHoveredValue(index);
    }

    // console.log("============================================");
    // console.log("filteredValue", filteredValue);
    // console.log("============================================");

    // console.log("============================================");
    // console.log("hoveredValue", hoveredValue);
    // console.log("============================================");

    const filteredItems = filteredValue === 1 ? portfolioData :
        portfolioData.filter((item) => item.id === filteredValue);

    console.log("filteredItems", filteredItems);


    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<TfiGallery size={40} />}
            />

            <div className="portfolio__content">

                <ul className="portfolio__content__filter">
                    {filterData.map((item) => (
                        <li className={item.filterId === filteredValue ? "active" : ""} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                            {
                                item.label
                            }
                        </li>
                    ))}
                </ul>

                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item, index) => (
                            <div className="portfolio__content__cards__item"
                                key={`cardItem${item.name.trim()}`}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}
                            >
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a>
                                        <img src={item.image} alt="dummy data" />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <button>Visit</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    );
}
export default Portfolio;