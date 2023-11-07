import styles from "./ContainerInputField.module.css";

const ContainerInputField = () => {
  return (
    <div className={styles.inputField}>
      <div className={styles.descriptionParent}>
        <div className={styles.description}>Description</div>
        <b className={styles.b}>*</b>
      </div>
      <div className={styles.writeYourMessageWrapper}>
        <div className={styles.writeYourMessage}>Write your message</div>
      </div>
      <div className={styles.inputFieldhugeIconinterfacParent}>
        <img
          className={styles.inputFieldhugeIconinterfac}
          alt=""
          src="/input-fieldhugeiconinterfaceoutlineproperty-44.svg"
        />
        <div className={styles.thisIsThe}>This is the required field.</div>
      </div>
    </div>
  );
};

export default ContainerInputField;
