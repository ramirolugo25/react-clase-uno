import { BlogPost, Tarjeta } from './tarea/Tarea1.js';
import { MatchNombre, PasswordInput, ValidationInput } from './tarea/Tarea2.js';
import { CheckboxList, UncontrolledCheckbox } from './tarea/Tarea3.js';
import { CheckboxListWithState} from './tarea/Tarea4.js';



//-------------Tarea-1-Parte 1-----------------------
// ReactDOM.render(<Tarjeta nombre="Ramiro Lugo" titulo="Programador Front End" imagen="https://avatars.githubusercontent.com/u/82060802?v=4"/>,
// document.getElementById('react-app'));
//-------------Tarea-1-Parte 1-----------------------

//-------------Tarea-1-Parte 2-----------------------
// ReactDOM.render(<BlogPost titulo="Ardillas" parrafos={`Hoy vi una ardilla.
// La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
// Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`} 
// autor={{
//     nombre: "Ramiro",
//     titulo: "Prgramador Front-End",
//     imagen: "https://avatars.githubusercontent.com/u/82060802?v=4"
//   }}/>, 
// document.getElementById('react-app'));
//-------------Tarea-1-Parte 2-----------------------

//-------------Tarea-2 Parte 1-------------------------
// ReactDOM.render(<MatchNombre nombre="Ramiro"/>, document.getElementById('react-app'));
//-------------Tarea-2 Parte 1-------------------------

//-------------Tarea-2 Parte 2-------------------------
// ReactDOM.render(<PasswordInput minLength={6}/>, document.getElementById('react-app'));
//-------------Tarea-2 Parte 2-------------------------


//-------------Tarea-2 Parte 3-------------------------
// ReactDOM.render(<ValidationInput 
//   validation={value => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}
//   isPassword={true}/>,
// document.getElementById('react-app'));
//-------------Tarea-2 Parte 3-------------------------

//-------------Tarea-3 Parte 1-------------------------
// ReactDOM.render(<UncontrolledCheckbox name="Checkbox" initialValue={true}/>, document.getElementById('react-app'));

//-------------Tarea-3 Parte 1-------------------------


//-------------Tarea-3 Parte 2-------------------------
// ReactDOM.render(<CheckboxList
//   items={{
//     uno: false,
//     dos: true,
//     tres: false,
//   }} />, document.getElementById('react-app'));
//-------------Tarea-3 Parte 2-------------------------


//-------------Tarea-4-------------------------
// ReactDOM.render(<CheckboxListWithState
//     items={{
//         uno: false,
//         dos: true,
//         tres: false,
//     }} />,
//     document.getElementById('react-app'));
//-------------Tarea-4-------------------------


// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));
