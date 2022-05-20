import React from "react"
import style from "./Button.module.scss"

class Button extends React.Component<{ texto:string }>{ //props entre <>, com o tipo
    render() {
        return (
            <button className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Button