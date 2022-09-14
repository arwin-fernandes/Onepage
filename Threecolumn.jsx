import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Threecolumn() {
  return (
    <div class="p-3" text-lg-center>
      <div class="container ">
        <div class="row g-7 text-lg-right">
          <div class="col-4"></div>
          <div class="col-sm-10 p-5">
            <div class="">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="text-center">
                      <div class="card-body">
                        <img
                          height={20}
                          width={20}
                          src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                          alt="car"
                        ></img>
                        <h5 class="p-2 text-center">Arwin</h5>
                        <p class="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="text-center">
                      <div class="card-body">
                        <img
                          height={20}
                          width={20}
                          src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                          alt="car"
                        ></img>

                        <h5 class="p-2">Arwin</h5>
                        <p class="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="text-center">
                      <div class="card-body">
                        <img
                          height={20}
                          width={20}
                          src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                          alt="car"
                        ></img>
                        <h5 class="p-2">Arwin</h5>
                        <p class="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Threecolumn;
