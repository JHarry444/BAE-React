import { useState } from "react";
import Input from "./Input"

const Container = () => {
    const [value, setValue] = useState("hello");

    const handleChange = event => setValue(event.target.value);

    return (
        <>
            <label>First: </label>
            <Input value={value} handleChange={handleChange}/>
            <label>Second: </label>
            <Input value={value} handleChange={handleChange}/>
        </>
    )
}

export default Container;