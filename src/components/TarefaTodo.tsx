import React from 'react'
import { ITarefa } from '../interfaces';

interface Props {
    tarefa: ITarefa;
    tarefaCompleta(nomeTarefaDeletada: string): void;
}

const TarefaTodo = ({tarefa, tarefaCompleta}:Props) => {
    return (
        <div className='tarefa'>
            <div className='content'>
                <span>{tarefa.nomeTarefa}</span>
                <span>{tarefa.prazo}</span>
            </div>
            <button onClick={() => {tarefaCompleta(tarefa.nomeTarefa)}}>X</button>
        </div>
    );
};

export default TarefaTodo