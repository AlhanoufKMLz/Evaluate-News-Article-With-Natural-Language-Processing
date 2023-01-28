import { validURL } from './js/urlChecker'

const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'post',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/jason'
        },
        body: JSON.stringify(data)
   })
   try {
       return await response.json()
   } catch (error){
       console.log(error)
   }
}

const handleSubmit = async () => {
   const url = document.getElementById('article-url');
   if (Client.validURL(url)){
    post("http://localhost:8081/add-url", {url}).then(data =>{
        document.getElementById('text').innerHTML = 'Text: ${data.text}'
        document.getElementById('score_tag').innerHTML = 'Polarity: ${data.score_tag}'
        document.getElementById('agreement').innerHTML = 'Agreement: ${data.agreement}'
        document.getElementById('subjectivity').innerHTML = 'Subjectivity: ${data.subjectivity}'
        document.getElementById('confidence').innerHTML = 'Confidence: ${data.confidence}'
        document.getElementById('irony').innerHTML = 'Irony: ${data.irony}'
    })
   } else
    alert('Please try valid URL.')
}