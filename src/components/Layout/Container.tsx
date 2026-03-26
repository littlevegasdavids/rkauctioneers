import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface ContainerProps extends BoxProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container = ({ 
  children, 
  size = "xl", 
  ...props 
}: ContainerProps) => {
  const getMaxWidth = () => {
    switch (size) {
      case "sm":
        return "640px";
      case "md":
        return "768px";
      case "lg":
        return "1024px";
      case "xl":
        return "1700px";
      case "full":
        return "100%";
      default:
        return "1700px";
    }
  };

  return (
    <Box
      maxW={getMaxWidth()}
      mx="auto"
      px={{
        base: 4,    // 16px on mobile (no container padding)
        md: 6,      // 24px on tablet (small padding)
        lg: 12,      // 32px on desktop (normal padding)
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
