import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <div className={styles.iphone15ProBlackTitaniumM}>
      <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
      <img className={styles.mainIcon} alt="" src="/main@2x.png" />
      <img
        className={styles.iphone15ProBlackTitaniumM1}
        alt=""
        src="/iphone-15-pro-black-titanium-mockup-portrait-label@2x.png"
      />
      <div className={styles.shareParent}>
        <div className={styles.share}>Share</div>
        <img className={styles.shareIcon} alt="" src="/share.svg" />
      </div>
      <div className={styles.commentParent}>
        <div className={styles.share}>{`Comment `}</div>
        <img className={styles.shareIcon} alt="" src="/comment.svg" />
      </div>
      <div className={styles.saveParent}>
        <div className={styles.save}>Save</div>
        <img className={styles.shareIcon} alt="" src="/shortlist.svg" />
      </div>
      <div className={styles.materialSymbolslocationOnParent}>
        <img
          className={styles.materialSymbolslocationOnIcon}
          alt=""
          src="/materialsymbolslocationon.svg"
        />
        <div className={styles.gurgaon}>Gurgaon</div>
      </div>
    </div>
  );
};

export default FormContainer;
