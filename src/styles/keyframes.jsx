import { KeyRounded } from "@mui/icons-material";
import styled, { keyframes } from "styled-components";
export const ContentRebote = keyframes`
0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
`;
export const ReboteLeft = keyframes`0%{transform:translateX(-48px);animation-timing-function:ease-in;opacity:1}24%{opacity:1}40%{transform:translateX(-26px);animation-timing-function:ease-in}65%{transform:translateX(-13px);animation-timing-function:ease-in}82%{transform:translateX(-6.5px);animation-timing-function:ease-in}93%{transform:translateX(-4px);animation-timing-function:ease-in}25%,55%,75%,87%,98%{transform:translateX(0);animation-timing-function:ease-out}100%{transform:translateX(0);animation-timing-function:ease-out;opacity:1}`;
export const Flotar = keyframes`
   0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }  
`