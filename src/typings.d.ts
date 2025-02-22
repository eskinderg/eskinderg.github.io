declare module 'geezify-js' {
    class Geezify {
        constructor($geez_converter?: any, $ascii_converter?: any);
        static create(): Geezify;
        toGeez($ascii_number: number): string;
    }
    export = Geezify; // CommonJS export syntax
}
