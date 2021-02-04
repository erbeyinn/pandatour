import React from 'react'

const Contact = () => {
    return (
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
                  <td> Sarıgerme Mahallesi 292/4 Sokak 48600 Ortaca - Muğla</td>
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
    );
}

export default Contact
