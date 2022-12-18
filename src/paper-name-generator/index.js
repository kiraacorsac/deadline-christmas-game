import { adjectives } from "./adjectives";
import { intros } from "./intros";
import { nouns } from "./nouns";
import { jargon_adjectives } from "./jargon_adjectives"
import { jargon_nouns } from "./jargon_nouns"
import { plural } from 'pluralize';
import builders from './paperBuilders';
import { getRandomElement, getRandomInt, capitalizeFirstLetter } from './helpers';
import { scorePronouncability } from "../pronounceable";

const toolNameParts = [
  "Vis",
  "Viz",
  "Show",
  "Draw",
  "Paint",
  "See",
  "Viewer",
  "Motion",
  "Graph",
  "Lens",
  "Sketch",
  "Flow"
]


function abbreviate(string) {
  let arr = string.split(" ");
  let res = "";
  for (const word of arr) {
    let letter = word.charAt(0).toUpperCase();
    res = `${res}${letter}`;
  }
  return res;
}

function checkGluedNameAvailability(noun) {

  let name = "";
  for (let part of toolNameParts) {
    let partPosition = noun.toLowerCase().search(part.slice(0, 2).toLowerCase());
    if (partPosition > 0) {
      name = capitalizeFirstLetter(noun).slice(0, partPosition) + part;
      if (part.length <= 3) {
        name = name + noun.slice(partPosition + 2);
      }
      return name
    }
  }

  return name;
}

function checkPronouncableNameAvailability(paperName) {
  return scorePronouncability(paperName) > 0.4
}



function genericToolName(paperName, toolNamePart, noun) {
  return `${capitalizeFirstLetter(noun)}${toolNamePart}: ${paperName}`
}


export function getRandomPaperName() {
  let paper = ""
  let visword = getRandomElement(intros);
  let jargon_adjective = getRandomElement(jargon_adjectives);
  let jargon_noun = getRandomElement(jargon_nouns);
  let noun = getRandomElement(nouns);
  let noun2 = getRandomElement(nouns);

  if (getRandomInt(2) > 0) {
    noun = plural(noun)
  }
  let adjective = getRandomElement(adjectives);
  let toolNamePart = getRandomElement(toolNameParts);
  let fillerWord = getRandomElement(["of", "for", "using"]);


  let paperBuilder = getRandomElement(builders);

  paper = paperBuilder({
    visword,
    fillerWord,
    adjective,
    noun,
    noun2,
    jargon_adjective,
    jargon_noun
  });

  if (!paper.acceptsToolname) {
    return paper.name;
  }

  if (checkPronouncableNameAvailability(paper.name)) {
    return `${abbreviate(paper)}: ${paper.name} `;
  }

  let gluedName = checkGluedNameAvailability(noun)
  if (gluedName) {
    return `${gluedName}: ${paper.name} `;
  }

  if (getRandomInt(100) > 50) {
    return genericToolName(paper.name, toolNamePart, noun);
  }

  return paper.name;
}
