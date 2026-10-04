import styled from "styled-components";

interface MovieInfoProps {
  score?: number;
  releaseDate?: string;
}

const AppButton = styled.button`
  background-color: #1e3a8a;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  `;


const MovieSection = styled.section`
  padding: 1rem;
  display: grid;  
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  box-sizing: border-box;
`;

const MovieElement = styled.article`
  background-color: ${props => (props.theme as { colors: { background: string } }).colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 1rem;
  box-sizing: border-box;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const MovieTitle = styled.h3`
  font-family: ${props => (props.theme as { fonts: { heading: string } }).fonts.heading};
  font-size: 1.2rem;
  margin: 0.5rem 0;
  font-weight: bold;
`;

const MovieInfo = styled.p <MovieInfoProps>`
  font-family: ${props => (props.theme as { fonts: { main: string } }).fonts.main};
  font-size: 0.9rem;
  margin: 0.25rem 0;
  color: ${props => (props.score ? (props.score > 7 ? 'green' : 'orange') : 'black')};
  font-weight: normal;
  span{
    font-weight: bold;
  };
`;

export {
    AppButton,
    MovieSection,
    MovieElement, 
    MovieImage,
    MovieTitle,
    MovieInfo
};
