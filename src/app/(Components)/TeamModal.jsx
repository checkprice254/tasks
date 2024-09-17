"use client";

import { useState } from "react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const TeamModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { data: session, status } = useSession();
  //console.log(session?.user.id);

  //const [id, setId] = useState("");
  const [allusers, setallusers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [teamNotes, setTeamNotes] = useState("");

  useEffect(() => {
    async function getallusers() {
      try {
        const response = await fetch("http://localhost:3000/api/users");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setallusers(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getallusers();
  }, []);

  const handleUserSelect = (event) => {
    const userId = event.target.value;
    if (event.target.checked) {
      setSelectedUsers([...selectedUsers, userId]);
    } else {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/teams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: teamName,
          notes: teamNotes,
          members: selectedUsers,
        }),
      });

      if (response.ok) {
        console.log("team created successfully");
        // Handle success, e.g., show a success message or redirect to another page
      } else {
        console.error("Failed to create team");
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error("Error creating team:", error);
    }
    // Refresh the page
    location.reload();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Team
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Teams</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="mx-auto max-w-lg p-6">
            <h1 className="text-2xl font-medium mb-4">
              Hello <strong>{session?.user.username}</strong>, Create a New team
              Today
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              id="create form"
            >
              <div>
                <label htmlFor="teamName">Team Name</label>
                <input
                  id="teamName"
                  name="teamName"
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full border p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="teamNotes">Team Notes</label>
                <textarea
                  name="teamNotes"
                  id="teamNotes"
                  value={teamNotes}
                  onChange={(e) => setTeamNotes(e.target.value)}
                  className="w-full border p-2"
                  required
                  rows="5"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h3>Select Team Members:</h3>
                  {allusers.map((user) => (
                    <div key={user._id}>
                      <input
                        type="checkbox"
                        id={user._id}
                        value={user._id}
                        onChange={handleUserSelect}
                      />
                      <label htmlFor={user._id} className="  space-x-2">
                        <span>Member Name: {user.username}</span>
                        <span>Role: {user.role}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button
            form="create form"
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1.5 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Create
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TeamModal;
