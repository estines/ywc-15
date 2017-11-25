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

// --- Create Table ---
function createTable(data){
    /*$("#itv-list").html("");
    $("itv-head).html("<tr><td>ID.</td><td>First Name</td><td>Last Name</td><td>Major</td></tr>");*/
    for (i in data){
        row[i] = "<tr><td>"+data[i]["interviewRef"]+"</td>"+"<td>"+data[i]["firstName"]+"</td>"+"<td>"+data[i]["lastName"]+"</td>"+"</tr>";
    }
}

function searchItem(item){
    var firstname = [], lastname = [], intref = [] ,getitem = [];
    var j=0;
    for (i in datagets){
        firstname[i] = datagets[i]["firstName"];
        lastname[i] = datagets[i]["lastName"];
        intref[i] = datagets[i]["interviewRef"];
    }
    
    for (i in datagets){
        if (item == firstname[i]){
            getitem[j] = datagets[i];
            j++;
        }
        else if (item == lastname[i]){
            getitem[j] = datagets[i];
            j++;
        }
        else if (item == intref[i]){
            getitem[j] = datagets[i];
            j++;
        }
    }
    
    return getitem;
}


// --- Declare array and counting variables ---
var datagets = [] ,dataget_content=[], dataget_design=[], dataget_marketing=[], dataget_programming=[];
var content_count = 0, design_count = 0, marketing_count = 0, programming_count = 0;
var row = [];

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
                    
                    datagets = dataget;
                    
                   // --- Sending dataget to classify major ---
                    ClassifyMajor(dataget);
                    $("#overlay").fadeOut(2000);
                    
                    // --- Send Array to sort major ---
                    SortingRef(dataget_content);
                    SortingRef(dataget_design);
                    SortingRef(dataget_marketing);
                    SortingRef(dataget_programming);

                    // --- Sending JSON to create Table ---
                    $("#ct-ls").click(function(){
                        $("#itv-list").html("");
                        createTable(dataget_content);
                        $("#itv-head").html("<tr><td>ID.</td><td>First Name</td><td>Last Name</td></tr>");
                            for (i in dataget_content){
                                $("#itv-list").append(row[i]);
                            }
                    });
                    
                    $("#ds-ls").click(function(){
                        $("#itv-list").html("");
                        createTable(dataget_design);
                        $("#itv-head").html("<tr><td>ID.</td><td>First Name</td><td>Last Name</td></tr>");
                            for (i in dataget_design){
                                $("#itv-list").append(row[i]);
                            }
                    });
                    
                    $("#mkt-ls").click(function(){
                        $("#itv-list").html("");
                        createTable(dataget_marketing);
                        $("#itv-head").html("<tr><td>ID.</td><td>First Name</td><td>Last Name</td></tr>");
                            for (i in dataget_marketing){
                                $("#itv-list").append(row[i]);
                            }
                    });
                    
                    $("#pg-ls").click(function(){
                        $("#itv-list").html("");
                        createTable(dataget_programming);
                        $("#itv-head").html("<tr><td>ID.</td><td>First Name</td><td>Last Name</td></tr>");
                            for (i in dataget_programming){
                                $("#itv-list").append(row[i]);
                            }
                    });
                    
                    $("#overlay").fadeOut();
                    $(".main-contain").removeClass("main-contain");
                }

        });
    
        $("#searching").on("click",function(){
            var item_found = []
            var key = $("#searchbox").val();
            var filter = key.toUpperCase();
            item_found = searchItem(filter);
            $("#itv-list").html("");
            createTable(item_found);
            if (item_found.length != 0){
                $("#itv-head").html("<tr><td>ID.</td><td>First Name</td><td>Last Name</td></tr>");
                for (i in item_found){
                    $("#itv-list").append(row[i]);
                }
            }
            else {
                $("#itv-list").html("<center><h1>Sorry,Item not found.</h1></center>")
            }
        });
    
});