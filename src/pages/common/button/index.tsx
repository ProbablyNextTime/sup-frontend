import * as React from "react"
import Button, { ButtonProps } from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"

interface ButtonWithLoadingProps extends ButtonProps {
  isLoading?: boolean
}

export default function ({ isLoading, children, ...props }: ButtonWithLoadingProps) {
  return (
    <Button
      {...props}
      variant="outlined"
      disabled={isLoading || props.disabled}
      style={{ position: "relative", ...props.style }}
    >
      {children}
      {isLoading && (
        <LinearProgress
          style={{
            opacity: 1.0,
            position: "absolute",
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      )}
    </Button>
  )
}
