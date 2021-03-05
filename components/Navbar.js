import styled from '@emotion/styled'
import Link from 'next/link'
import Logo from './Logo'
import NavContainer from './NavContainer'
import { theme } from '../Theme'

const StyledNav = styled.nav`
  height: 65px;
  width: 100%;
  display: flex;

  .linkContainer {
    display: flex;
    align-items: center;
    list-style: none;

    .navLink {
      font-size: 14px;
      margin-left: 50px;

      :hover {
        cursor: pointer;
        color: ${theme.colors.primary};
      }
    }
  }
`

const Navbar = () => {
  return (
    <StyledNav>
      <NavContainer>
        <Logo />
        <ul className='linkContainer'>
          <Link href='/products'>
            <li className='navLink'>Products</li>
          </Link>
          <li className='navLink'>Your Cart</li>
        </ul>
      </NavContainer>
    </StyledNav>
  )
}

export default Navbar
