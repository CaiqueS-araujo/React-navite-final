import styled from "styled-components/native";

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.LightMode.BluePattern.colors.strongBackGround,
  paddingHorizontal: 20,
  paddingTop: 50,
}));

export const Header = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Titulo = styled.Text(({ theme }) => ({
  fontFamily: "Jersey10_400Regular",
  fontSize: theme.size.xl,
  color: theme.LightMode.Basic.colors.white,
  textShadowColor: theme.LightMode.BluePattern.colors.weakBackGround,
  textShadowOffset: { width: 3, height: 3 },
  textShadowRadius: 1,
}));

export const Subtitulo = styled.Text(({ theme }) => ({
  fontFamily: "Jersey10_400Regular",
  fontSize: theme.size.m,
  color: theme.LightMode.Basic.colors.white,
  marginTop: 2,
  marginBottom: 26,
}));

export const Grade = styled.View({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

export const Card = styled.TouchableOpacity(({ theme }) => ({
  width: "47%",
  aspectRatio: 1,
  backgroundColor: theme.LightMode.BluePattern.colors.title,
  borderRadius: theme.radii.l,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 3,
  borderColor: theme.LightMode.Basic.colors.white,
  marginBottom: 18,
}));

export const CardIcone = styled.Text({
  fontSize: 46,
  marginBottom: 6,
});

export const CardTitulo = styled.Text(({ theme }) => ({
  fontFamily: "Jersey10_400Regular",
  fontSize: theme.size.m,
  color: theme.LightMode.Basic.colors.white,
}));
