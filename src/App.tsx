import { useGetTrainDataQuery } from './api/api'
import { GlobalStyle } from './theme/GlobalStyles/global.style'

function App() {
  const { data, isLoading } = useGetTrainDataQuery()
  console.log(data)
  return (
    <>
      {isLoading ? <h1>waiting</h1> : null}
      <GlobalStyle />
      {/* {data ? data.map((element) => {
        return (
          
        )
      }) : null} */}
    </>
  ) 
}

export default App
