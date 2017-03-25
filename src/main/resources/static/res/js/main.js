require(['jquery', 'metisMenu', 'layer', 'slimScroll', 'pace', 'domReady'], function($, layer, metisMenu, slimScroll, pace, domReady) {

            domReady(function(){
                function NavToggle() {
                    $(".navbar-minimalize").trigger("click")
                }

                function SmoothlyMenu() {
                    $("body").hasClass("mini-navbar") ? $("body").hasClass("fixed-sidebar") ? ($("#side-menu").hide(), setTimeout(function() {
                        $("#side-menu").fadeIn(500)
                    }, 300)) : $("#side-menu").removeAttr("style") : ($("#side-menu").hide(), setTimeout(function() {
                        $("#side-menu").fadeIn(500)
                    }, 100))
                }

                function localStorageSupport() {
                    return "localStorage" in window && null !== window.localStorage
                }
                // layer.config({
                //     extend: ["extend/layer.ext.js", "skin/moon/style.css"],
                //     skin: "layer-ext-moon"
                // })
                $(document).ready(function() {
                    pace.start({
                      document: false
                    });

                    function e() {
                        var e = $("body > #wrapper").height() - 61;
                        $(".sidebard-panel").css("min-height", e + "px")
                    }
                    $("#side-menu").metisMenu(),
                        $(".right-sidebar-toggle").click(function() {
                            $("#right-sidebar").toggleClass("sidebar-open")
                        }), $(".sidebar-container").slimScroll({
                            height: "100%",
                            railOpacity: .4,
                            wheelStep: 10
                        }), $(".open-small-chat").click(function() {
                            $(this).children().toggleClass("fa-comments").toggleClass("fa-remove"), $(".small-chat-box").toggleClass("active")
                        }), $(".small-chat-box .content").slimScroll({
                            height: "234px",
                            railOpacity: .4
                        }), $(".check-link").click(function() {
                            var e = $(this).find("i"),
                                a = $(this).next("span");
                            return e.toggleClass("fa-check-square").toggleClass("fa-square-o"), a.toggleClass("todo-completed"), !1
                        }), $(function() {
                            $(".sidebar-collapse").slimScroll({
                                height: "100%",
                                railOpacity: .9,
                                alwaysVisible: !1
                            })
                        }), $(".navbar-minimalize").click(function() {
                            $("body").toggleClass("mini-navbar"), SmoothlyMenu()
                        }), e(), $(window).bind("load resize click scroll", function() {
                            $("body").hasClass("body-small") || e()
                        }), $(window).scroll(function() {
                            $(window).scrollTop() > 0 && !$("body").hasClass("fixed-nav") ? $("#right-sidebar").addClass("sidebar-top") : $("#right-sidebar").removeClass("sidebar-top")
                        }), $(".full-height-scroll").slimScroll({
                            height: "100%"
                        }), $("#side-menu>li").click(function() {
                            $("body").hasClass("mini-navbar") && NavToggle()
                        }), $("#side-menu>li li a").click(function() {
                            $(window).width() < 769 && NavToggle()
                        }), $(".nav-close").click(NavToggle), /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && $("#content-main").css("overflow-y", "auto")
                }), $(window).bind("load resize", function() {
                    $(this).width() < 769 && ($("body").addClass("mini-navbar"), $(".navbar-static-side").fadeIn())
                }), $(function() {
                    if ($("#fixednavbar").click(function() {
                            $("#fixednavbar").is(":checked") ? ($(".navbar-static-top").removeClass("navbar-static-top").addClass("navbar-fixed-top"), $("body").removeClass("boxed-layout"), $("body").addClass("fixed-nav"), $("#boxedlayout").prop("checked", !1), localStorageSupport && localStorage.setItem("boxedlayout", "off"), localStorageSupport && localStorage.setItem("fixednavbar", "on")) : ($(".navbar-fixed-top").removeClass("navbar-fixed-top").addClass("navbar-static-top"), $("body").removeClass("fixed-nav"), localStorageSupport && localStorage.setItem("fixednavbar", "off"))
                        }), $("#collapsemenu").click(function() {
                            $("#collapsemenu").is(":checked") ? ($("body").addClass("mini-navbar"), SmoothlyMenu(), localStorageSupport && localStorage.setItem("collapse_menu", "on")) : ($("body").removeClass("mini-navbar"), SmoothlyMenu(), localStorageSupport && localStorage.setItem("collapse_menu", "off"))
                        }), $("#boxedlayout").click(function() {
                            $("#boxedlayout").is(":checked") ? ($("body").addClass("boxed-layout"), $("#fixednavbar").prop("checked", !1), $(".navbar-fixed-top").removeClass("navbar-fixed-top").addClass("navbar-static-top"), $("body").removeClass("fixed-nav"), localStorageSupport && localStorage.setItem("fixednavbar", "off"), localStorageSupport && localStorage.setItem("boxedlayout", "on")) : ($("body").removeClass("boxed-layout"), localStorageSupport && localStorage.setItem("boxedlayout", "off"))
                        }), $(".s-skin-0").click(function() {
                            return $("body").removeClass("skin-1"), $("body").removeClass("skin-2"), $("body").removeClass("skin-3"), !1
                        }), $(".s-skin-1").click(function() {
                            return $("body").removeClass("skin-2"), $("body").removeClass("skin-3"), $("body").addClass("skin-1"), !1
                        }), $(".s-skin-3").click(function() {
                            return $("body").removeClass("skin-1"), $("body").removeClass("skin-2"), $("body").addClass("skin-3"), !1
                        }), localStorageSupport) {
                        var e = localStorage.getItem("collapse_menu"),
                            a = localStorage.getItem("fixednavbar"),
                            o = localStorage.getItem("boxedlayout");
                        "on" == e && $("#collapsemenu").prop("checked", "checked"), "on" == a && $("#fixednavbar").prop("checked", "checked"), "on" == o && $("#boxedlayout").prop("checked", "checked")
                    }
                    if (localStorageSupport) {
                        var e = localStorage.getItem("collapse_menu"),
                            a = localStorage.getItem("fixednavbar"),
                            o = localStorage.getItem("boxedlayout"),
                            l = $("body");
                        "on" == e && (l.hasClass("body-small") || l.addClass("mini-navbar")), "on" == a && ($(".navbar-static-top").removeClass("navbar-static-top").addClass("navbar-fixed-top"), l.addClass("fixed-nav")), "on" == o && l.addClass("boxed-layout")
                    }
                });

                // iframe Tab
                $(function() {
                    function f(l) {
                        var k = 0;
                        $(l).each(function() {
                            k += $(this).outerWidth(true)
                        });
                        return k
                    }

                    function g(n) {
                        var o = f($(n).prevAll()),
                            q = f($(n).nextAll());
                        var l = f($(".content-tabs").children().not(".J_menuTabs"));
                        var k = $(".content-tabs").outerWidth(true) - l;
                        var p = 0;
                        if ($(".page-tabs-content").outerWidth() < k) {
                            p = 0
                        } else {
                            if (q <= (k - $(n).outerWidth(true) - $(n).next().outerWidth(true))) {
                                if ((k - $(n).next().outerWidth(true)) > q) {
                                    p = o;
                                    var m = n;
                                    while ((p - $(m).outerWidth()) > ($(".page-tabs-content").outerWidth() - k)) {
                                        p -= $(m).prev().outerWidth();
                                        m = $(m).prev()
                                    }
                                }
                            } else {
                                if (o > (k - $(n).outerWidth(true) - $(n).prev().outerWidth(true))) {
                                    p = o - $(n).prev().outerWidth(true)
                                }
                            }
                        }
                        $(".page-tabs-content").animate({
                            marginLeft: 0 - p + "px"
                        }, "fast")
                    }

                    function a() {
                        var o = Math.abs(parseInt($(".page-tabs-content").css("margin-left")));
                        var l = f($(".content-tabs").children().not(".J_menuTabs"));
                        var k = $(".content-tabs").outerWidth(true) - l;
                        var p = 0;
//                        if ($(".page-tabs-content").width() < k) {
                    	if (o <= 0) {
                            return false
                        } else {
                            var m = $(".J_menuTab:first");
                            var n = 0;
                            while ((n + $(m).outerWidth(true)) <= o) {
                                n += $(m).outerWidth(true);
                                m = $(m).next()
                            }
                            n = 0;
                            if (f($(m).prevAll()) > k) {
                                while ((n + $(m).outerWidth(true)) < (k) && m.length > 0) {
                                    n += $(m).outerWidth(true);
                                    m = $(m).prev()
                                }
                                p = f($(m).prevAll())
                            }
                        }
                        $(".page-tabs-content").animate({
                            marginLeft: 0 - p + "px"
                        }, "fast")
                    }

                    function b() {
                        var o = Math.abs(parseInt($(".page-tabs-content").css("margin-left")));
                        var l = f($(".content-tabs").children().not(".J_menuTabs"));
                        var k = $(".content-tabs").outerWidth(true) - l;
                        var p = 0;
                        if ($(".page-tabs-content").width() < k) {
                            return false
                        } else {
                            var m = $(".J_menuTab:first");
                            var n = 0;
                            while ((n + $(m).outerWidth(true)) <= o) {
                                n += $(m).outerWidth(true);
                                m = $(m).next()
                            }
                            n = 0;
                            while ((n + $(m).outerWidth(true)) < (k) && m.length > 0) {
                                n += $(m).outerWidth(true);
                                m = $(m).next()
                            }
                            p = f($(m).prevAll());
                            if (p > 0) {
                                $(".page-tabs-content").animate({
                                    marginLeft: 0 - p + "px"
                                }, "fast")
                            }
                        }
                    }
                    $(".J_menuItem").each(function(k) {
                        if (!$(this).attr("data-index")) {
                            $(this).attr("data-index", k)
                        }
                    });

                    function c() {
                        var o = $(this).attr("href"),
                            m = $(this).data("index"),
                            l = $.trim($(this).text()),
                            k = true;
                        if (o == undefined || $.trim(o).length == 0) {
                            return false
                        }
                        $(".J_menuTab").each(function() {
                            if ($(this).data("id") == o) {
                                if (!$(this).hasClass("active")) {
                                    $(this).addClass("active").siblings(".J_menuTab").removeClass("active");
                                    g(this);
                                    $(".J_mainContent .J_iframe").each(function() {
                                        if ($(this).data("id") == o) {
                                            $(this).show().siblings(".J_iframe").hide();
                                            return false
                                        }
                                    })
                                }
                                k = false;
                                return false
                            }
                        });
                        if (k) {
                            var p = '<a href="javascript:;" class="active J_menuTab" data-id="' + o + '">' + l + ' <i class="fa fa-times-circle"></i></a>';
                            $(".J_menuTab").removeClass("active");
                            var n = '<iframe class="J_iframe" name="iframe' + m + '" width="100%" height="100%" src="' + o + '" frameborder="0" data-id="' + o + '" seamless></iframe>';
                            $(".J_mainContent").find("iframe.J_iframe").hide().parents(".J_mainContent").append(n);
                            $(".J_menuTabs .page-tabs-content").append(p);
                            g($(".J_menuTab.active"))
                        }
                        return false
                    }
                    $(".J_menuItem").on("click", c);

                    function h() {
                        var m = $(this).parents(".J_menuTab").data("id");
                        var l = $(this).parents(".J_menuTab").width();
                        if ($(this).parents(".J_menuTab").hasClass("active")) {
                            if ($(this).parents(".J_menuTab").next(".J_menuTab").size()) {
                                var k = $(this).parents(".J_menuTab").next(".J_menuTab:eq(0)").data("id");
                                $(this).parents(".J_menuTab").next(".J_menuTab:eq(0)").addClass("active");
                                $(".J_mainContent .J_iframe").each(function() {
                                    if ($(this).data("id") == k) {
                                        $(this).show().siblings(".J_iframe").hide();
                                        return false
                                    }
                                });
//                                var n = parseInt($(".page-tabs-content").css("margin-left"));
//                                if (n < 0) {
//                                    $(".page-tabs-content").animate({
//                                        marginLeft: (n + l) + "px"
//                                    }, "fast")
//                                }
                                $(this).parents(".J_menuTab").remove();
                                $(".J_mainContent .J_iframe").each(function() {
                                    if ($(this).data("id") == m) {
                                        $(this).remove();
                                        return false
                                    }
                                })
                                var n = parseInt($(".page-tabs-content").css("margin-left"));
                                if (n < 0) {
                                    $(".page-tabs-content").animate({
                                        marginLeft: (n + l) + "px"
                                    }, "fast")
                                }
                            }
                            if ($(this).parents(".J_menuTab").prev(".J_menuTab").size()) {
                                var k = $(this).parents(".J_menuTab").prev(".J_menuTab:last").data("id");
                                $(this).parents(".J_menuTab").prev(".J_menuTab:last").addClass("active");
                                $(".J_mainContent .J_iframe").each(function() {
                                    if ($(this).data("id") == k) {
                                        $(this).show().siblings(".J_iframe").hide();
                                        return false
                                    }
                                });
                                $(this).parents(".J_menuTab").remove();
                                $(".J_mainContent .J_iframe").each(function() {
                                    if ($(this).data("id") == m) {
                                        $(this).remove();
                                        return false
                                    }
                                })
                                var n = parseInt($(".page-tabs-content").css("margin-left"));
                                if (n < 0) {
                                    $(".page-tabs-content").animate({
                                        marginLeft: (n + l) + "px"
                                    }, "fast")
                                }
                            }
                        } else {
                            $(this).parents(".J_menuTab").remove();
                            $(".J_mainContent .J_iframe").each(function() {
                                if ($(this).data("id") == m) {
                                    $(this).remove();
                                    return false
                                }
                            });
                            g($(".J_menuTab.active"))
                        }
                        return false
                    }
                    $(".J_menuTabs").on("click", ".J_menuTab i", h);

                    function i() {
                        $(".page-tabs-content").children("[data-id]").not(":first").not(".active").each(function() {
                            $('.J_iframe[data-id="' + $(this).data("id") + '"]').remove();
                            $(this).remove()
                        });
                        $(".page-tabs-content").css("margin-left", "0")
                    }
                    $(".J_tabCloseOther").on("click", i);

                    function j() {
                        g($(".J_menuTab.active"))
                    }
                    $(".J_tabShowActive").on("click", j);

                    function e() {
                        if (!$(this).hasClass("active")) {
                            var k = $(this).data("id");
                            $(".J_mainContent .J_iframe").each(function() {
                                if ($(this).data("id") == k) {
                                    $(this).show().siblings(".J_iframe").hide();
                                    return false
                                }
                            });
                            $(this).addClass("active").siblings(".J_menuTab").removeClass("active");
                            g(this)
                        }
                    }
                    $(".J_menuTabs").on("click", ".J_menuTab", e);

                    function d() {
                        var l = $('.J_iframe[data-id="' + $(this).data("id") + '"]');
                        var k = l.attr("src");
                    }
                    $(".J_menuTabs").on("dblclick", ".J_menuTab", d);
                    $(".J_tabLeft").on("click", a);
                    $(".J_tabRight").on("click", b);
                    $(".J_tabCloseAll").on("click", function() {
                        $(".page-tabs-content").children("[data-id]").not(":first").each(function() {
                            $('.J_iframe[data-id="' + $(this).data("id") + '"]').remove();
                            $(this).remove()
                        });
                        $(".page-tabs-content").children("[data-id]:first").each(function() {
                            $('.J_iframe[data-id="' + $(this).data("id") + '"]').show();
                            $(this).addClass("active")
                        });
                        $(".page-tabs-content").css("margin-left", "0")
                    })
                });

            })

})