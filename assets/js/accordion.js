$('.programm__accord-list').on('click','.accord-link',function(e){
    e.preventDefault();
    $(this)
    .next('.accord-body')
    .not(':animated')
    .slideToggle();
});




