
const color = ["blue","green","purple","red","orange","pink", "brown", "black", "white"] 

function  GetRandomColor()
{ 
    const randomIndex = Math.floor(Math.random() * color.length)
    return color[randomIndex]

}

const paragraphs = document.querySelectorAll('p')


paragraphs.forEach((paragraph,index) => {

    paragraph.addEventListener('click', () => {
        
        paragraphs.forEach((p) => {
            p.style.border = "";
            p.style.backgroundColor = "";
        })


        paragraph.style.border = "2px solid green";
        paragraph.style.backgroundColor = index % 2 == 0 ? "#d3d3d3"  : "#a9a9a9";
        console.log(index)
        if (index > 0)
        { 
            paragraphs[index - 1].style.border = "2px solid orange";
        }
        
        if(index < paragraphs.length -1)
        {
            paragraphs[index+1].style.border = "2px solid blue"
        }
    })
    
});