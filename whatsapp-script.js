if(document.URL.includes('web.whatsapp.com') == true){

console.log('script added')

var p=setInterval(function(){
  // console.log('1st setInterval')

  if(document.querySelectorAll('.DuUXI')[0]){

    var t=setInterval(function(){
      // console.log('setting again')
      document.querySelectorAll('.DuUXI')[0].addEventListener('keydown',function(){
      if (event.keyCode === 13) {
        // console.log('entered')
        var y = document.querySelector('#pane-side').scrollTop
        // console.log(y)
        setTimeout(function() {
         console.log('done')
             document.querySelector('#pane-side').scrollTop = y
                    }, 1500);
      }
    })
    },1000);


    clearInterval(p)

  }
},500)



}






