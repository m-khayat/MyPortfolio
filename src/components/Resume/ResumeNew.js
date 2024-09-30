import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/MohamadKhayatResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  // New variable to manage PDF width on small screens
  const [pdfWidth, setPdfWidth] = useState(1200);

  const onButtonClick = () => {
    fetch(`${pdf}`).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "mohamad khayat resume.pdf";
        alink.click();
      });
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);

      // Dynamically adjust the pdfWidth based on the window width
      if (window.innerWidth <= 1200) {
        setPdfWidth(window.innerWidth * 0.9); // 90% of the screen width
      } else {
        setPdfWidth(window.innerWidth * 0.9); // Default PDF width for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial width based on current window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      {" "}
      {/* Ensure no horizontal overflow */}
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            onClick={onButtonClick}
            variant="primary"
            style={{
              maxWidth: "250px",
              marginBottom: "20px",
              marginTop: "3rem",
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} width={pdfWidth} />{" "}
              {/* Use width prop instead of scale */}
            </Document>
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <Button
            onClick={onButtonClick}
            variant="primary"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
