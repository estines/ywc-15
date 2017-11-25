// --- Sorting interviewRef ---
function SortingRef(data){
    var swap;
    var j=0;
    while(j < data.length){
        for (i in data){
            if (data[j]["interviewRef"].toUpperCase() < data[i]["interviewRef"].toUpperCase()){
                swap = data[j];
                data[j] = data[i];
                data[i] = swap;                
            }
        }
        j++;
    }
}


// --- Declare array and counting variables ---
var dataget_content=[], dataget_design=[], dataget_marketing=[], dataget_programming=[];
var content_count = 0, design_count = 0, marketing_count = 0, programming_count = 0;

$(document).ready(function(){
    // --- Get data from json api ---
    $.ajax({
            url: "https://ywc15.ywc.in.th/api/interview",
            error: 
                function(){
                    alert("Not found this page.");
                },
            success: 
                function(dataget){
                    // classify interview major
                    for (i in dataget){
                        if (dataget[i]["major"] == "content"){
                            dataget_content[content_count] = dataget[i];
                            content_count += 1;
                        }
                        if (dataget[i]["major"] == "design"){
                            dataget_design[design_count] = dataget[i];
                            design_count += 1;
                        }
                        if (dataget[i]["major"] == "marketing"){
                            dataget_marketing[marketing_count] = dataget[i];
                            marketing_count += 1;
                        }
                        if (dataget[i]["major"] == "programming"){
                            dataget_programming[programming_count] = dataget[i];
                            programming_count += 1;
                        }
                    }
                    // --- Send Array to sort major ---
                    SortingRef(dataget_content);
                    SortingRef(dataget_design);
                    SortingRef(dataget_marketing);
                    SortingRef(dataget_programming);
                    
                    for (i in dataget_content){
                        
                    }
                }   
        });
    
});