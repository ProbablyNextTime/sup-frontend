// Factory pattern for generating stub reponses and data
export abstract class FixtureFactory {
  public abstract generateEntry(args?: object): object
  public abstract generateEntries(quantity: number): object
}
