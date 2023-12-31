import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from './component/TodoList'
import Header from "./component/Header";
import Footer from "./component/Footer";
import './App.css'
import About from "./component/About";

function App(){
    return(
        <Router>
            <div>
                <Header />
                <nav>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/todo">할 일 목록</Link>
                        </li>
                    </ul>
                </nav>
                <hr/>
                <Routes>
                    <Route path="/todo" element={<TodoList/>}></Route>
                </Routes>
                <About/>
                <Footer />
            </div>
        </Router>
    )
}

export default App;