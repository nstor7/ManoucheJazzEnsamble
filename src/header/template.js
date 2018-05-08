import yo from 'yo-yo'
import fn from './functions'

module.exports = yo`
<header id= "headerContainer">
 <a href="/" class="logoContainer">
  <hgroup>
    <h3 class="luis">Luis David</h3>
    <h3 class="manouche">Manouche Jazz Ensamble</h3>
  </hgroup>
 </a>
 <nav id="nav" class="nav hidden">
   <a href="/" onclick=${fn.navegacion}>Inicio</a>
   <a href="/danzas" onclick=${fn.navegacion}>Danzas</a>
   <a href="/vestuarios" onclick=${fn.navegacion}>Vestuarios</a>
   <a href="/tienda" onclick=${fn.navegacion}>Productos y Servicios</a>
   <a href="/contacto" onclick=${fn.navegacion}>Contacto</a>
 </nav>
 <a href="#" class="navButton" onclick=${fn.navegacion}>
   <i class="fa fa-bars" aria-hidden="true"></i>
 </a>
 <aside class="social-container">
   <a href="" class="social">
    <i class="fab fa-youtube"></i>
   </a>
   <a href="" class="social">
    <i class="fab fa-facebook-f"></i>
   </a>
   <a href="" class="social">
    <i class="fab fa-instagram"></i>
   </a>
   <a href="" class="social">
    <i class="far fa-envelope"></i>
   </a>
 </aside>
</header>`
