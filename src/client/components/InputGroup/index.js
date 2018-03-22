import styled from 'styled-components';

export const Label = styled.label`
    color: #3d3d3d;
    width: 100px;
    justify-content: center;
    user-select: none;
    padding: 0 5px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    font-weight: bold;
    background-color: #83f55c;
    border-bottom-left-radius : 5px;
    border-top-left-radius : 5px;
      &:hover {
    color: #ff0090;
  }
`;

export const InputGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
  
`;

export const InputWrapper = styled.form`
    display: flex;
    marginTop: ${props=>props.marginTop};
`;

export const ContainerResult = styled.div`
      z-index: 1;
      width: ${props=>props.width};
      margin-top: 40px;
      position: absolute;
`;

export const Input = styled.input.attrs({
    type: 'text',
})`
    background-color: ${props => (props.isFail ? '#f1513e' : 'white')};
    font-weight: 500;
    padding-left: 10px;
    width: 400px;
`;


