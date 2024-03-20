const find_max_ngram = (text, length) => {
  text = text.toLowerCase();
  let sub_string = {};
  for (let i = 0; i < text.length; i++) {
    let newText = text[i];
    for (let j = i + 1; j < i + length; j++) {
      newText += text[j];
    }
    if (newText.length == length) {
      sub_string[newText] = sub_string[newText] || 0;
      sub_string[newText]++;
    }
  }
  const maxSub_string_Value = Math.max(...Object.values(sub_string));
  const maxSub_string_Keys = Object.keys(sub_string).filter((key) => {
    return sub_string[key] === maxSub_string_Value;
  });
  maxSub_string_Keys.sort();
  return maxSub_string_Keys[0];
};

console.log(find_max_ngram("xbcxbcaxbcaxb", 4));
