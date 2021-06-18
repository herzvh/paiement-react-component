import {Box, Container} from '@material-ui/core';
import React from 'react';
import PaiementComponent from "./components/PaiementComponent";

function App() {
  return (
      <React.Fragment>
          <Container maxWidth="sm">
              <Box mt={4}>
                  <PaiementComponent/>
              </Box>
          </Container>
      </React.Fragment>
  );
}

export default App;
