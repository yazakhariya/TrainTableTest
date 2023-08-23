import { useGetTrainDataQuery } from './api/api'
import TrainTable from './tables/TrainTable'
import { GlobalStyle } from './theme/GlobalStyles/global.style'

function App() {
  const { data, isLoading } = useGetTrainDataQuery()

  return (
    <>
      <GlobalStyle />
      {isLoading ? <h1>waiting</h1> : data ? <TrainTable data={data} /> : null}
    </>
  )
}

export default App
