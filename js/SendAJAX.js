function SearchArticle(e){



    if(e.value.length>2){

        // $( ".tbBrand" ).remove();


        var data={'art':e.value};


        <!--вместо пост запроса -->

        document.getElementById("fastSearch").style.display = "block";



        /* $.ajax({
         url:$('#article_form').attr('action'),
         data:data,
         headers:{
         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
         },
         type:'POST',
         datatype:'JSON',
         success:function(a){

         if(a=='')
         document.getElementById("lol").style.display = "none";
         else
         {
         document.getElementById("lol").style.display = "block";
         $('#lol').append(a);
         }

         },
         error:function(){

         }
         })
         */
    }

}



function searchSimilar(e) {
    document.getElementById("lol").style.display = "none";
    event.preventDefault();

    $( ".td-result" ).remove();


    /*  var data={'id':e.value};
     $.ajax({
     url:$('#article_form').attr('action'),
     data:data,
     headers:{
     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
     },
     type:'POST',
     datatype:'JSON',
     success:function(a){

     if(a!='')


     {

     $('#article_result').append(a);
     }

     },
     error:function(){

     }
     })
     */


    $('#article_result').append(a);



}
