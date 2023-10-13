$('.format__btns').each(function(){
    var $this=$(this);
    var $tab=$this.find('li.active');
    var $link=$tab.find('a');
    var $panel=$($link.attr('href'));

    $this.on('click','.format__control',function(e){
        e.preventDefault();
        var $link=$(this);
        var id=this.hash;

        if(id && !$link.is('.active')) {
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel=$(id).addClass('active');
            $tab=$link.parent().addClass('active');
        }
    })
})

$(window).resize(function(){
    if(document.documentElement.clientWidth < 613){
       $(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".format__content-mobile").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".format__content-mobile").hide();
            }
        });
    }).change();
}); 
    }
})

$('.questions__theme').each(function(){
    var $this=$(this);
    var $tab=$this.find('li.active');
    var $link=$tab.find('a');
    var $panel=$($link.attr('href'));

    $this.on('click','.question__control',function(e){
        e.preventDefault();
        var $link=$(this);
        var id=this.hash;

        if(id && !$link.is('.active')) {
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel=$(id).addClass('active');
            $tab=$link.parent().addClass('active');
        }
    })
})


$(window).resize(function(){
    if(document.documentElement.clientWidth < 1150){
       $(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".quest__accord-list__mobile").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".quest__accord-list__mobile").hide();
            }
        });
    }).change();
}); 
    }
})


