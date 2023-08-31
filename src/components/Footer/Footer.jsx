import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./footer.scss"




const Footer = () => {
    return (
        <div className="footer" style={{ marginTop: 'auto' }}
        >
            <div className="top">
                <div className="item" style={{textAlign:"center"}}>
                    <h4>Categorias</h4>
                   <a href="" style={{textDecoration: "none"}}><span>Celulares</span></a>
                   <a href="" style={{textDecoration: "none"}}><span>Videojuegos</span></a>
                   <a href="" style={{textDecoration: "none"}}> <span>Nuevos</span></a>
                </div>
                <div className="item" style={{textAlign:"center"}}>
                    <h4>Links</h4>
                    <a href="" style={{textDecoration: "none"}}><span>FAQ</span></a>
                    <a href="" style={{textDecoration: "none"}}> <span>Paginas</span></a>
                    <a href="" style={{textDecoration: "none"}}><span>Tiendas</span></a>
                    <a href="" style={{textDecoration: "none"}}> <span>Cookies</span></a>
                </div>
                <div className="item">
                    <h4 style={{textAlign:"center"}} >Sobre nosotros</h4>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita impedit dolorem, omnis sed ut esse error magnam eveniet architecto, ipsam, incidunt tenetur animi asperiores fuga saepe non cupiditate quam quidem voluptates! Sapiente voluptatem numquam voluptatum, fugiat velit rem, ullam possimus, minima exercitationem dolorum repellendus aut consectetur magni. Repudiandae, vel. Excepturi alias fuga non ea a eaque quas, aliquid qui facilis minima blanditiis nesciunt. Fugiat blanditiis autem sunt laudantium est eveniet?</span>
                </div>
                <div className="item">
                    <h4  style={{textAlign:"center"}}>Sobre nosotros</h4>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat assumenda harum exercitationem odio id commodi, qui sequi aspernatur veritatis velit itaque magnam officiis et similique eaque earum voluptatum eveniet, minima suscipit voluptas culpa inventore! Tempore dolorem earum adipisci, iusto autem voluptatem omnis? Vel commodi dolorem rem fugit! Corporis veritatis possimus ea, aspernatur eveniet nesciunt ipsa similique culpa cupiditate molestias nam quaerat accusamus? Quibusdam laboriosam incidunt a ratione, nihil fugiat minus id quam alias totam saepe necessitatibus est. Rem, culpa quis!</span>
                </div>
            </div>


            <p>siguenos</p>
            < div className="sociales">
                <a id="a1" href="https://www.facebook.com/usuario" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={32} />
                </a>
                
                <a id="a2" href="https://www.twitter.com/usuario" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={32} />
                </a>
                
                <a id="a3" href="https://www.instagram.com/usuario" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={32} />
                </a>
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
