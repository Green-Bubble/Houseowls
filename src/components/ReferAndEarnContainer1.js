import styles from "./ReferAndEarnContainer1.module.css";

const ReferAndEarnContainer1 = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <div className={styles.referEarnWithHouseowlsYParent}>
          <div className={styles.referEarnContainer}>
            <p
              className={styles.referEarn}
            >{`Refer & Earn with Houseowls: Your Path `}</p>
            <p className={styles.referEarn}>to Prosperity</p>
          </div>
          <div className={styles.unlockRewardsWithContainer}>
            <p
              className={styles.referEarn}
            >{`Unlock rewards with Houseowls’ Refer & Earn program, offering a generous`}</p>
            <p className={styles.referEarn}>
              <span className={styles.span}>
                <i className={styles.i}>₹ 20,000</i>
              </span>
              <span>
                <span className={styles.span}>{`   `}</span>
                <span>{`for each successful referral. Share the joy of finding the perfect `}</span>
              </span>
            </p>
            <p className={styles.referEarn}>
              <span>
                <span>{`home, and track the progress of your referrals with complete transparency. `}</span>
              </span>
            </p>
            <p className={styles.referEarn}>
              <span>
                <span>{`With Houseowls, turning connections into cash has never been easier or `}</span>
              </span>
            </p>
            <p className={styles.referEarn}>
              <span>
                <span>more rewarding</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <img
        className={styles.iphone15ProBlackTitaniumM}
        alt=""
        src="/iphone-15-pro-black-titanium-mockup-portrait.svg"
      />
      <div className={styles.iphone15ProBlackTitaniumM1}>
        <img className={styles.shadowIcon} alt="" src="/shadow1@2x.png" />
        <img className={styles.mainIcon} alt="" src="/main1@2x.png" />
        <img
          className={styles.iphone15ProBlackTitaniumM2}
          alt=""
          src="/iphone-15-pro-black-titanium-mockup-portrait-label1@2x.png"
        />
      </div>
      <div className={styles.inviteNewFriends}>Invite New friends</div>
      <img className={styles.arrow04Icon} alt="" src="/arrow-041.svg" />
      <div className={styles.trackInviteUpdates}>Track Invite updates</div>
    </div>
  );
};

export default ReferAndEarnContainer1;
