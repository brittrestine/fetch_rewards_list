// import '../App.css'

import React, { useEffect, useState } from 'react'

import {GITHUB_URL as gitHubUrl} from '../constants'

function List() {

  const [list, setList] = useState();

  useEffect(()  => {
    getFetchRewardsApi()
  }, []);

  const getFetchRewardsApi = async () => {
      await fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json', {mode: 'no-cors', headers: {'Access-Control-Allow-Origin': '*'}})
      .then(response => response.text())
      .then(data => setList(data))
      .then(text => console.log('Request successful', text))
      .catch(error => console.log('Request failed', error))


      // await fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json', {mode: 'no-cors', headers: {'Access-Control-Allow-Origin': '*'}})
      // .then(function(response) {
      //   return response.text();
      // })
      // .then(function(text) {
      //   console.log('Request successful', text);
      // })
      // .catch(function(error) {
      //   console.log('Request failed', error)
      // });
  }


  console.log("list...", list )

  return (
    <div>hi!!**</div>
  )
}

export default List
