// title
// heading 

const headingGenerator = (title, heading_type) => {
   return `<h${heading_type}> ${title} </h${heading_type}`
}



headingGenerator('Hi There', 1)
// heading type with a conditional 

const headingGenerator = (title, heading_type) => {
    if (heading_type <= 6 && heading_type >0){
      return `<h${heading_type}> ${title} </h${heading_type}>`
 }
      else {
       return "Error Error Will Robinson cant have more than an h6 "
      }
    }
 
 
 
 console.log(headingGenerator('Hi There', 1))
 console.log(headingGenerator('Hi There', 8))
 