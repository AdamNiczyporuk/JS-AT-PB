
const color = ["blue","green","purple","red","orange","pink", "brown", "black", "white"] 

function  GetRandomColor()
{ 
    const randomIndex = Math.floor(Math.random() * color.length)
    return color[randomIndex]

}


// document.getElementById("paragraf1").style.color =  GetRandomColor()
// document.getElementById("paragraf2").style.color = GetRandomColor()
// document.getElementById("paragraf3").style.color = GetRandomColor()
// document.getElementById("paragraf4").style.color = GetRandomColor()


const paragraph = document.querySelectorAll("p")

paragraph.forEach((p) => {
    p.style.color = GetRandomColor()

    

})