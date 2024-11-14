import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" height={0} width={0} sizes="100vw" alt="logo" className='w-full max-w-14 h-auto max-h-14' />
            <Image src="/logo-texto.png" width={230} height={0} alt="logo" className='max-sm:hidden' />
        </Link>
    )
}
