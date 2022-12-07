import { FindPostContainer } from './styles';

export function FindPost() {
  return (
    <FindPostContainer>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>

      <input type='text' placeholder='Buscar conteúdo' />
    </FindPostContainer>
  );
}
