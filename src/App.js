import Calculator from './components/Calculator';

import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: repeating-linear-gradient(135deg, 
                rgb(251,140,99, 0) 15%, 
                rgb(251,140,99, .2) 35%, 
                rgb(253,90,98, .5) 75%),
              repeating-linear-gradient(315deg, 
                rgb(219,81,93, .5) 15%, 
                rgb(252,44,122, .7) 35%, 
                rgb(252,44,122, .9) 55%, 
                rgb(253,90,98) 75%);
`;

function App() {
  return (
    <AppContainer>
      <Calculator />
    </AppContainer>
  );
}

export default App;
