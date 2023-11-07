import { useMemo } from "react";
import styles from "./Property1NormalState.module.css";

const Property1NormalState = ({
  labelText,
  inputFieldHintText,
  property1NormalStateGap,
  property1NormalStatePosition,
  property1NormalStateTop,
  property1NormalStateLeft,
  textLabelLineHeight,
  textLabelFontFamily,
  textLabelFontWeight,
  bLineHeight,
  frameDivBorder,
  frameDivBackgroundColor,
  inputFieldHintFontFamily,
  inputFieldHintOpacity,
}) => {
  const property1NormalStateStyle = useMemo(() => {
    return {
      gap: property1NormalStateGap,
      position: property1NormalStatePosition,
      top: property1NormalStateTop,
      left: property1NormalStateLeft,
    };
  }, [
    property1NormalStateGap,
    property1NormalStatePosition,
    property1NormalStateTop,
    property1NormalStateLeft,
  ]);

  const textLabelStyle = useMemo(() => {
    return {
      lineHeight: textLabelLineHeight,
      fontFamily: textLabelFontFamily,
      fontWeight: textLabelFontWeight,
    };
  }, [textLabelLineHeight, textLabelFontFamily, textLabelFontWeight]);

  const bStyle = useMemo(() => {
    return {
      lineHeight: bLineHeight,
    };
  }, [bLineHeight]);

  const frameDivStyle = useMemo(() => {
    return {
      border: frameDivBorder,
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivBorder, frameDivBackgroundColor]);

  const inputFieldHintStyle = useMemo(() => {
    return {
      fontFamily: inputFieldHintFontFamily,
      opacity: inputFieldHintOpacity,
    };
  }, [inputFieldHintFontFamily, inputFieldHintOpacity]);

  return (
    <div
      className={styles.property1normalState}
      style={property1NormalStateStyle}
    >
      <div className={styles.textLabelParent}>
        <b className={styles.textLabel} style={textLabelStyle}>
          {labelText}
        </b>
        <b className={styles.b} style={bStyle}>
          *
        </b>
      </div>
      <div className={styles.inputFieldHintWrapper} style={frameDivStyle}>
        <div className={styles.inputFieldHint} style={inputFieldHintStyle}>
          {inputFieldHintText}
        </div>
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

export default Property1NormalState;
