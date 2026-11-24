import { screen } from '@testing-library/react';
import PokemonCard from '../../components/PokemonCard';
import { renderWithProviders, bulbasaur } from '../../test-utils';

describe('PokemonCard', () => {
  test('shows the name, image and types', () => {
    renderWithProviders(<PokemonCard pokemon={bulbasaur} />);

    expect(screen.getByRole('heading', { name: 'bulbasaur' })).toBeInTheDocument();
    expect(screen.getByAltText('bulbasaur')).toHaveAttribute('src', 'bulbasaur.png');
    expect(screen.getByText('grass')).toBeInTheDocument();
    expect(screen.getByText('poison')).toBeInTheDocument();
  });

  test('applies the color class according to the type', () => {
    renderWithProviders(<PokemonCard pokemon={bulbasaur} />);
    expect(screen.getByText('grass')).toHaveClass('type-badge', 'type-badge--grass');
  });

  test('links the name to the detail page', () => {
    renderWithProviders(<PokemonCard pokemon={bulbasaur} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/pokemon/bulbasaur');
  });

  test('renders whatever is passed as children (for example, a button)', () => {
    renderWithProviders(
      <PokemonCard pokemon={bulbasaur}>
        <button>Acción</button>
      </PokemonCard>
    );
    expect(screen.getByRole('button', { name: 'Acción' })).toBeInTheDocument();
  });

  test('renders nothing when no pokemon is given', () => {
    const { container } = renderWithProviders(<PokemonCard />);
    expect(container).toBeEmptyDOMElement();
  });
});
