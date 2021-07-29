


function countWord(sentence){
   let  count =0;
   let  words = sentence.split(' ');
   for(let i=0;i<words.length;i++){
       if(words[i]!=""){
           count++;
       }
   }
   return count;

}

function splitInSentence(){
    let text = document.getElementById("text").value;

    let sentences = text.match(/\(?[^\.\?\!]+[\.!\?]\)?/g);

    sentences.filter(words => {
        if (words.match(/[0-9]{3,}/g)) {
            let index = sentences.indexOf(words);
            words = words.replace(/[0-9]/g, 'X');
            sentences[index] = words;
        }
    });
       let sentenceArray = new Array();
       for (let i=0; i<sentences.length;i++){
           
            if(countWord(sentences[i])>3){
              sentenceArray.push(sentences[i]);  
            }
       }
       
      
       let list = document.createElement("ol");
       for( let i =0; i<sentenceArray.length;i++){  
           
           let elem = document.createElement("li");
           elem.innerHTML = sentenceArray[i];
           list.appendChild(elem);
       }
       $('body').append(list);
      
      
}
   

 
 