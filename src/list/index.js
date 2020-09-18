// import '../App.css'

import React, { useEffect, useState } from 'react'

import {GITHUB_URL as gitHubUrl} from '../constants'

function List() {

  const [list, setList] = useState();

  useEffect(async ()  => {
    // getFetchRewardsApi()

    const response = await fetch("https://fetch-hiring.s3.amazonaws.com/hiring.json")
    // const response = await fetch("https://hn.algolia.com/api/v1/search?query=redux")
    const data = await response.json()
    setList(data);

  }, []);

  // const getFetchRewardsApi = async () => {
  //     const response = await fetch("https://fetch-hiring.s3.amazonaws.com/hiring.json")
  //     const data = await response.json()
  //     setList(data);
  // }


  console.log("list...", list )

  return (
    <div>hi</div>
  )
}

export default List
