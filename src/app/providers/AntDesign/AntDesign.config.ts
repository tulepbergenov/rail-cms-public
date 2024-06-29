import { ThemeConfig, theme as _theme } from "antd";

export const theme: ThemeConfig = {
  cssVar: true,
  hashed: false,
  algorithm: _theme.defaultAlgorithm,
  components: {
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
    },
    Button: {
      primaryShadow: "none",
    },
  },
};
