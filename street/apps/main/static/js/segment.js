

$(document).ready(function () {
  searchDate = document.getElementById("searchDate");
  streetId = document.getElementById("streetId");
  segments = document.getElementById("segments");
  countSegment = document.getElementById("countSegment")
      function search_segment() {
      $.ajax({
            type: 'GET',
            async: true,
            url: "/detail_ajax/",
            data:  {
              'searchDate': searchDate.value,
              'streetId': streetId.value,
            },
            success: function(data) {
              createTable(data);
              countSegments.innerHTML = "Кількість сегментів: " + data.length
            },
            dataType: 'json',
        });
    }
    search_segment();

  $('#searchDate').change(function(){
    search_segment();
  });


  function createTable(data) {
    table = `
    <thead>
     <tr class="w3-black">
       <th>Номер у б/д</th>
       <th>Район</th>
     </tr>
   </thead>
    `

    var i = 0;
    while(i < data.length) {
      table += `
      <tr>
        <td>${data[i][0]}</td>
        <td>${data[i][1]}</td>
      </tr>
      `
      i++;
    }

          segments.innerHTML = table;
  }
    });
