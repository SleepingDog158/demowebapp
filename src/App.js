import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header class="header">
        <div class="header-container w-container">


            <div class="site">
                <a href="index.html">
                    <img src={require("./img/logo.png")} alt="Boards" width="100" height="100" />
                </a>
            </div>


            <button class="navbtn button">
                <i class="fa-solid fa-bars"></i>
                <span class="sr-only">Menu</span>
            </button>
        </div>
    </header>
    <section class="hero">
        <div class="hero-container w-container">
            <h1>Culture</h1>
            <h2>ACG - HOW NIKE CHANGED THE NARRATIVE OF HYPE</h2>
            <a href="#" class="btn">Lets get into it</a>
        </div>
    </section>
    <section class="imgtext">
        <div class="imgtext-container w-container">
            <div class="text">
                <h2 class="heading-decoration">How its start </h2>
                <p>Open mind from Nike</p>
                <p>Another day, another hyped collaboration for release. The world of street-wear has become a
                    goldenAK-47 that shoots one silver bullet after another. Since most kids don’t wear bullet proof
                    vests,the hype is getting real. </p>
                <p>The strategy behind most of these releases is well known, dead simple but hella successful. First of
                    all pick a famous person, iconic shop, designer or brand and create a shoe with (or without) him
                    that may (or may not) look amazing. The second phase is to start teasing the design on social media
                    through a leak, early smart seeding or one of those endless websites or blogs. Now the hype begins
                    to form! </p>
            </div>

            <figure class="img">
                <img src={require("./img/tool.jpg")} alt="" width="1500" height="1260"/>
            </figure>

        </div>
    </section>
   
    <section class="imgtext">
        <div class="imgtext-container reverse w-container">
            <div class="text">
                <h2 class="heading-decoration">THE REBIRTH OF ACG </h2>
                <p>Function, Style, Comfort</p>
                <p>In December 2014, Nike ACG was reborn as NikeLab ACG and a lot of things changed, I mean, a lot
                    (really). Rebranded under the NikeLab banner and with the appointment of Errolson Hugh as the
                    creative mind behind ACG’s new design, ethos and philosophy, something special happened at Nike. ACG
                    was producing a mixture of function, style, comfort and technology on a high level that was majorly
                    unusual, considering they are one of the biggest sportswear brands out there. </p>

            </div>

            <figure class="img">
                <img src={require("./img/1.jpg")} alt="" width="1600" height="1260"/>
            </figure>

        </div>
    </section>
    <section class="post">
        <div class="test-container">
            <h2 class="heading">PRODUCTS
            </h2>

            <div class="post-container">
                <article class="post">
                    <div class="text-test">
                        <h3>ALOHA</h3>
                    </div>

                    <a href="#">
                        <figure>
                            <img src={require("./img/news01.jpg")} alt="" width="1000" height="750"/>
                        </figure>
                    </a>

                </article>
                <article class="post">
                    <div class="text-test">
                        <h3>MINIMAL</h3>
                    </div>
                    <a href="#">
                        <figure>
                            <img src={require("./img/news02.jpg")} alt="" width="1000" height="750"/>
                        </figure>
                    </a>

                </article>
                <article class="post">
                    <div class="text-test">
                        <h3>LAVA</h3>
                    </div>
                    <a href="#">
                        <figure>
                            <img src={require("./img/news03.jpg")} alt="" width="1000" height="750"/>
                        </figure>
                    </a>

                </article>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-container w-container">
            <div class="footer-site">
                <a href="index.html">
                    <img src={require("./img/logo.png")} alt="" width="130" height="26"/>
                </a>
            </div>
            <ul class="footer-sns">
                <li>
                    <a href="#">
                        <i class="fab fa-twitter"></i>
                        <span class="sr-only">Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fab fa-facebook-f"></i>
                        <span class="sr-only">Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fab fa-instagram"></i>
                        <span class="sr-only">Instagram</span>
                    </a>
                </li>
            </ul>

            <ul class="footer-menu">
                <li><a href="#">News</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Inventory</a></li>
                <li><a href="content.html">Service</a></li>
                <li><a href="#">About us</a></li>
            </ul>

            <div class="footer-copy">
                @NGHIA (LEAD BY TOM)
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
