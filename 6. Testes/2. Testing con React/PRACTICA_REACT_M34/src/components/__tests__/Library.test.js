import { fireEvent, getByRole, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import Library from "../Library";

const mockSongs = [{
        id: '1',
        title: 'Kyougen',
        album: 'Kyougen',
        artist: 'Ado',
        year: '2022'
    }, 
    {
        id: '2',
        title: 'Flowers',
        album: 'Flowers',
        artist: 'Miley Cyrus',
        year: '2020'
    }]; 


describe("Library Component", () => {
	it("The message is displayed when the library is empty.", () => {
		renderWithProviders(<Library />);
		expect( screen.getByText("No hay canciones en tu biblioteca")).toBeInTheDocument();
        const button = screen.queryByRole('button', { name: 'Eliminar' }); 
        expect(button).not.toBeInTheDocument();
	});
    it("Displays the songs in the library", () => {
        renderWithProviders(<Library/>, { library: mockSongs }); 
        expect(screen.getByText("Kyougen")).toBeInTheDocument();
        expect(screen.getByText("Flowers")).toBeInTheDocument();
        expect(screen.getAllByRole('button', { name: 'Eliminar' })).toHaveLength(2);
        const text = screen.queryByText("No hay canciones en tu biblioteca"); 
        expect(text).not.toBeInTheDocument(); 
    });
    it('remove from library', () => {
        const store = renderWithProviders(<Library/>, { library: mockSongs }).store;
        const addButtons = screen.getAllByRole('button', { name: 'Eliminar' });
        fireEvent.click(addButtons[0]);
        expect(store.getState().library).toEqual([mockSongs[1]]);
        const text = screen.queryByText("Kyougen"); 
        expect(text).not.toBeInTheDocument(); 
    }); 
    
});
