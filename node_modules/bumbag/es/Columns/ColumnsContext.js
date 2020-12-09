import { createContext } from 'react';

var ColumnsContext = createContext({
  isGapless: false,
  minBreakpoint: undefined
});

export { ColumnsContext };
