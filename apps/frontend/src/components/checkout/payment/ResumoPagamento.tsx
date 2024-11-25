import { Moeda, Parcelamento } from '@gstore/core'
import { IconCreditCard } from '@tabler/icons-react'

export interface ResumoPagamentoProps {
    qtdeItens: number
    valorTotal: number
    valorTotalCheio: number
    parcelamento: Parcelamento
    finalizarCompra: () => void
    className?: string
}

export default function ResumoPagamento(props: ResumoPagamentoProps) {
    return (
        <div
            className={`
                flex flex-1 flex-col self-start gap-3 
                 w-full max-w-96  px-6 py-8
                bg-violet-dark rounded-xl
                ${props.className ?? ''}
            `}
        >
            <span className="text-xl max-md:text-base font-semibold">Resumo:</span>
            <div className="flex justify-between max-md:text-xs">
                <span className="text-zinc-400">Forma de Pagamento:</span>
                <span>PIX/Boleto</span>
            </div>
            <div className="flex justify-between max-md:text-xs">
                <span className="text-zinc-400">Valor Total:</span>
                <span className="text-emerald-500 font-semibold">
                    {Moeda.formatar(props.valorTotalCheio)}
                </span>
            </div>
            <div className="flex justify-between max-md:text-xs">
                <span className="text-zinc-400">Desconto:</span>
                <span className="text-red-500 font-semibold">
                    -{Moeda.formatar(props.valorTotalCheio - props.valorTotal)}
                </span>
            </div>
            <div className="flex flex-col items-end max-md:text-xs">
                <span className="text-zinc-400">à vista no PIX/Boleto</span>
                <span className="text-emerald-500 font-semibold text-2xl max-md:text-base">
                    {Moeda.formatar(props.valorTotal ?? 0)}
                </span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-sm max-md:text-xs text-zinc-300 mt-2">
                    Parcelamento no Cartão
                </span>
                <div className="text-sm max-md:text-xs text-zinc-300">
                    em até{' '}
                    <span className="text-white font-semibold">
                        {props.parcelamento.qtdeParcelas}x
                    </span>{' '}
                    de{' '}
                    <span className="text-white font-semibold">
                        {Moeda.formatar(props.parcelamento.valorParcela)}
                    </span>
                </div>
            </div>
            <button
                onClick={props.finalizarCompra}
                className="button bg-indigo-700 mt-7"
            >
                <IconCreditCard size={20} />
                <span>Finalizar Compra</span>
            </button>
        </div>
    )
}
