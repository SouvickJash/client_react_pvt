import React from "react";

const DeletePopup = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        background: "#00000050",
        width: "100%",
        height: "100vh",
        top: "0",
        left: "0",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "40%",
          margin: "0 auto",
          height: "360px",
          maxHeight: "170vh",
          marginTop: "calc(100vh - 85vh - 20px)",
          background: "#fff",
          borderRadius: "10px",
          padding: "100px",
          border: "2px solid #999",
          // overflow: "auto",
        //   width: "50% !important"
        }}
      >
        <span className="popupclose" onClick={props.handleClose} sy>
          X
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default DeletePopup;
