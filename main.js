const oxford = document.querySelector('#oxford');
const tracau = document.querySelector('#tracau');
const cambridge = document.querySelector('#cambridge');
const googleImg = document.querySelector('#googleImg');
const input = document.querySelector('input')
tracau.setAttribute('style', 'display: none;');
googleImg.setAttribute('style', 'display: none;');

function enter(){
  let inputValue = input.value;
  input.value = '';
  oxford.setAttribute('src', `https://www.oxfordlearnersdictionaries.com/definition/english/${inputValue}`);
  tracau.setAttribute('src', `https://tracau.vn/?s=${inputValue}#tc-s`);
  cambridge.setAttribute('src', `https://dictionary.cambridge.org/vi/dictionary/english/${inputValue}`);
  googleImg.setAttribute('src', `https://www.google.com/search?tbm=isch&q=${inputValue}`);
  tiktok(inputValue);
  //Copy to clipboard
  const textForClipboard = (str) => {
    return `${str} nghĩa là gì? _bingAI`;
  }
  navigator.clipboard.writeText(textForClipboard(inputValue));
}
function handleKeyPress(event) {
  if (event.keyCode === 13) {
    enter()
  }
}
                    
function tiktok(keyQuery){
    const width = 500;
    const height = 700;
    const top = Math.floor(screen.height/2 - height/2) - 100;
    const left = Math.floor(screen.width/2 - width/2);
    let url = `https://www.tiktok.com/search/video?q=${keyQuery}`;
    window.open(
    url,
    'popUpWindow',
    `width=${width}, height=${height}, top=${top}, left=${left},
    toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes`); 
}

function switchLeft(){
  const tracauDisplay = tracau.getAttribute('style');
  if(tracauDisplay == 'display: none;'){
    oxford.setAttribute('style', 'display: none;');
    tracau.setAttribute('style', "");
  } else{
    oxford.setAttribute('style', "");
    tracau.setAttribute('style', 'display: none;');
  }
}

function switchRight(){
  const googleImgDisplay = googleImg.getAttribute('style');
  if(googleImgDisplay == 'display: none;'){
    cambridge.setAttribute('style', 'display: none;');
    googleImg.setAttribute('style', "");
  } else{
    cambridge.setAttribute('style', "");
    googleImg.setAttribute('style', 'display: none;');
  }
}