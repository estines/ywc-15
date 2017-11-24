var dataget_content=[], dataget_design=[], dataget_marketing=[], dataget_programming=[];

$(document).ready(function(){

    $.ajax({
            url: "https://ywc15.ywc.in.th/api/interview",
            success: 
                function(dataget){
				    console.log(dataget);
                    
                    for (i in dataget){
                        if (dataget[i]["major"] == "content"){
                            dataget_content.append(dataget[i]);
                        }
                        if (dataget[i]["major"] == "design"){
                            dataget_design.append(dataget[i]);
                        }
                        if (dataget[i]["major"] == "marketing"){
                            dataget_marketing.append(dataget[i]);
                        }
                        if (dataget[i]["major"] == "programming"){
                            dataget_programming.append(dataget[i]);
                        }
                    }
                    
                    console.log(dataget_content[0]);
                    console.log(dataget_design[0]);
                    console.log(dataget_marketing[0]);
                    console.log(dataget_programming[0]);
                }   
        });
});