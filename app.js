const btn=document.getElementById('btn')
const animeContainer=document.querySelector('.anime-container')
const img= document.querySelector('.anime-img')
const heading=document.querySelector('.anime-name')
let i=0;
btn.addEventListener('click',async ()=>{
    if(i==25){
        i=0
    }else{
        i++
    }
    try{
        btn.disabled=true;
        btn.innerText='Loading...'
        heading.innerText='Updating...'
        img.src=`./spinner.svg`
        animeContainer.style.display='block'
        const response=await fetch('https://api.jikan.moe/v4/anime?q=Naruto')
        const data=await response.json()
        console.log(data);
        btn.disabled=false;
        btn.innerText='Get Anime'
        animeContainer.style.display='block'
        img.src=data.data[i].images.jpg.large_image_url;
        heading.innerText=data.data[i].title;

    }catch(err){
        console.log(err);
        btn.disabled=false;
        btn.innerText='Get Anime'
        heading.innerText=`${err.message}`
    }
})