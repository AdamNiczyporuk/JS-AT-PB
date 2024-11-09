const paragraphs = document.querySelectorAll("p");


paragraphs.forEach((paragraph,index) => {
    const header = document.createElement("h2");
    header.textContent = `Paragraph ${index + 1}`;

    paragraph.parentNode.insertBefore(header, paragraph);


    // paragraph.style.height = paragraph.scrollHeight + "px";
    // paragraph.style.opacity = 1;

    // header.addEventListener("click", () => {
    //     if (paragraph.style.height === "0px" || paragraph.style.opacity === "0") {
    //         showParagraph(paragraph);
    //     } else {
    //         hideParagraph(paragraph);
    //     }

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

// function hideParagraph(paragraph)
// { 
//     let height =paragraph.scrollHeight;
//     paragraph.style.transition = "opacity 0.5s ease";
//     paragraph.style.opacity = 1;
    
//     const animate = setInterval(() => {
//         height -= 5; // Zmniejszamy wysokość stopniowo
//         paragraph.style.height = height + "px";
//         if (height <= 0) {
//             paragraph.style.opacity = 0;
//             paragraph.style.height = "0";
//             clearInterval(animate); // Kończymy animację
//         }
//     }, 10);
// }

// function showParagraph(paragraph) {
//     let height = 0;
//     const targetHeight = paragraph.scrollHeight;
//     paragraph.style.transition = "opacity 0.5s ease";
//     paragraph.style.opacity = 1;

//     const animate = setInterval(() => {
//         height += 5; // Zwiększamy wysokość stopniowo
//         paragraph.style.height = height + "px";
//         if (height >= targetHeight) {
//             paragraph.style.height = ""; // Usuwamy styl inline po zakończeniu
//             clearInterval(animate);
//         }
//     }, 10);
// }