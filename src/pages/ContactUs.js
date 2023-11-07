import Basedonthegivencontext from "../components/Basedonthegivencontext";
import HomeContainer from "../components/HomeContainer";
import Header from "../components/Header";
import PhoneFormContainer1 from "../components/PhoneFormContainer1";
import styles from "./ContactUs.module.css";

const ContactUs = () => {

  return (
    <div className={styles.contactUs}>
      <img
        className={styles.whatsappImage20231022At0}
        alt=""
        src="/whatsapp-image-20231022-at-0012-1@2x.png"
      />
      <img
        className={styles.contactUsChild}
        alt=""
        src="/rectangle-975@2x.png"
      />
      <div className={styles.contactUsItem} />
      <b className={styles.contactUs1}>Contact Us</b>
      <Basedonthegivencontext />
      <HomeContainer propRight="unset" propLeft="0px" />
      <Header whatsAppImage20231022At0FontWeight="unset" />
      <PhoneFormContainer1 />
      <img
        className={styles.contactUsInner}
        alt=""
        src="/rectangle-978@2x.png"
      />
      <img className={styles.phmapPinFillIcon} alt="" src="/phmappinfill.svg" />

    </div>
  );
};

export default ContactUs;
