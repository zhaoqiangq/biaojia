$(function(){
    $('.form li').on('touchend',function () {
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).index()===1){
            $('.price span').text('优惠价：￥0');
            $('.price i span').text('￥200');
            $('.serve .font').addClass('active');
            $('.serve .fontqi').hide();
            $('.serve ul').hide();
            $('.flow').hide();
            $('.flow4').hide();
            $('.flow6').hide();
            $('.flow9').hide();
            $('.flow10').hide();
            $('.certificate').hide();
            $('.certificate4').hide();
            $('.serve ul.si').hide();
            $('.serve ul.liu').hide();
        }else if($(this).index()===2) {
            $('.price span').text('优惠价：￥3998');
            $('.price i span').text('￥7000');
            $('.serve .font').removeClass('active');
            $('.serve .fontqi').hide();
            $('.serve ul.er').show();
            $('.flow').show();
            $('.flow6').hide();
            $('.flow9').hide();
            $('.flow10').hide();
            $('.certificate').show();
            $('.serve ul.si').hide();
            $('.serve ul.liu').hide();
        }else if($(this).index()===3) {
            $('.price span').text('优惠价：￥4998');
            $('.price i span').text('￥10000');
            $('.serve .font').removeClass('active');
            $('.serve .fontqi').hide();
            $('.serve ul.er').show();
            $('.flow').show();
            $('.flow6').hide();
            $('.flow9').hide();
            $('.flow10').hide();
            $('.certificate').show();
            $('.serve ul.si').hide();
            $('.serve ul.liu').hide();
        }else if($(this).index()===4) {
            $('.price span').text('优惠价：￥1998');
            $('.price i span').text('￥3000');
            $('.serve .font').removeClass('active');
            $('.serve .fontqi').hide();
            $('.serve ul').show();
            $('.flow').hide();
            $('.certificate').hide();
            $('.flow4').show();
            $('.flow6').hide();
            $('.flow9').hide();
            $('.flow10').hide();
            $('.certificate4').show();
            $('.serve ul.er').hide();
            $('.serve ul.si').show();
            $('.serve ul.liu').hide();
        }else if($(this).index()===5) {
            $('.price span').text('优惠价：￥2998');
            $('.price i span').text('￥4000');
            $('.serve .font').removeClass('active');
            $('.serve .fontqi').hide();
            $('.serve ul').show();
            $('.flow').hide();
            $('.certificate').hide();
            $('.flow4').show();
            $('.flow6').hide();
            $('.flow9').hide();
            $('.flow10').hide();
            $('.certificate4').show();
            $('.serve ul.er').hide();
            $('.serve ul.si').show();
            $('.serve ul.liu').hide();
        }else if($(this).index()===6) {
            $('.price span').text('优惠价：￥598');
            $('.price i span').text('￥1500');
            $('.serve .font').removeClass('active');
            $('.serve .fontqi').hide();
            $('.serve ul').show();
            $('.flow').hide();
            $('.certificate').hide();
            $('.flow4').hide();
            $('.flow6').show();
            $('.flow9').hide();
            $('.flow10').hide();
            $('.certificate4').hide();
            $('.serve ul.er').hide();
            $('.serve ul.si').hide();
            $('.serve ul.liu').show();
        }else if($(this).index()===7) {
            $('.price span').text('优惠价：￥1098');
            $('.price i span').text('￥2000');
            $('.serve .font').removeClass('active');
            $('.serve .fontqi').hide();
            $('.serve ul').show();
            $('.flow').hide();
            $('.certificate').hide();
            $('.flow4').hide();
            $('.flow6').show();
            $('.flow9').hide();
            $('.flow10').hide();
            $('.certificate4').hide();
            $('.serve ul.er').hide();
            $('.serve ul.si').hide();
            $('.serve ul.liu').show();
        }else if($(this).index()===8) {
            $('.price span').text('优惠价：￥598');
            $('.price i span').text('￥ 1000');
            $('.serve .font').removeClass('active');
            $('.serve .fontqi').show();
            $('.serve ul').hide();
            $('.flow').hide();
            $('.flow6').hide();
            $('.flow9').hide();
            $('.flow10').hide();
            $('.certificate').hide();
            $('.serve ul.si').hide();
            $('.serve ul.liu').hide();
        }else if($(this).index()===9) {
            $('.price span').text('优惠价：￥298');
            $('.price i span').text('￥ 500');
            $('.serve .font').removeClass('active');
            $('.serve .fontqi').hide();
            $('.serve ul').hide();
            $('.flow').hide();
            $('.flow6').hide();
            $('.flow9').show();
            $('.flow10').hide();
            $('.certificate').hide();
            $('.serve ul.si').hide();
            $('.serve ul.liu').hide();
        }else if($(this).index()===10) {
            $('.price span').text('优惠价：￥98');
            $('.price i span').text('￥ 200');
            $('.serve .font').removeClass('active');
            $('.serve .fontqi').hide();
            $('.serve ul').hide();
            $('.flow').hide();
            $('.flow6').hide();
            $('.flow9').hide();
            $('.flow10').show();
            $('.certificate').hide();
            $('.serve ul.si').hide();
            $('.serve ul.liu').hide();
        }
    })
})
