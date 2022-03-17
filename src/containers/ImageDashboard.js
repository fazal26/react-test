import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import ActionItem from "../components/ActionItem";

const imgArr = [image1, image2, image3];

const ImageDashboard = () => {
  const [imageVisibilityMap, setImageVisibility] = useState({
    1: true,
    2: true,
    3: true,
  });

  return (
    <Container fluid>
      <Row>
        <Col sm={3} style={{ background: "#333333" }}>
          <div>
            <p style={{ color: "white" }}>DUST Analysis</p>
          </div>
          {[1, 2, 3].map((i, k) => (
            <ActionItem
              imageMap={imageVisibilityMap}
              toggleImageHandler={setImageVisibility}
              key={k}
              id={i}
            />
          ))}
        </Col>
        <Col sm={9} style={{ background: "#3D3D3D" }}>
          <Row>
            <div style={{ float: "right" }}>
              <Button disabled={true} variant="link">
                Add Navigation
              </Button>
              <Button disabled={true} variant="link">
                Retake Scan
              </Button>
            </div>
          </Row>
          <div
            style={{
              backgroundColor: "black",
              padding: "50px",
            }}
          >
            {[1, 2, 3].map(
              (i, k) =>
                imageVisibilityMap[i] && (
                  <Image
                    src={imgArr[i - 1]}
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                    }}
                    key={k}
                  />
                )
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageDashboard;
