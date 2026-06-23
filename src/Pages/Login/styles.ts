import styled from "styled-components/native";

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.LightMode.BluePattern.colors.strongBackGround,
  paddingHorizontal: 24,
}));

export const TopoTema = styled.View({
  paddingTop: 40,
  alignItems: "flex-end",
});

export const Titles = styled.View({
  alignItems: "center",
  marginTop: 6,
  marginBottom: 24,
});

export const Emoji = styled.Text({
  fontSize: 56,
  marginBottom: 4,
});

export const Title = styled.Text(({ theme }) => ({
  fontFamily: "Jersey10_400Regular",
  fontSize: theme.size.xl,
  color: theme.LightMode.Basic.colors.white,
  textShadowColor: theme.LightMode.BluePattern.colors.weakBackGround,
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 1,
}));

export const SubTitle = styled.Text(({ theme }) => ({
  fontFamily: "Jersey10_400Regular",
  fontSize: theme.size.m,
  color: theme.LightMode.Basic.colors.white,
  textAlign: "center",
}));

export const Card = styled.View(({ theme }) => ({
  backgroundColor: theme.LightMode.Basic.colors.white,
  borderRadius: theme.radii.l,
  padding: 20,
  borderWidth: 3,
  borderColor: theme.LightMode.BluePattern.colors.title,
}));
