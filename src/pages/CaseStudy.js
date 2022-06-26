import React, { useEffect } from "react";
import "../scss/home.scss";
import PageTitle from "../components/PageTitle";
import { scrollTop, homeCardDatas } from "../helpers";
import { useParams } from "react-router-dom";
import case3img1 from "../assets/images/case3.png";
import case3img2 from "../assets/images/case3-img2.png";
import stock1 from "../assets/images/stock1.svg";
import stock2 from "../assets/images/stock2.svg";
import stock3 from "../assets/images/stock3.svg";
import stock4 from "../assets/images/stock4.svg";
import stock31 from "../assets/images/stock3-1.svg";
import stock32 from "../assets/images/stock3-2.svg";
import stock33 from "../assets/images/stock3-3.svg";
import stock34 from "../assets/images/stock3-4.svg";
import stockPostion from "../assets/images/stock-postion.svg";
import caseStudy3 from "../assets/images/caseStudy3.svg";
import caseStudy4 from "../assets/images/caseStudy4.svg";
import iphone1 from "../assets/images/iphone-x1.svg";
import iphone2 from "../assets/images/iphone-x2.svg";
import iphone3 from "../assets/images/iphone-x3.svg";
import iphone4 from "../assets/images/iphone-x4.svg";
import iphone5 from "../assets/images/iphone-x5.svg";
import iphone6 from "../assets/images/iphone-x6.svg";

