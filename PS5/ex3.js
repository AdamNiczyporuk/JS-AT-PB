
const color = ["blue","green","purple","red","orange","pink", "brown", "black", "white"] 

function  GetRandomColor()
{ 
    const randomIndex = Math.floor(Math.random() * color.length)
    return color[randomIndex]

}

const paragraphs = document.querySelectorAll('p')


