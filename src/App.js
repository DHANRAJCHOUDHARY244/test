import {ChakraProvider, CSSReset} from '@chakra-ui/react';
import SidebarWithHeader from './sidebar';
import {BrowserRouter} from 'react-router-dom';

function App () {
  return (
    <ChakraProvider>
      <CSSReset />
      <BrowserRouter>
        <SidebarWithHeader />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
