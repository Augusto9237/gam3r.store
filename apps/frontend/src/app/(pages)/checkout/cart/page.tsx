'use client'
import HeaderCheckout from "@/components/checkout/HeaderCheckout"
import CartItem from "@/components/checkout/cart/CartItem"
import EmptyCart from "@/components/checkout/cart/EmptyCart"
import TotalCart from "@/components/checkout/cart/TotalCart"
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
                    {itens.length === 0 && <EmptyCart/>}
                    {itens.map((item: any) => (
                        <CartItem
                            key={item.produto.id}
                            item={item}
                            addItem={() => adicionarItem(item.produto)}
                            removeItem={() => removerItem(item.produto)}
                            removeProduct={() => removerProduto(item.produto)}
                        />
                    ))}
                </div>
                <TotalCart qtdeItens={qtdeItens} valorTotal={valorTotal} />
            </div>
        )
}