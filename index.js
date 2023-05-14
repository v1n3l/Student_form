function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
function getAllRecord(){
        $.ajax({
            url: "http://localhost/students/",
            method: "GET", 
            contentType: "application/json; charset=utf-8",
            success: function(response) {
                txt = "";
                for(var item of response){
                    txt += 
                    `
                    <tr>
                        <td>${response[i].id}</td>
                        <td>${response[i].firstname}</td>
                        <td>${response[i].lastname}</td>
                        <td>${response[i].birthday}</td>
                        <td>${response[i].address}</td>
                        <td>${response[i].course}</td>
                        <td>${response[i].year}</td>
                        <td>${response[i].email}</td>
                        <td>${response[i].phoneno}</td>
                        <td>
                            <a href="student.html?id=${response[i].id}" class="btn btn-outline-dark btn-sm">More Details</a>
                        </td>
                    </tr>
                    
                    `;
                    document.getElementById("api").innerHTML = txt;
                }
            },
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");                    
                alert(err.Message);
            }
        });
}

function addRecord(){
    var data = {
        firstname : document.getElementById("firstname").value,
        lastname : document.getElementById("lastname").value,
        birthday : formatDate(document.getElementById("birthday").value),
        address : document.getElementById("address").value,
        course : document.getElementById("course").value,
        year : document.getElementById("year").value,
        email : document.getElementById("email").value,
        phoneno : document.getElementById("phoneno").value,
    }
    $(document).ready(function() {
        $.ajax({
            url: "http://localhost/students/",
            method: "POST", 
            
            data: JSON.stringify(data),
            success: function(response) {
                getAllRecord()
            },
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");                    
                alert(err.Message);
            }
        })
    });
}
$(document).ready(function() {
    getAllRecord();
});