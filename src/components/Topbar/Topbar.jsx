import React from 'react'
import "./Topbar.css"

const Topbar = () => {

    // const [darkMode, setDarkMode] = React.useState(false);

    // React.useEffect(() => {
    //     const savedTheme = localStorage.getItem('darkMode');

    //     if (savedTheme) {
    //         setDarkMode(true);
    //         document.body.classList.add('dark-mode');
    //     }
    // }, []);

    // const toggleDarkMode = () => {
    //     const newMode = !darkMode;

    //     setDarkMode(newMode);

    //     localStorage.setItem('darkMode', newMode);

    //     if (newMode) {
    //         document.body.classList.add('dark');
    //     } else {
    //         document.body.classList.remove('dark');
    //     }
    // };

  return (
    <>
        <header className="topbar">
            <div className="topbar-logo">
                Off-Grid
            </div>

            <nav className="topbar-menu">
                
                <a href="#home">Home</a>
                <a href="#publico">Público</a>
                <a href="#galeria">Galeria</a>
                <a href="#contato">Contato</a>
                {/* <button className="botao-tema" onClick={toggleDarkMode}>
                    {localStorage.getItem('darkMode') === 'true' ? "☀️" : "🌙"}
                </button> */}
            </nav>

            
        </header>
    </>
  )
}

export default Topbar
