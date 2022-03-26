import styled, { createGlobalStyle } from "styled-components";
export const BoxAll = styled.body`
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #3b4b7f;
  text {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
export const BoxCenter = styled.section`
  width: 600px;
  height: 350px;
  border-radius: 20px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  box-shadow: 5px;
  sectionOne {
    flex: 1;
    display: flex;
    background-color: #eef5ff;
    height: 100%;
    border-radius: 20px 0px 0px 20px;
  }
  sectionOneRadius {
    flex: 1;
    position: relative;
    display: flex;
    background-color: #5b8ffd;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border-radius: 20px 0px 40px 20px;
    img {
      width: 250px;
      border-radius: 100%;
    }
    #title {
      color: white;
      font-size: 18px;
      padding: 10px 10px 10px 50px;
      text-align: left;
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    #copyright {
      color: white;
      font-size: 10px;
      padding: 10px;
    }
  }
  sectionTwo {
    flex: 1;
    display: flex;
    background-color: #5b8ffd;
    height: 100%;
    border-radius: 0px 20px 20px 0px;
  }
  sectionTwoRadius {
    flex: 1;
    background-color: #eef5ff;
    height: 100%;
    border-radius: 40px 20px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    section {
      display: flex;
      width: 70%;
      padding: 10px 10px 10px 10px;
      justify-content: center;
      flex-direction: column;
    }
    #titeLogin {
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

export const btnlogin = styled.div`
  background-color: red;
  width: 130px;
  height: 40px;
`;
