setInterval(() => {
date=new Date();
htime=date.getHours();
mtime=date.getMinutes();
stime=date.getSeconds();

hrotation=(30*htime)+(mtime/2);
mrotation=6*mtime;
srotation=6*stime;

let hour=document.getElementById('hour')
let minutes=document.getElementById('minutes')
let seconds=document.getElementById('seconds')

hour.style.transform=`rotate(${hrotation}deg)`
minutes.style.transform=`rotate(${mrotation}deg)`
seconds.style.transform=`rotate(${srotation}deg)`

}, 1000);

