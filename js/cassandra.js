/* cassandra.js */

var i=1;
var y=0;
var styles = ["promise","contract","liability", "license", "prophecy"];

  
 setInterval(
   function(){
      
      
     $("." + styles[y]).css("z-index", i); 
     //$("." + styles[y]).css("background-color",colours[y]); 
     //i cycle the index
     i++;
     //y cycles the array
     y++;
     if(y==styles.length){
       y=0;
     }
      
  },1000)
  


// handles
(function () {
    var threshold = 0,
            siteTitle = document.querySelector('.site-title');
    if (siteTitle.className.lastIndexOf('big') > -1) {
        var big = true;

        function checkBig () {
            if (window.scrollY > threshold) {
                if (big) {
                    siteTitle.className = siteTitle.className.replace(/\s*big\s*/, '');
                    big = false;
                }
            } else if (! big) {
                siteTitle.className += ' big';
                big = true;
            }
        }
    
        window.addEventListener('scroll', checkBig);
        
        checkBig();
    }
})();

(function () {
    var category_links = document.querySelector('.category_links');

    if (category_links) {
        var toggle = category_links.querySelector('.toggle');
        if (toggle) {
            toggle.addEventListener('click', function (e) {
                category_links.dataset.expanded = (category_links.dataset.expanded === 'true') ? 'false' : 'true';
            });
        }
    }
})();