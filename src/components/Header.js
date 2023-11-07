import { useMemo } from "react";
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

const Header = ({ whatsAppImage20231022At0FontWeight }) => {
  const homeStyle = useMemo(() => {
    return {
      fontWeight: whatsAppImage20231022At0FontWeight,
    };
  }, [whatsAppImage20231022At0FontWeight]);

  return (
    <div className={styles.topBarParent}>
      <div className={styles.topBar}>
        <div className={styles.topBarChild} />
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <b className={styles.contactUs}><Link to="/contact-us" >Contact Us</Link></b>
        </div>
        <div className={styles.tabs}>
          <b className={styles.home} style={homeStyle}>
            <Link to="/" >Home</Link>
          </b>
          <div className={styles.home}>About us</div>
        </div>
      </div>
      <img
        className={styles.whatsappImage20231022At0}
        alt=""
        src="/whatsapp-image-20231022-at-0012-1@2x.png"
      />
    </div>
  );
};

export default Header;
