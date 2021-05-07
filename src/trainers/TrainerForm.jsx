import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
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
        <Form onSubmit={handleSubmit} className="w-25 m-auto">
            <Form.Control placeholder="name" value={name} onInput={(event) => setName(event.target.value)}/>
            <Form.Control placeholder="age" value={age} onInput={(e) => setAge(e.target.value)} />
            <Form.Control placeholder="job title" value={jobTitle} onInput={(e) => setJobTitle(e.target.value)}/>
            <br/>
            <Button type="submit" variant="primary">Submit</Button>
            {/* <p>TF: {new Date().toLocaleTimeString()}</p> */}
        </Form>
    )
}

export default TrainerForm;