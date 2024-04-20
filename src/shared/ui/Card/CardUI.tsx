import { cn } from '@/shared/utils/cn'
import { FC, HTMLAttributes } from 'react'

interface CardUIProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    tag?: 'div' | 'section' | 'article'
    className?: string
    bgColor?: 'primary' | 'secondary' | 'neutral' | 'light'
}

const bgStyle: Record<'primary' | 'secondary' | 'neutral' | 'light', string> = {
    primary: 'bg-x-orange',
    secondary: 'bg-x-purple',
    neutral: 'bg-x-white',
    light: 'bg-x-light-orange',
}

export const CardUI: FC<CardUIProps> = ({ tag: Wrapper = 'div', children, className, bgColor = 'primary' }) => {
    return <Wrapper className={cn(`p-4 rounded-xl ${bgStyle[bgColor]}`, {}, [className])}>{children}</Wrapper>
}
