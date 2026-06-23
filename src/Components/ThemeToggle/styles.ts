import styled from "styled-components/native";

export const Botao = styled.TouchableOpacity(({ theme }) => ({
  width: 44,
  height: 44,
  borderRadius: theme.radii.xxl,
  backgroundColor: theme.LightMode.BluePattern.colors.title,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 2,
  borderColor: theme.LightMode.Basic.colors.white,
}));

export const Icone = styled.Text({
  fontSize: 20,
});
