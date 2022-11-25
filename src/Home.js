import React from "react";
import BrandJSON from './assets/json/brand-details.json';

const Home = () => {
    return (
        <div class="index--content">
            <div class="left">
                <span>
                    WELCOME TO {`${BrandJSON.brandName}`} <br />
                    EST 2022
                </span>
            </div>

            <div class="center">

            </div>

            <div class="right">
                <span>
                    WINTER COLLECTION <br />
                    05/05/22
                </span>
            </div>
        </div>
    )
}

export default Home;