import React from "react";
import "./Categories.scss";
import Slider from "../../components/Slider/Slider";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img className="left-image" src="../img/img1.png" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Comprar</Link>
                    </button>
                </div>
                <div className="row">
                    <img className="left-image" src="../img/img2.png" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Comprar2</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img className="big-image" src="../img/img3.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Comprar3</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="../img/img4.png" alt="" />
                            <button>
                                <Link className="link" to="/products/1">Comprar4</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row">
                        <img src="../img/img5.png" alt="" />
                        <button>
                            <Link className="link" to="/products/1">Comprar5</Link>
                        </button>
                    </div>
                </div>
                <div className="row">
                <img src="../img/img6.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Comprar6</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories