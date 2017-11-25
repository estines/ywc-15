// --- Classify Major's interview ---
function ClassifyMajor(data){
    for (i in data){
        if (data[i]["major"] == "content"){
             dataget_content[content_count] = data[i];
            content_count += 1;
         }
          if (data[i]["major"] == "design"){
            dataget_design[design_count] =  data[i];
            design_count += 1;
        }
        if (data[i]["major"] == "marketing"){
            dataget_marketing[marketing_count] = data[i];
            marketing_count += 1;
        }
        if (data[i]["major"] == "programming"){
            dataget_programming[programming_count] = data[i];
            programming_count += 1;
        }
    }
}


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
                   // --- Sending dataget to classify major ---
                    ClassifyMajor(dataget);
                    
                    // --- Send Array to sort major ---
                    SortingRef(dataget_content);
                    SortingRef(dataget_design);
                    SortingRef(dataget_marketing);
                    SortingRef(dataget_programming);
                    
                    console.log(dataget_content);
                }
            //console.log(dataget_content);
        });
    
    setTimeout(function(){},5000);
    
    console.log(dataget_content);
    $("#itv-list").append("<tr><td>test</td><td>hello</td><td>I'm</td><td>Teemo</td></tr>");
});