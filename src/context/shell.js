/**
 *
 */
import { createContext, useContext } from "react";

export const ShellState = {
  theme: window.ns.theme,
  header: window.ns.components.header,
  dialog: window.ns.components.dialog,
};

export const useShell = () => {
  return useContext(ShellContext);
};

export const ShellContext = createContext(ShellState);
