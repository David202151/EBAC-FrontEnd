import Header from "../Header";
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from "styled-components";
import Theme from "../../theme";

describe('Header Component', () => {
  it('should render the header correctly', () => {
    render(<ThemeProvider theme={Theme}><Header appName="Biblioteca Musical" /></ThemeProvider>);
    expect(screen.getByText("Biblioteca Musical")).toBeInTheDocument();
  });
});