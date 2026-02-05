// Image upload
document.querySelectorAll('input[type="file"][data-target]').forEach(input=>{
  input.onchange=e=>{
    const img=document.getElementById(input.dataset.target);
    img.src=URL.createObjectURL(e.target.files[0]);
  };
});

// Video upload + hover play
document.querySelectorAll('.reel input').forEach(input=>{
  input.onchange=e=>{
    const video=input.parentElement.previousElementSibling;
    video.src=URL.createObjectURL(e.target.files[0]);
  };
});

document.querySelectorAll('.reel video').forEach(v=>{
  v.onmouseenter=()=>v.play();
  v.onmouseleave=()=>{
    v.pause();
    v.currentTime=0;
  };
});
