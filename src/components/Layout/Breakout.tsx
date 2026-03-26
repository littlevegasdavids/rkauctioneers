import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface BreakoutProps extends BoxProps {
  children: ReactNode;
}

export const Breakout = ({ children, ...props }: BreakoutProps) => {
  return (
    <Box
      position="relative"
      left="50%"
      right="50%"
      ml="-50vw"
      mr="-50vw"
      w="100vw"
      {...props}
    >
      {children}
    </Box>
  );
};
