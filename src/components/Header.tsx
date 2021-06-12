import React from 'react'
import styled from 'styled-components';
function Header() {
    return (
        <CustomHeader>
            <h3>React Quiz App</h3>
        </CustomHeader>
    )
}
const CustomHeader = styled.div`
    text-align:center;
    color:white;
    padding:20px 0;
`

export default Header;
