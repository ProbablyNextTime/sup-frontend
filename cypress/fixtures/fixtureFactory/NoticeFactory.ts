import faker from "faker/locale/en_US"
import { FixtureFactory } from "./FixtureFactory"
import { IBoardNotice } from "model/notice"

const vehicleTypes = ["truck", "bus", "train"]

export interface IGetNoticesResponse {
  notices: Array<IBoardNotice>
}

export class NoticeFactory extends FixtureFactory {
  public generateEntry({
    picUrl,
    peopleTransfer,
    rating,
    from,
    to,
    vehicleType,
    noticeProvider,
    maxAmount,
    tags,
    numberOfReviews,
    estimatedPrice,
  }: Partial<IBoardNotice> = {}): IBoardNotice {
    return {
      picUrl: picUrl || faker.image.imageUrl(),
      peopleTransfer: peopleTransfer || faker.random.boolean(),
      rating: rating || faker.random.number(5),
      from: from || faker.address.city(),
      to: to || faker.address.city(),
      vehicleType: vehicleType || vehicleTypes[faker.random.number(2)],
      noticeProvider: noticeProvider || faker.company.companyName(),
      maxAmount: maxAmount || faker.random.number(100),
      tags: tags || [...Array(3)].map((x) => faker.company.catchPhrase()),
      numberOfReviews: numberOfReviews || faker.random.number(100),
      estimatedPrice: estimatedPrice || faker.random.number(1000),
    }
  }

  public generateEntries(quantity: number): IBoardNotice[] {
    return [...Array(quantity)].map(this.generateEntry)
  }

  public generateGetNoticesResponse(): IGetNoticesResponse {
    const newNotices = this.generateEntries(3)
    return {
      notices: newNotices,
    }
  }
}
