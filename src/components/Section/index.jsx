import { Container } from "./styles";

//o children vai ser o resto dps do title, então quando 
//faz isso, eu posso colocar qualquer conteudo dps do title
export function Section({ title, children}) {
  return(
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
 }