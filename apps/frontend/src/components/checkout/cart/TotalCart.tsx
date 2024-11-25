import { IconShoppingCart } from '@tabler/icons-react'
import { Moeda } from '@gstore/core'
import Link from 'next/link'

export interface TotalCartProps {
    qtdeItens: number
    valorTotal: number
}

export default function TotalCart(props: TotalCartProps) {
    return (
        <div className="flex max-md:flex-col justify-center md:justify-end items-center gap-7 max-md:gap-2 bg-violet-dark h-24 rounded-xl px-7 max-md:px-4 max-md:py-1">
            <div className="flex flex-col">
                <span className="text-zinc-400 max-md:text-xs">
                    Total ({props.qtdeItens}{' '}
                    {props.qtdeItens === 1 ? 'item' : 'itens'}):
                </span>
                <span className="text-emerald-500 text-2xl max-md:text-base font-semibold">
                    {Moeda.formatar(props.valorTotal ?? 0)}
                </span>
            </div>
            <Link href="/checkout/payment" className="button bg-indigo-700 max-md:w-full">
                <IconShoppingCart size={20} />
                <span>Continuar</span>
            </Link>
        </div>
    )
}
