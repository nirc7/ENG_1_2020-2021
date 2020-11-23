import React from 'react'

export default function FCMessage(props) {
  return (
    <div>
      <h3>{props.isLoggedIn ?
        ` ${props.checkedUserName !== null ? props.checkedUserName :''} u r logged in:)` :
        'u r  not logged in :('}</h3>
    </div>
  )
}
