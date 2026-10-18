/// <reference types="vite/client" />

declare module 'figma:asset/*' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}
