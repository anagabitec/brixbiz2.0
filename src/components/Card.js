import React from "react";

function Card() {
  return (
    
    <div className="card map-card">
      {/* <div id="map-container-google-1" className="z-depth-1-half map-container" style="height: 500px">
        {/* <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
          style="border:0" allowfullscreen></iframe> */}
      {/* </div> */}
      <div class="card-body closed px-0">

        <div class="button px-2 mt-3">
          <a className="btn-floating btn-lg living-coral float-right"><i className="fas fa-bicycle"></i></a>
        </div>

        <div className="white px-4 pb-4 pt-3-5">


          <h5 className="card-title h5 living-coral-text">Central Park Zoo</h5>

          <div className="d-flex justify-content-between living-coral-text">
            <h6 className="card-subtitle font-weight-light">A place to relax</h6>
            <h6 className="font-small font-weight-light mt-n1">25 min</h6>
          </div>

          <hr />

            <div className="d-flex justify-content-between pt-2 mt-1 text-center text-uppercase living-coral-text">
              <div>
                <i className="fas fa-phone fa-lg mb-3"></i>
                <p className="mb-0">Call</p>
              </div>
              <div>
                <i className="fas fa-cat fa-lg mb-3"></i>
                <p className="mb-0">Love</p>
              </div>
              <div>
                <i className="far fa-grin-beam-sweat fa-lg mb-3"></i>
                <p className="mb-0">Smile</p>
              </div>
            </div>

            <hr />

            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row" className="px-0 pb-3 pt-2">
                    <i className="fas fa-map-marker-alt living-coral-text"></i>
                  </th>
                  <td className="pb-3 pt-2">East 64th Street, New York, NY 10021, US</td>
                </tr>
                <tr className="mt-2">
                  <th scope="row" className="px-0 pb-3 pt-2">
                    <i className="far fa-clock living-coral-text"></i>
                  </th>
                  <td className="pb-3 pt-2"><span className="deep-purple-text mr-2"> Closed</span> Opens 10 AM</td>
                </tr>
                <tr className="mt-2">
                  <th scope="row" className="px-0 pb-3 pt-2">
                    <i className="fas fa-cloud-moon living-coral-text"></i>
                  </th>
                  <td className="pb-3 pt-2">Sunny weather tommorow</td>
                </tr>
              </tbody>
            </table>
            
            <hr />
            
        </div>
        </div>
      </div>

      );
    }
    
    export default Card;
