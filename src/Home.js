import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
      <img
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          width: "90%",
        }}
        src="https://www.lclark.edu/live/image/gid/273/width/1260/height/630/crop/1/26567_cbi_latteart.jpg"
        alt="Latte Art"
      />
    </section>
  );
}

export default Home;
