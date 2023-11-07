import styles from "./PhoneFormContainer1.module.css";

const PhoneFormContainer1 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.phoneInstaParent}>
        <div className={styles.phoneIconParent + " " + styles.inputContainer}>
          <img className={styles.phoneIcon} alt="" src="/phone-icon1.svg" />
          <div className={styles.div}>+1 212 965 9700</div>
        </div>
        <div className={styles.bxlinstagramAltParent + " " + styles.inputContainer}>
          <img className={styles.phoneIcon} alt="" src="/bxlinstagramalt.svg" />
          <div className={styles.div}>@houseowls_india</div>
        </div>
      </div>
      <div className={styles.emailParent + " " + styles.inputContainer}>
        <img className={styles.phoneIcon} alt="" src="/email1.svg" />
        <div className={styles.contacthouseowlscom}>Contact@houseowls.com</div>
      </div>
      <div className={styles.locationPinParent + " " + styles.inputContainer}>
        <img className={styles.phoneIcon} alt="" src="/location-pin1.svg" />
        <div className={styles.contacthouseowlscom}>
          <p
            className={styles.prospectStreet7th}
          >{`55 Prospect Street, 7th Fl `}</p>
          <p className={styles.prospectStreet7th}>{`Brooklyn, NY 11201 `}</p>
          <p className={styles.unitedStates}>United States</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneFormContainer1;
