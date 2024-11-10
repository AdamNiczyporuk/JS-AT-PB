const paragraphs = document.querySelectorAll("p");


paragraphs.forEach((paragraph,index) => {
    const header = document.createElement("h2");
    header.textContent = `Paragraph ${index + 1}`;

    paragraph.parentNode.insertBefore(header, paragraph);


   

    header.addEventListener("click", () => { 
        
        if(paragraph.style.display === "none"){
            paragraph.style.display = "block";
        }
        else
        { 
            paragraph.style.display = "none";
        }
     })
});
const paragraph = document.querySelectorAll('p')

document.getElementById("addParagraph").addEventListener("click",() => { 
    const input = document.getElementById("newParagraphText"); 
    const text = input.value.trim();

    if(text)
    { 
        const newParagraph = document.createElement('p')
        newParagraph.textContent = text;
        document.body.appendChild(newParagraph); 

        // const allParagraphs = document.querySelector('p')
        input = "";
    }
})

// document.getElementById("addParagraph").addEventListener("click", () => {
//     const input = document.getElementById("newParagraphText");
//     const text = input.value.trim();

//     if (text) {
//         const newParagraph = document.createElement("p");
//         newParagraph.textContent = text;
//         document.body.appendChild(newParagraph);

//         const allParagraphs = document.querySelectorAll("p");
//         addHeaderAndEvent(newParagraph, allParagraphs.length - 1);

//         input.value = ""; // Czyszczenie pola tekstowego
//     }
// });
