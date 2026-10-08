import styled from "styled-components";

const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 0.5rem;
`;

const TaskText = styled.p`
    margin: 0;
    font-size: 1rem;
`;

const RemoveButton = styled.button`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #c82333;
    }
`;

export { TaskContainer, TaskText, RemoveButton };