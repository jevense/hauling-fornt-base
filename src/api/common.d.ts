export interface IDataType<T = any> {
  code: number
  isSuccess?: boolean
  message: string
  result: T
}
