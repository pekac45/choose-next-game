import styled, { createGlobalStyle } from 'styled-components';
import Select from 'react-select';
import dice from './dice.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
		margin: 0;
    padding: 0;

		@import url('https://fonts.googleapis.com/css?family=Dosis');
		font-family: 'Dosis', sans-serif;


    text-align: center;

	}
	:root {
		--main-color: #FFFFFF;
    --secondary-color: #1A0818;
    --danger-color: #ff2323;
	}
`;

export const PageWrapper = styled.div`
  background-image: linear-gradient(to right bottom, rgba(25, 0, 20, 0.8), rgba(0, 0, 0, 0.8)),
    url(${dice});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 10% 28%;

  background-color: var(--secondary-color); /* Used if the image is unavailable */
  width: 100vw;
  height: 100vh;

  z-index: -100;
`;

export const HeaderWrapper = styled.div`
  border-bottom: 3px solid var(--main-color);
  width: 100vw;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const FooterWrapper = styled.div`
  border-top: 3px solid var(--main-color);
  width: 100vw;
  height: 50px;

  position: absolute;
  top: calc(100vh - 53px);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const AnchorWrapper = styled.a`
  color: var(--main-color);
  text-transform: uppercase;
  font-family: 'Dosis', sans-serif;
  background-color: transparent;

  height: 100%;
  text-align: center;
  text-decoration: none;
  padding-top: 10%;

  transition: 0.3s;

  :hover {
    color: var(--secondary-color);
    background-color: var(--main-color);
  }
`;

export const LinkWrapper = styled.button`
  color: var(--main-color);
  text-transform: uppercase;
  font-family: 'Dosis', sans-serif;
  font-size: inherit;
  background-color: transparent;
  height: 100%;
  cursor: pointer;

  border: none;
  text-align: center;
  text-decoration: none;

  transition: 0.3s;

  :hover {
    color: var(--secondary-color);
    background-color: var(--main-color);
  }
`;

export const Button = styled.button`
  display: inline-block;

  color: var(--main-color);
  text-transform: uppercase;
  font-family: 'Dosis', sans-serif;
  font-size: inherit;
  background-color: transparent;
  padding: 0;
  height: 100%;
  min-height: 100%;
  /* min-height: 3.44rem; */
  width: ${props => (props.square ? '2rem' : '6.68rem;')};
  height: ${props => (props.square ? '2rem' : '100%')};

  cursor: pointer;

  border: none;
  text-align: center;
  text-decoration: none;

  transition: 0.3s;
  padding-top: ${props => (props.padding ? '3px' : '2px')};
  /* background-color: ${props => (props.danger ? '#ff2323' : 'var(--main-color)')}; */

  :hover {
    color: var(--secondary-color);
    background-color: ${props => (props.danger ? 'var(--danger-color)' : 'var(--main-color)')};
  }
`;

export const FormGroupWrapper = styled.form`
  display: inline-block;
  height: 100%;
  vertical-align: top;
`;

export const InputWrapper = styled.input`
  display: inline-block;

  border: none;
  /* border: 1px solid var(--danger-color); */

  box-shadow: ${props => (props.borderTop ? '0 -1px 0 var(--main-color)' : 'none')};
  box-shadow: ${props => props.error};

  border-radius: 0;
  color: var(--secondary-color);

  /* outline: 0; */
  padding: 1rem;
  text-decoration: none;
  width: 20vw;
  height: calc(100% - 2rem);
  /* height: calc(3.56rem - 2.06rem); */

  font-size: 1.2rem;
  font-family: 'Dosis', sans-serif;
  font-weight: 400;

  z-index: 3;
`;

export const ReactSelectWrapper = styled(Select)`
  font-size: 1.2rem;
  color: var(--main-color);
  width: calc(32px + 20vw);
  display: inline-block;
  background-color: var(--secondary-color);
  border: null;
`;

export const TableCell = styled.td`
  padding-right: 20px;
`;

export const LayoutWrapper = styled.div`
  color: var(--main-color);
`;
