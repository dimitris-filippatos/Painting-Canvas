window.addEventListener("load", ()=>{

    const canvas = document.querySelector('#canvas')
    const context = canvas.getContext('2d')
    
    canvas.height = 600
    canvas.width = 800
    
    context.fillRect(100,100, 200, 150)
    context.strokeRect(300,300, 150,200)
    
    
    
    })