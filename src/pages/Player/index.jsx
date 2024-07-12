import styles from './Player.module.css';
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import {useParams} from "react-router-dom";
import videos from "data/db.json";
import NotFound from "../NotFound";


function Player() {
    const parametros = useParams()
    const video = videos.find(video => video.id === Number(parametros.id))
    console.log(video)
    if(!video)return <NotFound/>

    return (
        <>
            <Banner img="player" color="#58b9ae"/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                {
                    <iframe width="100%" height="100%"
                            src={video.link}
                            title={video.titulo} frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                }

            </section>
        </>
    )
}

export default Player;