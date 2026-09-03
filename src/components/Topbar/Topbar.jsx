import React from 'react'
import ListaProdutos from '../ListaProdutos/ListaProdutos'
import "./Topbar.css"

const Topbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
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
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if(isOpen){
            return(
                <>
                    
                        <h1 className=''>Carrinho</h1>
                        <ul className="">
                            {carrinho.length > 0 ? (
                                carrinho.map((item, index) => (
                                    <li key={`${item.id}-${index}`}>
                                        {item.nome} - {item.preco}
                                    </li>
                                ))
                            ) : (
                                <li>O carrinho está vazio</li>
                            )}
                        </ul>


                        <button className='' onClick={() => setIsOpen(false)}>Fechar</button>
                    
                </>
                
            );
        }

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
                <button className='' onClick={()=>{setIsOpen(true)}}>Carrinho</button>
            </nav>

            
        </header>
    </>
  )
}

export default Topbar
