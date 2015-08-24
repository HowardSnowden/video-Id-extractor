  (function(){
      
      $('#submit').on('click', function(e){
          e.preventDefault();
          var url = $('#url').val();
          var checked = $('#thumbnail').prop('checked');
          var extract = idExtract(url, checked);
          $('#vidId').html(extract);
          if (checked === true){
              $('#pic').css('background-image','url("'+extract+'")');
           
             $("label[for='vidId']").html('Thumbnail URL: ');
          }
          
          else{
              $("label[for='vidId']").html('Video Id: ');
              
              
          }
           
      });
        
  
  })();