import React from 'react'

const ListaProdutos = () => {
    
      const [data, setData] = React.useState(null);
      const [loading, setLoading] = React.useState(true);
      const [error, setError] = React.useState(null);

        React.useEffect(() => {
            async function fetchData() {
                try {
                    setLoading(true)
                    setError(null)
                    
                    const response = await fetch('https://raw.githubusercontent.com/Off-Grid-Team/Checkpoint-4-Web/dev/lista_produtos.json');
                    // Conecta à API e busca os dados do arquivo JSON
                    
                    if (!response.ok) {
                        throw new Error('Erro: ${response.status} ${response.statusText}');
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
                <div className="">
                    <div className="">
                        Carregando dados...
                    </div>
                </div>
                // Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados
            )
        }
        
        if (error) {
            return (
                <div className="">
                    <div className="">
                        Erro: {error}
                    </div>
                </div>
                // Exibe uma mensagem de erro caso ocorra algum problema ao buscar os dados
            )
        }

        return (
            <div className="">
                <h2>Lista de Produtos</h2>
                <ul>
                    {data && data.produtos ? (
                            
                        data.produtos.map((produto) => (
                            <li key={produto.id}>
                                <h3>{produto.nome}</h3>
                                <p>Preço: {produto.preco}</p>
                                <p>Categoria: {produto.categoria}</p>
                                <button className="botao-comprar">Adicionar ao Carrinho</button>
                            </li>
                            // Renderiza cada produto da lista obtida do arquivo JSON, exibindo seu nome, preço, categoria e um botão para adicionar ao carrinho
                        )
                    )
                    ) : (
                        <li>Nenhum dado disponível</li>
                    )}
                </ul>
            </div>
            // Exibe a lista de produtos obtidos do arquivo JSON, caso os dados estejam disponíveis
        )

    return (
        <>

        </>
    )
}

export default ListaProdutos
