function firstWord(s) {
  s = s.trim();
  let spaceIndex = s.indexOf(" ");
  if (spaceIndex === -1) {
    return s;
  }
  return s.substring(0, spaceIndex);
}

const s = prompt("Enter String:");
alert(firstWord(s));


