import styled from "styled-components/native"


export const Titles = styled.View(({theme}) => ({
    flex: 0.3,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const SubTitle = styled.Text(({theme}) => ({
}));

export const Title = styled.Text(({theme}) => ({
    fontSize: theme.size.m,
}));

export const ContentMain = styled.View(({theme}) => ({
        flex: 0.7,
}));