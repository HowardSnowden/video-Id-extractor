function idExtract(url, thumbnail){
    
    var vidId = url.match(/(watch\?v=)([\w-]*)|(\.be\/)([\w-]*)|(embed\/)([\w-]*)/i);
    
    if (vidId !== null){
        
        if (thumbnail == true){
            
            return "http://i1.ytimg.com/vi/"+vidId[2].trim()+"/hqdefault.jpg" 
            
            
        }
        
       else{
           return vidId[2].trim();
       
       }
    
    
  
    
    }
      return false;
}


