import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const NewModal = ({ show, handleClose, handleShow }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title*" autoFocus />
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Image URl*" />
              <Form.Label></Form.Label>
              <Form.Select type="" placeholder="category*">
                <option value="">Category</option>
                <option value="world">World</option>
                <option value="design">Design</option>
                <option value="politics">Politics</option>
                <option value="health">Health</option>
                <option value="culture">Culture</option>
                <option value="science">Science</option>
              </Form.Select>
              <Form.Select type="" placeholder="Please choose....*">
                <option value="">Please choose...</option>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} style={{ resize: "none" }} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewModal;
