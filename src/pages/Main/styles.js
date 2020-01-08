import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  div {
    padding: 30px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin-bottom: 15px;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
  }

  img {
    width: 200px;
    height: 150px;
    margin-bottom: 10px;
  }

  p {
    padding: 7px 0;
  }

  a {
    margin-right: 45px;
  }

  svg {
    margin-top: 15px;
  }
`;

export const Pagination = styled.div`
  margin-top: 45px;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  button {
    padding: 13px;
    border-radius: 5px;
    border: 0;
    background: linear-gradient(120deg, #fa8072, #7ea6e2);
    color: #fff;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      opacity: .8;
    }

    &:disabled {
      opacity: .5;
    cursor: default;
    }
  }
`;
