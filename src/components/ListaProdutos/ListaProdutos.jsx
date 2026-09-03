import React from 'react'

const ListaProdutos = () => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [isOpen, setIsOpen] = React.useState(false);

    const ProdutosCarrinho = () => {
        const [produto, setProduto] = React.useState(() => {
            const salvarProduto = localStorage.getItem(produto.id);
            return salvarProduto ? JSON.parse(produto.id) : ["Lista vazia"];
        });
    };

    React.useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('https://raw.githubusercontent.com/Off-Grid-Team/Checkpoint-4-Web/dev/lista_produtos.json');
                // Conecta à API e busca os dados do arquivo JSON

                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} ${response.statusText}`);
                    // Lança um erro caso a resposta da API não seja bem-sucedida
                }

                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-24">
                <div className="w-10 h-10 border-4 border-green-100 border-t-green-600 rounded-full animate-spin"></div>
                <div className="mt-4 text-gray-500">Carregando dados...</div>
            </div>
            // Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados
        )
    }

    if (error) {
        return (
            <div className="max-w-xl mx-auto my-16 px-4">
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 text-center">
                    Erro: {error}
                </div>
            </div>
            // Exibe uma mensagem de erro caso ocorra algum problema ao buscar os dados
        )
    }

    if (isOpen) {
        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                    <h1 className="text-2xl font-bold text-green-700 mb-4">Produto Adicionado</h1>
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        Fechar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center mb-8">Lista de Produtos</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
                {data && data.produtos ? (
                    data.produtos.map((produto) => (
                        <li key={produto.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{produto.nome}</h3>
                            <p className="text-green-600 font-bold text-xl">Preço: {produto.preco}</p>
                            <p className="text-sm text-gray-500 bg-green-50 border border-green-200 rounded-full px-3 py-1 w-fit mt-1">
                                {produto.categoria}
                            </p>
                            <button
                                className="botao-comprar mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
                                onClick={() => {
                                    setIsOpen(true);
                                    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
                                    carrinhoAtual.push(produto);
                                    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
                                }}
                            >
                                Adicionar ao Carrinho
                            </button>
                        </li>
                        // Renderiza cada produto da lista obtida do arquivo JSON, exibindo seu nome, preço, categoria e um botão para adicionar ao carrinho
                    ))
                ) : (
                    <li className="text-gray-500 text-center py-10">Nenhum dado disponível</li>
                )}
            </ul>
        </div>
        // Exibe a lista de produtos obtidos do arquivo JSON, caso os dados estejam disponíveis
    )
}

export default ListaProdutos