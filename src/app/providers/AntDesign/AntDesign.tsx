import { Layout } from "@/shared/types";
import { css } from "@emotion/react";
import { App, ConfigProvider } from "antd";
import { theme } from "./AntDesign.config";

export const AntDesign = ({ children }: Layout) => {
  return (
    <ConfigProvider theme={theme}>
      <App
        css={css`
          height: 100%;
        `}
      >
        {children}
      </App>
    </ConfigProvider>
  );
};
