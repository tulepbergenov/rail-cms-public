import { Global as _Global, css } from "@emotion/react";

export const Global = () => {
  return (
    <_Global
      styles={css`
        #root {
          height: 100%;
        }
      `}
    />
  );
};
