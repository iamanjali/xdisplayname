import { useEffect, useState } from "react";

function DisplayName () {
   let [fullName, setFullName] = useState("");
   let [flag, setFlag] = useState(false);

    let handleSubmit = (event) => {
        event.preventDefault();

        let fname = event.target.elements.fname.value;
        let lname = event.target.elements.lname.value;

        let inputValue = `${fname} ${lname}`;
        setFullName(inputValue);
        setFlag(!flag);
    }

    // useEffect = (() => {
    //     setFlag(!flag);
    // },[flag])

    return <>
    <form onSubmit={handleSubmit}>
        First Name:<input type="text" name="fname" required/>
        Last Name:<input type="text" name="lname" required/>
        <button type="submit">Submit</button>
    </form>

    <p>{flag ? `Full Name: ${fullName}` : ""}</p>
    </>
}

export default DisplayName;