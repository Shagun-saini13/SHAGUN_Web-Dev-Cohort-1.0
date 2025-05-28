const youtubeVideo1={
    title:'Javascript in one shot',
    channel:"Alpha Intern",
    Likes:1200
}
const youtubeVideo2={
    title:'Master Git and GitHub',
    channel:"Alpha Intern",
    Likes:850
}
const youtubeVideo3={
    title:'Interview Prep',
    channel:"Alpha Intern",
    Likes:3548
}
const VideoLikes=(obj)=>{
    if(obj.Likes>1000) {
        return [obj.title,obj.Likes];
    }
}
console.log(VideoLikes(youtubeVideo1));
console.log(VideoLikes(youtubeVideo2));
console.log(VideoLikes(youtubeVideo3));