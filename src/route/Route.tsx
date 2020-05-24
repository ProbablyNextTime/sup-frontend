import * as React from "react"
import { Route, Redirect, RouteProps } from "react-router-dom"
import PropTypes from "prop-types"
import { isLoggedIn } from "@jetkit/react"

// A wrapper around react-router-dom Route for easier handling of private routes
// via isPrivate boolean flag
interface IRouteWrapperProps<T> extends RouteProps {
  component?: React.FC<T>
  isPrivate: boolean
}

export default function RouteWrapper<T>({ component, isPrivate, ...rest }: IRouteWrapperProps<T>) {
  /* A wrapper component around the react-router-dom Route that controls access to resources.
   *
   * isPrivate flag should be used to make the Route available onlu to logged in users
   */
  if (isPrivate && !isLoggedIn()) {
    return <Redirect to="/" />
  }

  return <Route {...rest} component={component} />
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}
