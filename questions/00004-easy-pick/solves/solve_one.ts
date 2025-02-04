// ============= Test Cases =============
import type { Equal, Expect } from '../../../utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


// ============= Your Code Here =============
// 여기 풀이를 입력하세요
type MyPick<T, K extends keyof T> = {
  [k in K]: T[k]  // "description": ToDo["description"]
}
