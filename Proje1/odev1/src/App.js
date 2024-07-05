import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="container">
            <a href="#" className="logo">KODUSTA</a>
              <div className="nav-menu">
                <ul>
                  <li>Anasayfa</li>
                  <li>Hakkımızda</li>
                  <li>Ürünler</li>
                  <li>İletişim</li>
                </ul>
              </div>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container">
            <h1>Hoşgeldiniz</h1>
            <p>Dünyanın en iyi yazılım çözümleri burada</p>
            <a href="#" className="btn">Kataloglara bakmak için tıklayınız</a>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="feature">
              <h2>Alanında Lider</h2>
              <p>Bilimum araştırma şirketine göre 1.sıradayız</p>
            </div>
            <div className="feature">
              <h2>Rakip Tanımaz</h2>
              <p>En yakın rakibimize 44 kat fark attık</p>
            </div>
            <div className="feature">
              <h2>Dünyanın En İyisi</h2>
              <p>Bizden hızlısı mezarda</p>
            </div>
          </div>
        </section>
      </main>
<br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <footer className="footer">
        <div className="container">
          <p> Arnavutköy - Bilişim Akademisi</p>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
