export const partOfSpeech = {
    n: 'noun',
    v: 'verb',
    j: 'adjective',
    r: 'adverb',
    prp: 'preposition',
    prn: 'pronoun',
    crd: 'cardinal number',
    cjc: 'conjunction',
    exc: 'interjection',
    det: 'article',
    abb: 'abbreviation',
    x: 'particle',
    ord: 'ordinal number',
    md: 'modal verb',
    ph: 'phrase',
    phi: 'idiom'
};


export interface IWord {
    id: number
    text: string
    save: boolean
    partOfSpeech: string
    meanings: {
        transcription: string
        previewUrl: string
    }[]
}
