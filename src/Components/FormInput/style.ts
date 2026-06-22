import styled from "styled-components/native";

export const Input = styled.TextInput(({theme}) => ({
    backgroundColor: theme.LightMode.YellowPattern.colors.weakBackGround,
    borderRadius: 15,
    alignSelf: 'center',
}));