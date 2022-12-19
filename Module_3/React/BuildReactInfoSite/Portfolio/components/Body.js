import React from "react"

function email(){
    alert("nicokar.mobin@gmail.com");
}
function linkedIn(){
    alert("https://www.linkedin.com/in/mobin-nicokar-75b232102/");
}
export default function Body() {
    return (
        <main>
            <button className = "body--email" onClick = {email} >Email </button>
            <button className = "body--linkedIn" onClick = {linkedIn} >LinkedIn </button>
            <h1 className = "body--about"> About </h1> 
            <h2 className = "body--description"> I am currently a programming instructor at Juni Learning. The subjects I teach are: Java, Python, C++, JavaScript. I enjoy knowing a little bit of everything and am always open growth. </h2>
            <h3 className = "body--interests"> Interests </h3>
            <h4 className = "body--i"> Cats, Target, Coffee. Cooking. Motorcycles! </h4>
        </main>
    )
}