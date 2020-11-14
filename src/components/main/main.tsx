import React, {useEffect, useReducer, useState} from "react";
import  { Word } from "../../utils";
import './main.scss';
import axios from "axios";
import List from "./blocks/list"
import  { partOfSpeech } from "../../utils";

export const Main = () => {
    const [search, setSearch] = useState('');
    const [wordsList, setWordsList] = useState([]);

    useEffect(() => {
        if(search.length >= 2) {
            axios.get(`${process.env.SKYENG_API_URL}/search?search=${search}&page=1&pageSize=10`)
                .then(r => {
                    const res = r.data.map((item: { save: boolean, partOfSpeech: string, meanings: any }) => {
                        item.save = false;
                        for(const key in partOfSpeech ){
                            if(key === item.meanings[0].partOfSpeechCode) { // @ts-ignore
                                item.partOfSpeech = partOfSpeech[key]
                            }
                        }
                        return item;
                    });
                    setWordsList(res);
                    console.log(res);
                });
        }
    }, [search]);

    const list = wordsList.map((item:Word) => {
        return <List key={item.text + item.id} word={item}/>
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
