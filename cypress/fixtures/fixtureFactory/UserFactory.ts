import faker from "faker/locale/en_US"
import { FixtureFactory } from "./FixtureFactory"
import { IUser } from "model/user"

interface IUserLoginResponse {
  access_token: string
  refresh_token: string
  user: IUser
}

export class UserFactory extends FixtureFactory {
  public generateEntry({ id, email, fullName }: Partial<IUser> = {}): IUser {
    return {
      id: id || faker.random.uuid(),
      email: email || faker.internet.email(),
      fullName: fullName || faker.name.findName(),
    }
  }

  public generateEntries(quantity: number): IUser[] {
    return [...Array(quantity)].map(this.generateEntry)
  }

  public generateLogInResponse(user?: IUser, access_token?: string, refresh_token?: string): IUserLoginResponse {
    const newUser = user ? this.generateEntry(user) : this.generateEntry()
    return {
      access_token: access_token || faker.random.uuid(),
      refresh_token: refresh_token || faker.random.uuid(),
      user: { ...newUser },
    }
  }
}
