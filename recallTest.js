        
        $(function() {
            $("#pic1").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic1").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic1").css("background-color","orange"); }
                
            });                   
        });
        $(function() {
            $("#pic2").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic2").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic2").css("background-color","orange"); }
            });                   
        });
        $(function() {
            $("#pic3").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic3").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic3").css("background-color","orange"); }
            });                   
        });
        $(function() {
            $("#pic4").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic4").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic4").css("background-color","orange"); } 
            });                   
        });
        $(function() {
            $("#pic5").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic5").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic5").css("background-color","orange"); }
            });                   
        });
        $(function() {
            $("#pic6").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic6").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic6").css("background-color","orange"); }
            });                   
        });
        $(function() {
            $("#pic7").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic7").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic7").css("background-color","orange"); }
            });                   
        });
        $(function() {
            $("#pic8").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic8").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic8").css("background-color","orange"); }
            });                   
        });
        $(function() {
            $("#pic9").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic9").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic9").css("background-color","orange"); }
            });                   
        });
        $(function() {
            $("#pic10").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic10").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic10").css("background-color","orange"); }
            });                   
        });
        $(function() {
            $("#pic11").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic11").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic11").css("background-color","orange"); }
            });                   
        });
        $(function() {
            $("#pic12").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic12").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic12").css("background-color","orange"); }
            });                   
        });
        $(function() {
            $("#pic13").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic13").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic13").css("background-color","orange"); } 
            });                   
        });
        $(function() {
            $("#pic14").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic14").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic14").css("background-color","orange"); } 
            });                   
        });
        $(function() {
            $("#pic15").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic15").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic15").css("background-color","orange"); } 
            });                   
        });
        $(function() {
            $("#pic16").click(function(){
                if( $("#btnNoHint").attr("disabled") == "disabled"){
                    $("#pic16").css("background-color","green"); }
                if( $("#btnHint").attr("disabled") == "disabled"){
                    $("#pic16").css("background-color","orange"); }
            });                   
        });
        $(function() {
            $("#btnHint").click(function(){
                $("#btnNoHint").removeAttr("disabled");
                $("#btnHint").attr("disabled","disabled");
                
                var hint=true; 
            });                   
        });
        $(function() {
            $("#btnNoHint").click(function(){
                $("#btnHint").removeAttr("disabled");
                $("#btnNoHint").attr("disabled","disabled");
                
                var hint=false; 
            });                   
        });