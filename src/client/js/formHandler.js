function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    //fetch request for weather of zip code 90210
    fetch('http://api.openweathermap.org/data/2.5/weather?zip=90210,US&appid=c385c18d161b14df158500c5452637e5')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = 'the temperature in Beverly Hills is : ' + res.main.temp
        console.log(res.main.temp)
    })
}

export { handleSubmit }
