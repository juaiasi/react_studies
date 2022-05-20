import Item from './Item';
import style from './List.module.scss'

function List(){
    //conteúdo das listas
    const tarefas = [{
        tarefa:'React',
        tempo:'02:00:00'
    },{
        tarefa:'Javascript',
        tempo:'01:00:00'
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
            {tarefas.map((item, index) => (
                // <Item tarefa={item.tarefa} tempo={item.tempo} />
                <Item 
                    key={index}
                    {...item} //desctruction, funciona se as chaves forem iguais às props
                /> 
            ))}
            </ul>
        </aside>
    )
}

export default List;