import { Produto } from '@gstore/core'
import Image from 'next/image'
import Especificacoes from './Especificacoes'

export interface InformacoesProdutoProps {
    produto: Produto
}

export default function InformacoesProduto(props: InformacoesProdutoProps) {
    const { produto } = props
    return produto ? (
        <div className="flex max-md:flex-col items-center bg-violet-dark rounded-xl p-5">
            <div className="flex-1 relative flex justify-center h-96">
                <Image
                    src={produto.imagem!}
                    height={0}
                    width={0}
                    sizes='100vw'
                    className="object-contain  w-full"
                    alt="Imagem do Produto"
                />
            </div>
            <Especificacoes produto={produto!} />
        </div>
    ) : null
}
