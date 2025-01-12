
import { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';

export const useTodos = () => {
    return useContext(TodoContext);
};