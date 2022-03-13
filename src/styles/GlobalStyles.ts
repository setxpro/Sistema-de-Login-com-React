import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,500;0,600;0,700;0,800;1,200;1,500;1,600;1,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  :root {
    --color-title: #2F4F4F;
    
  }
`;
