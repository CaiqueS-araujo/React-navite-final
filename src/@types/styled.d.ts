import 'styled-components/native';
import type { ThemeType } from '../Themes/theme';


declare module 'styled-components/native' {
    export interface DefaultTheme extends ThemeType {}
}