declare module '*.module.css' {
    const classes: Record<string, string>
    export default classes
}

const __IS_DEV__: boolean
const __API__: string

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>
      }
    : T

type OptionalRecord<K extends string, T> = {
    [P in K]?: T
}
