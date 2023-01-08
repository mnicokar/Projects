import {useState} from "react"
import {useEffect, useState} from "react";

export default function Box() {
    const squareStyle = {
        width: '300px',
        height: '300px',
        backgroundColor: 'blue'
      };

      const containerStyle = {
        display: 'flex',
        justifyContent: 'center'
      };

    return (
        <div style = {containerStyle}>
            <div style={squareStyle}></div>
        </div>
        
    )
      
}
