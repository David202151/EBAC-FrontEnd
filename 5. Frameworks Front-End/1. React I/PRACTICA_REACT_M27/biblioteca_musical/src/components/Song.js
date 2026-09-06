import React, { Component} from 'react'; 


class Song extends Component {
    render () {
        const { title, artist, duration } = this.props; 
        return(
            <article className="song">
                <h2>{title}</h2>
                <p>Artista: {artist}</p>
                <p>Duración: {duration}</p>
            </article>
        ); 
    }
}



export default Song;