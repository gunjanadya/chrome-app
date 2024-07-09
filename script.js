async function fetchData(){
    const url = 'https://dad-jokes7.p.rapidapi.com/dad-jokes/random';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '32fd63d7d5mshb9896037d27de81p1102efjsn307f2ed351be',
            'x-rapidapi-host': 'dad-jokes7.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    if(result.joke){
        document.getElementById('joke').innerHTML = result.joke;
    }else{
        document.getElementById('joke').innerHTML = 'Oops! No more jokes today. Check back tomorrow!';
    }
}
fetchData();