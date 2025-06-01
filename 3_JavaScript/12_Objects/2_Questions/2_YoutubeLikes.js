const youtubevideos={
    title:"Js one short",
    channel:"Alpha Intern",
    Likes: 390
}
function GetVideosViews(videos){
    return(videos.Likes);
}
const c=GetVideosViews(youtubevideos)
console.log(c);