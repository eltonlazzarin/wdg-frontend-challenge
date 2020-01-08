import styled from 'styled-components';

export const Container = styled.div`
  height: 450px;
  max-width: 390px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;

  h1 {
    text-align: center;
    margin-bottom: 25px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    border: none;
    border-bottom: 2px solid #adadad;
    margin: 10px 0;
    width: 300px;
    text-indent: 5px;
    padding: 15px 0;

    ::-webkit-input-placeholder {
      font-size: 15px;
      color: #adadad;
  }
  }

  button {
    border: none;
    background: linear-gradient(120deg, #fa8072, #7ea6e2);
    margin-top: 60px;
    width: 100%;
    height: 50px;
    color: #fff;

    &:hover {
      opacity: .8;
    }
  }
`;

