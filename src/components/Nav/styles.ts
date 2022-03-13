import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90px;
  line-height: 90px;

  box-shadow: 1px 3px 15px rgba(0,0,0,0.1);

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    h1 {
        color: var(--color-title);
        margin:0;
        padding: 0 20px;
    }

    nav {
        
        flex: 1;
        text-align: center;

        display: flex;
        justify-content: center;
        gap: 2.5rem;

        a {
            text-decoration: none;
            font-size: 22px;
            color: var(--color-title);
            transition: all 0.5s ease;
            border-bottom: 2px solid transparent;
            
            &:hover {
                border-bottom: 2px solid rgba(0,0,0,0.1);
            }
        }
    }
      
  }
`;
