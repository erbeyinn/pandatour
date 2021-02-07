import React, { useEffect, useState } from "react";
import data from "../data";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PacmanLoader from "react-spinners/PacmanLoader";

const RecommendedTours = () => {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div>
          <Fade left>
            <div className="container-fluid bg-light">
              <div>
                <h3 className="text-center font-weight-bold">
                  Recommended Tours
                </h3>
              </div>
              <div className="m-0 ">
                <div className="row">
                  {data.recommends.map((recommend) => (
                    <div
                      className="col-xl-4 col-lg-4 col-md-6 col-sm-12 "
                      key={recommend._id}
                    >
                      <div
                        className="card"
                        style={{ borderBottom: "1px solid #ccc" }}
                      >
                        <Link to={"/recommend/" + recommend._id}>
                          <img
                            src={recommend.image[0]}
                            className="card-img-top img"
                            alt="..."
                          />{" "}
                        </Link>

                        <div className="card-body">
                          <h5 className="card-title">{recommend.title}</h5>
                          <p className="card-text">{t("Body.1")}</p>
                          <div className="d-flex justify-content-between">
                            <Link to={"/recommend/" + recommend._id}>
                              {" "}
                              <button className="kalamar">
                                {t("MoreInfo.1")}
                              </button>{" "}
                            </Link>

                            <p className="text-muted ">
                              Price: <b>{recommend.price}£</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        </div>
      ) : (
        <PacmanLoader color={"orange"} loading={loading} size={150} />
      )}
    </>
  );
};

export default RecommendedTours;
