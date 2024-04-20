import Image from 'next/image'
import React from 'react'
import * as loginImg from '../../../public/assets/signin.jpg'
import * as Logo from '../../../public/assets/ae2287a983927b38618a2c560d9d7c36.png'
import { ButtonUI, ContainerUI, HStack, InputUI, SpanUI, VStack } from '@/shared/ui'

export default function SignIn() {

  const imageStyles = {
    width: 1767,
    height: 888,
    borderRadius: 36,
    position: 'absolute',
    zIndex: '-100'
  }

  const LogoStyle = {
    width: 330,
    height: 58,
    marginTop: 80,
    marginBottom: 15
    
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
    marginTop: 30
  }
  const Wrapper = {
    marginTop: 20,
    marginBottom: 10
  }


  return (
      <VStack alignItems='center'>
        <div style={divStyle}>

        <Image 
          src={loginImg}
          alt={''}
          style={imageStyles}
        />
        <VStack alignItems='center'>
          <div style={formInput}>
            
            <HStack alignItems='center' justifyContent='center'>
            <VStack alignItems='center'>
              <Image 
              src={Logo}
              alt={''}
              style={LogoStyle}
                />
              <SpanUI type='medium'>система оптимизации логистики</SpanUI>
              <SpanUI type='medium'>и управления запасами</SpanUI>
              <div style={inputWrapper}>
                <div style={Wrapper}>
                  <SpanUI type='small'>Имя</SpanUI>
                  <InputUI width={'352px'} height={'47px'} backgroundColor={'rgba(172, 172, 172, 0.322)'} textStyle={'bold'} type={'default'} text={'Name'} />
                </div>
                <div style={Wrapper}>
                <SpanUI type='small'>Почта</SpanUI>
                  <InputUI width={'352px'} height={'47px'} backgroundColor={'rgba(172, 172, 172, 0.322)'} textStyle={'bold'} type={'default'} text={'Name'} />
                </div>
                <div style={Wrapper}>
                <SpanUI type='small'>Пароль</SpanUI>
                <InputUI width={'352px'} height={'47px'} backgroundColor={'rgba(172, 172, 172, 0.322)'} textStyle={'bold'} type={'default'} text={'Name'} />
                </div>
              </div>

              <div style={Wrapper}>
                <ButtonUI width='164px' height='45px' textStyle='medium'>Войти</ButtonUI>
              </div>
              <SpanUI type='medium'>сложные системы подвластны каждому</SpanUI>
            </VStack>
            </HStack>
            

          </div>
        </VStack>В

        </div>
      </VStack>


    
  )
}