const CaseStudy = () => {
  const { id } = useParams();
  useEffect(() => {
    scrollTop();
  }, []);

  const cardData = homeCardDatas[id];

  return (
    <div>
      <PageTitle
        title={cardData.title}
        issCaseStudy={true}
        cardData={cardData}
      />

      <div>
        <img src={cardData.image} alt="" />
      </div>
      <div className="case case1 ">
        <div className="caseFlex">
          <h3>01</h3>
          <div>
            <h4>Overview</h4>
            <p>
              <b>
                Carrot is a digital lending platform that gives you access to
                credit in Dollars, at low interest rates. They enable their
                customers access funds by leveraging their digital asset
                holdings on in app existing third party platforms
              </b>
            </p>
          </div>
        </div>
      </div>
      <div className="case case2 caseFlex">
        <div>
          <h3>02</h3>
          <div>
            <h4>Definition</h4>
            <p>
              In 2021, major economies have taken a hit putting the world in
              turmoil, this makes these times an opportunity to build seamless
              intuitive money lending solutions, a lot of businesses and
              companies have been hit hard with the recession and also the COVID
              19 virus couldn't have come at a far worse time than this.
            </p>
            <p>
              A recent stat from the International labour organization said “In
              2020, 8.8 percent of global working hours were lost relative to
              the fourth quarter of 2019, equivalent to 255 million full-time
              jobs. Globally, the decline in working hours in 2020 translated
              into both employment losses and a reduction in working hours for
              those who remained employed, with significant variation across
              regions' '.
            </p>
            <p>
              This has left people with no choice than to see alternatives for
              money to run their daily day to day activities, rather than
              spending out their investments carrot offers to keep their
              investment positions and take loans based on their portfolio
              strengths.
            </p>
          </div>
        </div>
      </div>
      <div className="case case3">
        <div className="caseFlex">
          <h3>03</h3>
          <div>
            <h4>Research</h4>
            <p>
              With a huge population of middle-class people in Nigeria, the
              lending space is growing exponentially. Carrying out research on
              Carrot was almost like a walk in the park if you actually only
              take facts out from what all users think because every user wants
              more money and also certainly at no cost.
            </p>
            <p>
              To kick things off, I conducted primary research to gain a general
              understanding of the lending market. This encompassed examining a
              wide range of microenterprises, SMEs, groups, and individuals who
              offer loans, to understand how services are being run in the
              lending industry.
            </p>
            <p>
              The main aim was to understand and connect user goals and business
              goals. I carried out user research, workshops, and built a solid
              understanding of the pain points, opportunities, and goals. I also
              analyzed some other platforms that are similar to carrot to find
              out their loan strategies and how they structure their repayments.
            </p>
            <p>
              I was able to identified the most things people were concerned
              about when taking loans was in a conversation
            </p>
          </div>
        </div>
        <img src={case3img1} alt="case3" />
        <div className="caseFlex">
          <p>
            I took an understudy of existing loan/lending platforms to take a
            sample data of hope they run their operations both manually and
            automated. Loan processes differ pending on organisations. I
            conducted a research on a few of them and I was able to pinpoint the
            baisc features/flow they all had. Below are my procedural findings
          </p>
        </div>
        <img src={case3img2} alt="case3" />
        <div className="caseFlex">
          <p>
            I went on to carry out a survey with a couple of questions, trying
            to emphatize with the stock/lending community and learn more about
            their experiences with stock, loans and lending platforms, here are
            my findings:
          </p>
        </div>
        <div className="stock">
          <div>
            <span>Do you own stocks?</span>
            <img src={stock1} alt="stock1" />
          </div>
          <div>
            <span>What platforms do you trade stocks on?</span>
            <img src={stock2} alt="stock2" />
          </div>
          <div>
            <span>Do you have an ongoing savings plan</span>
            <img src={stock3} alt="stock3" />
          </div>
          <div>
            <span>
              If the loan collection process is thorough and simple, what are
              the chances you would take a loan
            </span>
            <img src={stock4} alt="stock4" />
          </div>
        </div>
        <div className="blackSection">
          <div>
            <div>
              <h1>54%</h1>
              <p>
                say they are more worried about the repayment plan when taking
                loans
              </p>
            </div>
            <div>
              <h1>45%</h1>
              <p>
                are really concerned on what the interest rates are on the loans
                collected
              </p>
            </div>
            <div>
              <h1>27%</h1>
              <p>
                pay attention to the available loan duration timeline made
                available to them
              </p>
            </div>
            <div>
              <h1>9%</h1>
              <p>
                are worried about the data they are asked to present when
                applying for loans
              </p>
            </div>
          </div>
        </div>
        <div className="stock">
          <div>
            <span>How much do you have on your stock portfolio balance</span>
            <img src={stock31} alt="stock1" />
          </div>
          <div>
            <span>
              If you owned stocks, would you be willing to collect loans based
              on your stock placements
            </span>
            <img src={stock32} alt="stock1" />
          </div>
          <div>
            <span>Do you own a business</span>
            <img src={stock33} alt="stock1" />
          </div>
          <div>
            <span>Do you have current ongoing loans</span>
            <img src={stock34} alt="stock1" />
          </div>
        </div>
        <img src={stockPostion} alt="" />
        <div className="caseFlex">
          <div>
            <h3></h3>
            <span>Findings</span>
            <p>
              Staistically, the result shows by a long mile how much the
              decisions we make affects the business of users. The goal of every
              product is to solve problems and after all said and done the
              product should be able to match and solve a direct problem, in
              this case, it's to help stock owners have access to their funds
              without having to lose their unique placements and also help them
              in cases of financial emergencies. The user goals are being able
              to connect with any of their stock companies, apply for loans,
              maintain a wallet, withdraw their assets. Majority of users need
              the loans but worry about specifc attricutes that come along with
              collecting loans, the data collected helps in knowing better which
              features, assets to leverage mainly in order to majorly solve user
              problems, promote business goals and ultimately maximise end user
              processes.
            </p>
          </div>
        </div>
      </div>
      <div className="case case4">
        <div className="caseFlex">
          <h3>04</h3>
          <div>
            <h4>User Persona</h4>
            <p>
              The research carried out has helped us narrow down our user
              persona details and has also help us understand the category of
              users that are in the stock/fintech field. Meet Vernisa Adebayo
            </p>
          </div>
        </div>
        <div className="user">
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <div className="subWrap">
                <h3>Vernisa Adebayo, 26</h3>
                <p>
                  Vern is a Nigerian, lives in Lagos, Nigeria, she is a
                  chartered accountant, she runs Pentagon. Pentagon is an
                  auditing firm that has multiple affiliations on the federal
                  and state level. She is currently engaged and has been trading
                  stock since her second year in school, she has a very good
                  knowledge about the financial market. She feels trading stocks
                  is the most perfect way to make investments and ultimately
                  save money. She has her stock placements on Invest Bamboo and
                  Rise Vest, both are registered stock trading platforms both in
                  the Nigerian Stock Exchange (NSE) and New York Stock Exchange
                  (NYSE)
                </p>
              </div>
              <div>
                <div>
                  <h3>Ideal Features</h3>
                  <p>
                    Integrate with Invest Bamboo and RiseVest Maintain a wallet
                    in app Save Cards for Payback Make transfers to another
                    carrot user
                  </p>
                </div>
                <div>
                  <h3>Pain Points</h3>
                  <p>
                    Hates taking risks Not a tech enthusiast Skeptical on how
                    history affects stock performances Confused with stock
                    market jargons
                  </p>
                </div>
              </div>
              <div className="subWrap">
                <h3>Takeaways</h3>
                <p>
                  Vern wants to save as much as possible Her savings gives her
                  self confidence She wants to be able to solve her financial
                  needs without much stress She has plans of going fully into
                  stocks and becoming a stock broker
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="case case5">
        <div className="caseFlex">
          <h3>05</h3>
          <div>
            <h4>User Flows</h4>
          </div>
        </div>
        <img src={caseStudy3} alt="caseStudy3" />
      </div>
      <div className="case case6">
        <div className="caseFlex">
          <h3>06</h3>
          <div>
            <h4>Information Architecture (User Mind Mapping)</h4>
          </div>
        </div>
        <img src={caseStudy4} alt="caseStudy4" />
      </div>
      <div className="case case7">
        <div className="caseFlex">
          <h3>06</h3>
          <div>
            <h4>User Interface</h4>
          </div>
        </div>
        <div className="interface_wrap">
          <div>
            <img src={iphone1} alt="" />
            <img src={iphone2} alt="" />
          </div>
          <p>
            The mobile application was designed with simplicity and minimalism
            in mind, the three splash screens highlights the three most sought
            after features of the product. These onboarding screens priortises
            what the app does over how to use the app. This method is advocated
            for the app owners that want their users to understand how the app
            functions which we achieved by designing related visuals and text in
            the app onboarding screens.
          </p>
        </div>
        <div className="interface_wrap">
          <div>
            <img src={iphone3} alt="" />
            <img src={iphone4} alt="" />
          </div>
          <p>
            The product has a very consice sign up process, you might call this
            a KYC process and would be wrong, the screens try to collect more
            information from the users, select platfrom, amount, email for
            legals and so other important detail needed to authenticate loans
          </p>
        </div>
        <div className="interface_wrap">
          <div>
            <img src={iphone5} alt="" />
            <img src={iphone6} alt="" />
          </div>
          <p>
            The first screen is the home screen for the product, it contains all
            the most important details of a loan and all is designed to be seen
            at a glace so as not to confuse users over figures and dates. The
            card screen is used to add card for repayments which is mandatory to
            collect loans
          </p>
        </div>
      </div>
      <div className="case case8">
        <div className="caseFlex">
          <h3>07</h3>
          <div>
            <h4>Usability Testing</h4>
            <p>
              After the prototype was complete, usability testing was carried
              out by printing the Hi-res images of the prototypes on cardboards
              and distributed to potential users by the Carrot team.
            </p>
            <p>
              The idea and user flow were exceptionally received by the users.
              Most praised its concept and UI while others clamoured about the
              interest rates, payback models should be re-considered
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaseStudy;
