import React, {useEffect, useState} from "react";
import  { Word, getWordsLocalStore } from "../../utils";
import './main.scss';
import axios from "axios";
import List from "./blocks/list"
import  { partOfSpeech } from "../../utils";

const Favorites = () => {
    const [search, setSearch] = useState('');
    const [wordsList, setWordsList] = useState([]);

    useEffect(() => {
       setWordsList(getWordsLocalStore())
    }, []);

    const list = wordsList.map((item:Word) => {
        return <List key={item.text + 'favorites'} delLocal={setWordsList} word={item}/>
    });

    return (
        <main className='main'>
            <aside className='left--aside'>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search...'/>
            </aside>
            <div className='content'>
               <ul className='content--list'>
                   {list}
               </ul>
            </div>
        </main>
    );
}
export default Favorites;