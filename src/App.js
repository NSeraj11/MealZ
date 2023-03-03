import React from "react";
import Pages from "./pages/Pages";
import Category from "./componants/Category"
import Search from "./componants/Search";
import {BrowserRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import styled from 'styled-components';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Nav>
        <Logo to={"/"}>MealZ</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
    // fetch('spoonacular.com/api&key="process.env"')
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size:3.5rem;
  font-weight:400;
  font-family: cursive;
  color:black;
`;

const Nav = styled.div`
  padding:4rem 0rem;
  display:flex;
  justify-content:flex-start;
  align-items:center;

  svg{
    font-size:2rem;
  }

`;

export default App;
