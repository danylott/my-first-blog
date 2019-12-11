name = document.getElementById("name");
// selecte = document.getElementById("mySelect");
// select = document.getElementById("myStatus");
// is_doc = document.getElementById("doc");
// is_img = document.getElementById("img");
// count = document.getElementById("count");

    search_street();

name.innerHTML = "ddddddddd";
    function search_street() {
      alert('ddddd');
      show_street = new Array();
      $.ajax({
          url:"/ajax",
          type:"POST",
           data: {'name':name.value},
          success:function(msg){
              cnt = 0;
              show_street = msg;
              table = document.getElementById("Streets");
              for(int i = 0; i < street_count; i++) {

              }
           //   count.innerText = "Усього об'єктів\n ППЗШ: "+cnt;
            }
          },
          dataType:"json"
      });
    }

$('#name').keyup(function(){
    search_street();
  });

  // $('#mySelect').change(function(){
  //     search_street();
  //   });
  //
  //   $('#myStatus').change(function(){
  //       search_street();
  //     });

  // $('#doc').change(function(){
  //     search_street();
  //   });
  // $('#img').change(function(){
  //     search_street();
  //   });
