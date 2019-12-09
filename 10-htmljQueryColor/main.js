$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  let getParagraph = document.querySelectorAll('p');
  
  let splitParagraphArr = [];
  for(let i=0; i<getParagraph.length; i++) {
    let temp = [];
    let splitParagraph = getParagraph[i].textContent.split(' ');
  
    for(let j=0; j<splitParagraph.length; j++) {
      if(splitParagraph[j] !== "\n" && splitParagraph[j] !== "") {
        if (splitParagraph[j].includes("\n")) {
          let index = splitParagraph[j].indexOf("\n");
          splitParagraph[j] = splitParagraph[j].slice(0,index);
          temp.push(splitParagraph[j])
        }
        else {
          temp.push(splitParagraph[j]);
        }
      }
    }
    splitParagraphArr.push(temp);
  }
  

  // spanMaker.textContent = "hi"
  // getParagraph[0].appendChild(spanMaker);
  for(let i=0; i<splitParagraphArr.length; i++) {
    getParagraph[i].textContent = ""
    // console.log(splitParagraphArr[0][1])
    for (let j=0; j<splitParagraphArr[i].length; j++) {
      let spanMaker = document.createElement("span");
      spanMaker.textContent = splitParagraphArr[i][j];
      getParagraph[i].appendChild(spanMaker);
    }
  }



  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  function changeColor() {
    
  }
});