const getSpaceXs = () => {
   return  fetch('https://api.spacexdata.com/v3/launches')
        .then(response => response.json())
}

export {getSpaceXs}