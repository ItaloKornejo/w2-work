import React, { useEffect, useState } from 'react'

const CardWeatherLocation = ({ weatherCondition,setNewCoords}) => {

  const [gradient, setGradient] = useState()
  const [ckeckedOne,setCkeckedOne] = useState(true)
  const [ckeckedTwo,setCkeckedTwo] = useState()
  const [ckeckedThree,setCkeckedThree] = useState()
  const [ckeckedFour,setCkeckedFour] = useState()

  const backgorundGradient = {
    backgroundImage : gradient,
    borderRadius: '25px'
  }
  const handleChangeTwo = () => {
    setNewCoords({ 
      lat: 19.432748616447704,
      lon: -99.13325293848216,
      country: 'mx'
      })
    console.log('HANDLE 1°');
  };

  const handleChangeThree = () => {
    setNewCoords({
      lat: -33.447487,
      lon: -70.673676,
      country: 'cl'
    })
    console.log('HANDLE 2°');
  };

  const handleChangeFour = () => {
    setNewCoords({
      lat: 4.624335,
      lon: -74.063644,
      country: 'co'
    })
    console.log('HANDLE 3°');
  };

  useEffect(() => {
    if (weatherCondition) {
      setGradient(weatherCondition[1][1])
    }
  }
  ,[weatherCondition])

  return (
    <div className="location-container">
      <details className="custom-select" style={backgorundGradient}>
        <summary className="radios" > 
          <input type="radio" name="item" id="default" title="Change Location" defaultChecked/>
          <input type="radio" name="item" id="item1" title="Ciudad de México" checked={ckeckedTwo} onChange={handleChangeTwo} />
          <input type="radio" name="item" id="item2" title="Santiago" checked={ckeckedThree} onChange={handleChangeThree}/>
          <input type="radio" name="item" id="item3" title="Bogota" checked={ckeckedFour} onChange={handleChangeFour} />
        </summary>
        <ul className="list" style={backgorundGradient}>
          <li>
            <label htmlFor="item1">
            Mexico
            </label>
          </li>
          <li>
            <label htmlFor="item2">Chile</label>
          </li>
          <li>
            <label htmlFor="item3">Colombia</label>
          </li>
        </ul>
      </details>
    </div>
  )
}

export default CardWeatherLocation