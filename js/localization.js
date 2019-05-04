axios.get('https://ipapi.co/json/')
.then(function (response) {
  if(response.data.in_eu !== false){
      alert("This site uses cookies");
  }
})
.catch(function (error) {
  console.log(error);
});