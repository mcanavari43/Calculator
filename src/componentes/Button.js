import React from "react";
import '../styles/Button.css'

function Button(props){
    const isOperator = valor =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }
    return (
        <button className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
        onClick={() => props.handleClick(props.children)}>
            {props.children}
        </button>
    )
}

export default Button;