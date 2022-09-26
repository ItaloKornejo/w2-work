import React, { useEffect, useState } from 'react'

const CardWeatherLocation = ({ weatherCondition,setNewCoords}) => {

  const [gradient, setGradient] = useState()
  const [ckeckedOne,setCkeckedOne] = useState(true)
  const [ckeckedTwo,setCkeckedTwo] = useState()
  const [ckeckedThree,setCkeckedThree] = useState()
  const [ckeckedFour,setCkeckedFour] = useState()
  // const [newCoords,setNewCoords] = useState()

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
      lat: -33.42906608547034,
      lon: -70.66656882494084,
      country: 'cl'
    })
    console.log('HANDLE 2°');
  };

  const handleChangeFour = () => {
    setNewCoords({
      lat: 4.59615848994027,
      lon: -74.0771229512744,
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

//   useEffect(()=>{
//     const obj = [
//       { 
//       lat: 19.432748616447704,
//       lon: -99.13325293848216,
//       country: 'mx'
//       },
//       {
//         lat: -33.42906608547034,
//         lon: -70.66656882494084,
//         country: 'cl'
//       },
//       {
//         lat: 4.59615848994027,
//         lon: -74.0771229512744,
//         country: 'co'
//       }
//   ]
//   setNewCoords(obj)
// },[])  

  return (
    <div className="location-container">
      <details className="custom-select" style={backgorundGradient}>
        <summary className="radios" > 
          <input type="radio" name="item" id="default" title="Your Country" defaultChecked/>
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