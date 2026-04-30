import { renderToString } from 'react-dom/server';
import HomePage from './pages/HomePage';

export function render(): string {
  return renderToString(<HomePage />);
}
