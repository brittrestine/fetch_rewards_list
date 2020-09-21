import '../App.css'

import React, { useEffect, useState } from 'react'

import _ from 'lodash'
import {GITHUB_URL as gitHubUrl} from '../constants'

function List() {
  const [list, setList] = useState();

  useEffect(()  => {
    getFetchRewardsApi()
  }, []);

  const getFetchRewardsApi = async () => {
    await fetch(gitHubUrl)
    .then(response => response.json())
    .then(data => sortData(data))
    .catch(error => console.log('Request failed', error))
  }

  const sortData = (data) => {
    let ordered = []

    //groupBy listId first
    const grouped = _.groupBy(data, function(list) {
      return list.listId;
    })

    // then sortby listId then name
    Object.values(grouped).map((group) => {
        const sortedby = (_.sortBy(group, list => [list.listId, list.name], ['asc', 'asc']))
        sortedby.map((i) => ordered.push(i))
    })

    setList(ordered)
  }

  return (
    <div>
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>Id</th>
            <th>List Id</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody c>
          {!!list &&
            list.map((item) => {
              return (
                <tr className="table-body" key={item.id}>
                 <td>{item.id}</td>
                 <td>{item.listId}</td>
                 <td>{item.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default List
