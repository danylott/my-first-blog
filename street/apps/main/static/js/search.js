$(document).ready(function () {
  searchName = document.getElementById("searchName");
  searchDate = document.getElementById("searchDate");
  streets = document.getElementById("streets");
  countStreets = document.getElementById("countStreets")
      function search_street() {
      $.ajax({
            type: 'GET',
            async: true,
            url: "search_ajax/",
            data:  {
              'searchDate': searchDate.value,
              'searchName': searchName.value,
            },
            success: function(data) {
              createTable(data);
              countStreets.innerHTML = "Кількість вулиць: " + data.street_list.length
            },
            dataType: 'json',
        });
    }
    search_street();

  $('#searchName').keyup(function(){
    search_street();
  });

  $('#searchDate').change(function(){
    search_street();
  });


  function createTable(data) {
    table = `
    <thead>
     <tr class="w3-black">
       <th>Номер у б/д</th>
       <th>Назва вулиці</th>
       <th>Тип вулиці</th>
       <th>Кількість сегментів</th>
     </tr>
   </thead>
    `
    var i = 0;
    while(i < data.street_list.length && i < 100) {
      table += `
      <tr>
        <td>${data.street_list[i][0]}</td>
        <td><a href="/${data.street_list[i][0]}/">${data.street_list[i][1]}</a></td>
        <td>${data.street_list[i][2]}</td>
        <td>${data.count_of_segments[i]}</td>
      </tr>
      `
      i++;
    }

          streets.innerHTML = table;
  }
    });
