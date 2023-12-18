import { toggled } from "../actions";

export const updateTodos = (todoId,currentStatus) => {
  return  async (dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/${todoId}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json; charset= UTF-8",
            },
            body: JSON.stringify({
                completed: !currentStatus,
            }),
        
        });
        const todos = await response.json();
    
        dispatch(toggled(todos.id));
    };
}