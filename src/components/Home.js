/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Navbar3 from "./Navbar3";
import Navbar2 from "./Navbar2";
import Slider2 from "./Slider";
import { useTranslation } from "react-i18next";
import RecommendedTours from "../CategoryTours/RecommendedTours";
import PrivateTours from "../CategoryTours/PrivateTours";
import ProductTours from "../CategoryTours/ProductTours";
import RingLoader from "react-spinners/RingLoader";
import Footer from "./Footer";

function Home(props) {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div>
          <Navbar3 />
          <Navbar2 />
          <Fade left>
            <div className="container-fluid bg-light">
              <Slider2 />
              <div>
                <ProductTours />
              </div>
              <div className="mt-4">
                <RecommendedTours />
              </div>
              <div className="mt-4">
                <PrivateTours />
              </div>
            </div>
          </Fade>
          <Footer />
        </div>
      ) : (
        <div className=" row">
          <div className="col-12">
            <div
              className="d-flex justify-content-center align-middle"
              style={{ marginTop: "300px" }}
            >
              <RingLoader color={"orange"} loading={loading} size={60} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
