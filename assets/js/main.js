!(function(e) {
    "use strict";
    if (
        (e(window).on("load", function() {
                e("#preloader").length &&
                    e("#preloader")
                    .delay(100)
                    .fadeOut("slow", function() {
                        e(this).remove();
                    });
            }),
            e(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function(o) {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    o.preventDefault();
                    var n = e(this.hash);
                    if (n.length) {
                        var a = n.offset().top;
                        return (
                            e("#header").length && ((a -= e("#header").outerHeight()), e("#header").hasClass("header-scrolled") || (a += 20)),
                            "#header" == e(this).attr("href") && (a = 0),
                            e("html, body").animate({ scrollTop: a }, 1500, "easeInOutExpo"),
                            e(this).parents(".nav-menu, .mobile-nav").length && (e(".nav-menu .active, .mobile-nav .active").removeClass("active"), e(this).closest("li").addClass("active")),
                            e("body").hasClass("mobile-nav-active") && (e("body").removeClass("mobile-nav-active"), e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"), e(".mobile-nav-overly").fadeOut()),
                            !1
                        );
                    }
                }
            }),
            e(".nav-menu").length)
    ) {
        var o = e(".nav-menu").clone().prop({ class: "mobile-nav d-lg-none" });
        e("body").append(o),
            e("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'),
            e("body").append('<div class="mobile-nav-overly"></div>'),
            e(document).on("click", ".mobile-nav-toggle", function(o) {
                e("body").toggleClass("mobile-nav-active"), e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"), e(".mobile-nav-overly").toggle();
            }),
            e(document).on("click", ".mobile-nav .drop-down > a", function(o) {
                o.preventDefault(), e(this).next().slideToggle(300), e(this).parent().toggleClass("active");
            }),
            e(document).click(function(o) {
                var n = e(".mobile-nav, .mobile-nav-toggle");
                n.is(o.target) ||
                    0 !== n.has(o.target).length ||
                    (e("body").hasClass("mobile-nav-active") && (e("body").removeClass("mobile-nav-active"), e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"), e(".mobile-nav-overly").fadeOut()));
            });
    } else e(".mobile-nav, .mobile-nav-toggle").length && e(".mobile-nav, .mobile-nav-toggle").hide();
    var n = e("section"),
        a = e(".nav-menu, .mobile-nav");
    e(window).on("scroll", function() {
            var o = e(this).scrollTop() + 80;
            n.each(function() {
                var n = e(this).offset().top,
                    t = n + e(this).outerHeight();
                o >= n &&
                    o <= t &&
                    (o <= t && a.find("li").removeClass("active"),
                        a
                        .find('a[href="#' + e(this).attr("id") + '"]')
                        .parent("li")
                        .addClass("active")),
                    o < 300 && e(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass("active");
            });
        }),
        e(window).scroll(function() {
            e(this).scrollTop() > 30 ? e("#header").addClass("header-scrolled") : e("#header").removeClass("header-scrolled");
        }),
        e(window).scrollTop() > 100 && e("#header").addClass("header-scrolled"),
        e(window).scroll(function() {
            e(this).scrollTop() > 100 ? e(".back-to-top").fadeIn("slow") : e(".back-to-top").fadeOut("slow");
        }),
        e(window).on("load", function() {
            e(".venobox").venobox();
        }),
        e(document).ready(function() {
            e(".venobox").venobox();
        }),
        AOS.init({ duration: 1e3, easing: "ease-in-out", once: !0, mirror: !1 });


    var objDetail = {
        "spc4channel": {
            "nama": "SPC 4 Channel",
            "harga": 2999000,
            "list": [{
                "nama": "CCTV Camera Indoor SPC",
                "qty": "3",
                "unit": "pcs"
            }, {
                "nama": "CCTV Camera Outdoor SPC",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "DVR SPC 4 Channel",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "Hard Disk Seagate Skyhawk 500gb",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "Power Supply Single 10A",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "Kabel RG59 + Power SPC",
                "qty": "50",
                "unit": "m"
            }, {
                "nama": "Kabel HDMI",
                "qty": "1",
                "unit": "pcs"
            }]
        },
        "spc8channel": {
            "nama": "SPC 8 Channel",
            "harga": 2999000,
            "list": [{
                "nama": "CCTV Camera Indoor SPC",
                "qty": "6",
                "unit": "pcs"
            }, {
                "nama": "CCTV Camera Outdoor SPC",
                "qty": "2",
                "unit": "pcs"
            }, {
                "nama": "DVR SPC 4 Channel",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "Hard Disk Seagate Skyhawk 500gb",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "Power Supply Single 10A",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "Kabel RG59 + Power SPC",
                "qty": "50",
                "unit": "m"
            }, {
                "nama": "Kabel HDMI",
                "qty": "1",
                "unit": "pcs"
            }]
        },
        "hikvision4channel": {
            "nama": "HIKVISION 4 Channel",
            "harga": 2999000,
            "list": [{
                "nama": "CCTV Camera Indoor HIKVISION",
                "qty": "3",
                "unit": "pcs"
            }, {
                "nama": "CCTV Camera Outdoor HIKVISION",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "DVR HIKVISION 4 Channel",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "Hard Disk Seagate Skyhawk 500gb",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "Power Supply Single 10A",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "Kabel RG59 + Power HIKVISION",
                "qty": "50",
                "unit": "m"
            }, {
                "nama": "Kabel HDMI",
                "qty": "1",
                "unit": "pcs"
            }]
        },
        "hikvision8channel": {
            "nama": "HIKVISION 4 Channel",
            "harga": 2999000,
            "list": [{
                "nama": "Hikvision Camera Indoor SPC",
                "qty": "6",
                "unit": "pcs"
            }, {
                "nama": "CCTV Camera Outdoor Hikvision",
                "qty": "2",
                "unit": "pcs"
            }, {
                "nama": "DVR SPC 8 Channel",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "Hard Disk Seagate Skyhawk 500gb",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "Power Supply Single 20A",
                "qty": "1",
                "unit": "pcs"
            }, {
                "nama": "Kabel RG59 + Power SPC",
                "qty": "50",
                "unit": "m"
            }, {
                "nama": "Kabel HDMI",
                "qty": "1",
                "unit": "pcs"
            }]
        }
    };



    $('#cancel-modal').on('click', function() {
        $('.modal-1').modal('hide');
        $('#beli-modal').removeAttr('produk');
    });
    $('#modal-detail-1').on('click', function() {
        var str = '';
        objDetail.spc4channel.list.forEach(function(obj) {
            str += '<tr><td class="p-1">' + obj.nama + '</td><td class="p-1">' + obj.qty + ' ' + obj.unit + '</td></tr>';
            $('.body-modal-1').empty().html(str);
        });
        $('.modal-1').modal('show');
        $('#beli-modal').attr('produk', objDetail.spc4channel.nama);
        $('#beli-modal').attr('harga', objDetail.spc4channel.harga);
    });
    $('#modal-detail-2').on('click', function() {
        var str = '';
        objDetail.hikvision4channel.list.forEach(function(obj) {
            str += '<tr><td class="p-1">' + obj.nama + '</td><td class="p-1">' + obj.qty + ' ' + obj.unit + '</td></tr>';
            $('.body-modal-1').empty().html(str);
        });
        $('.modal-1').modal('show');
        $('#beli-modal').attr('produk', objDetail.hikvision4channel.nama);
        $('#beli-modal').attr('harga', objDetail.hikvision4channel.harga);
    });

    $('#modal-detail-3').on('click', function() {
        var str = '';
        objDetail.spc8channel.list.forEach(function(obj) {
            str += '<tr><td class="p-1">' + obj.nama + '</td><td class="p-1">' + obj.qty + ' ' + obj.unit + '</td></tr>';
            $('.body-modal-1').empty().html(str);
        });
        $('.modal-1').modal('show');
        $('#beli-modal').attr('produk', objDetail.spc8channel.nama);
        $('#beli-modal').attr('harga', objDetail.spc8channel.harga);
    });

    $('#modal-detail-4').on('click', function() {
        var str = '';
        objDetail.hikvision8channel.list.forEach(function(obj) {
            str += '<tr><td class="p-1">' + obj.nama + '</td><td class="p-1">' + obj.qty + ' ' + obj.unit + '</td></tr>';
            $('.body-modal-1').empty().html(str);
        });
        $('.modal-1').modal('show');
        $('#beli-modal').attr('produk', objDetail.hikvision8channel.nama);
        $('#beli-modal').attr('harga', objDetail.hikvision8channel.harga);
    });

    $('#beli-modal').on('click', function() {
        var namaProduk = $(this).attr('produk');
        var hargaProduk = $(this).attr('harga');
        var dataStorage = sessionStorage.getItem('cart');
        if (!dataStorage) {
            var arr = [];
            arr.push({
                nama: namaProduk,
                harga: hargaProduk,
                id: Date.now()
            });
            sessionStorage.setItem('cart', JSON.stringify(arr));
        } else {
            var arr = JSON.parse(dataStorage);
            arr.push({
                nama: namaProduk,
                harga: hargaProduk,
                id: Date.now()
            });
            sessionStorage.setItem('cart', JSON.stringify(arr));
        }
        alert('Produk sudah ditambahkan pada keranjang');
        funUpdateCart();
        $('.modal-1').modal('hide');
        $('#beli-modal').removeAttr('produk');
    });

    var funUpdateCart = function() {
        var dataCart = sessionStorage.getItem('cart');
        if (dataCart) {
            var len = JSON.parse(dataCart).length;
            $('#badge-cart').text(len);
        }
    }

    funUpdateCart();

})(jQuery);