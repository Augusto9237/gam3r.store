import { Produto } from '@gstore/core'

export interface TituloProdutoProps {
    produto: Produto
}

export default function TituloProduto(props: TituloProdutoProps) {
    const { produto } = props
    return (
        <div className="flex flex-col">
            <div className="text-2xl max-md:text-base">{produto?.nome}</div>
            <div className="font-light text-zinc-400 max-md:text-sm">{produto?.descricao}</div>
        </div>
    )
}
