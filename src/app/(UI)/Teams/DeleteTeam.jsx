"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function DeleteTeam(user) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteTicket = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/users/${user._id}`, {
        method: "DELETE",
      });

      // Refresh the page
      location.reload();
      // ... handle the response (e.g., check for status code)
    } catch (error) {
      console.error("Error deleting user:", error);
      // Handle the error appropriately (e.g., display an error message to the user)
    }
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body variant="warning">
          Are you sure you want to delete this user?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button
            type="button"
            className=" bg-red-400 hover:bg-red-600 text-white font-medium py-1.5 px-2 rounded focus:outline-none focus:shadow-outline"
            onClick={deleteTicket}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteTeam;
