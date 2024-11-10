function AddEventToParagraph(paragraph,index)
{ 
    
        const header = document.createElement("h2");
        header.textContent = `Paragraph ${index + 1}`;
    
        paragraph.parentNode.insertBefore(header, paragraph);
    
        paragraph.style.display= "block";

        header.addEventListener("click",() =>{ 
            paragraph.style.display= paragraph.style.display === "none" ? "block" : "none";
        })
    
}



const paragraph = document.querySelectorAll('p')


document.getElementById("addParagraph").addEventListener("click",() => { 
    const input = document.getElementById("newParagraphText"); 
    const text = input.value.trim();

    if(text)
    { 
        const newParagraph = document.createElement('p')
        newParagraph.textContent = text;
        document.body.appendChild(newParagraph); 

        const allParagraphs = document.querySelector('p')
        AddEventToParagraph(newParagraph,allParagraphs-1)
        input = "";
    }
})

