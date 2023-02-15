import React, { useState, useEffect, useRef } from "react";

const HomeSection = () => {
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const handleButtonClick = () => {
    setShowVideo(!showVideo);
  };


  const handleThumbnailItemClick = (index) => {
    setThumbnailIndex(index);
  }
  return (
    <section className="home-section">
          <div className="container">
            <div className="hero-container">
              <div className="testimonials-area" style={{ opacity: 1 }}>
                <div className="testimonials">
                  <div className={`testimonial ${thumbnailIndex === 0 ? 'testimonial--active ' : ''}`}>
                    <div
                      className={`testimonial__backdrop ${thumbnailIndex === 0 ? 'scale-up-ver-center' : ''}`}
                    />
                    <div className="testimonial__video-controls">
                      <svg
                        width={44}
                        height={44}
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        svg-inline=""
                        role="presentation"
                        focusable="false"
                        tabIndex={-1}
                      >
                        <circle
                          opacity=".3"
                          cx={22}
                          cy={22}
                          r={22}
                          fill="#000"
                        />
                        <path
                          d="M30.25 20.412c1.222.706 1.222 2.47 0 3.176l-11 6.35c-1.222.706-2.75-.176-2.75-1.587V15.649c0-1.411 1.528-2.293 2.75-1.587l11 6.35z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <div
                      className="testimonial__quote"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <blockquote>
                        I've become more conscious of how I spend my money and
                        also about investing. Now, I feel comfortable spending
                        knowing my Cowrywise account is there.
                      </blockquote>
                      <div className="testimonial__author">
                        <span>Wuraola F</span>
                        <a href="#">
                          @wuwu
                        </a>
                      </div>
                    </div>
                    <div className={`testimonial__image ${thumbnailIndex === 0 ? 'scale-up-center ' : ''}`}>
                    <video loop="loop" playsInline={true} muted="muted" controls onEnded={() => setShowVideo(false)}>
                      <source src="https://cowrywise.com/videos/wura.mp4" type="video/mp4" />
                    </video>
                      <img
                        src="https://cowrywise.com/images/photos/home/wura.jpg"
                        style={{ transform: "translate(0px, 0px)" }}
                      />
                    </div>
                  </div>
                  <div className={`testimonial ${thumbnailIndex === 1 ? 'testimonial--active ' : ''}`}>
                    <div
                      className={`testimonial__backdrop ${thumbnailIndex === 1 ? 'scale-up-ver-center ' : ''}`}
                      style={{ backgroundColor: "#E7FFE7" }}
                    />
                    <div className="testimonial__video-controls">
                      <svg
                        width={44}
                        height={44}
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        svg-inline=""
                        role="presentation"
                        focusable="false"
                        tabIndex={-1}
                      >
                        <circle
                          opacity=".3"
                          cx={22}
                          cy={22}
                          r={22}
                          fill="#000"
                        />
                        <path
                          d="M30.25 20.412c1.222.706 1.222 2.47 0 3.176l-11 6.35c-1.222.706-2.75-.176-2.75-1.587V15.649c0-1.411 1.528-2.293 2.75-1.587l11 6.35z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <div className="testimonial__quote">
                      <blockquote>
                        Cowrywise makes saving quite interesting and fun. My
                        best part would be the fact that I can seamlessly invest
                        my naira in dollars.
                      </blockquote>
                      <div className="testimonial__author">
                        <span>Mayokun A</span>
                        <a href="#">
                          @mhay
                        </a>
                      </div>
                    </div>
                    <div className={`testimonial__image ${thumbnailIndex === 1 ? 'scale-up-center ' : ''}`}>
                      <img src="https://cowrywise.com/images/photos/home/mayokun.jpg" />
                      <video
                        loop="loop"
                        playsInline={true}
                        muted="muted"
                        src="https://cowrywise.com/videos/mayokun.mp4"
                      />
                    </div>
                  </div>
                  <div className={`testimonial ${thumbnailIndex === 2 ? 'testimonial--active ' : ''}`}>
                    <div
                      className={`testimonial__backdrop ${thumbnailIndex === 2 ? 'scale-up-ver-center ' : ''}`}
                      style={{ backgroundColor: "#DFFAFF" }}
                    />
                    {/**/}
                    <div className="testimonial__quote">
                      <blockquote>
                        I love how Cowrywise has made me think of saving part of
                        any income I get. I immediately think of investing any
                        money I get now.
                      </blockquote>
                      <div className="testimonial__author">
                        <span>Olaitan O</span>
                        <a
                          href="#"
                        >
                          @thevideopilot
                        </a>
                      </div>
                    </div>
                    <div className={`testimonial__image ${thumbnailIndex === 2 ? 'scale-up-center ' : ''}`}>
                      <img src="https://cowrywise.com/images/photos/home/wande.jpg" />
                      <video loop="loop" playsInline={true} muted="muted" />
                    </div>
                  </div>
                </div>
                <ul className="testimonial-thumbnail-list">
                  <li className={`testimonial__thumbnail ${thumbnailIndex === 0 ? 'active' : ''}`} onClick={() => handleThumbnailItemClick(0)}>
                    <img src="https://cowrywise.com/images/photos/home/wura.jpg" />
                  </li>
                  <li className={`testimonial__thumbnail ${thumbnailIndex === 1 ? 'active' : ''}`} onClick={() => handleThumbnailItemClick(1)}>
                    <img src="https://cowrywise.com/images/photos/home/mayokun.jpg" />
                  </li>
                  <li className={`testimonial__thumbnail ${thumbnailIndex === 2 ? 'active' : ''}`} onClick={() => handleThumbnailItemClick(2)}>
                    <img src="https://cowrywise.com/images/photos/home/wande.jpg" />
                  </li>
                </ul>
              </div>
              <div className="cta-area">
                <h1 className="xl">
                  Put your <br /> money to work
                </h1>
                <h6>
                  Invest wisely. Manage risk. <br /> Grow wealth.
                </h6>
                <a href="https://cwry.se/app" className="dl-badges">
                  <svg
                    width={200}
                    height={66}
                    viewBox="0 0 200 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    svg-inline=""
                    role="presentation"
                    focusable="false"
                    tabIndex={-1}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.64 0h182.226c2.656 0 3.62.277 4.59.796a5.413 5.413 0 012.253 2.252c.52.972.796 1.935.796 4.591V57.91c0 2.656-.277 3.62-.796 4.59a5.414 5.414 0 01-2.252 2.253c-.972.52-1.935.796-4.591.796H7.639c-2.656 0-3.62-.276-4.59-.796a5.415 5.415 0 01-2.253-2.252C.276 61.529 0 60.566 0 57.91V7.64c0-2.657.277-3.62.796-4.592A5.415 5.415 0 013.048.796C4.02.276 4.983 0 7.64 0z"
                      fill="#022B69"
                    />
                    <path
                      d="M24.43 17.502a2.474 2.474 0 00-.568 1.73V46.58a2.474 2.474 0 00.568 1.73l.087.087 15.302-15.305v-.359L24.517 17.415l-.087.087z"
                      fill="#61EEFF"
                    />
                    <path
                      d="M44.882 38.198l-5.064-5.106v-.359l5.064-5.118.111.062 6.065 3.449c1.73.977 1.73 2.584 0 3.573l-6.04 3.437-.136.062z"
                      fill="#FFE000"
                    />
                    <path
                      d="M45.03 38.123l-5.211-5.217-15.39 15.405c.729.64 1.808.67 2.57.074l18.045-10.262"
                      fill="#FF3A44"
                    />
                    <path
                      d="M45.031 27.689L26.987 17.427a2.012 2.012 0 00-2.569.075L39.82 32.906l5.211-5.217z"
                      fill="#ADFFB0"
                    />
                    <path
                      opacity=".2"
                      d="M44.883 38.012l-17.896 10.2a2.06 2.06 0 01-2.47 0l-.087.086.087.087a2.05 2.05 0 002.47 0L45.03 38.123l-.148-.111z"
                      fill="#000"
                    />
                    <path
                      opacity=".12"
                      d="M24.43 48.138a2.474 2.474 0 01-.568-1.731v.185a2.474 2.474 0 00.568 1.731l.087-.087-.087-.098zm26.63-13.625l-6.176 3.5.11.11 6.066-3.437a2.164 2.164 0 001.235-1.78 2.3 2.3 0 01-1.235 1.607z"
                      fill="#000"
                    />
                    <path
                      opacity=".25"
                      d="M26.987 17.6L51.06 31.3a2.3 2.3 0 011.235 1.607 2.164 2.164 0 00-1.235-1.78l-24.073-13.7c-1.73-.976-3.137-.16-3.137 1.818v.185c.037-1.99 1.42-2.806 3.137-1.83z"
                      fill="#fff"
                    />
                    <path
                      d="M78.557 23.745c-.9 0-1.73-.216-2.49-.648a4.86 4.86 0 01-1.807-1.781 4.868 4.868 0 01-.67-2.523c0-.927.224-1.768.67-2.523a4.86 4.86 0 011.807-1.78 4.943 4.943 0 012.49-.65c.715 0 1.381.128 2 .384a4.24 4.24 0 011.55 1.073l-1.034 1.033a3.149 3.149 0 00-1.106-.795 3.546 3.546 0 00-1.423-.278c-.61 0-1.179.146-1.709.437a3.31 3.31 0 00-1.27 1.245c-.319.538-.478 1.156-.478 1.854 0 .697.16 1.315.477 1.854.318.538.742.953 1.271 1.245.53.29 1.104.437 1.722.437.565 0 1.037-.084 1.417-.252.38-.168.72-.393 1.02-.675.194-.195.36-.437.496-.729.137-.291.227-.609.271-.953h-3.217v-1.324h4.621c.044.247.066.503.066.768 0 .6-.092 1.176-.278 1.728a3.645 3.645 0 01-.887 1.437c-.892.944-2.06 1.416-3.509 1.416zm9.163 0c-.624.01-1.24-.15-1.78-.463a3.266 3.266 0 01-1.232-1.278c-.296-.543-.444-1.154-.444-1.834 0-.644.144-1.242.43-1.794a3.385 3.385 0 011.2-1.318 3.18 3.18 0 011.747-.49c.68 0 1.27.15 1.768.45.5.3.878.711 1.14 1.232.26.52.39 1.108.39 1.761 0 .124-.014.278-.04.464H85.72c.053.626.276 1.11.67 1.45.391.34.85.51 1.37.51.414 0 .774-.095 1.08-.285.303-.19.548-.448.733-.775l1.232.583a3.627 3.627 0 01-1.245 1.31c-.512.319-1.127.477-1.84.477zm1.735-4.383a1.683 1.683 0 00-.225-.708 1.61 1.61 0 00-.603-.59c-.269-.158-.598-.238-.986-.238-.468 0-.863.14-1.185.417-.322.278-.545.651-.669 1.12h3.668v-.001zm5.376 4.278c-.3 0-.582-.049-.847-.146a1.86 1.86 0 01-.649-.384c-.38-.38-.57-.896-.57-1.55v-3.495h-1.178V16.78h1.18v-1.907h1.455v1.907h1.642v1.285h-1.642v3.178c0 .362.071.618.212.768.133.176.362.265.69.265.15 0 .281-.02.396-.06.131-.048.255-.113.37-.192v1.417c-.29.132-.644.199-1.059.199zm6.357-7.84a.948.948 0 01-.695-.285.951.951 0 01-.285-.695c0-.273.095-.505.285-.695a.95.95 0 01.695-.285c.273 0 .505.095.695.285.19.19.285.422.285.695a.936.936 0 01-.285.695.94.94 0 01-.695.285zm-.729.98h1.457v6.754h-1.457V16.78zm5.973 6.86c-.3 0-.583-.049-.848-.146a1.863 1.863 0 01-.649-.384c-.38-.38-.57-.896-.57-1.55v-3.495h-1.178V16.78h1.179v-1.907h1.457v1.907h1.642v1.285h-1.642v3.178c0 .362.07.618.211.768.133.176.362.265.689.265.15 0 .283-.02.397-.06.131-.048.256-.113.371-.192v1.417c-.291.132-.643.199-1.059.199zm8.687.105c-.68 0-1.29-.156-1.828-.47a3.305 3.305 0 01-1.258-1.29 3.748 3.748 0 01-.45-1.828c0-.671.15-1.28.45-1.828.3-.547.72-.977 1.258-1.29.539-.314 1.148-.47 1.828-.47.68 0 1.289.158 1.827.476.539.318.958.75 1.258 1.298.3.547.45 1.152.45 1.814 0 .67-.15 1.28-.45 1.827-.3.548-.72.978-1.258 1.291-.538.314-1.148.47-1.827.47zm0-1.337c.37 0 .715-.09 1.032-.271.318-.181.572-.442.762-.782.19-.34.285-.74.285-1.198 0-.46-.095-.857-.285-1.192a2.004 2.004 0 00-.762-.775 2.052 2.052 0 00-1.032-.271c-.371 0-.715.09-1.033.271-.318.181-.572.44-.762.775-.19.335-.284.733-.284 1.192 0 .459.094.858.284 1.198.19.34.444.6.762.782.318.18.662.271 1.033.271zm4.74-5.628h1.39v.887h.067c.194-.318.483-.58.867-.788a2.54 2.54 0 011.225-.31c.821 0 1.446.24 1.874.72.428.482.642 1.138.642 1.967v4.278h-1.456v-4.079c0-.53-.13-.918-.391-1.165-.26-.248-.62-.371-1.08-.371-.326 0-.617.09-.873.271a1.806 1.806 0 00-.596.722c-.141.3-.212.622-.212.967v3.655h-1.457V16.78zm-46.49 15.786h5.814c1.046 0 2 .22 2.862.658a5.015 5.015 0 012.03 1.845c.492.793.738 1.696.738 2.711 0 1.016-.246 1.923-.738 2.723a4.99 4.99 0 01-2.03 1.858c-.862.438-1.816.657-2.862.657h-2.7v6.068H73.37v-16.52zm5.907 7.499c.77 0 1.373-.223 1.811-.67a2.218 2.218 0 00.658-1.615c0-.63-.22-1.165-.658-1.603-.438-.438-1.042-.658-1.81-.658h-2.793v4.546h2.792zm6.924-7.5h3.022v16.521H86.2V32.565zm8.54 16.89c-1.247 0-2.27-.365-3.07-1.095-.8-.731-1.2-1.689-1.2-2.873 0-.785.208-1.477.623-2.077.416-.6.985-1.061 1.708-1.384.723-.323 1.523-.485 2.4-.485 1.215 0 2.253.177 3.114.531v-.507c0-.647-.242-1.17-.726-1.57-.485-.4-1.135-.6-1.95-.6-.554 0-1.088.128-1.604.381a3.78 3.78 0 00-1.28 1.004l-1.938-1.523a5.695 5.695 0 012.145-1.707c.862-.4 1.8-.6 2.815-.6 1.8 0 3.17.415 4.107 1.246.939.83 1.408 2.046 1.408 3.645v7.245h-2.977v-1.2h-.184c-.354.462-.82.839-1.396 1.131-.577.292-1.242.439-1.996.439l.001-.001zm.714-2.353c.877 0 1.573-.28 2.088-.842.504-.532.781-1.24.773-1.973a5.73 5.73 0 00-2.468-.554c-1.57 0-2.354.585-2.354 1.754 0 .477.17.865.508 1.165.338.3.823.45 1.453.45zm11.124 1.43l-4.961-11.213h3.438l3.046 7.314h.184l2.93-7.314h3.37l-7.269 16.751h-3.253l2.515-5.538zm17.886.924c-1.446 0-2.723-.408-3.83-1.223-1.108-.816-1.885-1.97-2.33-3.461l2.93-1.154c.23.877.622 1.577 1.176 2.1.554.523 1.246.784 2.077.784.692 0 1.284-.173 1.776-.519.493-.346.739-.827.739-1.442a1.878 1.878 0 00-.704-1.511c-.47-.393-1.304-.812-2.503-1.258l-1.016-.369a7.012 7.012 0 01-2.722-1.696c-.754-.761-1.13-1.719-1.13-2.873 0-.86.222-1.645.668-2.353.446-.708 1.077-1.265 1.892-1.673.816-.407 1.738-.611 2.77-.611 1.491 0 2.668.35 3.53 1.05.86.7 1.453 1.519 1.776 2.457l-2.746 1.154a2.75 2.75 0 00-.888-1.281c-.423-.346-.965-.52-1.627-.52-.677 0-1.234.159-1.673.474-.438.315-.657.727-.657 1.234 0 .493.207.912.623 1.258.415.346 1.1.68 2.053 1.003l1.039.347c1.43.492 2.526 1.142 3.288 1.95.761.807 1.142 1.864 1.142 3.172 0 1.077-.277 1.988-.831 2.734a5.083 5.083 0 01-2.134 1.673 6.81 6.81 0 01-2.688.554zm11.792-.185a4.747 4.747 0 01-1.615-.265c-.492-.177-.892-.42-1.2-.727-.723-.692-1.084-1.677-1.084-2.954v-5.422h-2.054V37.32h2.054v-3.323h3.022v3.323h2.885v2.584h-2.885v4.869c0 .6.131 1.03.393 1.292.215.246.584.369 1.107.369.293 0 .535-.038.727-.115.192-.077.442-.208.75-.393v2.954a5.656 5.656 0 01-2.1.391zm8.793.185c-1.215 0-2.3-.273-3.253-.82a5.822 5.822 0 01-2.227-2.238c-.53-.946-.796-2.01-.796-3.195 0-1.17.266-2.23.796-3.184a5.793 5.793 0 012.227-2.25c.954-.546 2.038-.82 3.253-.82 1.2 0 2.277.274 3.23.82a5.793 5.793 0 012.227 2.25c.53.953.796 2.015.796 3.184 0 1.184-.265 2.25-.796 3.195a5.814 5.814 0 01-2.226 2.238c-.954.547-2.031.82-3.231.82zm0-2.792c.585 0 1.123-.139 1.615-.416a3.047 3.047 0 001.177-1.2c.292-.522.439-1.138.439-1.845 0-.692-.147-1.3-.439-1.823a3.047 3.047 0 00-1.177-1.2 3.24 3.24 0 00-1.615-.415c-.584 0-1.123.138-1.615.415a3.134 3.134 0 00-1.188 1.2c-.3.523-.45 1.13-.45 1.823 0 .692.15 1.303.45 1.834.3.53.696.935 1.188 1.211.492.277 1.03.416 1.615.416zm7.386-9.345h2.838v1.569h.184c.293-.554.746-1.011 1.362-1.373a3.936 3.936 0 012.03-.542c.539 0 1.03.085 1.477.254v3.022a9.785 9.785 0 00-1.05-.334 3.845 3.845 0 00-.911-.104c-.893 0-1.6.323-2.123.969-.523.646-.785 1.461-.785 2.446v5.86h-3.022V37.319zm13.73 12.137c-1.169 0-2.222-.27-3.16-.808a5.788 5.788 0 01-2.204-2.227c-.53-.946-.796-2.01-.796-3.195 0-1.123.261-2.165.784-3.127a6.041 6.041 0 012.17-2.295c.922-.57 1.953-.854 3.091-.854 1.215 0 2.261.261 3.138.784a5.113 5.113 0 011.996 2.146c.454.908.68 1.915.68 3.023 0 .354-.022.692-.069 1.015h-8.837c.154.938.527 1.65 1.12 2.134.592.485 1.303.727 2.134.727.692 0 1.288-.15 1.788-.45.5-.3.896-.704 1.188-1.211l2.446 1.2c-1.2 2.092-3.023 3.138-5.468 3.138h-.001zm2.792-7.684c-.03-.369-.165-.734-.403-1.096a2.816 2.816 0 00-.993-.9c-.423-.238-.919-.357-1.488-.357-.723 0-1.342.211-1.857.634-.515.423-.888.996-1.12 1.72l5.861-.001z"
                      fill="#fff"
                    />
                  </svg>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 56"
                    svg-inline=""
                    role="presentation"
                    focusable="false"
                    tabIndex={-1}
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        fill="#022B69"
                        d="M7.954 0h182.227c2.656 0 3.62.277 4.59.796a5.415 5.415 0 012.253 2.252c.52.972.796 1.935.796 4.591V57.91c0 2.656-.277 3.62-.796 4.59a5.415 5.415 0 01-2.252 2.253c-.972.52-1.935.796-4.591.796H7.954c-2.656 0-3.62-.276-4.59-.796a5.415 5.415 0 01-2.253-2.252c-.52-.972-.796-1.935-.796-4.591V7.64c0-2.657.277-3.62.796-4.592A5.415 5.415 0 013.363.796C4.335.276 5.298 0 7.954 0z"
                      />
                      <path
                        fill="#FFF"
                        fillRule="nonzero"
                        d="M44.572 31.173c-.04-4.278 3.587-6.359 3.753-6.456-2.054-2.923-5.237-3.323-6.356-3.355-2.674-.274-5.268 1.562-6.63 1.562-1.389 0-3.487-1.535-5.747-1.49-2.91.044-5.63 1.688-7.123 4.242-3.08 5.206-.783 12.857 2.168 17.065 1.476 2.063 3.201 4.363 5.46 4.282 2.208-.088 3.033-1.374 5.699-1.374 2.641 0 3.416 1.374 5.719 1.322 2.37-.036 3.863-2.07 5.288-4.15 1.706-2.36 2.39-4.689 2.418-4.808-.054-.019-4.603-1.715-4.649-6.84zm-4.35-12.58c1.188-1.45 2.001-3.423 1.775-5.426-1.72.074-3.87 1.161-5.108 2.58-1.096 1.25-2.074 3.3-1.822 5.226 1.932.141 3.915-.951 5.155-2.38zm34.162-4.54h3.032c.98 0 1.836.198 2.57.595a4.116 4.116 0 011.688 1.675c.392.72.589 1.543.589 2.47 0 .927-.197 1.75-.59 2.47a4.116 4.116 0 01-1.688 1.675c-.733.397-1.589.596-2.569.596h-3.032v-9.482zm3.006 8.064c1.059 0 1.887-.294 2.483-.88.595-.588.893-1.402.893-2.444 0-1.033-.298-1.845-.893-2.437-.596-.591-1.424-.887-2.483-.887h-1.523v6.648h1.523zm9.296 1.628c-.68 0-1.29-.156-1.828-.47a3.306 3.306 0 01-1.258-1.29 3.737 3.737 0 01-.45-1.828c0-.671.15-1.28.45-1.828.3-.547.72-.977 1.258-1.29.539-.314 1.148-.47 1.828-.47.68 0 1.289.158 1.827.476.539.318.958.75 1.258 1.298.3.547.45 1.152.45 1.814 0 .67-.15 1.28-.45 1.827-.3.548-.72.978-1.258 1.291-.538.314-1.148.47-1.827.47zm0-1.337c.37 0 .715-.09 1.033-.271.317-.181.571-.442.761-.782.19-.34.285-.74.285-1.198 0-.46-.095-.857-.285-1.192a2.008 2.008 0 00-.761-.775 2.052 2.052 0 00-1.033-.271c-.371 0-.715.09-1.033.271-.318.181-.572.44-.762.775-.19.335-.284.733-.284 1.192 0 .459.095.858.284 1.198.19.34.444.6.762.782.318.18.662.271 1.033.271zm3.986-5.628h1.575l1.364 4.833h.053l1.523-4.833h1.497l1.51 4.833h.052l1.364-4.833h1.55L99 23.534h-1.536l-1.55-4.847h-.04l-1.535 4.847h-1.51l-2.158-6.754zm11.428 0h1.39v.887h.066c.195-.318.484-.58.868-.788a2.54 2.54 0 011.225-.31c.82 0 1.445.24 1.873.72.429.482.643 1.138.643 1.967v4.278h-1.457v-4.079c0-.53-.13-.918-.39-1.165-.261-.248-.62-.371-1.08-.371-.327 0-.618.09-.874.271a1.807 1.807 0 00-.596.722c-.141.3-.212.622-.212.967v3.655H102.1V16.78zm7.707-2.728h1.456v9.482h-1.456v-9.482zm6.263 9.693c-.68 0-1.289-.156-1.827-.47a3.306 3.306 0 01-1.258-1.29 3.737 3.737 0 01-.45-1.828c0-.671.15-1.28.45-1.828.3-.547.72-.977 1.258-1.29.538-.314 1.147-.47 1.827-.47.68 0 1.29.158 1.828.476.538.318.958.75 1.258 1.298.3.547.45 1.152.45 1.814 0 .67-.15 1.28-.45 1.827-.3.548-.72.978-1.258 1.291-.539.314-1.148.47-1.828.47zm0-1.337c.371 0 .715-.09 1.033-.271.318-.181.572-.442.762-.782.19-.34.284-.74.284-1.198 0-.46-.095-.857-.284-1.192a2.008 2.008 0 00-.762-.775 2.052 2.052 0 00-1.033-.271 2.018 2.018 0 00-1.794 1.046c-.19.335-.285.733-.285 1.192 0 .459.095.858.285 1.198a2.01 2.01 0 001.794 1.053zm6.992 1.337c-.485 0-.918-.094-1.298-.284a2.13 2.13 0 01-.887-.808 2.237 2.237 0 01-.318-1.185c0-.698.263-1.25.788-1.655.526-.407 1.19-.61 1.993-.61.397 0 .755.038 1.073.113.318.075.57.157.755.245v-.344c0-.415-.155-.753-.464-1.013-.309-.26-.706-.391-1.192-.391-.344 0-.668.075-.973.225-.305.15-.55.358-.735.622l-1.02-.78a3.04 3.04 0 011.166-.968 3.615 3.615 0 011.589-.344c.98 0 1.735.24 2.264.722.53.481.795 1.159.795 2.033v4.21h-1.43v-.807h-.067a2.285 2.285 0 01-.82.728c-.354.194-.76.291-1.219.291zm.252-1.205c.353 0 .67-.083.953-.251a1.833 1.833 0 00.9-1.59 2.964 2.964 0 00-.708-.277 3.3 3.3 0 00-.84-.106c-.548 0-.95.108-1.206.324a1.05 1.05 0 00-.384.841c0 .309.12.563.358.761.238.2.547.298.927.298zm7.693 1.205a3.06 3.06 0 01-1.655-.463 3.28 3.28 0 01-1.172-1.278c-.287-.543-.43-1.159-.43-1.847 0-.689.143-1.305.43-1.847a3.28 3.28 0 011.172-1.278 3.06 3.06 0 011.655-.464c.477 0 .905.106 1.285.318.38.212.666.472.86.781h.067l-.066-.953v-2.662h1.456v9.482h-1.39v-.874h-.066c-.195.3-.481.556-.861.768a2.59 2.59 0 01-1.285.317zm.212-1.337c.353 0 .682-.093.987-.278.304-.185.55-.45.735-.795.185-.344.278-.737.278-1.178 0-.442-.093-.832-.278-1.172a2.045 2.045 0 00-.735-.788 1.898 1.898 0 00-1.98 0 2.028 2.028 0 00-.741.788 2.4 2.4 0 00-.278 1.172c0 .441.092.834.278 1.178.185.345.432.61.741.795.31.185.64.278.993.278zm11.349 1.337c-.68 0-1.289-.156-1.827-.47a3.306 3.306 0 01-1.258-1.29 3.737 3.737 0 01-.45-1.828c0-.671.15-1.28.45-1.828.3-.547.719-.977 1.258-1.29.538-.314 1.147-.47 1.827-.47.68 0 1.289.158 1.827.476.539.318.958.75 1.258 1.298.3.547.45 1.152.45 1.814 0 .67-.15 1.28-.45 1.827-.3.548-.72.978-1.258 1.291-.538.314-1.147.47-1.827.47zm0-1.337c.37 0 .715-.09 1.033-.271.318-.181.571-.442.761-.782.19-.34.285-.74.285-1.198 0-.46-.095-.857-.285-1.192a2.008 2.008 0 00-.761-.775 2.052 2.052 0 00-1.033-.271c-.37 0-.715.09-1.033.271-.318.181-.572.44-.761.775-.19.335-.285.733-.285 1.192 0 .459.095.858.285 1.198.19.34.443.6.761.782.318.18.662.271 1.033.271zm4.74-5.628h1.391v.887h.066c.195-.318.484-.58.868-.788a2.54 2.54 0 011.225-.31c.82 0 1.445.24 1.873.72.429.482.643 1.138.643 1.967v4.278h-1.457v-4.079c0-.53-.13-.918-.39-1.165-.261-.248-.62-.371-1.08-.371-.327 0-.618.09-.874.271a1.807 1.807 0 00-.596.722c-.141.3-.212.622-.212.967v3.655h-1.456V16.78zm13.574 6.86c-.3 0-.583-.049-.848-.146a1.86 1.86 0 01-.648-.384c-.38-.38-.57-.896-.57-1.55v-3.495h-1.178V16.78h1.178v-1.907h1.457v1.907h1.642v1.285h-1.642v3.178c0 .362.07.618.212.768.132.176.362.265.688.265.15 0 .283-.02.398-.06a1.66 1.66 0 00.37-.192v1.417c-.291.132-.644.199-1.059.199zm2.49-9.588h1.456v2.582l-.066 1.033h.066c.194-.318.483-.58.868-.788a2.565 2.565 0 011.238-.31c.82 0 1.447.24 1.88.72.433.482.649 1.138.649 1.967v4.278h-1.457v-4.079c0-.512-.134-.896-.404-1.152-.269-.256-.62-.384-1.052-.384-.327 0-.62.093-.881.278a1.93 1.93 0 00-.616.735c-.15.304-.225.629-.225.973v3.629h-1.456v-9.482zm10.832 9.693a3.446 3.446 0 01-1.781-.463 3.266 3.266 0 01-1.232-1.278c-.296-.543-.444-1.154-.444-1.834 0-.644.144-1.242.43-1.794a3.385 3.385 0 011.2-1.318 3.18 3.18 0 011.747-.49c.68 0 1.27.15 1.768.45.499.3.878.711 1.139 1.232.26.52.39 1.108.39 1.761 0 .124-.013.278-.04.464h-5.177c.053.626.276 1.11.669 1.45.393.34.85.51 1.37.51.415 0 .775-.095 1.08-.285.304-.19.55-.448.735-.775l1.231.583a3.628 3.628 0 01-1.245 1.31c-.512.319-1.125.477-1.84.477zm1.734-4.383a1.683 1.683 0 00-.225-.708 1.611 1.611 0 00-.602-.59c-.27-.158-.598-.238-.987-.238-.468 0-.863.14-1.185.417-.322.278-.545.651-.669 1.12h3.668zM78.323 32.566h3.576l6.207 16.52h-3.438l-1.385-3.945h-6.322l-1.384 3.945h-3.438l6.184-16.52zm3.945 9.714l-1.453-4.153-.6-1.985h-.185l-.6 1.985-1.476 4.153h4.314zm6.74-4.961h2.838v1.43h.184c.323-.507.793-.934 1.408-1.28.615-.346 1.323-.52 2.123-.52 1.06 0 2.026.266 2.895.797.87.53 1.55 1.273 2.042 2.226.492.954.739 2.03.739 3.23 0 1.216-.247 2.296-.739 3.243-.492.946-1.173 1.684-2.042 2.215a5.452 5.452 0 01-2.895.796c-.8 0-1.512-.17-2.135-.508-.623-.338-1.088-.761-1.396-1.27h-.184l.184 1.662v4.73h-3.022V37.32zm6.022 9.345c.569 0 1.1-.146 1.592-.439a3.22 3.22 0 001.177-1.223c.292-.523.438-1.122.438-1.8 0-.676-.146-1.276-.438-1.799a3.129 3.129 0 00-1.177-1.211 3.127 3.127 0 00-1.592-.427c-.554 0-1.077.142-1.57.427a3.129 3.129 0 00-1.176 1.211c-.292.523-.438 1.123-.438 1.8s.146 1.276.438 1.8c.292.522.685.93 1.177 1.222a3.024 3.024 0 001.569.439zm7.27-9.345h2.838v1.43h.185c.323-.507.792-.934 1.407-1.28s1.323-.52 2.123-.52a5.45 5.45 0 012.896.797c.869.53 1.55 1.273 2.042 2.226.492.954.738 2.03.738 3.23 0 1.216-.246 2.296-.738 3.243-.493.946-1.173 1.684-2.042 2.215-.87.53-1.835.796-2.896.796-.8 0-1.511-.17-2.134-.508-.623-.338-1.089-.761-1.396-1.27h-.185l.185 1.662v4.73H102.3V37.32zm6.022 9.345c.57 0 1.1-.146 1.592-.439.492-.292.885-.7 1.177-1.223.292-.523.438-1.122.438-1.8 0-.676-.146-1.276-.438-1.799a3.129 3.129 0 00-1.177-1.211 3.127 3.127 0 00-1.592-.427 3.08 3.08 0 00-1.569.427 3.129 3.129 0 00-1.177 1.211c-.292.523-.438 1.123-.438 1.8s.146 1.276.438 1.8c.293.522.685.93 1.177 1.222a3.024 3.024 0 001.57.439zm16.756 2.792c-1.446 0-2.723-.408-3.83-1.223-1.108-.816-1.885-1.97-2.331-3.461l2.93-1.154c.231.877.623 1.577 1.177 2.1.554.523 1.246.784 2.077.784.692 0 1.284-.173 1.776-.519.493-.346.739-.827.739-1.442a1.88 1.88 0 00-.704-1.511c-.47-.393-1.304-.812-2.504-1.258l-1.015-.369a7.012 7.012 0 01-2.722-1.696c-.754-.761-1.131-1.719-1.131-2.873 0-.86.223-1.645.67-2.353.445-.708 1.076-1.265 1.891-1.673.815-.407 1.738-.611 2.769-.611 1.492 0 2.669.35 3.53 1.05.862.7 1.454 1.519 1.777 2.457l-2.746 1.154a2.75 2.75 0 00-.888-1.281c-.423-.346-.965-.52-1.627-.52-.677 0-1.234.159-1.673.474-.438.315-.657.727-.657 1.234 0 .493.207.912.623 1.258.415.346 1.1.68 2.053 1.003l1.038.347c1.431.492 2.527 1.142 3.288 1.95.762.807 1.143 1.864 1.143 3.172 0 1.077-.277 1.988-.831 2.734a5.083 5.083 0 01-2.134 1.673 6.81 6.81 0 01-2.688.554zm11.792-.185a4.744 4.744 0 01-1.615-.265c-.492-.177-.892-.42-1.2-.727-.723-.692-1.084-1.677-1.084-2.954v-5.422h-2.054V37.32h2.054v-3.323h3.022v3.323h2.884v2.584h-2.884v4.869c0 .6.131 1.03.393 1.292.215.246.584.369 1.107.369.292 0 .535-.038.727-.115.192-.077.442-.208.75-.393v2.954a5.659 5.659 0 01-2.1.392zm8.793.185c-1.215 0-2.3-.273-3.253-.82a5.818 5.818 0 01-2.227-2.238c-.53-.946-.796-2.01-.796-3.195 0-1.17.266-2.23.796-3.184a5.795 5.795 0 012.227-2.25c.954-.546 2.038-.82 3.253-.82 1.2 0 2.277.274 3.23.82a5.795 5.795 0 012.227 2.25c.53.953.796 2.015.796 3.184 0 1.184-.265 2.25-.796 3.195a5.818 5.818 0 01-2.227 2.238c-.953.547-2.03.82-3.23.82zm0-2.792c.585 0 1.123-.139 1.615-.416a3.046 3.046 0 001.177-1.2c.292-.522.438-1.138.438-1.845 0-.692-.146-1.3-.438-1.823a3.046 3.046 0 00-1.177-1.2 3.238 3.238 0 00-1.615-.415c-.584 0-1.123.138-1.615.415a3.125 3.125 0 00-1.188 1.2c-.3.523-.45 1.13-.45 1.823 0 .692.15 1.303.45 1.834.3.53.696.935 1.188 1.211.492.277 1.03.416 1.615.416zm7.386-9.345h2.838v1.569h.184c.293-.554.746-1.011 1.362-1.373a3.935 3.935 0 012.03-.542c.538 0 1.03.085 1.477.254v3.022a9.797 9.797 0 00-1.05-.334 3.847 3.847 0 00-.911-.104c-.893 0-1.6.323-2.123.969-.523.646-.785 1.461-.785 2.446v5.86h-3.022V37.32zm13.73 12.137c-1.169 0-2.222-.27-3.16-.808a5.782 5.782 0 01-2.204-2.227c-.53-.946-.796-2.01-.796-3.195 0-1.123.261-2.165.784-3.127a6.041 6.041 0 012.17-2.295c.922-.57 1.953-.854 3.091-.854 1.215 0 2.261.261 3.138.784a5.115 5.115 0 011.996 2.146c.454.908.68 1.915.68 3.023 0 .354-.023.692-.069 1.015h-8.837c.154.938.527 1.65 1.12 2.134.591.485 1.303.727 2.134.727.692 0 1.288-.15 1.788-.45.5-.3.896-.704 1.188-1.211l2.446 1.2c-1.2 2.092-3.023 3.138-5.469 3.138zm2.792-7.684c-.03-.369-.165-.734-.404-1.096a2.817 2.817 0 00-.992-.9c-.423-.238-.919-.357-1.488-.357-.723 0-1.342.211-1.857.634-.516.423-.889.996-1.12 1.72h5.861z"
                      />
                    </g>
                  </svg>
                </a>
                <form
                  method="GET"
                  action="https://my.cowrywise.com/signup"
                  className="inline-form"
                >
                  <input
                    type="email"
                    required="required"
                    name="email"
                    placeholder="Your email..."
                  />
                  <input type="hidden" defaultValue="web" name="utm_source" />
                  <input
                    type="hidden"
                    defaultValue="button"
                    name="utm_medium"
                  />
                  <input
                    type="hidden"
                    defaultValue="homepage"
                    name="web_signup"
                  />
                  <button
                    href="https://cwry.se/app"
                    type="submit"
                    className="button--large"
                  >
                    Start Investing
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
  )
}

export default HomeSection