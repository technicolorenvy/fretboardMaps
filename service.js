const alpha = require('./alpha.json');
const degrees = require('./scale-degrees.json');
const notes = require('./notes.json');

const isNaturalRegex = /b|#/;

// let stubKey = 'C#';
// let stubKey = 'G#';
// let stubKey = 'Gb';
let stubKey = 'B';
let stubColor = 'major';

let reOrgArray = (cutIdx, arr) => {
  let p1 = arr.slice(0, cutIdx),
      p2 = arr.slice(cutIdx);
  return p2.concat(p1);
}

let getKey = (cKey, color) => {
  let isNatural,
      nattyCheck,
      root,
      scale,
      reOrdAlpha,
      reOrdNotes = [];

  scale = degrees[color];
  nattyCheck = cKey.match(isNaturalRegex);
  isNatural = !nattyCheck;
  root = notes
    .filter((v) => (isNatural) ? cKey === v.title : !!~v.title.indexOf(cKey))
    [0];
  
  if (!scale) { console.warn(`The scale name "${color}" was not found`); }
  if (!root)  { console.warn(`The key "${cKey}" was not found`); }
  
  if (scale && root) { 
    reOrdAlpha = reOrgArray(alpha.indexOf(cKey[0]), alpha);
    reOrdNotes = reOrgArray(root.id, notes)
      .filter((v, i) => {
        return !!~scale.indexOf(i+1);
      });
    reOrdNotes[0].usePrior = true;
    reOrdNotes[0].priorTitle = reOrdNotes[0].title;

    reOrdNotes
      .map((v, i) => {
        let aIdx;
                
        aIdx = v.title
          .indexOf(reOrdAlpha[i]);

        v.target = reOrdAlpha[i];
        if (aIdx < 0) {
          v.usePrior = true;
          v.priorTitle = reOrdNotes[i-1].title;        
        }

        return v;
      })
      .map((v, i) => {
        let aIdx,
            title,
            priorTitle,
            priorId,
            isEquivalent,
            vKey = (v.usePrior)
                 ? 'priorTitle'
                 : 'title';

        aIdx = v[vKey].indexOf(reOrdAlpha[i]);                            
        title = (!v[vKey].match(isNaturalRegex))
          ? v[vKey][aIdx]
          : v[vKey][aIdx] + v[vKey][aIdx+1]; 
        
          if (reOrdNotes[i-1]) {
          priorTitle = reOrdNotes[i-1].title;
          priorId = reOrdNotes[i-1].id;
        }
        
        isEquivalent = (`${priorTitle}/${title}` === v.priorTitle)
        if (isEquivalent) {
          title = v.target;
          if (Math.abs(v.id - priorId) == 2) {
            title += '#';
          }
        } else {
          if (v.priorTitle && !v.priorTitle.match(v.target)) {
            title = v.target;
            if (Math.abs(v.id - priorId) == 1) {
              title += 'b';
            }              
          }
        }

        v.title = title;

        delete v.usePrior;
        delete v.priorTitle; 
        delete v.target; 
        delete v.isNatural;

        return v;
      });      
  }

  
  return reOrdNotes;
};

let aKey = getKey(stubKey, stubColor);

console.log('')
console.log(aKey)
console.log('')