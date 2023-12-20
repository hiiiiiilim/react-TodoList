import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from './component/TodoList'

function App(){
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                            <Link to="/todo">할 일 목록</Link>
                    </ul>
                </nav>
                <hr/>
                <Routes>
                    <Route path="/todo" element={<TodoList/>}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;