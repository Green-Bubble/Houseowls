import styles from "./HouseowlsCard.module.css";

const HouseowlsCard = () => {
  return (
    <div className={styles.transformingHomeBuyingWithParent}>
      <div className={styles.transformingHomeBuying}>
        Transforming Home Buying with Houseowls
      </div>
      <div className={styles.diveIntoTheContainer}>
        <p
          className={styles.diveIntoThe}
        >{`Dive into the future of home buying with Houseowls, where our `}</p>
        <p className={styles.diveIntoThe}>
          <i className={styles.videoFirst}>video-first</i>
          <span> approach brings every detail of your potential new</span>
        </p>
        <p className={styles.diveIntoThe}>home right to your screen</p>
      </div>
      <div className={styles.whyUsWrapper}>
        <div className={styles.whyUs}>Why Us</div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.videoCentricApproachParent}>
          <div className={styles.videoCentricApproach}>
            Video-Centric Approach
          </div>
          <div className={styles.clapperboard1Wrapper}>
            <img
              className={styles.clapperboard1Icon}
              alt=""
              src="/clapperboard-1.svg"
            />
          </div>
        </div>
        <div className={styles.bookVisitsOnYourConvenientParent}>
          <div className={styles.videoCentricApproach}>
            Book Visits on Your Convenient Time and Day
          </div>
          <div className={styles.clapperboard1Wrapper}>
            <img
              className={styles.clapperboard1Icon}
              alt=""
              src="/event-1.svg"
            />
          </div>
        </div>
        <div className={styles.pickAndDropForPremiumUserParent}>
          <div className={styles.pickAndDrop}>
             Pick and Drop for Premium Users
          </div>
          <div className={styles.clapperboard1Wrapper}>
            <img
              className={styles.clapperboard1Icon}
              alt=""
              src="/taxi-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseowlsCard;
