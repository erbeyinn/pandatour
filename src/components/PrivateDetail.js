
import React, {  useEffect, useState } from "react";
import data from '../data'
import Zoom from 'react-reveal/Zoom'





 function PrivatDetail(props) {
    
const priv = data.privs.find(x =>x._id === props.match.params.id)
  const [selectedImg, setSelectedImg] = useState(priv.image[0]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false),100)
  }, [])
 



  return (
    <>
    

      {loading === false ? (
        <div>
          <div className="">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="text-center font-weight-bold">{priv.title}</h1>
                  <img
                    src={selectedImg}
                    alt="Selected"
                    className="selected selected2"
                  />
                </div>

                <Zoom>
                  <div className="imgContainer d-flex  flex-wrap justify-content-center">
                    {priv.image.map((priv, index) => (
                      <img
                        className=""
                        style={{
                          border: selectedImg === priv ? "1px solid #ccc" : "",
                          width: "83px",
                        }}
                        key={index}
                        src={priv}
                        alt="holiday"
                        onClick={() => setSelectedImg(priv)}
                      />
                    ))}
                  </div>
                </Zoom>

                <div className="col-12">
                  <div className="d-flex  flex-nowrap justify-content-around">
                    {priv.program ? (
                      <ul className="ml-3" style={{ listStyle: "none" }}>
                        <h2 className="text-center after">Tour Program</h2>
                        {priv.program.map((p, index) => (
                          <li className="text-center" key={index}>
                            {p}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                    {priv.include ? (
                      <ul className="ml-3" style={{ listStyle: "none" }}>
                        <h2 className="text-center after">What's Included</h2>
                        {priv.include.map((i, index) => (
                          <li className="text-center" key={index}>
                            {i}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                    {priv.more ? (
                      <ul className="ml-3" style={{ listStyle: "none" }}>
                        <h2 className="text-center after">More Information</h2>

                        {priv.more.map((m, index) => (
                          <li className="text-center" key={index}>
                            {m}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="row ">
                  <div className=" m-3 d-flex flex-column flex-wrap">
                    <div className="m-2">
                      <h1 className="text-center after">About Tour</h1>
                      <p>{priv.about}</p>
                      <p>{priv.about_2}</p>
                      <p>{priv.about_3}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default PrivatDetail

