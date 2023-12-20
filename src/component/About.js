//홈페이지 img 넣어서 배너와 소개 내용 만들어보기
import React from "react";
import h from "../img/h.png"

function About(){
    return(
        <div>
     <h2>About Page</h2>
        <img src={h}></img>
        </div>
        
    )
}

export default About;