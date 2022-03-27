import styled from "styled-components";

export const BtnLogin = styled.div`
  button:hover {
    background-color: #023c35;
    color: #fff;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  button {
    background-color: #ffad1b;
    width: 130px;
    height: 40px;
    box-shadow: 0px 0px 4px #939393;
    justify-content: center;
    align-items: center;
    display: flex;
    border: none;
    border-radius: 30px;

    color: #023c35;
    text {
      font-size: 15px;
      font-weight: bold;
    }
  }
`;
export const BoxAll = styled.body`
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #1a2036;
  text {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
export const BoxCenter = styled.section`
  width: 600px;
  height: 380px;
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
    background-color: #12c8af;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border-radius: 20px 0px 40px 20px;
    #imgLogo {
      margin-top: 10px;
      width: 140px;
    }
    #imgMed {
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
    background-color: #12c8af;
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
      width: 80%;
      padding: 10px 10px 10px 10px;
      justify-content: center;
      flex-direction: column;
    }
    #titleLogin {
      font-weight: bold;
      font-size: 20px;
    }
    #titleInforLogin {
      color: gray;
      font-size: 12px;
    }
  }
`;
export const BoxAcessInputs = styled.div`
  margin-bottom: 4px;
  text {
    font-size: 14px;
  }
  input {
    width: 100%;
    padding: 8px 10px;
    margin: 5px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    border-radius: 5px;
    outline: none;
  }
  input:focus-visible {
    -webkit-transition: 0.5s;
    transition: 0.5s;
    border: 2px solid #12c8af;
  }
`;
