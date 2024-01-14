import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {  usePutBlogMutation } from "../../redux/blogs";
import { useNavigate } from "react-router-dom";

const UpdateModal = ({ show, handleClose, state, update }) => {
  const authToken = localStorage.getItem("authToken");

  const navi = useNavigate();
  const [putBlog] = usePutBlogMutation();

  const [inp, setInp] = useState({
    title: state.title,
    content: state.content,
    image: state.image,
    isPublish: true,
    categoryId: state?.categoryId,
  });

  const handleInputChange = (e) => {
    
    setInp((prevInp) => ({ ...prevInp, [e.target.name]: e.target.value }));
  };
  const derle = async (e) => {
    e.preventDefault();
    try {
      console.log(inp, "hadi hayirlis");

    console.log(inp,"geliyorsun byaaaaaaaa")

      const der = await putBlog({ id: state._id, token: authToken, data: inp });
      console.log(der, "updateclick");

      navi("/myblog");
    } catch (error) {
      console.error("Blog update error:", error);
     
    }
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={derle}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title*"
                autoFocus
                name="title"
                value={inp?.title}
                // onChange={(e) =>
                //   setInp((prevInp) => ({ ...prevInp, [e.target.name]: e.target.value }))
                // }
                onChange={handleInputChange}
              />
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Image URl*"
                name="image"
                value={inp?.image}
                onChange={handleInputChange}
              />
              <Form.Label></Form.Label>
              <Form.Select
                 placeholder="category*"
                 name="categoryId"
                 value={inp?.categoryId || ""}
                // onChange={(e) =>
                //   //setInp({ ...inp, [e.target.name]: e.target.value })
                //   setInp((prevInp) => ({ ...prevInp, [e.target.name]: e.target.value }))
                // }
                onChange={handleInputChange}
              >
                <option value="">Category</option>
                <option value="659d6dd2d8aea4b25affe395">World</option>
                <option value="659d6dd2d8aea4b25affe3a7">Design</option>
                <option value="659d6dd2d8aea4b25affe3b8">Politics</option>
                <option value="659d6dd2d8aea4b25affe3c9">Health</option>
                <option value="659d6dd2d8aea4b25affe3da">Culture</option>
                <option value="659d6dd2d8aea4b25affe3eb">Science</option>
              </Form.Select>
              <Form.Label></Form.Label>
              <Form.Select
                defaultValue="draft"
                name="isPublish"
                value={inp?.isPublish}
                onChange={handleInputChange}
                placeholder="Please choose....*"
              >
                <option value="">Please choose...</option>
                <option value="false">Draft</option>
                <option value="true">Published</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                style={{ resize: "none" }}
                name="content"
                value={inp?.content}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={derle}>
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateModal;
