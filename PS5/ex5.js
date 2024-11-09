const paragraphs = document.querySelectorAll("p");


paragraphs.forEach((paragraph,index) => {
    const header = document.createElement("h2");
    header.textContent = `Paragraph ${index + 1}`;

    paragraph.parentNode.insertBefore(header, paragraph);
});