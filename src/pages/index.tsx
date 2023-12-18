import reactLogo from "src/assets/react.svg"
import viteLogo from "/vite.svg"
import "./home.css"
import Button from "src/components/Button"
import useCounter from "src/modules/count/hooks/useCounter"

const Home = () => {
  const { count, decrease, increase } = useCounter()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button text="Up" onClick={increase} />
        <Button text="Donw" onClick={decrease} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>count: {count}</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default Home
