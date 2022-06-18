// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract TodoList{
    struct Todos {
        string title;
        string content;
        bool isCompleted;
    }
    // create array of todos to store them
    // 0x0bFbF834Ec91Cbbe7e6d04619cF355ca8C252C50
    Todos[] public todos;
    function setTodo(string calldata _title, string calldata _content) external {
        Todos memory newtodo = Todos(_title, _content, false);
        todos.push(newtodo);
    }
    function getTodos(uint _index) external view returns(Todos memory){
        return todos[_index];
    }
    function updateTodos(uint _index, string calldata _title, string calldata _content) external returns(string memory){
        Todos storage updatedTodo = todos[_index];
        updatedTodo.title = _title;
        updatedTodo.content = _content;
        return "Updated...";
    }
    function toggleCompleted(uint _index) external {
        // !todos[_index].isCompleted;
        Todos storage toggle = todos[_index];
        toggle.isCompleted = !toggle.isCompleted;
    }
}