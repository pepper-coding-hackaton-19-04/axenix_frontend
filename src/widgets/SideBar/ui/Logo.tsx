import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
    return (
        <Link href={'/'}>
            <Image
                src={'https://axenix.pro/wp-content/themes/axenix/img/svg/logo.svg'}
                alt="Logo Лучшей Компании"
                width={100}
                height={100}
            />
        </Link>
    )
}
