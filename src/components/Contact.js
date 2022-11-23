import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div
      style={{
        margin: "100px auto",
        fontSize: "1.5rem",
        textAlign: "center",
      }}
    >
      <p style={{ marginBottom: "40px" }}>Stefan Drazic</p>{" "}
      <div className="github">
        <a
          href="https://github.com/stefandrazicstefan/"
          target="_blank"
          style={{ color: "rgb(161, 50, 255)" }}
        >
          https://github.com/stefandrazicstefan
        </a>
      </div>
      <div style={{ marginTop: "10px" }}>
        email:{" "}
        <p style={{ color: "rgb(161, 50, 255)" }}>
          stefandrazicstefan@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Contact;
