import { IAuthResponse, IUser } from "@jetkit/react"

// export interface IUser {
//   id: ExtId
//   fullName: string
//   email: string
// }

export interface ILoginResponse extends IAuthResponse {
  user?: IUser
}
