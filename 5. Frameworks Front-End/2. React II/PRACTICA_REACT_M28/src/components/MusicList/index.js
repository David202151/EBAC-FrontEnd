import React, { Fragment, useState, useEffect } from "react"; 

const MusicList = () => {
    const [music, setMusic] = useState([]);

    useEffect(() => { 
        const fetchMusic = async () =>{
            const response =  [
                { id: 1, title: "My Love Mine All Mine", artist: "Mitski", duration: "2:17" },
                { id: 2, title: "Washing Machine Heart", artist: "Mitski", duration: "2:08" },
                { id: 3, title: "I Bet on Losing Dogs", artist: "Mitski", duration: "2:50" },
                { id: 4, title: "First Love/Late Spring", artist: "Mitski", duration: "4:38" },
                { id: 5, title: "Nobody", artist: "Mitski", duration: "3:13" },
            ];
            setMusic(response);
            
        }

        fetchMusic();
    }, []);

    return (
        <Fragment>
            <h2>Música</h2>
            <section>
                {
                    music.map((song) => {
                        const {id, title, artist, duration} = song;
                        return (
                            <article key={id}>
                                <h3>{title}</h3>
                                <p>{artist}</p>
                                <p>{duration}</p>
                            </article>
                        );
                    })
                }
            </section>
        </Fragment>
    ); 
};
export default MusicList;