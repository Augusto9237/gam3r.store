'use client'
import { IconCreditCard, IconShoppingCart } from '@tabler/icons-react'
import { Moeda, Produto } from '@gstore/core'
import { useRouter } from 'next/navigation'
import useCarrinho from '@/data/hooks/useCarrinho'
import useParcelamento from '@/data/hooks/useParcelamento'

export interface BannerCompraProps {
    produto: Produto
}

export default function BannerCompra(props: BannerCompraProps) {
    const router = useRouter()
    const { produto } = props
    const { adicionarItem } = useCarrinho()
    const parcelamento = useParcelamento(produto.precoPromocional)

    return (
        <div className="flex max-md:flex-col">
            <div className="flex flex-col border-r max-md:border-b max-md:border-r-0 border-zinc-500 max-md:pb-5 max-sm:pr-0 pr-5">
                <div className="line-through max-md:text-xs text-zinc-400">de {Moeda.formatar(produto?.precoBase)}</div>
                <div className="text-2xl font-semibold">
                    <span className="text-base max-md:text-sm text-zinc-300">por</span>{' '}
                    <span className="text-emerald-500 max-md:text-base">{Moeda.formatar(produto?.precoPromocional)}</span>{' '}
                    <span className="text-base text-zinc-300">à vista</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-2xl max-md:text-base font-semibold text-zinc-400 max-md:py-5 max-sm:pl-0 pl-5">
                <span className="text-base max-md:text-sm text-zinc-300">{parcelamento.qtdeParcelas}x de</span>
                {Moeda.formatar(parcelamento.valorParcela)}{' '}
            </div>
            <div className="flex max-sm:flex-col gap-2 items-center">
                <button
                    className="flex-1 button bg-pink-600 max-sm:w-full max-sm:py-2"
                    onClick={() => adicionarItem(produto)}
                >
                    <IconShoppingCart size={20} />
                    <span>Adicionar</span>
                </button>
                <button
                    className="flex-1 button bg-violet-700 max-sm:w-full max-sm:py-2"
                    onClick={() => {
                        adicionarItem(produto)
                        router.push('/checkout/pagamento')
                    }}
                >
                    <IconCreditCard size={20} />
                    <span>Comprar</span>
                </button>
            </div>
        </div>
    )
}
