import { render, screen } from '@testing-library/react';
import Formulario from './index';

test('Deve renderizar um campo de input', () => {
  render(<Formulario />);
  const campoTexto = screen.getByPlaceholderText('Digite um valor');
  expect(campoTexto).toBeInTheDocument();
});

test('Deve renderizar um campo de input', () => {
  render(<Formulario />);
  const campoTexto = screen.getByPlaceholderText('Digite um valor');
  expect(campoTexto).toBeInTheDocument();
});

test('Deve renderizar um campo de input com o type number', () => {
  render(<Formulario />);
  const campoTexto = screen.getByPlaceholderText('Digite um valor');
  expect(campoTexto).toHaveAttribute('type', 'number');
});
