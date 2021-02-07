import React, { useEffect, useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import RingLoader from "react-spinners/RingLoader";
import Navbar3 from "../components/Navbar3";
import Navbar2 from "../components/Navbar2";

const ProductTours = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div>
          <Navbar3/>
          <Navbar2/>
          <div>
            <h3 className="text-center"> Tours</h3>
          </div>

          <div className=" ">
            <div className="row">
              {data.products.map((product) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                  key={product._id}
                >
                  <div
                    className="card"
                    style={{ borderBottom: "1px solid #ccc" }}
                  >
                    <Link to={"/product/" + product._id}>
                      <img
                        src={product.image[0]}
                        className="card-img-top img"
                        alt="..."
                      />{" "}
                    </Link>

                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{t("Body.1")}</p>
                      <div className="d-flex justify-content-between">
                        <Link to={"/product/" + product._id}>
                          {" "}
                          <button className="kalamar">
                            {t("MoreInfo.1")}
                          </button>{" "}
                        </Link>

                        <p className="text-muted ">
                          Price: <b>{product.price}£</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
};

export default ProductTours;
