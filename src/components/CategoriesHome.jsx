import React from 'react'
import Styled from 'styled-components';


export const CategoriesHome = () => {
    return (
        <Container>

            <Card>
                <a href="/">
                    <Image src="https://images.unsplash.com/photo-1664658147434-06c646231ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                </a>
                <Span>Hommes</Span>
            </Card>
            <Card>
                <a href="/">
                    <Image src="https://images.unsplash.com/photo-1664711942326-2c3351e215e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                </a>
                <Span>La finesse à l'état pur</Span>
            </Card>
            <Card>
                <a href="/">
                    <Image src="https://images.unsplash.com/photo-1662351557356-bf3b79fe19d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </a>
                <Span>Informatiques</Span>
            </Card>
            <Card>
                <a href="/">
                    <Image src="https://images.unsplash.com/photo-1664658147434-06c646231ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                </a>
                <Span>Cuisine et maison</Span>
            </Card>
        </Container>
    )
}

const Container = Styled.div`
    /* height: 300px; */
    /* background: rgb(2,0,36); */
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`
const Card = Styled.div`
/* margin: 0 2rem; */
height: 330px;
width: 450px;
text-align: center;
/* background-color:red; */

Span {
    &:hover {
      cursor: pointer;
      border-top: 2px solid rgb(245, 51, 51);
      border-bottom: 2px solid rgb(245, 51, 51);
    }
  }
}
`
const Image = Styled.img`
height: 300px;
width: 450px;
border-bottom-right-radius: 15px;
border-bottom-left-radius: 15px;

`
const Span = Styled.span`
color:black;
font-weight:bold;
font-size:18px;
text-transform:uppercase;
}
`