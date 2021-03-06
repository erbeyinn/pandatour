/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import data from "../data";
import Fade from "react-reveal/Fade";
import RingLoader from "react-spinners/RingLoader";
import Navbar3 from "../components/Navbar3";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
const AirportTransfer = () => {
  const AirportTransferSection = styled.div``;
  const BorderSection = styled.div``;
  const Container = styled.div``;
  // eslint-disable-next-line no-unused-vars
  const Wrap = styled.div`
    display: flex;
    cursor: pointer;
  `;
  const DropDown = styled.div``;

  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const toggle = (id) => {
    if (clicked === id) {
      return setClicked(null);
    } else {
      setClicked(id);
    }
  };

  return (
    <>
      {loading === false ? (
        <div>
          <Navbar3 />
          <Navbar2 />
          <div className="container">
            <div>
              <ul className="d-flex" style={{ listStyle: "none" }}>
                <li>
                  <img style={{ width: "100%" }} src="./images/panda.jpg" />
                </li>
                <li>
                  <img style={{ width: "100%" }} src="./images/panda2.jpg" />
                </li>
                <li>
                  <img style={{ width: "100%" }} src="./images/panda3.jpg" />
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <p className="text-muted">
                We are here to help! We can take you from airport to resort or
                hotel you are staying . There is no need to worry about getting
                lost or having to find transportation. Simply contact us ahead
                of time to make the arrangement, and our driver will be waiting
                for you at the airport when you arrive!
              </p>
              <p className="text-muted">
                We also offer group transfer via our minibuses, coaches. So
                whether you are traveling alone, with just a few friends or
                family members, or with a group of up to fifty people, we can
                get you where you need to go! Let us put your mind at easy when
                you are finalising your travel plans.
              </p>
            </div>
            <div className="mt-4">
              <h3>Arrivals:</h3>
              <p className="mt-3 text-muted">
                A driver will meet you at the Airport arrival area bearing a
                sign with your name on it. Full luggage assistance is provided
                to your holiday resort.
              </p>
            </div>
            <div className="mt-3">
              <h3>Departures:</h3>
              <p className="mt-3 text-muted">
                When you leave a driver will pick you up from the hotel lounge
                at the time of your choice.You will be dropped off in front of
                the Departures terminal building safely and on time.
              </p>
            </div>
            <div>
              <h3>Questions:</h3>
            </div>
            <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
              <AirportTransferSection>
                <Container>
                  <ul className="mt-2  grid2 ">
                    {data.qnas.map((qna, id) => (
                      <>
                        <BorderSection className="border2 ">
                          <div className="d-flex">
                            <span
                              onClick={() => toggle(id)}
                              className="plusminus ml-2 mb-2"
                              style={{ marginTop: "12px" }}
                            >
                              {clicked === id ? <FiMinus /> : <FiPlus />}
                            </span>
                            <li
                              style={{ listStyle: "none", cursor: "pointer" }}
                              className="d-flex ml-2"
                              onClick={() => toggle(id)}
                            >
                              {" "}
                              <h6 className="mt-3">{qna.question} </h6>{" "}
                            </li>
                          </div>

                          {clicked === id ? (
                            <Fade>
                              <DropDown>
                                <li
                                  className=" text-muted mr-5"
                                  style={{ marginLeft: "50px" }}
                                >
                                  {qna.answer}
                                </li>
                              </DropDown>
                            </Fade>
                          ) : null}
                        </BorderSection>
                      </>
                    ))}
                  </ul>
                </Container>
              </AirportTransferSection>
            </IconContext.Provider>
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

export default AirportTransfer;
