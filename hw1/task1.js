/*
There is a string "Text". Create a function that:
- finds all "\" (backslashes)
- logs their amount into console
- replaces them with "" (empty string)
- returns the updated text
*/

const text = 'photo=[{\\"markers_restarted\\":true,\\"photo\\":\\"3b1a5b41d7:y\\",\\"sizes\\":[[\\"s\\",857136504,\\"126679\\",\\"_qJTFQEXlwg\\",75,46],[\\"m\\",857136504,\\"12667a\\",\\"_UIgfQ-POJo\\",130,80],[\\"x\\",857136504,\\"12667b\\",\\"6nQdsC8LX-o\\",604,373],[\\"y\\",857136504,\\"12667c\\",\\"aApLP0Tppmk\\",741,458],[\\"o\\",857136504,\\"12667d\\",\\"7jHA1vEXv-4\\",130,87],[\\"p\\",857136504,\\"12667e\\",\\"eViWWx-2W7M\\",200,133],[\\"q\\",857136504,\\"12667f\\",\\"SF2aYIMBG2M\\",320,213],[\\"r\\",857136504,\\"126680\\",\\"AjzyyY2pElQ\\",510,340]],\\"latitude\\":0,\\"longitude\\":0,\\"kid\\":\\"62efb6d0b1c631e6dbaab0982c50102a\\",\\"urls\\"😞\\"v857136504/126679/_qJTFQEXlwg.jpg\\",\\"v857136504/12667a/_UIgfQ-POJo.jpg\\",\\"v857136504/12667b/6nQdsC8LX-o.jpg\\",\\"v857136504/12667c/aApLP0Tppmk.jpg\\",\\"v857136504/12667d/7jHA1vEXv-4.jpg\\",\\"v857136504/12667e/eViWWx-2W7M.jpg\\",\\"v857136504/12667f/SF2aYIMBG2M.jpg\\",\\"v857136504/126680/AjzyyY2pElQ.jpg\\"]}]';

console.log('Number of backslashes:', (text.match(/\\/g) || []).length*2); //logging the number of "\" into console

// update only this function
function updateText(textToSplit, elementToReplace, separator) {
  return textToSplit.replaceAll(elementToReplace, separator);
}

const elementToReplace='\\';
const separator = '';
console.log('Updated text - ', updateText(text, elementToReplace, separator)); //replacing backslashes with empty string

// module.exports = {
//   text,
//   updateText,
// };