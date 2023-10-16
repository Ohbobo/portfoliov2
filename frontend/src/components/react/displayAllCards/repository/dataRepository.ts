export interface IDataRepository<T> {
    getData(): Promise<T[]>
}