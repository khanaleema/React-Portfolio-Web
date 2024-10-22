import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    @apply bg-gray-100;
  }
`;

export default GlobalStyle;
