import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

test('Deve renderizar o nome do usuário logado', () => {
  render(<Cabecalho />);
  const nomeUsuário = screen.getByText('Joana Fonseca Gomes');
  expect(nomeUsuário).toBeInTheDocument();
});
