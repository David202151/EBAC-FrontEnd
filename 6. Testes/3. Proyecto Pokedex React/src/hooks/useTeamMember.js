import { useSelector } from 'react-redux';
import { MAX_TEAM_SIZE, selectTeam } from '../app/features/team/teamSlice';

export function useTeamMember (name) {
    const team = useSelector(selectTeam);
    const isAdded = team.some(
        (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
    );
    const teamCount = team.length;
    const teamFull = teamCount >= MAX_TEAM_SIZE; 

    return {
        isAdded,
        teamFull,
        teamCount
    };

}