import fs from 'fs';

const orig = fs.readFileSync('css/main.css.bak', 'utf8').replace(/\r\n/g, '\n');
const compiled = fs.readFileSync('css/main.css', 'utf8').replace(/\r\n/g, '\n');

// 1. Normalized string comparison
const normOrig = orig.replace(/\s+/g, ' ').trim();
const normComp = compiled.replace(/\s+/g, ' ').trim();

console.log('=== VALIDATION REPORT ===');
console.log('1. Normalized content match:', normOrig === normComp);

// 2. Rule by rule comparison
function parseRules(css) {
  const rules = [];
  let buffer = '';
  let inComment = false;
  let depth = 0;
  
  for (let i = 0; i < css.length; i++) {
    const char = css[i];
    const next = css[i + 1];
    
    if (!inComment && char === '/' && next === '*') {
      inComment = true;
      buffer += '/*';
      i++;
      continue;
    }
    
    if (inComment && char === '*' && next === '/') {
      inComment = false;
      buffer += '*/';
      i++;
      const comment = buffer.trim();
      if (comment) rules.push({ type: 'comment', text: comment.replace(/\s+/g, ' ') });
      buffer = '';
      continue;
    }
    
    if (!inComment) {
      if (char === '{') {
        depth++;
        buffer += char;
      } else if (char === '}') {
        depth--;
        buffer += char;
        if (depth === 0) {
          const ruleStr = buffer.trim();
          if (ruleStr) {
            const openIdx = ruleStr.indexOf('{');
            const selector = ruleStr.substring(0, openIdx).replace(/\s+/g, ' ').trim();
            const body = ruleStr.substring(openIdx + 1, ruleStr.length - 1)
              .split(';')
              .map(d => d.replace(/\s+/g, ' ').trim())
              .filter(Boolean)
              .sort();
            rules.push({ type: 'rule', selector, declarations: body });
          }
          buffer = '';
        }
      } else {
        buffer += char;
      }
    } else {
      buffer += char;
    }
  }
  return rules;
}

const origRules = parseRules(orig);
const compRules = parseRules(compiled);

console.log('2. Original total items (rules + comments):', origRules.length);
console.log('3. Compiled total items (rules + comments):', compRules.length);

let allMatched = true;
if (origRules.length !== compRules.length) {
  console.log('Count mismatch!');
  allMatched = false;
}

for (let i = 0; i < Math.max(origRules.length, compRules.length); i++) {
  const o = origRules[i];
  const c = compRules[i];
  if (!o || !c) {
    console.log(`Mismatch at index ${i}: original=${JSON.stringify(o)}, compiled=${JSON.stringify(c)}`);
    allMatched = false;
    break;
  }
  if (o.type !== c.type) {
    console.log(`Type mismatch at index ${i}: ${o.type} vs ${c.type}`);
    allMatched = false;
    break;
  }
  if (o.type === 'comment') {
    if (o.text !== c.text) {
      console.log(`Comment mismatch at index ${i}: "${o.text}" vs "${c.text}"`);
      allMatched = false;
      break;
    }
  } else {
    if (o.selector !== c.selector) {
      console.log(`Selector mismatch at index ${i}: "${o.selector}" vs "${c.selector}"`);
      allMatched = false;
      break;
    }
    const oDecls = o.declarations.join('; ');
    const cDecls = c.declarations.join('; ');
    if (oDecls !== cDecls) {
      console.log(`Declarations mismatch at index ${i} for "${o.selector}":`);
      console.log('  Orig:', oDecls);
      console.log('  Comp:', cDecls);
      allMatched = false;
      break;
    }
  }
}

console.log('4. Perfect 1:1 match across all selectors, declarations, values, and comments:', allMatched);
