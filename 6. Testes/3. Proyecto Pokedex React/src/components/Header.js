import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTeam } from '../app/features/team/teamSlice';

function Header() {
    const team = useSelector(selectTeam); 
    const teamCount = team.length;
	return (
		<header className="header">
			<nav className="header__navigation" aria-label="Navegación principal">
				<Link className="header__link" to="/">
					Inicio
				</Link>
				<Link className="header__link" to="/team">
					Mi equipo <span className="header__team-count">{teamCount}</span>
				</Link>
			</nav>
		</header>
	);
}

export default Header;
