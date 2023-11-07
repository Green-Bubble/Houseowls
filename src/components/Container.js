import styles from "./Container.module.css";

const Container = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.selectList}>Select list</div>
      <div className={styles.createNewList}>Create New List</div>
      <div className={styles.groupWrapper}>
        <div className={styles.groupParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <img
              className={styles.hugeIconfilesAndFoldersol}
              alt=""
              src="/hugeiconfiles-and-foldersolidfolder-031.svg"
            />
          </div>
          <div className={styles.sector59}>Sector 59</div>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
          <img
            className={styles.hugeIconfilesAndFoldersol}
            alt=""
            src="/hugeiconfiles-and-foldersolidfolder-031.svg"
          />
        </div>
        <div className={styles.independentHouse}>
          <p className={styles.independent}>{`Independent `}</p>
          <p className={styles.independent}>House</p>
        </div>
      </div>
      <div className={styles.groupFrame}>
        <div className={styles.groupParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <img
              className={styles.hugeIconfilesAndFoldersol}
              alt=""
              src="/hugeiconfiles-and-foldersolidfolder-031.svg"
            />
          </div>
          <div className={styles.sector47}>Sector 47</div>
        </div>
      </div>
    </div>
  );
};

export default Container;
