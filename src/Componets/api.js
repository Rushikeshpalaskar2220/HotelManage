const getData = async () => {
    try {
        let getResponse = await axios.get(
          //`https://inshortsapi.vercel.app/news?category=all`
          `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
          
        );
        //const jsonResponse=getResponse.json();
        console.log(getResponse);
        setnewsArray(getResponse.data);
      } catch (error) {
        console.log(newsArray);
        alert(error);
      }
}
