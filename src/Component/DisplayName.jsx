import {  useState } from "react";

function DisplayName() {
  let [fullName, setFullName] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();

    let fname = event.target.elements.fname.value.trim();
    let lname = event.target.elements.lname.value.trim();
    if (fname && lname) {
      setFullName(`${fname} ${lname}`);
    } else {
      setFullName("");
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        First Name:
        <input type="text" name="fname" required />
        Last Name:
        <input type="text" name="lname" required />
        <button type="submit">Submit</button>
      </form>

      {/* <p>{flag ? `Full Name: ${fullName}` : ""}</p> */}
      {fullName && <p>Full Name: {fullName}</p>}
    </>
  );
}

export default DisplayName;
