import React from 'react';

import SearchByGenre from './Anime/SearchByGenre';
import SearchByKeyword from "./Anime/SearchByKeyword";
//import SearchGhibli from './Anime/SearchGhibli';
import RandomAnime from './Anime/RandomAnime';
import KidsSearchByGenre from "./Anime/KidsSearchByGenre";

import Introduction from './Steps/Introduction';
import SearchBy from "./Steps/SearchBy";
import Goodbye from './Steps/Goodbye';


const steps = [
    {
        id: "introduction1",
        component: <Introduction/>,
        asMessage: true,
        trigger: "how-to2"
    },
    {
        id: "how-to2",
        component: <SearchBy/>,
        asMessage: true,
        trigger: "additional3"
    },
    {
        id: "additional3",
        message: "Also, feel free to look at the rest of this website. For more information about this web app, using the Menu Bar above.",
        trigger: "options4"
    },
    {
        id: "options4",
        options: [
           {value: 1, label: 'Search By Genre', trigger: 'search-by-genre5'},
           {value: 2, label: 'Search By Keyword', trigger: '8-search-by-keyword'},
           {value: 3, label: 'Random Anime', trigger: 'randomanime11'},
           {value: 4, label: 'Kid-Friendly Search', trigger: 'kidfriendlysearch'}
        //  {value: 4, label: 'Search the Ghibli Files', trigger: 'Ghibli-10}
        ]
    },
    {
        id: "search-by-genre5",
        message: "Select a genre from below",
        trigger: "genres6" 
    },
    {
        id: "genres6",
     //might convert to categories
        options:[
            {value: 'action', label: 'action', trigger: "genreresults"}, 
            {value: 'adventure', label: 'adventure', trigger: "genreresults"}, 
            {value: 'comedy', label: 'comedy', trigger: "genreresults"}, 
            {value: 'drama', label: 'drama', trigger: "genreresults"},
            {value: 'sci-fi', label: 'sci-fi', trigger: "genreresults"}, 
            {value: 'supernatural', label: 'supernatural', trigger: "genreresults"}, 
            {value: 'fantasy', label: 'fantasy', trigger: "genreresults"}, 
            {value: 'sports', label: 'sports', trigger: "genreresults"},
            {value: 'romance', label: 'romance', trigger: "genreresults"}, 
            {value: 'slice-of-life', label: 'slice-of-life', trigger: "genreresults"}, 
            {value: 'school', label: 'school', trigger: "genreresults"},
            {value: 'psychological', label: 'psychological', trigger: "genreresults"}, 
            {value: 'vampire', label: 'vampire', trigger: "genreresults"}, 
            {value: 'historical', label: 'historical', trigger: "genreresults"}, 
            {value: 'mecha', label: 'mecha', trigger: "genreresults"},
            {value: 'samurai', label: 'samurai', trigger: "genreresults"}, 
            {value: 'music', label: 'music', trigger: "genreresults"}, 
            {value: 'food', label: 'food', trigger: "genreresults"},
            {value: 'zombies', label: 'zombies', trigger: "genreresults"},
            {value: 'family', label: 'family', trigger: "genreresults"},
            {value: 'friendship', label: 'friendship', trigger: "genreresults"}
        ]
    },
    {
        id: "genreresults",
        component: <SearchByGenre />,
        trigger: "option13"
    },
    {
        id: '8-search-by-keyword',
        message: "Please type in keywords in the input field below. And please keep this at the most PG-13, thanks!",
        trigger: 'searchbykeyword9'
    },
    {
        id: 'searchbykeyword9',
        user: true,
        validator: (value)=>{
            if(value === ''){
                return "Please type in a keyword to proceed."
            }
            return true;
        },
        trigger: 'results10',
    },
    {
        id: 'results10',
        component: <SearchByKeyword/>,
        trigger: "options4"
    },
    {
        id: "randomanime11",
        component: <RandomAnime/>,
        trigger: 'option13'
    },
    {
        id: 'kidfriendlysearch',
        message: "For the Kid-Friendly Search, please click on one of the following genres to get a list of animes.",
        trigger: 'kidfriendlygenre'
    },
    {
        id: 'kidfriendlygenre',
        options:[
            {value: 'action', label: 'action', trigger: "kidsgenreresults"}, 
            {value: 'adventure', label: 'adventure', trigger: "kidsgenreresults"}, 
            {value: 'comedy', label: 'comedy', trigger: "kidsgenreresults"}, 
            {value: 'drama', label: 'drama', trigger: "kidsgenreresults"},
            {value: 'sci-fi', label: 'sci-fi', trigger: "kidsgenreresults"}, 
            {value: 'supernatural', label: 'supernatural', trigger: "kidsgenreresults"}, 
            {value: 'fantasy', label: 'fantasy', trigger: "kidsgenreresults"}, 
            {value: 'sports', label: 'sports', trigger: "kidsgenreresults"},
            {value: 'romance', label: 'romance', trigger: "kidsgenreresults"}, 
            {value: 'slice-of-life', label: 'slice-of-life', trigger: "kidsgenreresults"},             
            {value: 'horror', label: 'horror', trigger: "kidsgenreresults"}, 
            {value: 'school', label: 'school', trigger: "kidsgenreresults"},
            {value: 'psychological', label: 'psychological', trigger: "kidsgenreresults"}, 
            {value: 'vampire', label: 'vampire', trigger: "kidsgenreresults"}, 
            {value: 'historical', label: 'historical', trigger: "kidsgenreresults"}, 
            {value: 'mecha', label: 'mecha', trigger: "kidsgenreresults"},
            {value: 'samurai', label: 'samurai', trigger: "kidsgenreresults"}, 
            {value: 'music', label: 'music', trigger: "kidsgenreresults"}, 
            {value: 'kids', label: 'kids', trigger: "kidsgenreresults"}, 
            {value: 'food', label: 'food', trigger: "kidsgenreresults"},
            {value: 'zombies', label: 'zombies', trigger: "kidsgenreresults"},
            {value: 'family', label: 'family', trigger: "kidsgenreresults"},
            {value: 'friendship', label: 'friendship', trigger: "kidsgenreresults"}
    
            ]
    },
    {
        id: "kidsgenreresults",
        component: <KidsSearchByGenre/>,
        trigger: 'option13'
    },
    {
        id: 'option13',
        options: [
            {value: 'searchagain', label: 'Search Again', trigger: 'options4'},
            {value: 'end', label: 'End', trigger: 'end'}
        ]
    },
    {
        id: 'end',
        component: <Goodbye/>,
        asMessage: true,
        end: true
    }

];

export default steps;