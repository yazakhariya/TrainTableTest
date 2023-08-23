export type ElementCharacteristics = {
    map(arg0: (desc: ElementCharacteristics, i: number) => import("react/jsx-runtime").JSX.Element): unknown
    speed: number
    engineAmperage: number
    force: number
}

export type ElementType = {
    map(arg0: (desc: ElementCharacteristics, i: number) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
    length: number
    name: string
    description: string
    characteristics: ElementCharacteristics
    [index: number]: ElementCharacteristics
}

export type QueryFn = {
    length: number
    filter(arg0: (item: { name: string }) => boolean): unknown
    map(arg0: (el: ElementType, i: number) => void): import("react").ReactNode
    element: ElementType
}
