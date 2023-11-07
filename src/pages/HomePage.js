import Header from "../components/Header";
import HouseowlsCard from "../components/HouseowlsCard";
import FormContainer from "../components/FormContainer";
import ReferAndEarnContainer1 from "../components/ReferAndEarnContainer1";
import HomeContainer from "../components/HomeContainer";
import Container from "../components/Container";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <Header />
      <div className={styles.building1Wrapper}>
        <div className={styles.building1}>
          <img className={styles.objectsIcon} alt="" src="/objects.svg" />
          <div className={styles.building1Inner}>
            <div className={styles.madeWithInIndiaWrapper}>
              <div className={styles.madeWith}>Made with ❤️ in India</div>
            </div>
          </div>
        </div>
      </div>
      <b className={styles.worldsFirstVideoFirstContainer}>
        <p
          className={styles.worldsFirstVideoFirst}
        >{`World's First Video-First `}</p>
        <p className={styles.worldsFirstVideoFirst}>Property Experience</p>
      </b>
      <div className={styles.homePageChild} />
      <div className={styles.groupParent}>
        <div className={styles.image3Parent}>
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
          <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
        </div>
        <div className={styles.downloadNow}>Download Now</div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <HouseowlsCard />
        <FormContainer />
        <img className={styles.arrow04Icon} alt="" src="/arrow-04.svg" />
        <div className={styles.searchByLocationsContainer}>
          <p className={styles.worldsFirstVideoFirst}>{`Search By `}</p>
          <p className={styles.worldsFirstVideoFirst}>Locations</p>
        </div>
      </div>
      <ReferAndEarnContainer1 />
      <HomeContainer />
      <img className={styles.homePageItem} alt="" src="/ellipse-1112.svg" />
      <div className={styles.keepYourSavedContainer}>
        <p className={styles.worldsFirstVideoFirst}>{`Keep your saved `}</p>
        <p className={styles.worldsFirstVideoFirst}>items organized</p>
      </div>
      <img
        className={styles.iphone15ProBlackTitaniumM}
        alt=""
        src="/iphone-15-pro-black-titanium-mockup-portrait1.svg"
      />
      <div className={styles.timeSavingSavesUsersTimeParent}>
        <div className={styles.timeSavingSavesUsersContainer}>
          <ul className={styles.timeSavingSavesUsersTime}>
            <li className={styles.timeSavingSavesUsersTime1}>
              <i className={styles.timeSaving}>Time-Saving:</i>
              <span>{` Saves users’ time by eliminating the need `}</span>
            </li>
          </ul>
          <p className={styles.toRepeatedlySearch}>
            {" "}
            to repeatedly search for the same properties.
          </p>
          <ul className={styles.timeSavingSavesUsersTime}>
            <li className={styles.timeSavingSavesUsersTime1}>
              <i className={styles.timeSaving}>Personalized Experience:</i>
              <span>{` Enhances user experience by `}</span>
            </li>
          </ul>
          <p
            className={styles.toRepeatedlySearch}
          >{`     allowing the creation of customized lists based on preferences `}</p>
          <p className={styles.toRepeatedlySearch}> or specific locations.</p>
          <ul className={styles.timeSavingSavesUsersTime}>
            <li className={styles.timeSavingSavesUsersTime1}>
              <i className={styles.timeSaving}>
                Easy Access to Last Viewed Properties:
              </i>
              <span>{` Users can swiftly `}</span>
            </li>
          </ul>
          <p className={styles.worldsFirstVideoFirst}>
            {" "}
            resume their search, picking up right where they left off
          </p>
        </div>
        <div className={styles.shortlistYourFavourite}>
          Shortlist Your Favourite Properties
        </div>
      </div>
      <div className={styles.homePageInner} />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.hugeIconinterfacesolidbook}
        alt=""
        src="/hugeiconinterfacesolidbookmark.svg"
      />
      <Container />
      <div className={styles.searchPropertiesWrapper}>
        <div className={styles.searchProperties}>Search properties</div>
      </div>
    </div>
  );
};

export default HomePage;
