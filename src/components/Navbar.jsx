import React from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;
const Language = styled.div`
  font-size: 14;
  cursor: pointer;
`;
const SearchContainer = styled.div``

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Search />
          </SearchContainer>
        </Left>
        <Center>The Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
