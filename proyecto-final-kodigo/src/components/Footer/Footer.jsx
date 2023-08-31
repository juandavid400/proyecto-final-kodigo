import React from "react";
import "./footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h2>Categorias</h2>
                    <span>Celulares</span>
                    <span>Videojuegos</span>
                    <span>Nuevos</span>
                </div>
                <div className="item">
                    <h2>Links</h2>
                    <span>FAQ</span>
                    <span>Paginas</span>
                    <span>Tiendas</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h2>Sobre nosotros</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita impedit dolorem, omnis sed ut esse error magnam eveniet architecto, ipsam, incidunt tenetur animi asperiores fuga saepe non cupiditate quam quidem voluptates! Sapiente voluptatem numquam voluptatum, fugiat velit rem, ullam possimus, minima exercitationem dolorum repellendus aut consectetur magni. Repudiandae, vel. Excepturi alias fuga non ea a eaque quas, aliquid qui facilis minima blanditiis nesciunt. Fugiat blanditiis autem sunt laudantium est eveniet?</span>
                </div>
                <div className="item">
                    <h2>Sobre nosotros</h2>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat assumenda harum exercitationem odio id commodi, qui sequi aspernatur veritatis velit itaque magnam officiis et similique eaque earum voluptatum eveniet, minima suscipit voluptas culpa inventore! Tempore dolorem earum adipisci, iusto autem voluptatem omnis? Vel commodi dolorem rem fugit! Corporis veritatis possimus ea, aspernatur eveniet nesciunt ipsa similique culpa cupiditate molestias nam quaerat accusamus? Quibusdam laboriosam incidunt a ratione, nihil fugiat minus id quam alias totam saepe necessitatibus est. Rem, culpa quis!</span>
                </div>
            </div>

            <div className="bottom">
                <div className="left">
                    <span className="logo">Blackwell</span>
                    <span className="copyright">Copyright © 2023. All rights reserved.</span>
                </div>
                <div className="right">
                    <img src="/img/metodos-pago.png" alt="Icono de pagos" />
                </div>
            </div>

        </div>
    )
}

export default Footer