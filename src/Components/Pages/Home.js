import React from "react";
import Header from "../../Components/Includes/Header";
import ServerList from "../../Components/Includes/ServerList";
import Clients from "../../Components/Includes/Clients";
import Footer from "../../Components/Includes/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <div className="banner">
        <div className="container">
          <div className="banner-mian">
            <div id="top" className="callbacks_container">
              <ul className="rslides" id="slider4">
                <li>
                  <div className="bnr">
                    <div className="col-md-7 banner-left">
                      <h2>Dedicated servers</h2>
                      <h3>Starting from 99usd</h3>
                      <p>24x7 knowledgeable support</p>
                      <p>Full Root access</p>
                      <p>
                        1 IP included with each server (more on request w/
                        justification)
                      </p>
                      <p>
                        Your Choice of any OS (CentOS, Windows, Debian, Fedora)
                      </p>
                      <p>FREE Reboots</p>
                    </div>
                    <div className="col-md-5 banner-right">
                      <p>
                        Call us:<span>(818) 995-1560</span>
                      </p>
                      <p>
                        E-mail us:
                        <a href="mailto:example@email.com">
                          sales@digitallandscape.com
                        </a>
                      </p>
                      <div className="b-btn">
                        <a href="#">compare our pricing plans</a>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>

      <div className="read">
        <div className="container">
          <div className="read-main">
            <img src="/assets/images/drbl.png" alt="" />
            <p>
              We have recently opgraded several services. Our servers are faster
              then ever. <a href="#"> Read Full news story</a>
            </p>
          </div>
        </div>
      </div>

      <div className="digital">
        <div className="container">
          <div className="digital-main">
            <h3>
              Grow your business with <span>Digital Landscape</span>
            </h3>
          </div>
          <div className="digital-top">
            <ServerList
              name="Dedicated Servers"
              amount="99"
              month="00"
              spec1="1 TB Hard Drive"
              spec2="8 GB ECC DDR3"
              spec3="4000 GB Transfer"
              spec4="100 Mbps Uplink"
            ></ServerList>
            <ServerList
              name="VPS"
              amount="16"
              month="99"
              spec1="20 TB Hard Drive"
              spec2="512 MB ECC DDR3"
              spec3="500 GB Transfer"
              spec4="100 Mbps Uplink"
            ></ServerList>
            <ServerList
              name="Shared Hosting"
              amount="14"
              month="99"
              spec1="2 GB Hard Drive"
              spec2="100 GB ECC DDR3"
              spec3="PHP and MYSQL"
              spec4="Cpanel Included"
            ></ServerList>
            <ServerList
              name="Colocation"
              amount="567"
              month="99"
              spec1="1 TB Hard Drive"
              spec2="8 GB ECC DDR3"
              spec3="4000 GB Transfer"
              spec4="100 Mbps Uplink"
            ></ServerList>
            <div className="clearfix"></div>
          </div>
          <div className="digital-bottom">
            <h3>Can't decide which one best suits you?</h3>
            <p>
              Call us - <span>(818) 995-1560</span>
            </p>
            <span>
              <label></label>or<label></label>
            </span>
            <p>
              Email us -{" "}
              <span>
                <a href="mailto:example@email.com">
                  sales@digitallandscape.com
                </a>
              </span>
            </p>
            <div className="digi-one">
              <div className="col-md-6 digi-left">
                <p>
                  Every business has unique IT requirements, and that's why we
                  provide a wide range of hosted solutions. And since the best
                  configuration for your business may include more than one
                  platform, we can help you mix-and-match to create the optimal
                  hosting solution for your needs.{" "}
                </p>
              </div>
              <div className="col-md-6 digi-left">
                <p>
                  Digital Landscape supplies enterprise-grade dedicated servers
                  to resellers, VPS and shared hosts, cloud hosts, gamers, and
                  other clients. With a global presence and multilingual sales
                  and support capabilities, you can rely on Digital Landscape to
                  be ready to help whenever you need it.
                </p>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="clients">
            <p>Some of our satisfied clients include...</p>
            <ul>
              <Clients image="assets/images/client-1.png"></Clients>
              <Clients image="assets/images/client-2.png"></Clients>
              <Clients image="assets/images/client-3.png"></Clients>
              <Clients image="assets/images/client-4.png"></Clients>
              <Clients image="assets/images/client-5.png"></Clients>
              <Clients image="assets/images/client-6.png"></Clients>
            </ul>
          </div>
        </div>
      </div>

      <div className="b-navgation">
        <div className="container">
          <div className="b-nav-main">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="single.html">Plans and Services</a>
                <ul className="b-nav">
                  <li>
                    <a href="single.html">Dedicated Servers</a>
                  </li>
                  <li>
                    <a href="single.html">VPS Servers</a>
                  </li>
                  <li>
                    <a href="single.html">Shared Hosting</a>
                  </li>
                  <li>
                    <a href="single.html">Colocation</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="404.html">Infrastructure</a>
              </li>
              <li>
                <a href="news.html">News</a>
              </li>
              <li>
                <a href="about.html">About</a>
                <ul className="b-nav">
                  <li>
                    <a href="single.html">About company</a>
                  </li>
                  <li>
                    <a href="support.html">Contact us</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="support.html">Support</a>
                <ul className="b-nav">
                  <li>
                    <p>
                      Call us:<span>(818) 995-1560</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      E-mail us:{" "}
                      <a href="mailto:example@email.com">
                        sales@digitallandscape.com{" "}
                      </a>
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
