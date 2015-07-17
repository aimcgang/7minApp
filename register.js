
     $(function(){
         //var numbers = /^[0-9]+$/;
         var vlfHN = /^\d{7}$/;
         var obj_check=$(".css-require");
         $("#myform1").on("submit",function(){
             obj_check.each(function(i,k){
                 var status_check=0;
                 status_check=($.trim(obj_check.eq(i).val())=="")?0:1;
                 if(i==1 || i==4 || i==5 || i==6){
                     status_check=($.trim(obj_check.eq(i).val())==0)?0:1;
                 }
                if(i==0){
                     status_check=(!vlfHN.test($.trim(obj_check.eq(i).val())))?0:1;
                }
                 formCheckStatus($(this),status_check);
             });



             if($(this).find(".has-error").length>0){
                  return false;
             }
         });

         obj_check.on("change",function(){
             var status_check=0;
             status_check=($.trim($(this).val())=="")?0:1;
             //if($(this).attr('id') == 'InputHN')){
                  //status_check=(!vlfHN.test($.trim(obj_check.eq(i).val())))?0:1;
             //}
             formCheckStatus($(this),status_check);
             //$("#s1").text(this.id);
         });



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
