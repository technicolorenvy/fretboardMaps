import alpha from '../data/alpha.json';
import degrees from '../data/scale-degrees.json';
import notes from '../data/notes.json';

const IS_NATURAL_REGEX = /b|#/;

const stubKey = 'Db';
const stubColor = 'major';

class FretboardService {

  reOrgArray = (cutIdx, arr) => {
    let p1 = arr.slice(0, cutIdx),
        p2 = arr.slice(cutIdx);
    return p2.concat(p1);
  }
  
  getKey = (cKey, color) => {
    let isNatural,
        nattyCheck,
        root,
        scale,
        reOrdAlpha,
        reOrdNotes = [];
  
    scale = degrees[color];
    nattyCheck = cKey.match(IS_NATURAL_REGEX);
    isNatural = !nattyCheck;
    root = notes
      .filter((v) => (isNatural) ? cKey === v.title : !!~v.title.indexOf(cKey))
      [0];
    
    if (!scale) { console.warn(`The scale name "${color}" was not found`); }
    if (!root)  { console.warn(`The key "${cKey}" was not found`); }
    
    if (scale && root) { 
      reOrdAlpha = this.reOrgArray(alpha.indexOf(cKey[0]), alpha);
      reOrdNotes = this.reOrgArray(root.id, notes)
        .filter((v, i) => {
          return !!~scale.indexOf(i+1);
        });
      reOrdNotes      
        .map((v, i) => {
          let p,
              t,
              alphaIdx,
              target,
              formatted;
          
          // The target alpha note (A-G)
          target = reOrdAlpha[i];
  
          // grab a ref to the last entry if it exists
          if (reOrdNotes[i-1]) {
            p = reOrdNotes[i-1];
          }
  
          // if the current target note is not found in the title
          // look to the last entry
          if (!~v.title.indexOf(target)) {
            t = p;
          } else {
            t = v;
          }
          
          // rough out the formatted title
          alphaIdx = t.title.indexOf(target);
          formatted = (!t.title.match(IS_NATURAL_REGEX))
            ? t.title[alphaIdx]
            : t.title[alphaIdx] + t.title[alphaIdx+1]; 
  
          if (p) {              
            // check the prior title against prior and current formatted to 
            // determine if we have already used a given note 
            if (p.title === `${p.formatted}/${formatted}`) {
              formatted = target;
              if (Math.abs(v.id - p.id) == 2) {
                formatted += '#';
              }
            } else {
              if (!t.title.match(target)) {
                formatted = target;
                if (Math.abs(v.id - p.id) == 1) {
                  formatted += 'b';
                }              
              }
            }              
          }
          
          v.formatted = formatted;
          
          return v;
        });      
    }
  
    return reOrdNotes;
  }
}

const instance = new FretboardService();
export default instance;