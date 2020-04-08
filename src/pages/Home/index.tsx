import * as React from "react"
import SignIn from "./signIn"

interface IHomeProps {}

const HomePage = (props: IHomeProps) => {
  return (
    <div>
      <SignIn />
    </div>
  )
}

export default HomePage
