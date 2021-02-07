/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import data from "../data";
import Zoom from "react-reveal/Zoom";
import RingLoader from "react-spinners/RingLoader";
import Navbar3 from "./Navbar3";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";

function RentHouses(props) {
  const rent = data.rents.find((x) => x._id === props.match.params.id);
  const [selectedImg, setSelectedImg] = useState(rent.image[0]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div>
          <Navbar3 />
          <Navbar2 />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div>
                  <h1 className="text-center font-weight-bold">{rent.title}</h1>
                  <img
                    src={selectedImg}
                    alt="Selected"
                    className="selected selected2"
                  />
                </div>

                <Zoom>
                  <div className="imgContainer d-flex  flex-wrap justify-content-center">
                    {rent.image.map((rent, index) => (
                      <img
                        className="imgDetail"
                        style={{
                          border: selectedImg === rent ? "1px solid #000" : "",
                          width: "90px",
                        }}
                        key={index}
                        src={rent}
                        alt="holiday"
                        onClick={() => setSelectedImg(rent)}
                      />
                    ))}
                  </div>
                </Zoom>
              </div>
              <div className="col-12">
                <div className="mt-5">
                  <div className="d-flex  flex-wrap justify-content-center">
                    {rent.ins ? (
                      <ul className="ml-3" style={{ listStyle: "none" }}>
                        <h3 className="text-center after">In House</h3>
                        {rent.ins.map((p, index) => (
                          <li className="text-center" key={index}>
                            {p}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                    {rent.outs ? (
                      <ul className="ml-3" style={{ listStyle: "none" }}>
                        <h3 className="text-center after">Out House</h3>
                        {rent.outs.map((i, index) => (
                          <li className="text-center" key={index}>
                            {i}
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
                <div className="m-3 mt-5">
                  <div className="">
                    <h3 className="text-center after">About Tour</h3>
                    <p>{rent.about}</p>
                    <p>{rent.about2}</p>
                    <p>{rent.about3}</p>
                    <p>{rent.about4}</p>
                    <p>{rent.about5}</p>
                  </div>
                </div>
              </div>
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
}

export default RentHouses;
