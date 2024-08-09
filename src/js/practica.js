

const classs = document.getElementsByClassName("classs")
const texto = document.getElementById("texto")
const saturn = document.getElementById("saturn")
const earth = document.getElementById("earth")
const boton1 = document.getElementById("boton1")
const boton2 = document.getElementById("boton2")

let data = localStorage.getItem("data")||[]
let data2 = localStorage.getItem("data2")||[]

let sumaData = data
let sumaData2 = data2

saturn.innerHTML = sumaData
earth.innerHTML = sumaData2




for (let index = 0; index < classs.length; index++) {
     classs[index].addEventListener("click", function () {

          classs[index].innerHTML = "🪐";
          classs[index].style.pointerEvents = "none"
       

        let espacioVAcio = []


       for (let index = 0; index < classs.length; index++) {


          if (classs[index].textContent === "") {

               espacioVAcio.push(index)
          }
     }
     
               let numAleatorio = Math.floor(Math.random()*espacioVAcio.length);
               let listaNew = espacioVAcio[numAleatorio]

               classs[listaNew].innerHTML = "🌎"
               classs[listaNew].style.pointerEvents = "none"     

     
              

              
     
         if (classs[0].textContent === "🪐" && classs[1].textContent === "🪐" && classs[2].textContent === "🪐" ) {
            texto.innerText = "felicidades ha ganado 🪐"

            sumaData++
            
            let valiGane = 1                                                   
          
          }else{
               if (classs[3].textContent === "🪐" && classs[4].textContent === "🪐" && classs[5].textContent === "🪐" ) {
                    texto.innerText = "felicidades ha ganado 🪐"
                    sumaData++

                    let valiGane = 1  
                    
               }else{
                    if (classs[6].textContent === "🪐" && classs[7].textContent === "🪐" && classs[8].textContent === "🪐" ) {
                         texto.innerText = "felicidades ha ganado  🪐"

                         sumaData++

                         let valiGane = 1  
                         
                    }else{
                         if (classs[0].textContent === "🪐" && classs[3].textContent === "🪐" && classs[6].textContent === "🪐" ) {
                              texto.innerText = "felicidades ha ganado  🪐"

                              sumaData++

                              let valiGane = 1  
                              
                         }else{
                              if (classs[1].textContent === "🪐" && classs[4].textContent === "🪐" && classs[7].textContent === "🪐" ) {
                                   texto.innerText = "felicidades ha ganado  🪐"

                                   sumaData++

                                   let valiGane = 1  
                                   
                              }else{
                                   if (classs[2].textContent === "🪐" && classs[5].textContent === "🪐" && classs[8].textContent === "🪐" ) {
                                        texto.innerText = "felicidades ha ganado 🪐"

                                        sumaData++

                                        let valiGane = 1  
                                        
                                   }else{
                                        if (classs[0].textContent === "🪐" && classs[4].textContent === "🪐" && classs[8].textContent === "🪐" ) {
                                             texto.innerText = "felicidades ha ganado 🪐"

                                             sumaData++

                                             let valiGane = 1  
                                             
                                        }else{
                                             if (classs[2].textContent === "🪐" && classs[4].textContent === "🪐" && classs[6].textContent === "🪐" ) {
                                                  texto.innerText = "felicidades ha ganado  🪐"

                                                  sumaData++

                                                  let valiGane = 1  
                                                  
                                             }
                                        }
                                   }
                              }
                         }
                    }
               }
          } 
          localStorage.setItem("data",JSON.parse(sumaData))



          if (classs[0].textContent === "🌎" && classs[1].textContent === "🌎" && classs[2].textContent === "🌎" ) {
               texto.innerText = "ohh! ha ganado la letra O"

               sumaData2++
               
          }else{
               if (classs[3].textContent === "🌎" && classs[4].textContent === "🌎" && classs[5].textContent === "🌎" ) {
                    texto.innerText = "ohh! ha ganado 🌎"

                    sumaData2++
                    
               }else{
                    if (classs[6].textContent === "🌎" && classs[7].textContent === "🌎" && classs[8].textContent === "🌎" ) {
                         texto.innerText = "ohh! ha ganado 🌎"
                         
                         sumaData2++
                    }else{
                         if (classs[0].textContent === "🌎" && classs[3].textContent === "🌎" && classs[6].textContent === "🌎" ) {
                              texto.innerText = "ohh! ha ganado 🌎"

                              sumaData2++
                              
                         }else{
                              if (classs[1].textContent === "🌎" && classs[4].textContent === "🌎" && classs[7].textContent === "🌎" ) {
                                   texto.innerText = "ohh! ha ganado 🌎"

                                   sumaData2++
                                   
                              }else{
                                   if (classs[2].textContent === "🌎" && classs[5].textContent === "🌎" && classs[8].textContent === "🌎" ) {
                                        texto.innerText = "ohh! ha ganado 🌎"

                                        sumaData2++
                                        
                                   }else{
                                        if (classs[0].textContent === "🌎" && classs[4].textContent === "🌎" && classs[8].textContent === "🌎" ) {
                                             texto.innerText = "ohh! ha ganado 🌎"

                                             sumaData2++
                                             
                                        }else{
                                             if (classs[2].textContent === "🌎" && classs[4].textContent === "🌎" && classs[6].textContent === "🌎" ) {
                                                  texto.innerText = "ohh! ha ganado 🌎"

                                                  sumaData2++
                                                  
                                             }
                                        }
                                   }
                              }
                         }
                    }
               }
          }
          localStorage.setItem("data2",JSON.parse(sumaData2))


        

     })


    
}



boton2.addEventListener("click", function () { 
     


    localStorage.clear()




                    
                    
})

boton1.addEventListener("click", function () {
     location.reload()
     
})






           