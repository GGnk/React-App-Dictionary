import React, {useState} from "react";
import { IWord } from "../../../utils";
import Modal from "./modal"
import axios from "axios";

const List = (props: { word: IWord }) => {
    const [word, setWord] = useState(props.word);
    const {transcription, previewUrl} = word.meanings[0];
    const [showModal, setShowModal] = useState(false);

    async function loadDescription(search: string) {
        await axios.get(`https://wordsapiv1.p.rapidapi.com/words/${search}`, {
            headers: {
                'x-rapidapi-key': '2ec7bb21d6msh4e0fbd5c092bcf6p1e6a6ajsnd13eff2f71fa',
                'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
            }
        }).then(r => {
            // TODO: не записывается, либо перерендривает родителя
            setWord({...word, ...r.data.results[0]})
            setShowModal(true)
            console.log(r.data.results[0])
            console.log(word);
        });
    };
    const modal = showModal ? (
        <Modal>
            <div  className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h2>{word.text}</h2>
                    </div>
                    <div className="modal-body">
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <h3>Modal Footer</h3>
                    </div>
                </div>
            </div>
        </Modal>
    ) : null;

    return (
        <li>
            <div className='wrap' onClick={() => loadDescription(word.text) }>
                <h3>{word.text}</h3>
                <span>{word.partOfSpeech !== '' ? word.partOfSpeech: 'none'}</span>
                <span>{transcription !== '' ? `[${transcription}]`: 'none'}</span>
                <img src={previewUrl ? previewUrl : './img/no-img.jpg' } alt={word.text}/>
            </div>
            <i onClick={() => {
                setWord({ ...word, save: !word.save})
                console.log(word.save)
            }}
               className={ word.save ? 'favourite': 'not-favourite'}
            >
                &#9734;
            </i>
            {modal}
        </li>
    );
};
export default List;
