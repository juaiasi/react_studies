import React from "react"
import style from "./Button.module.scss"

                                        //props entre <>, com o tipo.
class Button extends React.Component<{ 
    type?: "button" | "submit" | "reset" | undefined ,
    children: any 
}> { 
    render() {
                //valor padrão
        const { type = "button" } = this.props
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button