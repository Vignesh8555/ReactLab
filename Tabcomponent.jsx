import React, { useState } from 'react'

function Tabcomponent() {
    const [activeTab,setActiveTab]=useState("Home")
  return (
    <div style={Styles.container}>
        <h1>HI! TAB-COMPONENT</h1>
        <div style ={ Styles.tabContainer}>
            <button onClick={()=>setActiveTab("Home")}>Home</button>
            <button onClick={()=>setActiveTab("About")}>About</button>
            <button onClick={()=>setActiveTab("Contact")}>Contact</button>
        </div>
      <div style={Styles.ContentBox}>
        {activeTab==="Home"&& <p>Vignesh gets bored to code.</p>}
        {activeTab==="About"&& <p>Krithik looks like a bear.</p>}
        {activeTab==="Contact"&& <p>Vel prasath is always into games.</p>}
      </div>
    </div>
  )
}
const Styles={
    container:{
        minHeight:"50vh",
        padding:"20px",
        border:"1px solid"

    },
    tabContainer:{
        padding:"20px",
        border:"none",
        margin:"20px",
    },
    ContentBox:{
        height:"100px",
        width:"300px",
        marginLeft:"300px",
        background:"lightblue",
        paddingTop:"10px",
    },
}
export default Tabcomponent
