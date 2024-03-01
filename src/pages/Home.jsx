import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
const Home = () => {
  return (
    <>
      <Main />
      <Row rowId='1' title='Up Coming' FetchURL={requests.requestUpcoming} />
      <Row rowId='2' title='Trending'  FetchURL={requests.requestTrending} />
      <Row rowId='3' title='Horror'  FetchURL={requests.requestHorror} />
      <Row rowId='4'title='TopRated'  FetchURL={requests.requestTopRated} />
      <Row rowId='5' title='Popular'  FetchURL={requests.requestPopular} />
    </>
  )
}

export default Home
