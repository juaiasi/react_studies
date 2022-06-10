import Item from './Item';
import style from './List.module.scss'
import { ITarefa } from '../../types/tarefa' // importa a interface que foi criada, o tipo

                                    // passo que é uma interface do tipo array
function List({tarefas}:{tarefas: ITarefa[]}){
    // conteúdo das listas
    // useState: essa função permite usar estado, de forma que armazena em cookies aquilo que foi alterado
    // valor inicial, apesar de ser const pode ser alterado usando a função fornecida como parâmetro
            // dois parâmetros: o nome da lista e a função para aletarar (no caso, setTarefas)
    // const [tarefas, setTarefas] = useState([{
    //     tarefa:'React',
    //     tempo:'02:00:00'
    // },{
    //     tarefa:'Javascript',
    //     tempo:'01:00:00'
    // }])
    return (
        <aside className={style.listaTarefas}>
            <h2>
            {/* <h2 onClick={() => { 
                // usando a função que foi definida acima
                setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00"}])
            }}> */}
                Estudos do dia
            </h2>
            <ul>
            {tarefas.map((item, index) => (
                // <Item tarefa={item.tarefa} tempo={item.tempo} />
                <Item 
                    key={index} //props interna do react apenas para fazer conexão entre o VDOM e DOM (se fosse array não funcionaria)
                    {...item} //desctruction, funciona se as chaves forem iguais às props
                /> 
            ))}
            </ul>
        </aside>
    )
}

export default List;