import {
  render as rtlRender,
  screen as rtlScreen,
} from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export function render(
  ui: React.ReactElement,
  {
    client = queryClient,
    rtlOptions = {},
  }: { client?: QueryClient; rtlOptions?: object } = {},
) {
  const Wrapper: React.FC = ({ children }) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );

  return { ...rtlRender(ui, { wrapper: Wrapper, ...rtlOptions }) };
}

export function createClientWrapper() {
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export const userEvent = fireEvent;
export const screen = rtlScreen;
