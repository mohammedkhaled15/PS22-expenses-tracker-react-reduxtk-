import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Balance from "./components/Balance";
import History from "./components/History";
import Controls from "./components/Controls";
import NewTransModal from "./components/NewTransModal";
import ManageHistory from "./components/ManageHistory";

function App() {
  const [showNew, setShowNew] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div className="App my-5 d-flex align-items-center">
      <Container
        style={{ marginTop: "40px" }}
        className="d-flex justify-content-center"
      >
        <Row className="justify-content-center w-100 ">
          <Col
            xl={4}
            lg={5}
            md={6}
            xs={11}
            className="border shadow-lg rounded-4"
          >
            <h1 className="text-center my-4 fs-3 fw-bold">Expenses Tracker</h1>
            <Balance />
            <History />
            <Controls setShowNew={setShowNew} setShowEdit={setShowEdit} />
            {showNew ? <NewTransModal setShowNew={setShowNew} /> : null}
            {showEdit ? <ManageHistory setShowEdit={setShowEdit} /> : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
