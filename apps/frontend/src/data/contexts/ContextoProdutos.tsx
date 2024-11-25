'use client'
import { createContext, useCallback, useEffect, useState } from 'react'
import { FiltrarProdutos, Produto } from '@gstore/core'
import useAPI from '../hooks/useAPI'

export interface ContextProductsProps {
    produtos: Produto[]
    pesquisa: string
    setPesquisa: (pesquisa: string) => void
    produtoPorId: (id: number) => Produto | null
}

const ContextoProdutos = createContext<ContextProductsProps>({} as any)

export function ProvedorProdutos(props: any) {
    const { httpGet } = useAPI()
    const [pesquisa, setPesquisa] = useState<string>('')
    const [produtos, setProdutos] = useState<Produto[]>([])

    const loadProducts = useCallback(async () => {
        const products = await httpGet('/produtos')
        setProdutos(products ?? [])
    }, [httpGet])

    useEffect(() => {
        loadProducts()
    }, [loadProducts])

    return (
        <ContextoProdutos.Provider
            value={{
                pesquisa,
                get produtos() {
                    if (!pesquisa) return produtos
                    return new FiltrarProdutos().executar(pesquisa, produtos)
                },
                setPesquisa,
                produtoPorId: (id: number) =>
                    produtos.find((produto) => produto.id === id) ?? null,
            }}
        >
            {props.children}
        </ContextoProdutos.Provider>
    )
}

export default ContextoProdutos
