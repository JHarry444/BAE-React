import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";


const TrainerForm = () => {

    const history = useHistory();

    const [name, setName] = useState("barry");
    const [age, setAge] = useState(12);
    const [jobTitle, setJobTitle] = useState("trainer");

    const handleSubmit = e => {
        e.preventDefault();

        axios.post("http://localhost:8080/trainer/create", {
            name,
            age,
            jobTitle
        }).then(res => {
            const id = res.data.id;
            // redirect to /trainers/read/id
            history.push("/trainers/read/" + id);
        }).catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="name" value={name} onInput={(event) => setName(event.target.value)}/>
            <input placeholder="age" value={age} onInput={(e) => setAge(e.target.value)} />
            <input placeholder="job title" value={jobTitle} onInput={(e) => setJobTitle(e.target.value)}/>
            <button type="submit">Submit</button>
            {/* <p>TF: {new Date().toLocaleTimeString()}</p> */}
        </form>
    )
}

export default TrainerForm;