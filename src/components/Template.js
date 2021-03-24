import React from 'react'
import github from '../assets/images/github.png'
import twitter from '../assets/images/twitter.png'
import instagram from '../assets/images/instagram.png'

function Template(props){
  const { data } = props
  return(
    <div className="About">
      <div className="card">
        <div className="card_details">
          <img className='card_photo' src={data.picture.large} alt={data.name.first}/>
        </div>
        <p className="card_title">Hi, My name is</p>
        <p className="card_value">{data.name.first} {data.name.last}</p>
        <div className="card_userdata">
          <ul>
            <li>{data.email}</li>
            <li>{data.location.country}</li>
          </ul>
        </div>
      </div>
      <div className="card_social">
        <a href="https://twitter.com/gndx">
          <img src={twitter} />
        </a>
        <a href="https://github.com/gndx">
          <img src={github} />
        </a>
        <a href="https://instagram.com/gndx">
          <img src={instagram} />
        </a>
      </div>
    </div>
  )
}

export default Template