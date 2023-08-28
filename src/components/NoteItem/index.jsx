import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

//isNew para adicionar um novo item, o valor, uma propriedade de um clique e todo o restante
export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    //da para passar uma propriedade para dentro de um componente
    //é o que eu vou fazer com o isNew, eu to passando essa prorpiedade dentro do container, assim passa o isNew para o styled componentes
    <Container $isnew={isNew}>
      <input type="text"
        value={value}
        readOnly={!isNew}
        //aqui estou falando se não é novo pode bloquear
        {...rest}
      />

      <button
        //como aqui vai a onclick e o value vai para o o input, as propriedades estão indo 
        //para lugares diferentes
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}