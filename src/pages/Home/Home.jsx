import React from "react";
import "./Home.scss";
import Slider from "../../components/Slider/Slider";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import Categories from "../../components/Categories/Categories";

const Home = () => {
    return (
        <div className="home">
            <Slider/>
            <FeatureProducts type="Nuevos"/>
            <Categories/>
            <FeatureProducts type=""/>
        </div>
    )
}

export default Home