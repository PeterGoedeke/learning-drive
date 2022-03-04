import { PropsWithChildren } from 'react';
import { MemoryRouter, Location } from 'react-router-dom';

interface composeTestingWrapperOpts {
  initialEntries?: (string | Partial<Location>)[];
  initialIndex?: number;
}

export const composeTestingWrapper = ({
  initialEntries,
  initialIndex,
}: composeTestingWrapperOpts = {}) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>) => (
    <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>
      {children}
    </MemoryRouter>
  );
  return Wrapper;
};
