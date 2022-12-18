
import { capitalizeFirstLetter, getRandomElement } from './helpers';


function towards({ visword, fillerWord, adjective, noun, jargon_adjective }) {
    return {
        acceptsToolname: true,
        name: `Towards ${jargon_adjective} ${visword} ${fillerWord} ${adjective} ${noun}`
    }
}

function adjectivedVisword({ visword, fillerWord, adjective, noun }) {
    return {
        acceptsToolname: true,
        name: `${capitalizeFirstLetter(adjective)} ${visword} ${fillerWord} ${noun}`,
    }
}
function adjectivedNoun({ visword, fillerWord, adjective, noun, jargon_adjective }) {
    return {
        acceptsToolname: true,
        name: `${capitalizeFirstLetter(jargon_adjective)} ${visword} ${fillerWord} ${adjective} ${noun}`
    }
}


function star({ visword, adjective, noun, jargon_noun }) {
    let usedNoun = getRandomElement([noun, jargon_noun])

    return {
        acceptsToolname: false,
        name: `${capitalizeFirstLetter(adjective)} ${usedNoun} ${visword}: State of the Art`
    }
}

// function evaulation({ adjective, noun }) {
//     return {
//         acceptsToolname: false,
//         name: `Evaluating ${noun} visualizations for understanding of ${adjective} ${noun}.`
//     }
// }

function nounbasedVisword({ visword, fillerWord, adjective, noun, noun2, jargon_adjective, jargon_noun }) {
    let usedNoun = getRandomElement([noun, jargon_noun])
    return {
        acceptsToolname: true,
        name: `${capitalizeFirstLetter(usedNoun)}-based ${jargon_adjective} ${visword} ${fillerWord} ${adjective} ${noun2}`,
    }
}

function multinounVisword({ visword, fillerWord, adjective, noun, noun2, jargon_noun }) {
    let usedNoun = getRandomElement([noun, jargon_noun])

    return {
        acceptsToolname: true,
        name: `Multi-${usedNoun} ${visword} ${fillerWord} ${adjective} ${noun2}`,
    }
}


const paperBuilders = [
    towards,
    adjectivedVisword,
    adjectivedNoun,
    star,
    // evaulation,
    nounbasedVisword,
    multinounVisword
]
export default paperBuilders;