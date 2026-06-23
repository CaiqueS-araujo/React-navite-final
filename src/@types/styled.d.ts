import "styled-components/native";
import { Theme } from "../Themes/Theme";

declare module "styled-components/native" {
  export interface DefaultTheme extends Theme {}
}