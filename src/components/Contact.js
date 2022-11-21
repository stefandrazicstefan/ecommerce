import React from "react";

function Contact() {
  return (
    <div
      style={{
        margin: "100px auto",
        fontSize: "2rem",
        textAlign: "center",
      }}
    >
      <p>Stefan Drazic</p> <br /> github: <br />
      <a
        href="https://github.com/stefandrazicstefan/"
        target="_blank"
        style={{ color: "rgb(161, 50, 255)" }}
      >
        https://github.com/stefandrazicstefan/
      </a>
      <p style={{ marginTop: "10px" }}>
        email:{" "}
        <p style={{ color: "rgb(161, 50, 255)" }}>
          stefandrazicstefan@gmail.com
        </p>
      </p>
    </div>
  );
}

export default Contact;
