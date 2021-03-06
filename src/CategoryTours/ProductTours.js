import React from 'react';
import data from "../data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const ProductTours = () => {

     const { t} = useTranslation();
    return (
      <div>
        
        <div>
          <h3 className="text-center font-weight-bold"> Tours</h3>
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
      </div>
    );
}

export default ProductTours
