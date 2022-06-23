import { ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import './BaseStyles/App.scss'
import Client from './graphql'
import BreweryDetail from './views/Brewery/Detail'
import BreweryList from './views/Brewery/List'

function App() {
  return (
    <ApolloProvider client={Client}>
      <Router>
        <Routes>
          <Route path="/breweries/:id" element={<BreweryDetail />} />
          <Route path="/breweries" element={<BreweryList />} />
          <Route path="/" element={<Navigate to="/breweries" replace />} />
        </Routes>
      </Router>
    </ApolloProvider>
  )
}

export default App
