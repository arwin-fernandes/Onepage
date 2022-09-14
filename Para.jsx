import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Para() {
  return (
    <div>
      <div class="container p-lg-3">
        <div class="row">
          <div class="col">
            <button class=" btn- btn text-success" type="submit">
              <h1>
                {" "}
                <b>Digitizing</b>
              </h1>
            </button>
          </div>
          <div class="col">
            <h3 class="text-center">
              <b>About</b>
            </h3>
          </div>
          <div class="col">
            <h3 class="text-center">
              <b>Contact</b>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Para;
