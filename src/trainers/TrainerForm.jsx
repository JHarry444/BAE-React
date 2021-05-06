import axios from "axios";
import { useEffect, useState } from "react";


const TrainerForm = () => {

    const [name, setName] = useState("barry");
    const [age, setAge] = useState(12);
    const [jobTitle, setJobTitle] = useState("trainer");

    // useEffect(() => {
    //     console.log("Current state: ", {
    //         name,
    //         age,
    //         jobTitle
    //     });

    //     const tearDown = () => console.log("bye bye!");

    //     return tearDown;
    // });

    const handleSubmit = e => {
        e.preventDefault();

        axios.post("http://localhost:8080/trainer/create", {
            name,
            age,
            jobTitle
        }).then(res => console.log(res))
            .catch(err => console.log(err));
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