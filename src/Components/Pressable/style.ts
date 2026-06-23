import styled from "styled-components/native"

export const Pressable = styled.Pressable(({theme}) => ({
    backgroundColor: theme.LightMode.YellowPattern.colors.strongText,
    alignSelf: 'center',
    borderRadius: theme.radii.m,
    paddingLeft: theme.size.m,
    paddingRight: theme.size.m,
    paddingTop: theme.size.xs,
    paddingBottom: theme.size.xs,

}));

export const PressableText = styled.Text((theme) => ({
}))