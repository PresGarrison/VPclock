document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');

    function showTime(){
        let timeDisplay = document.getElementById('timeDisplay');
            feedDisplay = document.getElementById('feed'),
            hideDisplay = document.getElementById('hide'),    
            date = new Date(),
            hr   = date.getHours(),
            min  = date.getMinutes(),
            sec  = date.getSeconds(),
            ampm = "AM";
            
        if(hr > 11){
            hr = hr - 12;
            ampm = "PM";
        }

        if(hr == 0){ 
            hr = 12
        }

        hr = (hr < 10) ? "0" + hr : hr;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
    
        if(hr >= 8 && ampm == "PM" && min >= 30|| hr == 12 && ampm == "PM" || hr <= 6 && ampm == "AM"){
            feedDisplay.classList.add('highlight');
            hideDisplay.classList.remove('highlight');
            document.body.style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1556061618305-MMLB6MB7TLOGAVLB3EI5/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/image-asset.jpeg?format=2500ws')";
            
        } else {
            feedDisplay.classList.remove('highlight');
            hideDisplay.classList.add('highlight');
            document.body.style.backgroundImage = "url('https://i1.wp.com/paranormalschool.com/wp-content/uploads/2019/08/Do-Vampires-Sleep.jpg?fit=1200%2C800&ssl=1')";
        }
    
        let fullTime = hr + ":" + min + ":" + sec + " "+ ampm;
        timeDisplay.textContent = fullTime;
        timeDisplay.innerText = fullTime;
        setTimeout(showTime, 1000);
    }
    showTime();
});