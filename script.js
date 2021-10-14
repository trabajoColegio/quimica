const d = document,
$integrantes = d.querySelectorAll(".integrante"),
$integranteTitulo = d.querySelectorAll(".integrante h2"),
$integranteDiv = d.querySelectorAll(".integrante div"),
$integranteDescripcion = d.querySelectorAll(".integrante p"),
$cargando = d.querySelector(".cargando"),
$verMasIntegrantesBtn= d.querySelector(".ver-mas-figure p")

console.log($cargando);

setTimeout(() => {
  $cargando.classList.add("transparent")
  setTimeout(() => {
    
    $cargando.classList.add("none")
  }, 500);
}, 1000);

const titulos = ["Juan Camilo Rosero", "Sergio Ochoa", "Axel Robayo", "Kevin Florez","Laura Rodriguez", "Kirby"],
descripciones = ["Me gusta la programación, la pasta carbonara y sobre todo Kirby's adventure :'3", "Me gusta jugar videojuegos, ver videos, la pizza y las hamburguesas", "Me gusta escuchar música, jugar videojuegos, los hombres, caminar y los perros calientes", "Normalmente prefiero los entornos tranquilos donde pueda escuchar música relajado","Me gusta leer, cocinar, darle amor a mis 4 esposos y me gusta toda la comida (excepto el pescado)", "Poyo poyo... poyo, poyo, poyo poyo poyo p... poyo?... POYO"]

let verMasSeleccionado = false

d.addEventListener("click", e => {
  if (e.target === $verMasIntegrantesBtn){
    if (verMasSeleccionado){
      $integrantes.forEach((el, index) => {
      $integranteTitulo[index].classList.add("transparent")
      $integranteDescripcion[index].classList.add("transparent")
      $verMasIntegrantesBtn.classList.add("transparent")
      setTimeout(() => {
        $integranteTitulo[index].textContent = titulos[index]
        $integranteTitulo[index].classList.remove("transparent")
        $integranteDescripcion[index].textContent = descripciones[index]
        $integranteDescripcion[index].classList.remove("transparent")
        $verMasIntegrantesBtn.textContent = ">"
        $verMasIntegrantesBtn.classList.remove("transparent")
      }, 550);
    });
    verMasSeleccionado = false
    }
    else{
      $integrantes.forEach((el, index) => {
      $integranteTitulo[index].classList.add("transparent")
      $integranteDescripcion[index].classList.add("transparent")
      $verMasIntegrantesBtn.classList.add("transparent")
      setTimeout(() => {
        $integranteTitulo[index].textContent = titulos[index + 3]
        $integranteTitulo[index].classList.remove("transparent")
        $integranteDescripcion[index].textContent = descripciones[index + 3]
        $integranteDescripcion[index].classList.remove("transparent")
        $verMasIntegrantesBtn.textContent = "<"
        $verMasIntegrantesBtn.classList.remove("transparent")
      }, 550);
    });
    verMasSeleccionado = true
  }
  }
})