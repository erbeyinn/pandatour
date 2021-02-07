import React, { useEffect, useState } from 'react'
import RingLoader from "react-spinners/RingLoader";
import Footer from './Footer';
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';

const Contact = () => {
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
            <div className="container" style={{ height: "100%" }}>
              <div className="row">
                <div className="col-12">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Contact Information</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Phone</td>
                        <td> +90252 286 82 22</td>
                      </tr>
                      <tr>
                        <td>Mobile</td>
                        <td> +90532 610 98 27</td>
                      </tr>
                      <tr>
                        <td>Whatsapp</td>
                        <td> +90532 610 98 27</td>
                      </tr>
                      <tr>
                        <td>E-Mail</td>
                        <td> pandatour48@gmail.com</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>
                          {" "}
                          Sarıgerme Mahallesi 292/4 Sokak 48600 Ortaca - Muğla
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th>Working Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>08:30 - 19:00</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td> 08:30 - 19:00</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>08:30 - 19:00</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td> 08:30 - 19:00</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td> 08:30 - 19:00</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td> 09:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td> 09:00 - 18:00</td>
                  </tr>
                </tbody>
              </table>
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

export default Contact
