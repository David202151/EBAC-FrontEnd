import { useState } from "react";
import { Form, Input } from "./styles";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState(''); 
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query); 
    }
    return(
        <Form onSubmit={handleSubmit}>
        <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
        </Form>
    );     
}

export default SearchBar; 
