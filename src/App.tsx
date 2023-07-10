import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import './App.css';
import Modal from "./components/Modal";


function App() {

  const [buttonMenu, setButtonMenu] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowButton = () => {
    setButtonMenu(!buttonMenu);
  };

  const handleCopyToClipboard = () =>{
    const textToCopy = window.location.href;
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    navigator.clipboard.writeText(textToCopy);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 3000)
  };

  const handleHiddenCopyToClipboard = () => {
    setShowCopied(false)
  };

  const handleClickOutside = () => {
    setShowModal(false);
  };

  const handleClickShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="gitbook-root">
        <div className="css-175oi2r r-13awgt0 r-12vffkv">
          <div className="css-175oi2r r-13awgt0 r-12vffkv">
            <header
              translate="no"
              data-rnwrdesktop-1ph75f1="true"
              data-rnwr700-sga3zk="true"
              className="r-1xc7w19 r-1phboty r-1yadl64 r-deolkf r-6koalj r-1mlwlqe r-1q142lx r-crgep1 r-ifefl9 r-bcqeeo r-t60dpp r-nzcix3 r-qklmqi r-gtdqiz r-ipm5af r-184en5c r-18u37iz r-1awozwy"
              style={{ backgroundColor: "rgb(255, 255, 255)" }}
            >
              <div className="view_SggA- flex_jZskO publicContainer_11UZS smallHorizontal_kBCzR alignCenter_zl3iW withStickyHeader_HQiM-">
                <div
                  aria-label="Show Table of Content"
                  role="button"
                  data-rnwrdesktop-hidden="true"
                  data-rnwr700-visible="true"
                  data-rnwi-1vckr1u-hover-focus="true"
                  data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                  data-rnwi-handle="button"
                  tabIndex={0}
                  className="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-rs99b7 r-18u37iz r-18kxxzh r-1777fci r-1ny4l3l r-eu3ka r-1bnj018 r-1kb76zh r-18c69zk r-mk0yit r-1aockid"
                  style={{ transitionDuration: "0.15s" }}
                  onClick={handleShowButton}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    preserveAspectRatio="xMidYMid meet"
                    data-rnwibutton-1bnj018-hover-focus="true"
                    data-rnwi-handle="nearest"
                    className="r-h7gdob"
                    style={{ verticalAlign: "middle", width: 18, height: 18 }}
                  >
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </svg>
                </div>
                <Link
                  to="/"
                  aria-label="Real Swipe Brick Breaker"
                  data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                  data-rnwi-handle="nearest"
                  data-rnwrdesktop-iyfy8q-1qhn6m8-11g3r6m-1h0z5md="true"
                  data-rnwr700-iyfy8q-gy4na3-i023vh-1wbh5a2-1h0z5md-="true"
                  className="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-18u37iz r-1awozwy"
                  data-testid="public.headerHomeLink"
                  style={{ transitionDuration: "0.15s" }}
                >
                  <div className="css-175oi2r r-6wscbn r-1ro0kt6 r-16y2uox r-1wbh5a2 r-18u37iz r-1h0z5md r-1awozwy">
                    <div className="css-175oi2r">
                      <div
                        data-rnwrdesktop-visible="true"
                        data-rnwr700-hidden="true"
                        className="css-175oi2r"
                      >
                        <div
                          className="css-175oi2r r-18u37iz r-1awozwy r-1777fci r-z2wwpe r-88pszg"
                          style={{ width: 40, height: 40, overflow: "hidden" }}
                        >
                          <img
                            alt=""
                            src="https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F3580545602-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FrR6f4DKfQ9wYYc3uJNha%252Ficon%252FIckHDNWk7rH88gpj5yRd%252Ficon_3.png%3Falt%3Dmedia%26token%3Dd8412f42-8eb3-40c0-a4dd-fc444e1a6561"
                            width="100%"
                            height="auto"
                            decoding="async"
                            className="r-1pi2tsx r-12mrs02 r-13qz1uu r-1ro0kt6 r-16y2uox r-1wbh5a2"
                          />
                        </div>
                      </div>
                      <div
                        data-rnwrdesktop-hidden="true"
                        data-rnwr700-visible="true"
                        className="css-175oi2r"
                      >
                        <div
                          className="css-175oi2r r-18u37iz r-1awozwy r-1777fci r-z2wwpe r-88pszg"
                          style={{ width: 24, height: 24, overflow: "hidden" }}
                        >
                          <img
                            alt=""
                            src="https://www.gitbook.com/cdn-cgi/image/width=24,dpr=2,height=24,fit=contain,format=auto/https%3A%2F%2F3580545602-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FrR6f4DKfQ9wYYc3uJNha%252Ficon%252FIckHDNWk7rH88gpj5yRd%252Ficon_3.png%3Falt%3Dmedia%26token%3Dd8412f42-8eb3-40c0-a4dd-fc444e1a6561"
                            width="100%"
                            height="auto"
                            decoding="async"
                            className="r-1pi2tsx r-12mrs02 r-13qz1uu r-1ro0kt6 r-16y2uox r-1wbh5a2"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      dir="auto"
                      data-rnwrdesktop-gg6oyi-ubezar-135wba7-1kfrs79="true"
                      data-rnwr700-gg6oyi-ubezar-135wba7-1kfrs79="true"
                      className="css-1rynq56 r-1udh08x"
                    >
                      <span
                        data-rnwinearest-1nf4jbm-="true"
                        data-rnwinearest--1ghhsy9-hover-focus="true"
                        data-rnwi-handle="nearest"
                        className="css-1qaijid r-8akbws r-krxsd3 r-dnmrzs r-1udh08x r-1udbk01"
                        style={{ WebkitLineClamp: 2, color: "rgb(59, 69, 78)" }}
                      >
                        Real Swipe Brick Breaker
                      </span>
                    </div>
                  </div>
                </Link>
                <div
                  data-rnwr700-hidden="true"
                  className="css-175oi2r r-18u37iz r-17s6mgv r-1awozwy r-1ro0kt6 r-16y2uox r-1wbh5a2 r-1qhn6m8"
                />
                <div
                  data-rnwrdesktop-visible="true"
                  data-rnwr700-hidden="true"
                  className="css-175oi2r r-1jj8364 r-puj83k r-1pyaxff r-16vg0q1 r-1ro0kt6 r-16y2uox r-1wbh5a2"
                >
                  <div
                    aria-label="Search"
                    data-rnwi-190qawg-hover-focus="true"
                    data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                    data-rnwi-handle="nearest"
                    tabIndex={0}
                    className="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-42olwf r-kdyh1x r-rs99b7 r-eu3ka r-13qz1uu r-18u37iz r-1wtj0ep r-1awozwy r-1qhn6m8 r-1pyaxff"
                    style={{
                      backgroundColor: "rgba(59, 69, 78, 0.1)",
                      transitionDuration: "0.15s"
                    }}
                    onClick={handleClickShowModal}
                  >
                    <div className="css-175oi2r r-18u37iz r-1awozwy">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        className="r-1kb76zh"
                        style={{
                          verticalAlign: "middle",
                          width: 16,
                          height: 16,
                          color: "rgb(59, 69, 78)"
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.5 4a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10.5a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.093 15.093a1 1 0 011.414 0l5.2 5.2a1 1 0 01-1.414 1.414l-5.2-5.2a1 1 0 010-1.414z"
                          fill="currentColor"
                        />
                      </svg>
                      <div
                        dir="auto"
                        data-rnwinearest-1nf4jbm-hover-focus="true"
                        data-rnwi-handle="nearest"
                        className="css-1rynq56 r-gg6oyi r-1b43r93 r-16dba41 r-hbpseb"
                        style={{ color: "rgb(59, 69, 78)" }}
                      >
                        Search
                      </div>
                    </div>
                    <div className="css-175oi2r">
                      <span className="base_UAIdb shortcut_2Blls xsmallHorizontal_j9kFq base_UAIdb groupTitle_xV-vG flex_jZskO row_PhhRi alignCenter_zl3iW main_Iciyi">
                        ⌘K
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-rnwrdesktop-hidden="true"
                  data-rnwr700-visible="true"
                  className="css-175oi2r r-1jj8364 r-puj83k r-1pyaxff"
                >
                  <div
                    aria-label="Search"
                    role="button"
                    data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                    data-rnwi-handle="button"
                    tabIndex={0}
                    className="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-rs99b7 r-18u37iz r-18kxxzh r-1777fci r-1ny4l3l r-z2wwpe r-mabqd8 r-1bnj018 r-mk0yit r-1yvhtrz"
                    style={{ transitionDuration: "0.15s" }}
                    onClick={handleClickShowModal}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      data-rnwibutton--1ghhsy9-hover-focus="true"
                      data-rnwi-handle="nearest"
                      style={{
                        verticalAlign: "middle",
                        width: 16,
                        height: 16,
                        color: "rgb(59, 69, 78)"
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.5 4a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10.5a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.093 15.093a1 1 0 011.414 0l5.2 5.2a1 1 0 01-1.414 1.414l-5.2-5.2a1 1 0 010-1.414z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </header>
            <div
              data-rnwrdesktop-hidden="true"
              data-rnwr700-visible="true"
              className="css-175oi2r"
            />
            <div
              data-rnwrdesktop-18u37iz="true"
              data-rnwr700-eqz5dr="true"
              className="css-175oi2r r-1ro0kt6 r-16y2uox r-1wbh5a2 r-14lw9ot"
            >
              <div className="view_SggA- flex_jZskO publicContainer_11UZS">
                <div
                  data-rnwrdesktop-visible="true"
                  data-rnwr1430-visible="true"
                  data-rnwr700-hidden="true"
                  className="css-175oi2r r-k200y r-14lw9ot r-18ayb63 r-13l2t4g r-12dqhl9 r-1rnoaur r-gtdqiz r-1fo40xd r-18u37iz r-17s6mgv"
                  data-testid="page.desktopTableOfContents"
                >
                  <nav
                    translate="no"
                    aria-label="Table of contents"
                    className="r-1oszu61 r-1xc7w19 r-1phboty r-1yadl64 r-deolkf r-6koalj r-1mlwlqe r-1q142lx r-crgep1 r-ifefl9 r-bcqeeo r-t60dpp r-bnwqim r-417010 r-1ipicw7 r-eqz5dr"
                  >
                    <div className="css-175oi2r r-1ro0kt6 r-16y2uox r-1wbh5a2 r-puj83k">
                      <div className="css-175oi2r r-150rngu r-eqz5dr r-11yh6sk r-1rnoaur r-1sncvnh r-1ro0kt6 r-16y2uox r-1wbh5a2">
                        <div className="css-175oi2r r-1yzf0co r-1sc18lr">
                          <div className="css-175oi2r">
                            <NavLink to="/"
                              data-rnwrdesktop-fnigne="true"
                              data-rnwr700-13l2t4g="true"
                              data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                              data-rnwi-handle="nearest"
                              style={{
                                transitionDuration: "0.25s",
                              }}
                              className={({ isActive }) => (isActive ? 'active-nav css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh r-15zivkp' : 'css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh r-15zivkp')}
                            >
                              <div className="css-175oi2r r-88pszg">
                                <div
                                  className="css-175oi2r r-4qtqp9 r-bnwqim"
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
                                className="css-1rynq56 r-1ro0kt6 r-16y2uox r-1wbh5a2 r-oyd9sg r-gg6oyi r-1b43r93 r-hbpseb r-1bnj018"
                              >
                                Hello
                              </div>
                            </NavLink>
                          </div>
                          <div className="css-175oi2r">
                            <NavLink to="/terms-and-conditions"
                              data-rnwrdesktop-fnigne="true"
                              data-rnwr700-13l2t4g="true"
                              data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                              data-rnwi-handle="nearest"
                              className={({ isActive }) => (isActive ? 'active-nav css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh r-15zivkp' : 'css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh r-15zivkp')}
                              style={{ transitionDuration: "0.15s" }}
                              data-rnwi-1b00too-hover="true"
                            >
                              <div
                                dir="auto"
                                className="css-1rynq56 r-1ro0kt6 r-16y2uox r-1wbh5a2 r-oyd9sg r-gg6oyi r-1b43r93 r-16dba41 r-hbpseb r-1bnj018"
                              >
                                TERMS AND CONDITIONS
                              </div>
                            </NavLink>
                          </div>
                          <div className="css-175oi2r">
                            <NavLink to="/privacy-policy"
                              data-rnwrdesktop-fnigne="true"
                              data-rnwr700-13l2t4g="true"
                              data-rnwi-1b00too-hover="true"
                              data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                              data-rnwi-handle="nearest"
                              className={({ isActive }) => (isActive ? 'active-nav css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh' : 'css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh')}
                              style={{ transitionDuration: "0.15s" }}
                            >
                              <div
                                dir="auto"
                                className="css-1rynq56 r-1ro0kt6 r-16y2uox r-1wbh5a2 r-oyd9sg r-gg6oyi r-1b43r93 r-16dba41 r-hbpseb r-1bnj018"
                              >
                                PRIVACY POLICY
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="css-175oi2r r-1p0dtai r-u8s1d r-13qz1uu r-184en5c">
                      <div
                        className="css-175oi2r r-10ptun7"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))"
                        }}
                      />
                    </div>
                  </nav>
                </div>
                <div
                  className="css-175oi2r r-13awgt0"
                  style={{ backgroundColor: "rgb(255, 255, 255)" }}
                >
                  <div className="css-175oi2r r-1ro0kt6 r-16y2uox r-1wbh5a2 r-18u37iz">
                    <div className="view_SggA- flex_jZskO pageWrapper_ca2kA noneVertical_jpmaI autoHorizontal_dqmM- flex1_aMpAE column_C3yiR">
                      <Outlet />
                    </div>
                    <aside
                      translate="no"
                      aria-label="Page outline"
                      data-rnwrdesktop-166pt5r="true"
                      data-rnwr1280-hidden="true"
                      data-rnwr700-hidden="true"
                      className="r-1oszu61 r-1xc7w19 r-1phboty r-1yadl64 r-deolkf r-6koalj r-1mlwlqe r-eqz5dr r-1q142lx r-crgep1 r-ifefl9 r-bcqeeo r-t60dpp r-417010 r-k200y r-1rnoaur r-gtdqiz r-pw2am6 r-146iojx"
                      data-testid="page.outline"
                      style={{ top: 104, maxHeight: "calc(100vh - 104px)" }}
                    >
                      <div className="css-175oi2r r-hu79xy r-1peese0">
                        <div className="css-175oi2r r-5njf8e r-wk8lta r-1mdbw0j" onClick={handleCopyToClipboard}>
                          <div
                            data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                            data-rnwi-handle="nearest"
                            tabIndex={0}
                            className="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-18u37iz r-1awozwy r-1guathk r-oyd9sg r-dnmrzs r-7xmw5f"
                            style={{ transitionDuration: "0.15s" }}
                          >
                            <div className="css-175oi2r r-1kb76zh">
                              <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                preserveAspectRatio="xMidYMid meet"
                                data-rnwinearest--1ghhsy9-hover-focus="true"
                                data-rnwi-handle="nearest"
                                className="r-1rasi3h"
                                style={{
                                  verticalAlign: "middle",
                                  width: 18,
                                  height: 18
                                }}
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.525 3.474a2.4 2.4 0 00-3.394 0L7.717 4.89a.6.6 0 01-.848-.849l1.414-1.414a3.6 3.6 0 015.091 5.091L11.96 9.131a.6.6 0 01-.849-.848l1.414-1.414a2.4 2.4 0 000-3.395zm-1.272 1.273a.6.6 0 010 .849l-5.657 5.657a.6.6 0 01-.849-.849l5.657-5.657a.6.6 0 01.849 0zM4.889 6.87a.6.6 0 010 .848L3.474 9.131a2.4 2.4 0 103.395 3.394l1.414-1.414a.6.6 0 01.848.849l-1.414 1.414a3.6 3.6 0 11-5.091-5.091L4.04 6.869a.6.6 0 01.849 0z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div
                              dir="auto"
                              data-rnwinearest--1ghhsy9-hover-focus="true"
                              data-rnwi-handle="nearest"
                              className="css-1rynq56 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-gg6oyi r-1b43r93 r-16dba41 r-hbpseb r-1bnj018 r-1ro0kt6 r-16y2uox r-1wbh5a2"
                            >
                              Copy link
                            </div>
                          </div>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal onClickOutside={handleClickOutside} showModal={showModal} />
      {/* Copy */}
      <div id="copy-root" >
        <div
          data-rnwrdesktop-1moh23t-e1k2in="true"
          data-rnwr700-1moh23t-e1k2in-tceitz="true"
          className={showCopied ? 'css-175oi2r r-1xcajam r-l13dpy show-copy' : 'css-175oi2r r-1xcajam r-l13dpy'}
        >
          <div className="css-175oi2r">
            <div
              data-rnwrdesktop-iyfy8q-gl891g-1vamr63-5oul0u="true"
              data-rnwr700-13qz1uu-bcqeeo="true"
              tabIndex={0}
              className="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73"
              style={{ transitionDuration: "0.15s" }}
            >
              <div
                className="css-175oi2r"
                style={{
                  flex: "1 1 0%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 16,
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 10px",
                  borderColor: "rgb(227, 232, 237)",
                  borderRadius: 8,
                  columnGap: 16,
                  borderWidth: 1,
                  backgroundColor: "rgb(255, 255, 255)"
                }}
              >
                <div className="css-175oi2r r-18u37iz r-1ro0kt6 r-16y2uox r-1wbh5a2 r-zo7nv5">
                  <div className="css-175oi2r r-1472mwg r-1777fci r-1wv73ep">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      className="r-1ghhsy9"
                      style={{ verticalAlign: "middle", width: 18, height: 18 }}
                    >
                      <g clipPath="url(#Copy_svg__clip0_1372_9671)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.5.4A2.6 2.6 0 003.9 3v.9H3A2.6 2.6 0 00.4 6.5V13A2.6 2.6 0 003 15.6h6.5a2.6 2.6 0 002.6-2.6v-.9h.9a2.6 2.6 0 002.6-2.6V3A2.6 2.6 0 0013 .4H6.5zm5.6 10.5h.9a1.4 1.4 0 001.4-1.4V3A1.4 1.4 0 0013 1.6H6.5A1.4 1.4 0 005.1 3v.9h4.4a2.6 2.6 0 012.6 2.6v4.4zM9.5 5.1a1.4 1.4 0 011.4 1.4V13a1.4 1.4 0 01-1.4 1.4H3A1.4 1.4 0 011.6 13V6.5A1.4 1.4 0 013 5.1h6.5z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="Copy_svg__clip0_1372_9671">
                          <path fill="#fff" d="M0 0h16v16H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="css-175oi2r r-eqz5dr r-1ro0kt6 r-16y2uox r-1wbh5a2 r-1rxb9bi">
                    <div
                      dir="auto"
                      className="css-1rynq56 r-gg6oyi r-ubezar r-135wba7 r-majxgm r-1nf4jbm"
                    >
                      Page URL copied to clipboard
                    </div>
                    <div
                      dir="auto"
                      className="css-1rynq56 r-gg6oyi r-1b43r93 r-16dba41 r-hbpseb r-1bnj018"
                    >
                      Paste it wherever you like.
                    </div>
                  </div>
                </div>
                <div className="css-175oi2r r-18u37iz r-1awozwy r-1ta3fxp">
                  <div
                    tabIndex={0}
                    className="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73"
                    style={{ transitionDuration: "0.15s" }}
                    onClick={handleHiddenCopyToClipboard}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      className="r-1nf4jbm"
                      style={{ verticalAlign: "middle", width: 18, height: 18 }}
                    >
                      <path
                        d="M12.424 4.424a.6.6 0 00-.848-.848L8 7.15 4.424 3.576a.6.6 0 10-.848.848L7.15 8l-3.575 3.576a.6.6 0 00.848.848L8 8.85l3.576 3.575a.6.6 0 00.848-.848L8.85 8l3.575-3.576z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu mobile */}
      <div id="menu-mobile-root" className={buttonMenu ? '' : 'd-none'}>
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
              left: 0
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
                    onClick={handleShowButton}
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
                        <NavLink
                          to="/"
                          data-rnwrdesktop-fnigne="true"
                          data-rnwr700-13l2t4g="true"
                          data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                          data-rnwi-handle="nearest"
                          className={({ isActive }) => (isActive ? 'active-nav css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh r-15zivk' : 'css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh r-15zivkp')}
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
                        </NavLink>
                      </div>
                      <div className="css-175oi2r">
                        <NavLink
                          to="/terms-and-conditions"
                          data-rnwrdesktop-fnigne="true"
                          data-rnwr700-13l2t4g="true"
                          data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                          data-rnwi-handle="nearest"
                          className={({ isActive }) => (isActive ? 'active-nav css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh r-15zivkp' : 'css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh r-15zivkp')}
                          style={{ transitionDuration: "0.15s" }}
                          data-rnwi-1b00too-hover="true"
                        >
                          <div
                            dir="auto"
                            className="css-1rynq56 r-1ro0kt6 r-16y2uox r-1wbh5a2 r-oyd9sg r-gg6oyi r-1b43r93 r-16dba41 r-hbpseb r-1bnj018"
                          >
                            TERMS AND CONDITIONS
                          </div>
                        </NavLink>
                      </div>
                      <div className="css-175oi2r">
                        <NavLink
                          to="/privacy-policy"
                          data-rnwrdesktop-fnigne="true"
                          data-rnwr700-13l2t4g="true"
                          data-rnwi-5xr8s6-dse9kg-2fw26j-cb7i37-focus-visible="true"
                          data-rnwi-handle="nearest"
                          className={({ isActive }) => (isActive ? 'active-nav css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh' : 'css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73 r-1awozwy r-42olwf r-z2wwpe r-rs99b7 r-18u37iz r-1ceczpf r-1pn2ns4 r-1kb76zh ')}
                          style={{
                            transitionDuration: "0.15s",
                          }}
                        >
                          <div
                            dir="auto"
                            className="css-1rynq56 r-1ro0kt6 r-16y2uox r-1wbh5a2 r-oyd9sg r-gg6oyi r-1b43r93 r-hbpseb r-1bnj018"
                          >
                            PRIVACY POLICY
                          </div>
                        </NavLink>
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
                      "linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))"
                  }}
                />
              </div>
            </nav>
          </div>
          <div
            data-rnwrdesktop-hidden="true"
            tabIndex={0}
            className="css-175oi2r r-1i6wzkk r-lrvibr r-1loqt21 r-1otgn73"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 9,
              backgroundColor: "rgba(27, 30, 33, 0.77)",
              transitionDuration: "0.15s"
            }}
            data-rnwr700-visible="true"
          />
        </div>
      </div>

    </>

  )
}

export default App
