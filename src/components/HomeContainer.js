import { useMemo } from "react";
import styles from "./HomeContainer.module.css";

const HomeContainer = ({ propRight, propLeft }) => {
  // const footerStyle = useMemo(() => {
  //   return {
  //     right: propRight,
  //     left: propLeft,
  //   };
  // }, [propRight, propLeft]);

  return (
    <div className={styles.footer}>
      <img style={{width:'500%'}} src="/rectangle-6.svg" />
      <div className={styles.secondaryFooter}>
        <div className={styles.termsConditions}>{`Terms & Conditions`}</div>
        <div className={styles.houseowlsAllRightsContainer}>
          {`@ 2023 `}
          <span className={styles.houseowls}>houseowls</span>. All rights
          reserved.
        </div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.secondaryFooterChild} />
      </div>
      <div className={styles.discover}>
        <b className={styles.discoverHouseowls}>Discover Houseowls</b>
        <div className={styles.home}>Home</div>
        <div className={styles.blog}>Blog</div>
        <div className={styles.contactUs}>Contact Us</div>
        <div className={styles.aboutUs}>About us</div>
        <div className={styles.home1}>Home</div>
        <div className={styles.blog1}>Blog</div>
        <div className={styles.contactUs1}>Contact Us</div>
        <div className={styles.aboutUs1}>About us</div>
      </div>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img
        className={styles.socialMediaLogos}
        alt=""
        src="/social-media-logos.svg"
      />
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit
        turpis enim cursus vulputate amet. Lobortis mi platea aliquam senectus
        tempus mauris neque.
      </div>

    </div>
  );
};

export default HomeContainer;
