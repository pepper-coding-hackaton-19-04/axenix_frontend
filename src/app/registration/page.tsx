import Image from 'next/image'
import React, { CSSProperties } from 'react'
import * as refisetImg from '../../../public/assets/signup.png'
import * as Logo from '../../../public/assets/ae2287a983927b38618a2c560d9d7c36.png'
import { ButtonUI, HStack, InputUI, SpanUI, VStack } from '@/shared/ui'
import { USER_ACCESS_TOKEN, USER_REFRESH_TOKEN } from '@/shared/consts/localStorage'

export default function SignIn() {
    const imageStyles: CSSProperties = {
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
        position: 'absolute',
        zIndex: '-100',
    }

    const LogoStyle = {
        width: 330,
        height: 58,
        marginTop: 80,
        marginBottom: 15,
    }

    const divStyle = {
        display: 'flex',
        width: '1800px',
        alignItems: 'center',
        height: '100vh',
    }

    const formInput = {
        width: '821px',
        height: '888px',
        backdropFilter: 'blur(5px)',
        padding: 20,
        borderRadius: 36,
        backgroundColor: 'rgba(172, 172, 172, 0.322)',
    }

    const inputWrapper = {
        marginTop: 30,
    }
    const Wrapper = {
        marginTop: 20,
        marginBottom: 10,
    }

    async function register(form: FormData) {
        'use server'

        const data = await fetch(process.env.API + '/api/auth/signup', { body: form })
        const jwts: { refresh: string; access: string } = await data.json()
        localStorage.setItem(USER_ACCESS_TOKEN, jwts.access)
        localStorage.setItem(USER_REFRESH_TOKEN, jwts.refresh)
    }

    return (
        <VStack alignItems="center">
            <div style={divStyle}>
                <Image src={refisetImg} alt={''} style={imageStyles} />
                <VStack alignItems="center">
                    <div style={formInput}>
                        <HStack alignItems="center" justifyContent="center">
                            <form action={register}>
                                <VStack alignItems="center">
                                    <Image src={Logo} alt={''} style={LogoStyle} />
                                    <SpanUI type="medium">система оптимизации логистики</SpanUI>
                                    <SpanUI type="medium">и управления запасами</SpanUI>
                                    <VStack alignItems="end" style={inputWrapper}>
                                        <HStack alignItems="center" gap={7} style={Wrapper}>
                                            <SpanUI type="small">Имя</SpanUI>
                                            <InputUI
                                                name="name"
                                                width={'352px'}
                                                height={'47px'}
                                                backgroundColor={'rgba(172, 172, 172, 0.322)'}
                                                textStyle={'bold'}
                                                type={'default'}
                                                text={'Name'}
                                            />
                                        </HStack>

                                        <HStack alignItems="center" gap={7} style={Wrapper}>
                                            <SpanUI type="small">Пароль</SpanUI>
                                            <InputUI
                                                name="password"
                                                width={'352px'}
                                                height={'47px'}
                                                backgroundColor={'rgba(172, 172, 172, 0.322)'}
                                                textStyle={'bold'}
                                                type={'default'}
                                                text={'Name'}
                                            />
                                        </HStack>
                                    </VStack>

                                    <div style={Wrapper}>
                                        <ButtonUI width="164px" height="45px" textStyle="medium">
                                            Войти
                                        </ButtonUI>
                                    </div>
                                    <SpanUI type="medium">сложные системы подвластны каждому</SpanUI>
                                </VStack>
                            </form>
                        </HStack>
                    </div>
                </VStack>
            </div>
        </VStack>
    )
}
