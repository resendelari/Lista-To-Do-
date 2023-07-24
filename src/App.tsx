import React, {FC, ChangeEvent, useState} from 'react'; //explicar
import './App.css';
import {ITarefa} from './interfaces';
import './components/TarefaTodo';
import TarefaTodo from './components/TarefaTodo';

const App:FC = () => {

  const [tarefa, setTarefa] = useState<string>("");
  const [prazo, setPrazo] = useState<number>(0);
  const [lista, setTodoList] = useState<ITarefa[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
    if (event.target.name === "tarefa") {
      setTarefa(event.target.value);
    } else {
      setPrazo(Number(event.target.value));
    }
  };

  const addTarefa = ():void =>{
    const novaTarefa = {nomeTarefa: tarefa, prazo: prazo};
    setTodoList([...lista, novaTarefa]);
    setTarefa("");
    setPrazo(0);
  };

  const tarefaCompleta = (tarefaDeletada: string):void => {
    setTodoList(lista.filter((tarefa) => {
      return tarefa.nomeTarefa != tarefaDeletada
    }))
  }
  
  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' placeholder='Digite a tarefa' name='tarefa' value={tarefa} onChange={handleChange}/>
          <input type='number' placeholder='Prazo' name='prazo' value={prazo}onChange={handleChange}/>
        </div>
        <button onClick={addTarefa}>Adicionar Tarefa</button>
      </div>
      <div className='todoList'>
        {lista.map((tarefa: ITarefa, key: number) => {
          return <TarefaTodo key={key} tarefa={tarefa} tarefaCompleta={tarefaCompleta}/>;
        })}
      </div>
    </div>
  );
};

export default App;