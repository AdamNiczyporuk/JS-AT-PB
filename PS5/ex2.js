
const color = ["blue","green","purple","red","orange","pink", "brown", "black", "white"] 

function  GetRandomColor()
{ 
    const randomIndex = Math.floor(Math.random() * color.length)
    return color[randomIndex]

}

 const paragraphs = document.querySelectorAll("p");

 paragraphs.forEach((paragraph, index) => {

     paragraph.style.color = GetRandomColor();


     const paragraphNumber = index + 1;
     const totalParagraphs = paragraphs.length;
     const lengthInChars = paragraph.textContent.length;
     paragraph.title = `Paragraf ${paragraphNumber} z ${totalParagraphs}, długość: ${lengthInChars} znaków`;
 });