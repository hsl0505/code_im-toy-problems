$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  let getParagraph = $("p");

  let splitParagraphArr = [];
  for (let i = 0; i < getParagraph.length; i++) {
    let temp = [];
    let splitParagraph = getParagraph
      .siblings()
      .eq(i)
      .text()
      .split(" ");
    for (let j = 0; j < splitParagraph.length; j++) {
      if (splitParagraph[j] !== "\n" && splitParagraph[j] !== "") {
        if (splitParagraph[j].includes("\n")) {
          let index = splitParagraph[j].indexOf("\n");
          splitParagraph[j] = splitParagraph[j].slice(0, index);
          temp.push(splitParagraph[j]);
        } else {
          temp.push(splitParagraph[j]);
        }
      }
    }
    splitParagraphArr.push(temp);
  }

  for (let i = 0; i < splitParagraphArr.length; i++) {
    getParagraph
      .siblings()
      .eq(i)
      .empty();
    for (let j = 0; j < splitParagraphArr[i].length; j++) {
      let $spanMaker = $("<span></span>").text(`${splitParagraphArr[i][j]}`);

      getParagraph
        .siblings()
        .eq(i)
        .append(`<span> </span>`)
        .append($spanMaker);
    }
  }

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  function changeColor() {
    for (let j = 0; j < $("span").length; j++) {
      $("span")
        .eq(j)
        .css(
          "color",
          `rgb(${parseInt(Math.random() * 255)},${parseInt(
            Math.random() * 255
          )},${parseInt(Math.random() * 255)})`
        );
    }
  }

  setTimeout(changeColor, 900);
});
