import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding: 10px 30px 30px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width:768px) {
    justify-content: space-around;
    padding: 10px 60px 20px 50px;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: relative; */
`;

const Logo = styled.img`
  width: 125px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchBox = styled.div`
  display: flex;
  /* align-items: center; */
  position: relative;
  margin: 0 20px;

  input {
    border: 1px solid #ccc;
    padding: 5px 30px 5px 10px;
    border-radius: 5px;
    width: 400px;
    height: 23PX;
    background-color: #F5F5F5;

    @media (max-width: 1024px) {
      width: 100%;
      height: 18PX;
    }
    @media (max-width: 764px) {
    display: none;
  }
  }


  svg {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    fill: #999;
    @media (max-width: 764px) {
    display: none;
  }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  white-space: nowrap;

  a {
    color: #333;
    text-decoration: none;
    margin-right: 20px;

    &:last-child {
      color: #fff;
    }
    &:last-child:hover {
      color: #fff;
    }

    &:hover {
      color: #007bff;
    }
  }
`;

const SellButton = styled.a`
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 700;
  /* text-align: center; */
  cursor: pointer;

  &:hover {
    background-color: #ff6574;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Search>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Mercari_logo.svg/512px-Mercari_logo.svg.png" alt="Mercari-logo" />
        <SearchBox>
          <input type="text" placeholder="なにをお探しですか？" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="#999"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </SearchBox>
      </Search>
      <Nav>
        <a href="/">いいね！一覧</a>
        <a href="/categories">お知らせ</a>
        <a href="/brands">やることリスト</a>
        <a href="/sell">アカウント</a>
        <SellButton href="/sell">出品</SellButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
