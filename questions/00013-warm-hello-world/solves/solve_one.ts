// ============= Test Cases =============
import { Equal, Expect, NotAny } from "../../../utils"

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]


// ============= Your Code Here =============
type HelloWorld = string
