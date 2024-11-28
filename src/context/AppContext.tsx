import { createContext } from 'react';

// Define the type for our context value
interface AppContextType {
  message: string;
}

// Create context with initial value
export const AppContext = createContext<AppContextType>({ message: "Hello from Context!" });
