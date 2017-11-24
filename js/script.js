$(document).ready(function(){

    $.ajax({
            url: "https://ywc15.ywc.in.th/api/interview",
            success: function(dataget){
					   console.log(dataget);
                    }
        });
    
});