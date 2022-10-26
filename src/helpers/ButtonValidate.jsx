import React from 'react'
import styled from 'styled-components'


export const ButtonValidate = ({btnTitle}) => {
  return (
    <Button>{btnTitle}</Button>
  )
}

const Button = styled.button`
    width:200px;
    height: 35px;
    border: none;
    margin-top: 2rem;
    border: 2px solid #1bd625;
    color: #ffffff;
    background-color: #1bd625;
    border-radius: 10px;
    font-weight: bold;
`