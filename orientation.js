    $(function(){
          var vlfDate = /^(0?[1-9]|[12][0-9]|3[01])$/;
          var vlfYear = /^\d{4}$/;
          var vlfTime = /^((0?[1-9]|[1][0-9]|[2][0-4]):(0?[1-9]|[1-5][0-9]))$/;
          //var vlfTime = /^(0?[1-9]|1[0-9]|2[0-4])-(0?[1-9]|[1-5][0-9])$/;
         $("#myform2").on("submit",function(){
             var status_check=0;
             if(($("#check1").is(':checked')) || ($("#InputOQ1").val() != 0)){
                 if(($("#check1").is(':checked')) && ($("#InputOQ1").val() != 0)){
                    status_check=0;
                 }else{
                    status_check=1;
                 }
             }else {    status_check=0;}
             formCheckStatus($("#InputOQ1"),status_check);


             var status_check=0;
             if(($("#check2").is(':checked')) || ($("#InputOQ2").val() != "")){
                 if(($("#check2").is(':checked')) && ($("#InputOQ2").val() != "")){
                    status_check=0;
                 }else{
                    status_check=1;
                    if ($("#InputOQ2").val() != "") {
                      status_check=(!vlfDate.test($.trim($("#InputOQ2").val()) ))?0:1;
                    }
                 }
             }else {    status_check=0;}
             formCheckStatus($("#InputOQ2"),status_check);


             var status_check=0;
             if(($("#check3").is(':checked')) || ($("#InputOQ3").val() != "")){
                 if(($("#check3").is(':checked')) && ($("#InputOQ3").val() != "")){
                    status_check=0;
                 }else{
                    status_check=1;
                    if ($("#InputOQ3").val() != "") {
                      status_check=(!vlfYear.test($.trim($("#InputOQ3").val()) ))?0:1;
                    }
                 }
             }else {    status_check=0;}
             formCheckStatus($("#InputOQ3"),status_check);


             var status_check=0;
             if(($("#check4").is(':checked')) || ($("#InputOQ4").val() != 0)){
                 if(($("#check4").is(':checked')) && ($("#InputOQ4").val() != 0)){
                    status_check=0;
                 }else{
                    status_check=1;
                 }
             }else {    status_check=0;}
             formCheckStatus($("#InputOQ4"),status_check);


             var status_check=0;
             if(($("#check5").is(':checked')) || ($("#InputOQ5").val() != "")){
                 if(($("#check5").is(':checked')) && ($("#InputOQ5").val() != "")){
                    status_check=0;
                 }else{
                    status_check=1;
                    if ($("#InputOQ5").val() != "") {
                      status_check=(!vlfTime.test($.trim($("#InputOQ5").val()) ))?0:1;
                    }
                 }
             }else {    status_check=0;}
             formCheckStatus($("#InputOQ5"),status_check);


             if($(this).find(".has-error").length>0){
                  return false;
             }

         })

         $("#myform2").on("change",function(){
             var status_check=0;
             if(($("#check1").is(':checked')) || ($("#InputOQ1").val() != 0)){
                 if(($("#check1").is(':checked')) && ($("#InputOQ1").val() != 0)){
                    status_check=0;
                 }else{
                    status_check=1;
                 }
             }else {    status_check=0;}
             formCheckStatus($("#InputOQ1"),status_check);


             var status_check=0;
             if(($("#check2").is(':checked')) || ($("#InputOQ2").val() != "")){
                 if(($("#check2").is(':checked')) && ($("#InputOQ2").val() != "")){
                    status_check=0;
                 }else{
                    status_check=1;
                    if ($("#InputOQ2").val() != "") {
                      status_check=(!vlfDate.test($.trim($("#InputOQ2").val()) ))?0:1;
                    }
                 }
             }else {    status_check=0;}
             formCheckStatus($("#InputOQ2"),status_check);


             var status_check=0;
             if(($("#check3").is(':checked')) || ($("#InputOQ3").val() != "")){
                 if(($("#check3").is(':checked')) && ($("#InputOQ3").val() != "")){
                    status_check=0;
                 }else{
                    status_check=1;
                    if ($("#InputOQ3").val() != "") {
                      status_check=(!vlfYear.test($.trim($("#InputOQ3").val()) ))?0:1;
                    }
                 }
             }else {    status_check=0;}
             formCheckStatus($("#InputOQ3"),status_check);


             var status_check=0;
             if(($("#check4").is(':checked')) || ($("#InputOQ4").val() != 0)){
                 if(($("#check4").is(':checked')) && ($("#InputOQ4").val() != 0)){
                    status_check=0;
                 }else{
                    status_check=1;
                 }
             }else {    status_check=0;}
             formCheckStatus($("#InputOQ4"),status_check);


             var status_check=0;
             if(($("#check5").is(':checked')) || ($("#InputOQ5").val() != "")){
                 if(($("#check5").is(':checked')) && ($("#InputOQ5").val() != "")){
                    status_check=0;
                 }else{
                    status_check=1;
                    if ($("#InputOQ5").val() != "") {
                      status_check=(!vlfTime.test($.trim($("#InputOQ5").val()) ))?0:1;
                    }
                 }
             }else {    status_check=0;}
             formCheckStatus($("#InputOQ5"),status_check);

         })


         var formCheckStatus = function(obj,status){
             if(status==1){
                 obj.parent(".form-group").removeClass("has-error").addClass("has-success");
                 obj.next(".glyphicon").removeClass("glyphicon-warning-sign").addClass("glyphicon-ok");
             }else{
                 obj.parent(".form-group").removeClass("has-success").addClass("has-error");
                 obj.next(".glyphicon").removeClass("glyphicon-ok").addClass("glyphicon-warning-sign");
             }
         }

     });
