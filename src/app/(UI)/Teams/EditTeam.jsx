"use client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function EditTeam(team) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditteamData = {
    name: "",
    note: "",
    members: "",
  };

  EditteamData["name"] = team.teamname;
  EditteamData["note"] = team.note;
  EditteamData["members"] = team.role;
  const [formData, setFormData] = useState(EditteamData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    handleClose();
    e.preventDefault();

    const res = await fetch(`/api/teams/${team._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    // Refresh the page
    location.reload();
    if (!res.ok) {
      throw new Error("Failed to update teams");
    }
  };
  const roles = ["regular", "ITSupport", "admin"];

  //console.log(formData);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update Role
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update teams Role</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex flex-col gap-2 bg-white p-6 rounded-md shadow-md"
            id="edit form"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="role" className="text-gray-700 font-medium">
                role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {roles?.map((role, _index) => (
                  <option key={_index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button
            form="edit form"
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1.5 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
