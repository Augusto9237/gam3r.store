'use client'
import CabecalhoCheckout from '@/components/checkout/HeaderCheckout'
import FormularioEntrega from '@/components/checkout/payment/FormularioEntrega'
import ResumoPagamento from '@/components/checkout/payment/ResumoPagamento'
import SelecaoFormaPagamento from '@/components/checkout/payment/SelecaoFormaPagamento'
import useCarrinho from '@/data/hooks/useCarrinho'
import usePagamento from '@/data/hooks/usePagamento'

export default function Page() {
    const { parcelamento, qtdeItens, valorTotal, valorTotalCheio } = useCarrinho()
    const { entrega, formaPagamento, alterarEntrega, alterarFormaPagamento, finalizarCompra } =
        usePagamento()

    return (
        <div className="flex flex-col gap-7 max-md:gap-4 container">
            <CabecalhoCheckout passo="pagamento" />
            <div className="flex max-md:flex-col gap-5">
                <div className="flex-1 flex flex-col gap-5">
                    <SelecaoFormaPagamento
                        formaPagamento={formaPagamento}
                        formaPagamentoMudou={alterarFormaPagamento}
                    />
                    <FormularioEntrega entrega={entrega} entregaMudou={alterarEntrega} />
                </div>
                <ResumoPagamento
                    qtdeItens={qtdeItens}
                    valorTotal={valorTotal}
                    valorTotalCheio={valorTotalCheio}
                    parcelamento={parcelamento}
                    finalizarCompra={finalizarCompra}
                    className="mt-12"
                />
            </div>
        </div>
    )
}
