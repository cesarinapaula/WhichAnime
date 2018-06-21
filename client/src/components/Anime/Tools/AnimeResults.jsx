import React from 'react';
import AnimeTitle from './AnimeFormation';

const AnimeResults = props =>{
    const results = props.results;
    let animes =[];
//premiere date might be null
    if(results.length > 0){
        animes = results.map(anime =>
           <AnimeTitle
            id={anime.id}
            slug={anime.attributes.slug}
            image={anime.attributes.posterImage.small}
            title={anime.attributes.canonicalTitle}
            synopsis={anime.attributes.synopsis}
            premiere={anime.attributes.startDate !== null ? anime.attributes.startDate.slice(5,7)+"/"+anime.attributes.startDate.slice(8)+ '/'+anime.attributes.startDate.slice(0,4) : 'Premiere date not available'}
            />
        );
    }

    return(
        <div>
            {animes}
        </div>
    )


}

export default AnimeResults;