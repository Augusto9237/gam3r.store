'use client'
import HeaderCheckout from "@/components/checkout/HeaderCheckout"
import CarrinhoItem from "@/components/checkout/carrinho/CarrinhoItem"
import CarrinhoVazio from "@/components/checkout/carrinho/CarrinhoVazio"
import TotalCart from "@/components/checkout/carrinho/TotalCart"
import useCarrinho from "@/data/hooks/useCarrinho"

export default function Page() {
        const { 
            itens, 
            qtdeItens,
            valorTotal,
            adicionarItem,
            removerItem,
            removerProduto,
        } = useCarrinho()

        return (
            <div className="flex flex-col gap-5 container">
                <HeaderCheckout passo="carrinho" />
                <div className="flex flex-col gap-4">
                    {itens.length === 0 && <CarrinhoVazio />}
                    {itens.map((item: any) => (
                        <CarrinhoItem
                            key={item.produto.id}
                            item={item}
                            adicionarItem={() => adicionarItem(item.produto)}
                            removerItem={() => removerItem(item.produto)}
                            removerProduto={() => removerProduto(item.produto)}
                        />
                    ))}
                </div>
                <TotalCart qtdeItens={qtdeItens} valorTotal={valorTotal} />
            </div>
        )
}