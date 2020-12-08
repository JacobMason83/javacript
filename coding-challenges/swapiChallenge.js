// fetch("https://www.swapi.tech/api/people/")
// .then(res => res.json())
// .then(data => {
//   data.results.forEach((item) => {
//   console.log(item.name)
//   })
// })
// .catch(err => console.error(err))

// fetch("https://www.swapi.tech/api/starships")
//   .then(res => res.json())
//   .then(data => {
//     data.results.forEach(item => {
//     console.log(`Here are my results:
//       Ship Name: ${item.name},
//       Url: ${item.url},
//       UID: ${item.uid}`)
                
//   })
// })
//  .catch(err => console.error(err))

fetch("https://www.swapi.tech/api/people")
  .then(res => res.json())
  .then(data => {
    const properties = data.results.properties
    properties.forEach(item => {
    console.log(`Here are my results:
     ${item}:  ${properties[item]}`)
                
  })
})
 .catch(err => console.error(err))