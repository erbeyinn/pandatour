/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import data from "../data";
import Zoom from "react-reveal/Zoom";
import RingLoader from "react-spinners/RingLoader";
import Navbar3 from "./Navbar3";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";

function ProductDetail(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  const [selectedImg, setSelectedImg] = useState(product.image[0]);
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
          <div
            className="container text-break"
            style={{ marginLeft: "0 !important" }}
          >
            <div className="row d-flex flex-column">
              <div className="col-12">
                <h1 className="text-center font-weight-bold after">
                  {product.title}
                </h1>
                <img
                  src={selectedImg}
                  alt="Selected"
                  className="selected selected2"
                />
              </div>

              <div className="  ">
                <Zoom>
                  <div className="imgContainer d-flex  flex-wrap justify-content-center">
                    {product.image.map((product, index) => (
                      <img
                        className="ml-2 imgDetail"
                        style={{
                          border:
                            selectedImg === product ? "1px solid #000" : "",
                        }}
                        key={index}
                        src={product}
                        alt="holiday"
                        onClick={() => setSelectedImg(product)}
                      />
                    ))}
                  </div>
                </Zoom>
              </div>

              <div className="col-12">
                <div className="mt-5">
                  <div className="d-flex  flex-wrap text-break justify-content-center">
                    {product.program ? (
                      <ul className="ml-3">
                        <h3 className="text-center after">Tour Program</h3>
                        {product.program.map((p, index) => (
                          <li
                            className=" text-center"
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
                    {product.include ? (
                      <ul className="ml-3">
                        <h3 className="text-center after">What's Included</h3>
                        {product.include.map((i, index) => (
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

                    {product.more ? (
                      <ul className="ml-3">
                        <h3 className="text-center after">More Information</h3>

                        {product.more.map((m, index) => (
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

                    {product.bring ? (
                      <ul className="ml-3">
                        <h3 className="text-center after">Bring Along</h3>

                        {product.bring.map((b, index) => (
                          <li
                            className=" text-center"
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
                    {product.notInclude ? (
                      <ul className="ml-3">
                        <h2 className="">Not Included</h2>

                        {product.notInclude.map((n, index) => (
                          <li
                            className=""
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
                <div className="m-3 d-flex flex-column flex-wrap ">
                  {product.tour_1 &&
                  product.tour_2 &&
                  product.tour_3 &&
                  product.tour_4 &&
                  product.tour_5 ? (
                    <div>
                      <h1 className="text-center text-wrap after">
                        Tour Program
                      </h1>
                      <p className="text-break ">{product.tour_1}</p>
                      <p className="text-break">{product.tour_2}</p>
                      <p className="text-break">{product.tour_3}</p>
                      <p className="text-break">{product.tour_4}</p>
                      <p className="text-break">{product.tour_5}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="text-break">
                    <h1 className="text-center text-wrap after">About Tour</h1>
                    <p className="text-break">{product.about}</p>
                    <p className="text-break">{product.about_2}</p>
                    <p className="text-break">{product.about_3}</p>
                  </div>
                  {product.about_9 ? (
                    <div>
                      <h1 className="text-center text-wrap after">
                        More Information
                      </h1>
                      <p>{product.about_9}</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {product.about_4 && product.about_5 && product.about_6 ? (
                    <div>
                      <h1 className="text-center">More Information</h1>
                      <p>{product.about_4}</p>
                      <p>{product.about_5}</p>
                      <p>{product.about_6}</p>
                    </div>
                  ) : (
                    ""
                  )}
                  {product.doplhin_1 &&
                  product.doplhin_2 &&
                  product.doplhin_3 &&
                  product.doplhin_4 &&
                  product.doplhin_5 &&
                  product.doplhin_6 &&
                  product.doplhin_7 &&
                  product.doplhin_8 ? (
                    <div>
                      <h1>Rules for participants of swim-with-dolphins</h1>
                      <p>{product.doplhin_1}</p>
                      <p>{product.doplhin_2}</p>
                      <p>{product.doplhin_3}</p>
                      <p>{product.doplhin_4}</p>
                      <p>{product.doplhin_5}</p>
                      <p>{product.doplhin_6}</p>
                      <p>{product.doplhin_7}</p>
                      <p>{product.doplhin_8}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <Footer/>
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

export default ProductDetail;
