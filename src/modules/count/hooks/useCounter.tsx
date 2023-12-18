import { useState } from "react"
import { Count } from "../model"

const useCounter = () => {
  const [count, setCount] = useState<Count>(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  return {
    count,
    increase,
    decrease,
  }
}

export default useCounter
