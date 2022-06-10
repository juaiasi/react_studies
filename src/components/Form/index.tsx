import React from 'react'
import { ITarefa } from '../../types/tarefa'
import Button from '../Button'
import style from './Form.module.scss'

class Form extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}>{
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault() // evita que o form recarregue e envie como querystring
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}])
        // console.log('state: ', this.state)
    }

    render(){
        return (                                                            // o bind é o que permite associar ao this da classe, tendo em conta o escopo
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Matéria
                    </label>
                    <input 
                        type="text"
                        name="task"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                        id="task"
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Tempo
                    </label>
                    <input 
                        type="time"
                        step="1"
                        name="time"
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form