import { useTeamMember } from '../hooks/useTeamMember';
import { useDispatch } from 'react-redux';
import { addPokemon } from '../app/features/team/teamSlice';

function AddToTeamButton({ pokemon }){
    const dispatch = useDispatch(); 
    const { isAdded, teamFull } = useTeamMember(pokemon.name); 
    const disabled = teamFull || isAdded;
    const text = isAdded
        ? 'En tu equipo ✓'
        : teamFull
            ? 'Equipo completo'
            : 'Agregar al equipo';
    return(
        <button type="button" className={`btn ${isAdded ? 'btn--added' : 'btn--primary'}`} disabled={disabled} onClick={() => dispatch(addPokemon(pokemon)) }>
            {text}
        </button>
    ); 
}; 


export default AddToTeamButton;