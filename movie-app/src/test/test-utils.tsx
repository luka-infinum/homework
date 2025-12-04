

// https://medium.com/@Yasirgaji/setting-up-jest-for-next-js-and-chakra-ui-a-practical-battle-tested-guide-1ba5c9ace4b2
// needed in order for Jest to work with ChakraUI elements


import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { SWRConfig } from 'swr';

export function renderWithProviders(ui: ReactNode) {
  return render(
    <SWRConfig value={{ provider: () => new Map() }}>
      <ChakraProvider value={defaultSystem}>
        {ui}
      </ChakraProvider>
    </SWRConfig>
  );
}