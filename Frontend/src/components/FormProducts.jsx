import React from "react";


export default class ProductosForm extends React.Component {
    render() {
        return (
          <><nav class="top-bar" data-topbar role="navigation">
            <ul class="title-area">
              <li class="name">
                <h1></h1>
              </li>

              <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
            </ul>

            
          </nav><section class="hero-unit">

              <div class="row">
                <div class="large-12 columns">
                  <hgroup>
                    <h1>Nuestro Servicio</h1>
                    <h3>Confiable y flexible.</h3>
                  </hgroup>


                  <ul class="small-block-grid-2 medium-block-grid-3 flip-cards">

                    <li ontouchstart="this.classList.toggle('hover');">
                      <div class="large button card-front">
                        <a href="#">Servicio</a>
                        
                      </div>
                      <div class="panel card-back">
                       
                        <div class="hub-info">
                          <a href="#">Servicio</a>
                          <p>Con Nuestro servicio podras hacer tu envío terrestre de manera instantánea, planificarlo y seguirlo en todo momento.</p>
                        </div>
                        
                      </div>
                    </li>

                    <li ontouchstart="this.classList.toggle('hover');">
                      <div class="large button card-front">
                        <a href="">Seguridad</a>
                        <i class="fa fa-pencil-square-o card-icon"></i>
                      </div>

                      <div class="panel card-back">
                        <i class="fa fa-pencil-square-o card-icon"></i>
                        <div class="hub-info">
                          <a href="">Seguridad</a>
                          <p>Tu mercancía siempre esta 100% segura y protegida.</p>
                        </div>
                        
                      </div>
                    </li>

                    <li ontouchstart="this.classList.toggle('hover');">
                      <div class="large button card-front">
                        <a href="">Pagos</a>
                        <i class="fa fa-paper-plane-o card-icon"></i>
                      </div>

                      <div class="panel card-back">
                        
                        <div class="hub-info">
                          <a href="">Pagos</a>
                          <p>Pagas por lo que realmente usas, espacio, alistamiento  y despacho del pedido.</p>
                        </div>
                        
                      </div>
                    </li>

                    <li ontouchstart="this.classList.toggle('hover');">
                      <div class="large button card-front">
                        <a href="">Monitoreo</a>
                        
                      </div>

                      <div class="panel card-back">
                        
                        <div class="hub-info">
                          <a href="">Monitoreo</a>
                          <p>Monitorea en tiempo real toda la gestión de despachos.</p>
                        </div>
                        
                      </div>
                    </li>

                    <li ontouchstart="this.classList.toggle('hover');">
                      <div class="large button card-front">
                        <a href="">Notificaciones</a>
                        
                      </div>

                      <div class="panel card-back">
                        
                        <div class="hub-info">
                          <a href="">Notificaciones</a>
                          <p>Te notificaremos acerca de tu servicio adquirido</p>
                        </div>
                        
                      </div>
                    </li>

                    <li ontouchstart="this.classList.toggle('hover');">
                      <div class="large button card-front">
                        <a href="">Ventas</a>
                        
                      </div>

                      <div class="panel card-back">
                        
                        <div class="hub-info">
                          <a href="">Ventas</a>
                          <p>Nos adaptamos a tus procesos de ventas y logística, para hacerte todo más fácil.</p>
                        </div>
                        
                      </div>
                    </li>

                  </ul>
                </div>

                <div class="large-12 columns">
                  <div class="small-12 small-centered medium-6 medium-centered large-3 large-centered columns clients">
                    <a href="#">
                      <h6 class="text-center">Clients Click Here</h6>
                      <p class="text-center">
                        <span class="fa-stack">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-angle-right fa-inverse fa-stack-1x"></i>
                        </span>
                      </p>
                    </a>
                  </div>

                </div>

              </div>
            </section></>

          
   

            
         )
     }
}




