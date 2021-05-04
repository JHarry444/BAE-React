import { useState } from "react";


const TrainerForm = () => {

    const [name, setName] = useState("barry");
    const [age, setAge] = useState(12);
    const [jobTitle, setJobTitle] = useState("trainer");

    return (
        <form>
            <input placeholder="name" value={name} onChange={(event) => setName(event.target.value)}/>
            <input placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input placeholder="job title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}/>
            <button type="button">Submit</button>
        </form>
    )
}

export default TrainerForm;