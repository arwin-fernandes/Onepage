import React from "react";
// import Form from 'forms'

function Form() {
  return (
    <div class="p-3" text-lg-center>
      <div class="container ">
        <div class="row g-7 text-lg-right">
          <div class="col-md-6">
            <div class="">
              <div class="card-body">
                <p class="card-title  ">
                  <h1>
                    Gaet and aamzing With supportingtext below as a natural
                    lead-in to additional conten
                  </h1>
                </p>
                <p class="">
                  A delighful new away hdhbsb fdhfbdhbfj
                  bjfbdhfdbjdbvbdhbvhdbvbdvbdbvhb
                </p>
                <div class="col-sm-12">
                  <form>
                    <div class="row">
                      <div class="col">
                        <div class="input-group lg-7">
                          <input
                            type="text"
                            class="form-control text-center"
                            id="inputGroup-sizing-lg"
                            placeholder="Your E-mail"
                            aria-label="Username"
                            aria-describedby="b"
                          ></input>
                          <div class="input-group-append"></div>
                        </div>
                      </div>
                      <div class="col">
                        <button class=" btn-success btn" type="submit">
                          Notify Me
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="p-3 text-center ">
              <img
                height={200}
                width={150}
                src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                alt="car"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
