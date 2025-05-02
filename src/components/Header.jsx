import React from "react";
import banner from "../assets/sushi-sensei-banner_1.png";

class Header extends React.Component {
    render() {
        return (
            <header
                className="hero_in detail_page background-image"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px",
                }}
            >
                <div
                    className="wrapper opacity-mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                    <div className="container">
                        <div className="main_info">
                            <div className="text_center">
                                <h1>Sushi Sensei</h1>
                                <p>Hansaallee 162</p>
                                <p>Japanese, Sushi, Fitness, Vegetarian, Vegan, Fish.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;