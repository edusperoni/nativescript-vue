import { registerRuntimeCompiler } from "./";
import { compileToFunction } from "./compiler";

registerRuntimeCompiler(compileToFunction);

export { compileToFunction as compile }
export * from "./index";