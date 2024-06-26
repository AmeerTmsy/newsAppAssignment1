

const urlApi = ''

const body = document.getElementById('body');

//  ----------- getting data from the API --------------  //
const apiKey = "e2ff5300c1cf466ab243830cc4715b34"
let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-04-09&sortBy=publishedAt&apiKey=${apiKey}`;
fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    for(var i=0; i<10; i++){
        // console.log(data);
        // console.log(data.articles[0].description);
        // console.log(data.articles[0].content);
        // console.log(data.articles[0].urlToImage);
        // console.log(data.articles[0].url);
        // console.log(data.articles[0].author);
        // console.log('____________________________________')

        let title       = data.articles[i].title;
        let description = data.articles[i].description;
        let content     = data.articles[i].content;
        let urlToImage  = data.articles[i].urlToImage;
        let url         = data.articles[i].url;
        let author      = data.articles[i].author;

        showNews(title, description, content, urlToImage, url, author);
    }
    // console.log(data.articles[1])
    
    
})
.catch(error => console.log(error))


function showNews(title, description, content, urlToImage, url, author){

    const h2 = document.createElement('h2');
    const h5 = document.createElement('h5');
    const para = document.createElement('p');
    const img = document.createElement('img');
    const a = document.createElement('a');
    const span = document.createElement('span');
    const div = document.createElement('div');

    h2.innerHTML   = title;
    h5.innerHTML   = description
    para.innerHTML = content;
    img.src = urlToImage;
    a.href  = url;
    span.innerHTML = author;


    img.classList.add('newsImg')
    var linkText = document.createTextNode("Take a look at this");
    a.appendChild(linkText);

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h5);
    div.appendChild(para);
    div.appendChild(a);
    div.appendChild(span);

    body.appendChild(div);
}
