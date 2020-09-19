// import '../App.css'

import React, { useEffect, useState } from 'react'

import _ from 'lodash'
import {GITHUB_URL as gitHubUrl} from '../constants'

function List() {

  const [list, setList] = useState();

  useEffect(()  => {
    getFetchRewardsApi()
  }, []);

  const getFetchRewardsApi = async () => {
      // await fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json', {mode: 'no-cors', headers: {'Access-Control-Allow-Origin': '*'}})
      // await fetch(gitHubUrl, {mode: 'no-cors', headers: {'Access-Control-Allow-Origin': '*'}})
      // await fetch(gitHubUrl, {mode: 'no-cors', headers: {'Access-Control-Allow-Origin': '*'}})
      // .then(response => response.text())

      // await fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json')
      await fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data => sortData(data))
      .catch(error => console.log('Request failed', error))

  }

  const sortData = (data) => {
    let ordered = []

    const grouped = _.groupBy(data.data, function(list) {
      return list.employee_age;
    })

    // groupBy listId first
    // const grouped = _.groupBy(data, function(list) {
    //   return list.listId;
    // })

    // then sortby listId then name
    Object.values(grouped).map((group) => {
        const sortedby = (_.sortBy(group, list => [list.id, list.employee_name], ['asc', 'asc']))
        // const sortedby = (_.sortBy(group, list => [list.listId, list.name], ['asc', 'asc']))
        sortedby.map((i) => ordered.push(i))
    })

    setList(ordered)
  }


  console.log("list...", list )
  console.log("list...", !!list )

  return (
    <div>
      <table>

      <thead>
        <tr>
          <th>List Id</th>
          <th>Name</th>
        </tr>
      </thead>

        {!!list &&
          list.map((item) => {
            return (
              <>
              <tbody>
                <tr key={item.id}>
                 <td>{item.employee_name}</td>
                 <td>{item.employee_age}</td>
                </tr>
              </tbody>
             </>
            )
          })
        }
      </table>
    </div>
  )
}

export default List
