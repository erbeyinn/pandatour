import React, { useEffect, useState } from 'react'
import data from '../data'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import Navbar3 from '../components/Navbar3'
import RingLoader from "react-spinners/RingLoader";
const PrivaTours = () => {
     // eslint-disable-next-line no-unused-vars
     const {t, i18n} = useTranslation()
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
            <Fade left>
              <div className="container-fluid bg-light">
                <div>
                  <h3 className="text-center">Private Tours</h3>
                </div>
                <div className="m-0 ">
                  <div className="row">
                    {data.privs.map((priv) => (
                      <div
                        className="col-xl-4 col-lg-4 col-md-6 col-sm-12 "
                        key={priv._id}
                      >
                        <div
                          className="card"
                          style={{ borderBottom: "1px solid #ccc" }}
                        >
                          <Link to={"/priv/" + priv._id}>
                            <img
                              src={priv.image[0]}
                              className="card-img-top img"
                              alt="..."
                            />{" "}
                          </Link>

                          <div className="card-body">
                            <h5 className="card-title">{priv.title}</h5>
                            <p className="card-text">{t("Body.1")}</p>
                            <div className="d-flex justify-content-between">
                              <Link to={"/priv/" + priv._id}>
                                {" "}
                                <button className="kalamar">
                                  {t("MoreInfo.1")}
                                </button>{" "}
                              </Link>

                              <p className="text-muted ">
                                Price: <b>{priv.price}£</b>
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

export default PrivaTours
