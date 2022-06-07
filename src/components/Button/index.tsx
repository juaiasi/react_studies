import React from "react"
import style from "./Button.module.scss"

class Button extends React.Component<{ children: any }> { //props entre <>, com o tipo. Ex: 
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button