/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    //--------------------------------------------------//
    // 레프트 메뉴 이벤트
    //--------------------------------------------------//
    $(".left_menu li").bind('click mouseenter', function(){
        var targetId = $(this).attr('id');
        if( targetId == 'left_menu1') {
            $(this).addClass( "menu_active");
            $(".left_menu #left_menu2").removeClass( "menu_active" );
            $("#menu_contents1").show(100);
            $("#menu_contents2").hide();
        }
        if( targetId == 'left_menu2'){
            $(this).addClass( "menu_active" );
            $(".left_menu #left_menu1").removeClass( "menu_active" );
            $("#menu_contents2").show(100);
            $("#menu_contents1").hide();
        }
    });
    //--------------------------------------------------//
    //  하위 레프트메뉴 이벤트
    //--------------------------------------------------//
    $(".left_menu_contents li").mouseenter(function(){
        var style = $(this).attr('name');
        if( style ) $(this).addClass( style );
    });
    $(".left_menu_contents li").mouseleave(function(){
        $(this).removeClass();
    });
});

