const dictionary = (word) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c2483d17ddmsh8219df2356a9fbep1e4177jsn6543a85858af",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(
    "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=" +
      word,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      wordheading.innerHTML = response.word;
      definition.innerHTML = response.definition;
    })
    .catch((err) => console.error(err));
};

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  dictionary(searchinput.value);
});
