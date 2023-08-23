type ElementCharacteristics = {
    speed: number
    engineAmperage: number
    force: number
}

export type Element = {
    name: string
    description: string
    characteristics: ElementCharacteristics
}

export type QueryFn = {
    map(arg0: (element: Element) => import("react/jsx-runtime").JSX.Element): unknown
    element: Element
}
