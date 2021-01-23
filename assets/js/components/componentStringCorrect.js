for (let i = 0; i < document.getElementsByClassName('itemBaseS').length; i++) {
    if(document.getElementsByClassName('itemBaseS')[i].innerText.length > 47){
  let stringItem = ''
  for (let k = 0; k < 47; k++) {
    
    stringItem += document.getElementsByClassName('itemBaseS')[0].innerText[k]
  }
  stringItem += '...'
  document.getElementsByClassName('itemBaseS')[i].innerText = stringItem
  
    }else{
      document.getElementsByClassName('itemBaseS')[0].innerText
    }
    
  }