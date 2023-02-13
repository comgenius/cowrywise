import React, { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import LoginStyle from "../components/LoginStyle";
import SliderGlide from "../components/SliderGlide";


const Signup = () => {
  const gliderRef = useRef(null);
  const carouselOptions = { type: "slide", perView: 1, startAt: 0,autoplay: 2000 };
  return (
    <div className="container auth-area">
      <LoginStyle />
      <div className="grid">
        <div className="c-no-gutter c-xs-12">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              svg-inline=""
              role="presentation"
              focusable="false"
              tabIndex={-1}
              className="cw-logo"
              >
              <path
                d="M14.896.5H6.828l-.016.028L5.7 2.571h9.197c6.812 0 12.338 5.564 12.338 12.427 0 6.863-5.524 12.426-12.338 12.426-6.815 0-12.34-5.564-12.34-12.426 0-1.299.202-2.589.599-3.824H5.51c-1.67 4.156-.448 8.923 3.01 11.746a10.067 10.067 0 0012.034.533c3.692-2.506 5.325-7.146 4.024-11.434-1.301-4.287-5.23-7.216-9.682-7.216H4.483l-1.129 2.07h11.542c3.625 0 6.805 2.437 7.772 5.956.967 3.52-.516 7.256-3.625 9.134a8.023 8.023 0 01-9.708-1.08 8.166 8.166 0 01-1.558-9.71h2.669a5.924 5.924 0 00-.207 7.381 5.824 5.824 0 007.113 1.787c2.494-1.16 3.85-3.912 3.26-6.614-.591-2.702-2.97-4.626-5.716-4.624H2.138L1.01 11.174a14.62 14.62 0 00-.51 3.824c0 8.006 6.445 14.497 14.396 14.497 7.95 0 14.395-6.49 14.395-14.497S22.845.5 14.896.5zm0 10.674c2.096 0 3.796 1.712 3.796 3.824 0 2.111-1.7 3.823-3.796 3.823-2.097 0-3.797-1.712-3.797-3.823 0-2.112 1.7-3.824 3.797-3.824zm20.723 4.13c0-4.028 2.683-6.858 6.707-6.858 2.48 0 4.505 1.096 5.568 2.932l-2.328 1.657c-.735-1.173-1.848-1.734-3.164-1.734-2.176 0-3.62 1.557-3.62 4.003 0 2.421 1.443 4.002 3.62 4.002 1.317 0 2.43-.587 3.164-1.76l2.328 1.658c-1.063 1.86-3.088 2.931-5.568 2.931-4.024 0-6.707-2.83-6.707-6.831zm12.713 0c0-3.773 2.658-6.858 6.783-6.858 4.151 0 6.784 3.085 6.784 6.858 0 3.747-2.634 6.831-6.784 6.831-4.123 0-6.783-3.084-6.783-6.831zm10.403 0c0-2.37-1.393-4.028-3.62-4.028-2.226 0-3.62 1.657-3.62 4.028 0 2.345 1.393 4.002 3.62 4.002 2.228 0 3.62-1.657 3.62-4.002zm23.433-6.502l-3.95 12.975h-3.335l-2.792-9.151-2.817 9.151h-3.34L62.007 8.802h3.064l2.668 9.355 2.866-9.355h2.965l2.866 9.355 2.643-9.355zm43.39 0l-3.953 12.975h-3.336l-2.792-9.151-2.816 9.151h-3.333L105.4 8.805h3.063l2.669 9.355 2.863-9.358h2.965l2.866 9.355 2.644-9.355zM91.41 8.753v2.905a9.407 9.407 0 00-1.418-.127c-2.253 0-3.442 1.147-3.442 3.849v6.4h-3.087V8.802h3.035v2.168c.633-1.504 2.024-2.396 3.796-2.396a3.18 3.18 0 011.115.179zm12.81.05v11.674c0 4.36-2.404 6.755-6.657 6.755-2.201 0-4.226-.663-5.441-1.81l1.392-2.269c1.087.865 2.506 1.3 3.873 1.3 2.379 0 3.796-1.35 3.796-3.978v-1.119c-.734 1.428-2.303 2.294-4.202 2.294-2.733 0-4.454-1.733-4.454-4.894V8.802h3.088v7.164c0 1.989.81 2.855 2.43 2.855 1.873 0 3.113-1.146 3.113-3.033V8.802h3.063zM126.37 4.7c0-1.122.785-1.938 1.975-1.938 1.164 0 1.946.816 1.946 1.938 0 1.121-.784 1.937-1.946 1.937-1.19 0-1.974-.816-1.974-1.937zm.431 4.103h3.088v12.975h-3.088V8.803zm4.642 10.86l1.67-1.964c1.012 1.122 2.582 1.785 4.227 1.785 1.468 0 2.278-.56 2.278-1.376 0-.689-.506-1.122-1.797-1.428l-2.1-.484c-2.684-.637-3.823-1.887-3.823-3.671 0-2.396 1.974-4.079 5.316-4.079 2.278 0 4.176.79 5.29 2.066l-1.646 2.013c-1.113-.969-2.379-1.428-3.72-1.428-1.444 0-2.152.536-2.152 1.326 0 .612.43.994 1.797 1.3l2.227.536c2.708.611 3.696 1.86 3.696 3.644 0 2.575-1.975 4.232-5.391 4.232-2.557 0-4.708-.968-5.872-2.473zm24.976-3.442h-9.594c.33 2.09 1.696 3.212 3.797 3.212 1.442 0 2.657-.535 3.594-1.632l1.848 1.836c-1.215 1.58-3.164 2.498-5.544 2.498-4.1 0-6.834-2.702-6.834-6.78 0-4.028 2.634-6.909 6.531-6.909 3.746 0 6.277 2.626 6.277 6.577 0 .4-.026.8-.075 1.198zm-9.594-2.115h6.584c-.152-1.912-1.317-2.957-3.164-2.957-1.9 0-3.09 1.096-3.42 2.957z"
                fill="#0066F5"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="grid">
        <div className="c-no-gutter c-md-6 c-lg-6 c-sm-12 c-xs-12">
          <h3 className="u-font-bold">Grow wealth.</h3>
          <div className="grid testimonials m-t-40 hide-xs show-md">
            <div className="c-no-gutter c-md-6 c-lg-6 c-xs-12">
              <div className="cw-trusted">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  svg-inline=""
                  role="presentation"
                  focusable="false"
                  tabIndex={-1}
                >
                  <g clipPath="url(#clip0)">
                    <rect width={16} height={16} rx={8} fill="#0067F5" />
                    <path
                      d="M11.533 5.507l-4 1.5c-.52.2-.867.693-.867 1.253v3.133c0 3.22 2.087 6.247 4.954 7.167.247.08.513.08.76 0 2.866-.92 4.953-3.94 4.953-7.167V8.26c0-.553-.346-1.053-.866-1.247l-4-1.5c-.3-.12-.634-.12-.934-.006z"
                      fill="#CDF2FC"
                    />
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      d="M6.028 2.323l1.609 1.608"
                    />
                    <path
                      stroke="#58CC58"
                      strokeLinecap="round"
                      d="M4.268 6.2l2.236-.421"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width={16} height={16} rx={8} fill="#fff" />
                    </clipPath>
                  </defs>
                </svg>
                <p>
                  Trusted by over
                  <span>
                    <strong> 500k users </strong>
                  </span>
                  like
                  <span>
                    <strong> you!</strong>
                  </span>
                </p>
              </div>

              <SliderGlide options={carouselOptions}>
                <li className="glide__slide">
                  <div className="testimonial">
                    <div className="testimonial__msg">
                      <p>
                        “I learnt how to budget and stick to it. I learnt how to
                        spend within my means.”
                      </p>
                    </div>
                    <div className="testimonial__info">
                      <div className="testimonial__info-img">
                        <img
                          loading="lazy"
                          src="https://my.cowrywise.com/_nuxt/img/shaba.61d24b3.jpeg"
                          alt="Shaba Shalom"
                        />
                      </div>
                      <div className="testimonial__info-name">
                        <h3>Shaba Shalom</h3>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="testimonial">
                    <div className="testimonial__msg">
                      <p>
                        “My friend and I challenged ourselves to save for our
                        needed vacation using Cowrywise!”
                      </p>
                    </div>
                    <div className="testimonial__info">
                      <div className="testimonial__info-img">
                        <img
                          loading="lazy"
                          src="https://my.cowrywise.com/_nuxt/img/dami.c817360.jpeg"
                          alt="Adegamigbe Damilola"
                        />
                      </div>
                      <div className="testimonial__info-name">
                        <h3>Adegamigbe Damilola</h3>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="testimonial">
                    <div className="testimonial__msg">
                      <p>
                        “I achieved my personal savings goal by joining a
                        savings circle with my friends on Cowrywise.”
                      </p>
                    </div>
                    <div className="testimonial__info">
                      <div className="testimonial__info-img">
                        <img
                          loading="lazy"
                          src="https://my.cowrywise.com/_nuxt/img/juwonlo.5590496.jpg"
                          alt="Juwonlo Oloyede"
                        />
                      </div>
                      <div className="testimonial__info-name">
                        <h3>Juwonlo Oloyede</h3>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="testimonial">
                    <div className="testimonial__msg">
                      <p>
                        “I set and surpassed my one million savings goal in a
                        pandemic year! Thanks to Cowrywise.”
                      </p>
                    </div>
                    <div className="testimonial__info">
                      <div className="testimonial__info-img">
                        <img
                          loading="lazy"
                          src="https://my.cowrywise.com/_nuxt/img/ola.62b6f96.jpeg"
                          alt="Emmanuel Olatunji"
                        />
                      </div>
                      <div className="testimonial__info-name">
                        <h3>Emmanuel Olatunji</h3>
                      </div>
                    </div>
                  </div>
                </li>
              </SliderGlide>
            </div>
          </div>
        </div>
        <div className="c-sm-12 c-md-6 c-no-gutter c-xs-12">
          <div className="auth-box">
            <form action="">
              <div className="grid no-gutters-tbl">
                <div className="c-xs-12">
                  <div className="input-field__wrapper">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className=""
                    />
                    <span className="input-field__helper">Email Address</span>
                  </div>
                </div>
              </div>
              <div className="grid middle-sm m-t-20">
                <div className="c-sm-6 c-no-gutter">
                  <span className="u-t-light-6">
                    Got an account?
                    <Link to="/login"> Sign In</Link>
                  </span>
                </div>
                <div className="c-sm-6 c-xs-12 grid c-no-gutter end-sm">
                  <button type="submit" className="align-end">
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="auth-footer grid between-xs m-t-30">
            <div className="sec-license">
              <img
                src="https://my.cowrywise.com/_nuxt/img/sec-logo.4c2737a.png"
                alt="SEC"
              />
              <span>Licensed by the SEC</span>
            </div>
            <span className="u-t-light-6">
              Need Help?
              <a href="#"> Contact Support</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
