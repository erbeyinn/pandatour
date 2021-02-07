/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import data from "../data";
import Zoom from "react-reveal/Zoom";
import { useTranslation } from "react-i18next";
import RingLoader from "react-spinners/RingLoader";
import Navbar3 from "./Navbar3";
import Navbar2 from "./Navbar2";

function RecommendDetail(props) {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();

  const recommend = data.recommends.find(
    (x) => x._id === props.match.params.id
  );
  const [selectedImg, setSelectedImg] = useState(recommend.image[0]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="bg-light">
          <Navbar3 />
          <Navbar2 />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div>
                  <h1 className="text-center font-weight-bold after">
                    {recommend.title}
                  </h1>
                  <img
                    src={selectedImg}
                    alt="Selected"
                    className="selected selected2"
                    style={{ width: "1110px", height: "400px" }}
                  />
                </div>

                <Zoom>
                  <div className="imgContainer d-flex  flex-wrap justify-content-center">
                    {recommend.image.map((recommend, index) => (
                      <img
                        className="imgDetail"
                        style={{
                          border:
                            selectedImg === recommend ? "1px solid #000" : "",
                        }}
                        key={index}
                        src={recommend}
                        alt="holiday"
                        onClick={() => setSelectedImg(recommend)}
                      />
                    ))}
                  </div>
                </Zoom>
              </div>
              <div className="col-12">
                <div className="mt-5">
                  <div className="d-flex  flex-wrap justify-content-center">
                    {recommend.program ? (
                      <ul className="ml-3">
                        <h3 className="text-center after">Tour Program</h3>
                        {recommend.program.map((p, index) => (
                          <li
                            className="text-center"
                            style={{ listStyle: "none" }}
                            key={index}
                          >
                            {p}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                    {recommend.include ? (
                      <ul className="ml-3">
                        <h3 className="text-center after">What's Included</h3>
                        {recommend.include.map((i, index) => (
                          <li
                            className="text-center"
                            style={{ listStyle: "none" }}
                            key={index}
                          >
                            {i}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}

                    {recommend.more ? (
                      <ul className="ml-3">
                        <h3 className=" text-center after">More Information</h3>

                        {recommend.more.map((m, index) => (
                          <li
                            className="text-center"
                            style={{ listStyle: "none" }}
                            key={index}
                          >
                            {m}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}

                    {recommend.bring ? (
                      <ul className="ml-3">
                        <h3 className="text-center after ">Bring Along</h3>

                        {recommend.bring.map((b, index) => (
                          <li
                            className="text-center"
                            style={{ listStyle: "none" }}
                            key={index}
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                    {recommend.notInclude ? (
                      <ul className="ml-3">
                        <h3 className=" text-center after">Not Included</h3>

                        {recommend.notInclude.map((n, index) => (
                          <li
                            className="text-center"
                            style={{ listStyle: "none" }}
                            key={index}
                          >
                            {n}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="row ">
                <div className="m-3 d-flex flex-column flex-wrap">
                  <div className="">
                    <h1 className="text-center">About Tour</h1>
                    <p>{recommend.about}</p>
                    <p>{recommend.about_2}</p>
                    <p>{recommend.about_3}</p>
                  </div>
                  {recommend.about_4 &&
                  recommend.about_5 &&
                  recommend.about_6 &&
                  recommend.about_7 &&
                  recommend.about_8 ? (
                    <div>
                      <h1 className="text-center">More Information</h1>
                      <p>{recommend.about_4}</p>
                      <p>{recommend.about_5}</p>
                      <p>{recommend.about_6}</p>
                      <p>{recommend.about_7}</p>
                      <p>{recommend.about_8}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
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

export default RecommendDetail;
