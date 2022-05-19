import React from "react"

class Button extends React.Component{
    render() {
        const estaAtivo = true
        return (
            <button style={{
                backgroundColor:estaAtivo ? 'green' : 'gray' //inline style no react, mas não é uma boa prática
            }}>
                Botão
            </button>
        )
    }
}

export default Button