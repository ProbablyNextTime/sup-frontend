import { IAuthResponse } from "@jetkit/react"
import { IUser } from "./user"

export interface ILoginResponse extends IAuthResponse {
  user?: IUser
}
