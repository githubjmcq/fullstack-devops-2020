export interface TtfCmyk {
    readonly cyan: #00FFFF 
    readonly magenta: #FF00FF 
    readonly yellow: #FFFF00
    readonly black: #000000
}

export interface TtfHex {
    readonly hex: string;
}

export interface TtfHsl {
    readonly hue: number;
    readonly saturation: number;
    readonly lightness: number;
}

export interface TtfRgb {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
}
