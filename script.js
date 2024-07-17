function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const image = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    image.setAttribute('src', './assets/d1as-light.png')
    image.setAttribute('alt', "Foto de Eduardo Dias sorrindo, usando camiseta preta (Modo Light).")
  } else {
    // se tiver sem light mode, manter a imagem normal
    image.setAttribute('src', './assets/d1as-dark.png')
    image.setAttribute('alt', "Foto de Eduardo Dias sorrindo, usando camiseta preta (Modo Dark).")
  }
  
 
  


}