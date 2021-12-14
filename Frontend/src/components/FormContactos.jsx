import React from "react";

export default class ContactForm extends React.Component {
  render() {
    return (
      <section>
        <br /><br />
        <div id="card">
          <div className="card__perfil">
            <div className="card_content">
              <i class="fas fa-phone-alt"></i>
              <h2>Estamos cerca!</h2>
              <p>Télefono</p>
              <div className="card__descripcion">
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis laboriosam animi, magni voluptatem aut molestias
                  voluptates eum molestiae exercitationem cumque!
                </p>
              </div>
              <div className="card__button">
                <a className="enlace" href="#">
                  Saber más
                </a>
              </div>
            </div>
          </div>
          <div className="card__perfil">
            <div className="card_content">
              <i class="fas fa-envelope"></i>
              <h2>Te ayudamos!</h2>
              <p>Correo electronico</p>
              <div className="card__descripcion">
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis laboriosam animi, magni voluptatem aut molestias
                  voluptates eum molestiae exercitationem cumque!
                </p>
                <p>
                </p>
              </div>
              <div className="card__button">
                <a className="enlace" href="#">
                  Saber más
                </a>
              </div>
            </div>
          </div>
          <div className="card__perfil">
            <div className="card_content">
              <i class="fab fa-whatsapp"></i>
              <h2>Hablanos!</h2>
              <p>Whatsapp</p>
              <div className="card__descripcion">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis laboriosam animi, magni voluptatem aut molestias
                  voluptates eum molestiae exercitationem cumque!
                </p>
              </div>
              <div className="card__button">
                <a className="enlace" href="#">
                  Saber más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
