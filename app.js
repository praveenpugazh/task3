let api = "https://restcountries.eu/rest/v2/all";
console.log("loaded");
fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((item) => {
      console.log(item.name + ":" + item.flag);
    });
  });
