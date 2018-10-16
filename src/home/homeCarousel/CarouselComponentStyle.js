const style = {
  body: { overflow: "hidden" },
  container: {
    width: "100%",
    position: "relative",
    /* top: 250px; */
    transition: "left 0.5s, right 0.5s",
    height: "100%"
  },

  imageContainer: {
    position: "absolute",
    display: "block",
    height: "100%",
    width: "100%",
    transition: "left 4s"
  },

  mainContainer: {
    width: "100%",
    height: "100%"
  },

  /* buttons */

  buttons: {
    display: "inline-block",
    bordeRadius: "50%",
    marginLeft: "5px",
    cursor: "pointer",
    width: "30px",
    height: "30px",
    position: "relative",
    bottom: "100px",
    left: "40%"
  },

  nextBtn: {
    position: "absolute",
    float: "right",
    left: "90%",
    top: "50%",
    zIndex: "999",
    transition: "opacity 0.4s"
  },

  prevBtn: {
    position: "absolute",
    top: "50%",
    right: "90%",
    transition: "opacity 0.4s"
  },

  buttonStyle: {
    border: "2px solid black",
    width: "60px",
    textAlign: "center",
    backgroundColor: "white",
    opacity: "0.6",
    borderRadius: "10px"
  },

  clearFix: {
    display: "table",
    clear: "both",
    content: ""
  }
};

export default style;
