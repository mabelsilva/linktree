import "./styles.css"
import logo from "../../assets/logo.jpeg";
import insta from "../../assets/insta.png";
import tktk from "../../assets/tktk.png";
import whats from "../../assets/whats.png";
import tel from "../../assets/tel.png";
import email from "../../assets/email.png";

export const Header = () => {
    return (
        <div className="fundo">
            <div className="fixo">
                <header className="menu">
                    <img src={logo} alt="logo" className="logo" />
                </header>
                <div className="botoes">
                    <div className="botao">

                        <a href="https://www.instagram.com/b.mabellx" className="borda">
                            <img src={insta} alt="instagram" className="img" />
                            <h1 className="nome">Instagram</h1>
                        </a>

                    </div>
                    <div className="botao">

                        <a href="https://www.tiktok.com/bmabell" className="borda">
                            <img src={tktk} alt="tiktok" className="img" />
                            <h1 className="nome">TikTok</h1>
                        </a>

                    </div>
                    <div className="botao">

                        <a href="https://wa.me/18991442807" className="borda">
                            <img src={whats} alt="whatsapp" className="img" />
                            <h1 className="nome">WhatsApp</h1>
                        </a>

                    </div>
                    <div className="botao">

                        <a href="tel:+18991442807" className="borda">
                            <img src={tel} alt="telefone" className="img" />
                            <h1 className="nome">Telefone</h1>
                        </a>

                    </div>
                    <div className="botao">
                        <a href="mailto:mariaisabelmbll5@gmail.com" className="borda">
                            <img src={email} alt="email" className="img" />
                            <h1 className="nome">Email</h1>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};