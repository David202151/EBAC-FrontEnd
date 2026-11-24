const TEAM_KEY = 'pokedex_team';

export const saveTeam = (team) =>  {
  try {
    localStorage.setItem(TEAM_KEY, JSON.stringify(team));
  } catch {
    // si falla, la app sigue sin guardar
  }
}
export const loadTeam = () => {
    try{
        const saved = localStorage.getItem(TEAM_KEY); 
        if( !saved ) return []; 
        const team = JSON.parse(saved);
        return Array.isArray(team) ? team : [];
    }catch{
        return []; 
    }
}
 