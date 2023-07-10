import { useEffect, useRef } from "react";

function Modal(props:any) {
    const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { onClickOutside, showModal } = props;

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      if (ref.current && !ref.current.contains(event.target)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside ]);

    if(!showModal){
        return null;
    }

    return (
        <div id="portals-root" className={showModal ? '' : 'd-none'}>
        <div>
          <div
            data-rnwrdesktop-1moh23t-e1k2in="true"
            data-rnwr700-1moh23t-e1k2in-tceitz="true"
            className="css-175oi2r r-1xcajam r-l13dpy"
          />
        </div>
        <div>
          <div
            data-rnwrdesktop-hidden="true"
            data-rnwr700-visible="true"
            className="css-175oi2r"
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              width: 300,
              maxWidth: "100%",
              height: "100%",
              flexDirection: "row",
              position: "fixed",
              top: 0,
              bottom: 0,
              zIndex: 10,
              left: "-300px"
            }}
          >
            <nav
              translate="no"
              aria-label="Table of contents"
              className="r-1oszu61 r-1xc7w19 r-1phboty r-1yadl64 r-deolkf r-6koalj r-crgep1 r-ifefl9 r-bcqeeo r-t60dpp r-bnwqim r-417010 r-eqz5dr r-1ro0kt6 r-16y2uox r-1wbh5a2"
            >
              <div className="css-175oi2r r-1ro0kt6 r-16y2uox r-1wbh5a2">
                <div
                  data-rnwrdesktop-hidden="true"
                  data-rnwr700-visible="true"
                  className="css-175oi2r r-14lw9ot r-nzcix3 r-qklmqi r-sga3zk r-1pn2ns4 r-1wtj0ep r-1awozwy r-18u37iz"
                >
                  <div
                    aria-label="Close"
                    role="button"
                    data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                    data-rnwi-handle="button"
                    tabIndex={0}
                    className="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-rs99b7 r-18u37iz r-18kxxzh r-1777fci r-1ny4l3l r-z2wwpe r-eu3ka r-1bnj018 r-1kihuf0 r-mk0yit r-1aockid"
                    style={{ transitionDuration: "0.15s" }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      data-rnwibutton--1ghhsy9-hover-focus="true"
                      data-rnwi-handle="nearest"
                      className="r-h7gdob"
                      style={{ verticalAlign: "middle", width: 18, height: 18 }}
                    >
                      <path
                        d="M12.424 4.424a.6.6 0 00-.848-.848L8 7.15 4.424 3.576a.6.6 0 10-.848.848L7.15 8l-3.575 3.576a.6.6 0 00.848.848L8 8.85l3.576 3.575a.6.6 0 00.848-.848L8.85 8l3.575-3.576z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="css-175oi2r r-1qhn6m8 r-1ro0kt6 r-16y2uox r-1wbh5a2 r-18ayb63 r-13l2t4g">
                  <div className="css-175oi2r r-150rngu r-eqz5dr r-11yh6sk r-1rnoaur r-1sncvnh r-1ro0kt6 r-16y2uox r-1wbh5a2">
                    <div className="css-175oi2r r-1yzf0co r-1sc18lr">
                      <div className="css-175oi2r">
                        <a
                          href="/real-swipe-brick-breaker/?q="
                          data-rnwrdesktop-fnigne="true"
                          data-rnwr700-13l2t4g="true"
                          data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                          data-rnwi-handle="nearest"
                          className="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh r-15zivkp"
                          style={{ transitionDuration: "0.15s" }}
                          data-rnwi-1b00too-hover="true"
                        >
                          <div className="css-175oi2r r-88pszg">
                            <div
                              className="css-175oi2r r-4qtqp9 r-bnwqim r-1bnj018"
                              style={{ width: "17.92px", height: "17.92px" }}
                            >
                              <span
                                className="emj-people _1f44b"
                                role="img"
                                title="waving hand"
                                aria-label="waving hand"
                                style={{
                                  transform: "translate(-50%, -50%) scale(0.28)"
                                }}
                              >
                                👋
                              </span>
                            </div>
                          </div>
                          <div
                            dir="auto"
                            className="css-1rynq56 r-1ro0kt6 r-16y2uox r-1wbh5a2 r-oyd9sg r-gg6oyi r-1b43r93 r-16dba41 r-hbpseb r-1bnj018"
                          >
                            Hello
                          </div>
                        </a>
                      </div>
                      <div className="css-175oi2r">
                        <a
                          href="/real-swipe-brick-breaker/terms-and-conditions?q="
                          data-rnwrdesktop-fnigne="true"
                          data-rnwr700-13l2t4g="true"
                          data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                          data-rnwi-handle="nearest"
                          className="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh r-15zivkp"
                          style={{ transitionDuration: "0.15s" }}
                          data-rnwi-1b00too-hover="true"
                        >
                          <div
                            dir="auto"
                            className="css-1rynq56 r-1ro0kt6 r-16y2uox r-1wbh5a2 r-oyd9sg r-gg6oyi r-1b43r93 r-16dba41 r-hbpseb r-1bnj018"
                          >
                            TERMS AND CONDITIONS
                          </div>
                        </a>
                      </div>
                      <div className="css-175oi2r">
                        <a
                          href="/real-swipe-brick-breaker/privacy-policy?q="
                          data-rnwrdesktop-fnigne="true"
                          data-rnwr700-13l2t4g="true"
                          data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                          data-rnwi-handle="nearest"
                          className="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh"
                          style={{
                            transitionDuration: "0.15s",
                            backgroundColor: "rgba(133, 163, 224, 0.1)"
                          }}
                        >
                          <div
                            dir="auto"
                            className="css-1rynq56 r-1ro0kt6 r-16y2uox r-1wbh5a2 r-oyd9sg r-gg6oyi r-1b43r93 r-hbpseb r-1ghhsy9 r-b88u0q"
                          >
                            PRIVACY POLICY
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-175oi2r r-1p0dtai r-u8s1d r-13qz1uu r-184en5c">
                <div
                  className="css-175oi2r r-10ptun7"
                  style={{
                    backgroundImage:
                      "linear-gradient(1.5708rad, rgba(255, 255, 255, 0), rgb(255, 255, 255))"
                  }}
                />
              </div>
            </nav>
          </div>
          <div
            data-rnwrdesktop-hidden="true"
            data-rnwr700-hidden="true"
            tabIndex={0}
            className="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 9,
              backgroundColor: "rgba(0, 0, 0, 0)",
              transitionDuration: "0.15s"
            }}
          />
        </div>
        <div />
        <div />
        <div />
        <div>
          <div className="view_SggA- flex_jZskO backdrop_M-DLi fadeIn_oHVvu">
            <div className="view_SggA- flex_jZskO searchModal_Vcy-I popIn_HUvB6"  ref={ref}>
              <div className="view_SggA- flex_jZskO searchModalHeader_XHNRd">
                <div className="view_SggA- flex_jZskO">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    className="searchModalHeaderIcon_Q-OxP"
                    style={{ verticalAlign: "middle" }}
                  >
                    <g
                      clipPath="url(#Search_svg__clip0_1372_9691)"
                      fill="currentColor"
                    >
                      <path d="M6.9 4.5a.6.6 0 01.6-.6 3.6 3.6 0 013.6 3.6.6.6 0 11-1.2 0 2.4 2.4 0 00-2.4-2.4.6.6 0 01-.6-.6z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M.9 7.5a6.6 6.6 0 1111.672 4.223l2.352 2.353a.6.6 0 01-.848.848l-2.353-2.352A6.6 6.6 0 01.9 7.5zm6.6-5.4a5.4 5.4 0 100 10.8 5.4 5.4 0 000-10.8z"
                      />
                    </g>
                    <defs>
                      <clipPath id="Search_svg__clip0_1372_9691">
                        <path fill="#fff" d="M0 0h16v16H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="view_SggA- flex_jZskO flex1_aMpAE row_PhhRi">
                  <input
                    placeholder="Search content…"
                    className="view_SggA- flex_jZskO searchInput_TEvvq flex1_aMpAE"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="view_SggA- flex_jZskO searchModalBody_kS0BP">
                <div className="view_SggA- flex_jZskO flex1_aMpAE column_C3yiR">
                  <div className="view_SggA- flex_jZskO column_C3yiR flex1_aMpAE mediumHorizontal_74-WX mediumVertical_-Vaii">
                    <div className="view_SggA- flex_jZskO row_PhhRi xsmallVertical_atT3z searchResultsGroup_1WUmo">
                      <span className="base_UAIdb label_utcUO weightBold_0byV- mid_Vbes2">
                        Recent searches
                      </span>
                    </div>
                    <div
                      tabIndex={0}
                      role="button"
                      className="view_SggA- flex_jZskO searchResultItem_p8cXr searchResultItemActive_Ih3Vm pressable_nUrxI withFocusRing_9WvnS"
                    >
                      <div className="view_SggA- flex_jZskO searchResultItemIconWrapper_9nhf7">
                        <div className="view_SggA- flex_jZskO">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            preserveAspectRatio="xMidYMid meet"
                            className="searchResultIcon_Mak8U"
                            style={{ verticalAlign: "middle" }}
                          >
                            <g
                              clipPath="url(#Search_svg__clip0_1372_9691)"
                              fill="currentColor"
                            >
                              <path d="M6.9 4.5a.6.6 0 01.6-.6 3.6 3.6 0 013.6 3.6.6.6 0 11-1.2 0 2.4 2.4 0 00-2.4-2.4.6.6 0 01-.6-.6z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M.9 7.5a6.6 6.6 0 1111.672 4.223l2.352 2.353a.6.6 0 01-.848.848l-2.353-2.352A6.6 6.6 0 01.9 7.5zm6.6-5.4a5.4 5.4 0 100 10.8 5.4 5.4 0 000-10.8z"
                              />
                            </g>
                            <defs>
                              <clipPath id="Search_svg__clip0_1372_9691">
                                <path fill="#fff" d="M0 0h16v16H0z" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div className="view_SggA- flex_jZskO column_C3yiR flex1_aMpAE">
                        <div className="view_SggA- flex_jZskO">
                          <span className="base_UAIdb searchResultTitle_oejjj">
                            <span className=""></span>
                          </span>
                        </div>
                      </div>
                      <div className="view_SggA- flex_jZskO searchResultAction_4Kmeo">
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          preserveAspectRatio="xMidYMid meet"
                          className="searchResultActionIcon_dkZSk"
                          style={{ verticalAlign: "middle" }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.4 3.5a.6.6 0 01.6-.6h2a3.6 3.6 0 010 7.2H4.449l1.975 1.976a.6.6 0 01-.848.848l-3-3a.6.6 0 010-.848l3-3a.6.6 0 01.848.848L4.45 8.9H10a2.4 2.4 0 100-4.8H8a.6.6 0 01-.6-.6z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="base_UAIdb searchResultActionText_2EDdS">
                          Search
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Modal
