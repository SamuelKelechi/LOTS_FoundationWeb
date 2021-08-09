import { Button } from "antd";
import React from "react";
import img from "../videos/img.jpg";
import hero from "../videos/LotsHomePhoto-removebg-preview.png";

const HomeStart = () => {
  return (
    <center>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
          backgroundColor: "#F4F6FC",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            // backgroundColor: "red",
            width: "300px",
            height: "250px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              textAlign: "Left",
              paddingLeft: "15px",
              marginBottom: "20px",
              color: "rgb(168,142,83)",
              fontWeight: "bold",
              marginTop: "100px",
            }}
          >
            LOTS Charity Foundation
          </div>
          <Button
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              height: "50px",
              textTransform: "uppercase",
              width: "100%",
              // marginLeft: "5px",
              backgroundColor: "rgb(220,226,249)",
              // color: "white",
            }}
          >
            Raising 7 Star Performance
          </Button>
        </div>
        <div
          style={{
            // backgroundColor: "blue",
            width: "320px",
            height: "250px",
            marginTop: "10px",
            marginLeft: "30px",
          }}
        >
          <img
            src={hero}
            alt="bckimage"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </center>
  );
};

export default HomeStart;
