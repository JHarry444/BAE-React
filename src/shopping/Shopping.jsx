import { useState } from "react";
import Item from "./Item";

const Shopping = () => {

    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState([]);

    const handleAdd = e => {
        e.preventDefault();
        const itemsWithNew = [...items, newItem];
        setItems(itemsWithNew);
        setNewItem("");
    }

    const renderedItems = items.map(item => <Item item={item}/>);

    return (
        <>
            <h1>Shopping List</h1>
            <label>Item</label>
            <form onSubmit={handleAdd}>
                <input placeholder="enter item here" value={newItem} onInput={e => setNewItem(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            <h3>basket</h3>
            <ol>
                {renderedItems}
            </ol>
        </>
    )
}

export default Shopping;