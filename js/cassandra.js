/* cassandra.js */

jQuery(document).ready(function($) {



 

 $(function () {
    var count = 0;
    var styles = ["It's a promise.","It's a contract.","It's a liability", "It's a license.", "It's a prophecy."];
    console.log(styles);

 setInterval(function () {
      
     $("span.site-description").text(styles[count % styles.length]);
     //console.log($("span.site-description")[0].text)
     //console.log(count % styles.length);
     //console.log(styles[count % styles.length])
     //console.log($("span.site-description")[0].outerText);
     // fadeOut(400, function () {
     // $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
     //i cycle the index
     count++;
  },1000);
});
 
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

}

);

