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

    if (isOpen) {
        return (
            <>
                {/* Overlay escuro atrás do carrinho (clique fora fecha) */}
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>

                {/* Drawer lateral direito */}
                <aside className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
                    {/* Cabeçalho do carrinho */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <h1 className="text-xl font-bold text-green-700">🛒 Carrinho</h1>
                        <button
                            className="text-gray-400 hover:text-gray-600 text-3xl leading-none cursor-pointer transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>
                    </div>

                    {/* Lista de itens */}
                    <ul className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
                        {carrinho.length > 0 ? (
                            carrinho.map((item, index) => (
                                <li
                                    key={`${item.id}-${index}`}
                                    className="flex items-center justify-between bg-green-50 border border-green-100 rounded-lg px-4 py-3"
                                >
                                    <span className="font-medium text-gray-800">{item.nome}</span>
                                    <span className="text-green-600 font-bold">R$ {item.preco}</span>
                                </li>
                            ))
                        ) : (
                            <li className="text-center text-gray-500 py-10">O carrinho está vazio</li>
                        )}
                    </ul>

                    {/* Rodapé com botão de fechar */}
                    <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                        <button
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition-colors cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Fechar
                        </button>
                    </div>
                </aside>
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
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                        onClick={() => { setIsOpen(true) }}
                    >
                        🛒 Carrinho
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Topbar