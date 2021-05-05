import { useState } from "react";


const TrainerForm = () => {

    const [name, setName] = useState("barry");
    const [age, setAge] = useState(12);
    const [jobTitle, setJobTitle] = useState("trainer");

    return (
        <form>
            <input placeholder="name" value={name} onInput={(event) => setName(event.target.value)}/>
            <input placeholder="age" value={age} onInput={(e) => setAge(e.target.value)} />
            <input placeholder="job title" value={jobTitle} onInput={(e) => setJobTitle(e.target.value)}/>
            <button type="button">Submit</button>
            <p>TF: {new Date().toLocaleTimeString()}</p>
        </form>
    )
}

export default TrainerForm;