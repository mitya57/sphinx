TurkishStemmer=function(){function a(){var a=O.limit-O.cursor;a:for(;;){var b=O.limit-O.cursor;if(O.in_grouping_b(la,97,305)){O.cursor=O.limit-b;break a}if(O.cursor=O.limit-b,O.cursor<=O.limit_backward)return!1;O.cursor--}a:{var c=O.limit-O.cursor;b:if(O.eq_s_b("a")){c:for(;;){var d=O.limit-O.cursor;if(O.in_grouping_b(na,97,305)){O.cursor=O.limit-d;break c}if(O.cursor=O.limit-d,O.cursor<=O.limit_backward)break b;O.cursor--}break a}O.cursor=O.limit-c;b:if(O.eq_s_b("e")){c:for(;;){var e=O.limit-O.cursor;if(O.in_grouping_b(oa,101,252)){O.cursor=O.limit-e;break c}if(O.cursor=O.limit-e,O.cursor<=O.limit_backward)break b;O.cursor--}break a}O.cursor=O.limit-c;b:if(O.eq_s_b("ı")){c:for(;;){var f=O.limit-O.cursor;if(O.in_grouping_b(pa,97,305)){O.cursor=O.limit-f;break c}if(O.cursor=O.limit-f,O.cursor<=O.limit_backward)break b;O.cursor--}break a}O.cursor=O.limit-c;b:if(O.eq_s_b("i")){c:for(;;){var g=O.limit-O.cursor;if(O.in_grouping_b(qa,101,105)){O.cursor=O.limit-g;break c}if(O.cursor=O.limit-g,O.cursor<=O.limit_backward)break b;O.cursor--}break a}O.cursor=O.limit-c;b:if(O.eq_s_b("o")){c:for(;;){var h=O.limit-O.cursor;if(O.in_grouping_b(ra,111,117)){O.cursor=O.limit-h;break c}if(O.cursor=O.limit-h,O.cursor<=O.limit_backward)break b;O.cursor--}break a}O.cursor=O.limit-c;b:if(O.eq_s_b("ö")){c:for(;;){var i=O.limit-O.cursor;if(O.in_grouping_b(sa,246,252)){O.cursor=O.limit-i;break c}if(O.cursor=O.limit-i,O.cursor<=O.limit_backward)break b;O.cursor--}break a}O.cursor=O.limit-c;b:if(O.eq_s_b("u")){c:for(;;){var j=O.limit-O.cursor;if(O.in_grouping_b(ra,111,117)){O.cursor=O.limit-j;break c}if(O.cursor=O.limit-j,O.cursor<=O.limit_backward)break b;O.cursor--}break a}if(O.cursor=O.limit-c,!O.eq_s_b("ü"))return!1;b:for(;;){var k=O.limit-O.cursor;if(O.in_grouping_b(sa,246,252)){O.cursor=O.limit-k;break b}if(O.cursor=O.limit-k,O.cursor<=O.limit_backward)return!1;O.cursor--}}return O.cursor=O.limit-a,!0}function b(){a:{var a=O.limit-O.cursor;if(O.eq_s_b("n")){var b=O.limit-O.cursor;if(O.in_grouping_b(la,97,305)){O.cursor=O.limit-b;break a}}O.cursor=O.limit-a;var c=O.limit-O.cursor,d=O.limit-O.cursor;if(O.eq_s_b("n"))return O.cursor=O.limit-d,!1;O.cursor=O.limit-c;var e=O.limit-O.cursor;if(O.cursor<=O.limit_backward)return!1;if(O.cursor--,!O.in_grouping_b(la,97,305))return!1;O.cursor=O.limit-e}return!0}function c(){a:{var a=O.limit-O.cursor;if(O.eq_s_b("s")){var b=O.limit-O.cursor;if(O.in_grouping_b(la,97,305)){O.cursor=O.limit-b;break a}}O.cursor=O.limit-a;var c=O.limit-O.cursor,d=O.limit-O.cursor;if(O.eq_s_b("s"))return O.cursor=O.limit-d,!1;O.cursor=O.limit-c;var e=O.limit-O.cursor;if(O.cursor<=O.limit_backward)return!1;if(O.cursor--,!O.in_grouping_b(la,97,305))return!1;O.cursor=O.limit-e}return!0}function d(){a:{var a=O.limit-O.cursor;if(O.eq_s_b("y")){var b=O.limit-O.cursor;if(O.in_grouping_b(la,97,305)){O.cursor=O.limit-b;break a}}O.cursor=O.limit-a;var c=O.limit-O.cursor,d=O.limit-O.cursor;if(O.eq_s_b("y"))return O.cursor=O.limit-d,!1;O.cursor=O.limit-c;var e=O.limit-O.cursor;if(O.cursor<=O.limit_backward)return!1;if(O.cursor--,!O.in_grouping_b(la,97,305))return!1;O.cursor=O.limit-e}return!0}function e(){a:{var a=O.limit-O.cursor;if(O.in_grouping_b(ma,105,305)){var b=O.limit-O.cursor;if(O.out_grouping_b(la,97,305)){O.cursor=O.limit-b;break a}}O.cursor=O.limit-a;var c=O.limit-O.cursor,d=O.limit-O.cursor;if(O.in_grouping_b(ma,105,305))return O.cursor=O.limit-d,!1;O.cursor=O.limit-c;var e=O.limit-O.cursor;if(O.cursor<=O.limit_backward)return!1;if(O.cursor--,!O.out_grouping_b(la,97,305))return!1;O.cursor=O.limit-e}return!0}function f(){return 0==O.find_among_b(P)?!1:e()?!0:!1}function g(){return a()&&O.in_grouping_b(ma,105,305)&&c()?!0:!1}function h(){return 0==O.find_among_b(Q)?!1:!0}function i(){return a()&&O.in_grouping_b(ma,105,305)&&d()?!0:!1}function j(){return a()?0==O.find_among_b(R)?!1:!0:!1}function k(){return a()?0==O.find_among_b(S)?!1:b()?!0:!1:!1}function l(){return a()?0==O.find_among_b(T)?!1:d()?!0:!1:!1}function m(){return a()?0==O.find_among_b(U)?!1:!0:!1}function n(){return a()?0==O.find_among_b(V)?!1:!0:!1}function o(){return a()?0==O.find_among_b(W)?!1:!0:!1}function p(){return a()?0==O.find_among_b(X)?!1:!0:!1}function q(){return a()?0==O.find_among_b(Y)?!1:!0:!1}function r(){return a()?0==O.find_among_b(Z)?!1:d()?!0:!1:!1}function s(){return O.eq_s_b("ki")?!0:!1}function t(){return a()?0==O.find_among_b($)?!1:b()?!0:!1:!1}function u(){return a()?0==O.find_among_b(_)?!1:d()?!0:!1:!1}function v(){return a()?0==O.find_among_b(aa)?!1:!0:!1}function w(){return a()?0==O.find_among_b(ba)?!1:d()?!0:!1:!1}function x(){return 0==O.find_among_b(ca)?!1:!0}function y(){return a()?0==O.find_among_b(da)?!1:!0:!1}function z(){return a()?0==O.find_among_b(ea)?!1:!0:!1}function A(){return a()?0==O.find_among_b(fa)?!1:!0:!1}function B(){return 0==O.find_among_b(ga)?!1:!0}function C(){return a()?0==O.find_among_b(ha)?!1:d()?!0:!1:!1}function D(){return 0==O.find_among_b(ia)?!1:d()?!0:!1}function E(){return a()?0==O.find_among_b(ja)?!1:d()?!0:!1:!1}function F(){return O.eq_s_b("ken")&&d()?!0:!1}function G(){O.ket=O.cursor,ta=!0;a:{var a=O.limit-O.cursor,b=O.limit-O.cursor;if(!(E()||(O.cursor=O.limit-b,C()||(O.cursor=O.limit-b,D()||(O.cursor=O.limit-b,F()))))){if(O.cursor=O.limit-a,B()){var c=O.limit-O.cursor;if(x()||(O.cursor=O.limit-c,y()||(O.cursor=O.limit-c,u()||(O.cursor=O.limit-c,v()||(O.cursor=O.limit-c,w()||(O.cursor=O.limit-c))))),E())break a}if(O.cursor=O.limit-a,y()){if(O.bra=O.cursor,!O.slice_del())return!1;var d=O.limit-O.cursor;O.ket=O.cursor;var e=O.limit-O.cursor;A()||(O.cursor=O.limit-e,C()||(O.cursor=O.limit-e,D()||(O.cursor=O.limit-e,E())))||(O.cursor=O.limit-d),ta=!1}else{if(O.cursor=O.limit-a,z()){var f=O.limit-O.cursor;if(C()||(O.cursor=O.limit-f,D()))break a}O.cursor=O.limit-a;var g=O.limit-O.cursor;if(x()||(O.cursor=O.limit-g,w()||(O.cursor=O.limit-g,v()||(O.cursor=O.limit-g,u())))){if(O.bra=O.cursor,!O.slice_del())return!1;var h=O.limit-O.cursor;O.ket=O.cursor,E()||(O.cursor=O.limit-h)}else{if(O.cursor=O.limit-a,!A())return!1;if(O.bra=O.cursor,!O.slice_del())return!1;var i=O.limit-O.cursor;O.ket=O.cursor;var j=O.limit-O.cursor;x()||(O.cursor=O.limit-j,y()||(O.cursor=O.limit-j,u()||(O.cursor=O.limit-j,v()||(O.cursor=O.limit-j,w()||(O.cursor=O.limit-j))))),E()||(O.cursor=O.limit-i)}}}}return O.bra=O.cursor,O.slice_del()?!0:!1}function H(){if(O.ket=O.cursor,!s())return!1;var a=O.limit-O.cursor;if(n()){if(O.bra=O.cursor,!O.slice_del())return!1;var b=O.limit-O.cursor;a:{O.ket=O.cursor;var c=O.limit-O.cursor;if(y()){if(O.bra=O.cursor,!O.slice_del())return!1;var d=O.limit-O.cursor;H()||(O.cursor=O.limit-d)}else{if(O.cursor=O.limit-c,!f()){O.cursor=O.limit-b;break a}if(O.bra=O.cursor,!O.slice_del())return!1;var e=O.limit-O.cursor;if(O.ket=O.cursor,y()){if(O.bra=O.cursor,!O.slice_del())return!1;H()||(O.cursor=O.limit-e)}else O.cursor=O.limit-e}}}else if(O.cursor=O.limit-a,k()){if(O.bra=O.cursor,!O.slice_del())return!1;var i=O.limit-O.cursor;a:{O.ket=O.cursor;var j=O.limit-O.cursor;if(h()){if(O.bra=O.cursor,!O.slice_del())return!1}else{O.cursor=O.limit-j,O.ket=O.cursor;var l=O.limit-O.cursor;if(f()||(O.cursor=O.limit-l,g())){if(O.bra=O.cursor,!O.slice_del())return!1;var m=O.limit-O.cursor;if(O.ket=O.cursor,y()){if(O.bra=O.cursor,!O.slice_del())return!1;H()||(O.cursor=O.limit-m)}else O.cursor=O.limit-m}else if(O.cursor=O.limit-j,!H()){O.cursor=O.limit-i;break a}}}}else{if(O.cursor=O.limit-a,!o())return!1;var p=O.limit-O.cursor;if(h()){if(O.bra=O.cursor,!O.slice_del())return!1}else if(O.cursor=O.limit-p,g()){if(O.bra=O.cursor,!O.slice_del())return!1;var q=O.limit-O.cursor;if(O.ket=O.cursor,y()){if(O.bra=O.cursor,!O.slice_del())return!1;H()||(O.cursor=O.limit-q)}else O.cursor=O.limit-q}else if(O.cursor=O.limit-p,!H())return!1}return!0}function I(){a:{var a=O.limit-O.cursor;if(O.ket=O.cursor,y()){if(O.bra=O.cursor,!O.slice_del())return!1;var b=O.limit-O.cursor;H()||(O.cursor=O.limit-b)}else if(O.cursor=O.limit-a,O.ket=O.cursor,t()){if(O.bra=O.cursor,!O.slice_del())return!1;var c=O.limit-O.cursor;b:{var d=O.limit-O.cursor;if(O.ket=O.cursor,h()){if(O.bra=O.cursor,!O.slice_del())return!1}else{O.cursor=O.limit-d,O.ket=O.cursor;var e=O.limit-O.cursor;if(f()||(O.cursor=O.limit-e,g())){if(O.bra=O.cursor,!O.slice_del())return!1;var s=O.limit-O.cursor;if(O.ket=O.cursor,y()){if(O.bra=O.cursor,!O.slice_del())return!1;H()||(O.cursor=O.limit-s)}else O.cursor=O.limit-s}else{if(O.cursor=O.limit-d,O.ket=O.cursor,!y()){O.cursor=O.limit-c;break b}if(O.bra=O.cursor,!O.slice_del())return!1;if(!H()){O.cursor=O.limit-c;break b}}}}}else{O.cursor=O.limit-a;b:{O.ket=O.cursor;var u=O.limit-O.cursor;if(o()||(O.cursor=O.limit-u,m())){var v=O.limit-O.cursor;if(h()){if(O.bra=O.cursor,!O.slice_del())return!1}else if(O.cursor=O.limit-v,g()){if(O.bra=O.cursor,!O.slice_del())return!1;var w=O.limit-O.cursor;if(O.ket=O.cursor,y()){if(O.bra=O.cursor,!O.slice_del())return!1;H()||(O.cursor=O.limit-w)}else O.cursor=O.limit-w}else if(O.cursor=O.limit-v,!H())break b;break a}}O.cursor=O.limit-a;b:{O.ket=O.cursor;var x=O.limit-O.cursor;if(q()||(O.cursor=O.limit-x,j())){var z=O.limit-O.cursor;if(g()){if(O.bra=O.cursor,!O.slice_del())return!1;var A=O.limit-O.cursor;if(O.ket=O.cursor,y()){if(O.bra=O.cursor,!O.slice_del())return!1;H()||(O.cursor=O.limit-A)}else O.cursor=O.limit-A}else if(O.cursor=O.limit-z,!h())break b;break a}}if(O.cursor=O.limit-a,O.ket=O.cursor,p()){if(O.bra=O.cursor,!O.slice_del())return!1;var B=O.limit-O.cursor;b:{O.ket=O.cursor;var C=O.limit-O.cursor;if(f()){if(O.bra=O.cursor,!O.slice_del())return!1;var D=O.limit-O.cursor;if(O.ket=O.cursor,y()){if(O.bra=O.cursor,!O.slice_del())return!1;H()||(O.cursor=O.limit-D)}else O.cursor=O.limit-D}else if(O.cursor=O.limit-C,y()){if(O.bra=O.cursor,!O.slice_del())return!1;var E=O.limit-O.cursor;H()||(O.cursor=O.limit-E)}else if(O.cursor=O.limit-C,!H()){O.cursor=O.limit-B;break b}}}else{O.cursor=O.limit-a,O.ket=O.cursor;var F=O.limit-O.cursor;if(k()||(O.cursor=O.limit-F,r())){if(O.bra=O.cursor,!O.slice_del())return!1;var G=O.limit-O.cursor;b:c:{var I=O.limit-O.cursor;if(O.ket=O.cursor,y()){if(O.bra=O.cursor,!O.slice_del())return!1;if(H())break c}O.cursor=O.limit-I,O.ket=O.cursor;var J=O.limit-O.cursor;if(f()||(O.cursor=O.limit-J,g())){if(O.bra=O.cursor,!O.slice_del())return!1;var K=O.limit-O.cursor;if(O.ket=O.cursor,y()){if(O.bra=O.cursor,!O.slice_del())return!1;H()||(O.cursor=O.limit-K)}else O.cursor=O.limit-K}else if(O.cursor=O.limit-I,!H()){O.cursor=O.limit-G;break b}}}else if(O.cursor=O.limit-a,O.ket=O.cursor,h()){if(O.bra=O.cursor,!O.slice_del())return!1}else if(O.cursor=O.limit-a,!H()){O.cursor=O.limit-a,O.ket=O.cursor;var L=O.limit-O.cursor;if(n()||(O.cursor=O.limit-L,i()||(O.cursor=O.limit-L,l()))){if(O.bra=O.cursor,!O.slice_del())return!1;var M=O.limit-O.cursor;b:{O.ket=O.cursor;var N=O.limit-O.cursor;if(f()){if(O.bra=O.cursor,!O.slice_del())return!1;var P=O.limit-O.cursor;O.ket=O.cursor,y()||(O.cursor=O.limit-P)}else if(O.cursor=O.limit-N,!y()){O.cursor=O.limit-M;break b}if(O.bra=O.cursor,!O.slice_del())return!1;O.ket=O.cursor,H()||(O.cursor=O.limit-M)}}else{O.cursor=O.limit-a,O.ket=O.cursor;var Q=O.limit-O.cursor;if(!f()&&(O.cursor=O.limit-Q,!g()))return!1;if(O.bra=O.cursor,!O.slice_del())return!1;var R=O.limit-O.cursor;if(O.ket=O.cursor,y()){if(O.bra=O.cursor,!O.slice_del())return!1;H()||(O.cursor=O.limit-R)}else O.cursor=O.limit-R}}}}}return!0}function J(){var a;if(O.ket=O.cursor,a=O.find_among_b(ka),0==a)return!1;switch(O.bra=O.cursor,a){case 1:if(!O.slice_from("p"))return!1;break;case 2:if(!O.slice_from("ç"))return!1;break;case 3:if(!O.slice_from("t"))return!1;break;case 4:if(!O.slice_from("k"))return!1}return!0}function K(){var a=O.limit-O.cursor,b=O.limit-O.cursor;if(!O.eq_s_b("d")&&(O.cursor=O.limit-b,!O.eq_s_b("g")))return!1;O.cursor=O.limit-a;a:{var c=O.limit-O.cursor;b:{var d=O.limit-O.cursor;c:for(;;){var e=O.limit-O.cursor;if(O.in_grouping_b(la,97,305)){O.cursor=O.limit-e;break c}if(O.cursor=O.limit-e,O.cursor<=O.limit_backward)break b;O.cursor--}var f=O.limit-O.cursor;if(O.eq_s_b("a")||(O.cursor=O.limit-f,O.eq_s_b("ı"))){O.cursor=O.limit-d;var g=O.cursor;O.insert(O.cursor,O.cursor,"ı"),O.cursor=g;break a}}O.cursor=O.limit-c;b:{var h=O.limit-O.cursor;c:for(;;){var i=O.limit-O.cursor;if(O.in_grouping_b(la,97,305)){O.cursor=O.limit-i;break c}if(O.cursor=O.limit-i,O.cursor<=O.limit_backward)break b;O.cursor--}var j=O.limit-O.cursor;if(O.eq_s_b("e")||(O.cursor=O.limit-j,O.eq_s_b("i"))){O.cursor=O.limit-h;var k=O.cursor;O.insert(O.cursor,O.cursor,"i"),O.cursor=k;break a}}O.cursor=O.limit-c;b:{var l=O.limit-O.cursor;c:for(;;){var m=O.limit-O.cursor;if(O.in_grouping_b(la,97,305)){O.cursor=O.limit-m;break c}if(O.cursor=O.limit-m,O.cursor<=O.limit_backward)break b;O.cursor--}var n=O.limit-O.cursor;if(O.eq_s_b("o")||(O.cursor=O.limit-n,O.eq_s_b("u"))){O.cursor=O.limit-l;var o=O.cursor;O.insert(O.cursor,O.cursor,"u"),O.cursor=o;break a}}O.cursor=O.limit-c;var p=O.limit-O.cursor;b:for(;;){var q=O.limit-O.cursor;if(O.in_grouping_b(la,97,305)){O.cursor=O.limit-q;break b}if(O.cursor=O.limit-q,O.cursor<=O.limit_backward)return!1;O.cursor--}var r=O.limit-O.cursor;if(!O.eq_s_b("ö")&&(O.cursor=O.limit-r,!O.eq_s_b("ü")))return!1;O.cursor=O.limit-p;var s=O.cursor;O.insert(O.cursor,O.cursor,"ü"),O.cursor=s}return!0}function L(){if(!O.eq_s_b("ad"))return!1;var a=O.limit-O.cursor;return O.eq_s_b("soy")||(O.cursor=O.limit-a),O.cursor>O.limit_backward?!1:!0}function M(){var a=O.cursor,b=2;a:for(;;){var c=O.cursor;b:{c:for(;;){if(O.in_grouping(la,97,305))break c;if(O.cursor>=O.limit)break b;O.cursor++}b--;continue a}O.cursor=c;break a}return b>0?!1:(O.cursor=a,!0)}function N(){O.limit_backward=O.cursor,O.cursor=O.limit;var a=O.limit-O.cursor;if(L())return!1;O.cursor=O.limit-a;var b=O.limit-O.cursor;K(),O.cursor=O.limit-b;var c=O.limit-O.cursor;return J(),O.cursor=O.limit-c,O.cursor=O.limit_backward,!0}var O=new BaseStemmer,P=[["m",-1,-1],["n",-1,-1],["miz",-1,-1],["niz",-1,-1],["muz",-1,-1],["nuz",-1,-1],["müz",-1,-1],["nüz",-1,-1],["mız",-1,-1],["nız",-1,-1]],Q=[["leri",-1,-1],["ları",-1,-1]],R=[["ni",-1,-1],["nu",-1,-1],["nü",-1,-1],["nı",-1,-1]],S=[["in",-1,-1],["un",-1,-1],["ün",-1,-1],["ın",-1,-1]],T=[["a",-1,-1],["e",-1,-1]],U=[["na",-1,-1],["ne",-1,-1]],V=[["da",-1,-1],["ta",-1,-1],["de",-1,-1],["te",-1,-1]],W=[["nda",-1,-1],["nde",-1,-1]],X=[["dan",-1,-1],["tan",-1,-1],["den",-1,-1],["ten",-1,-1]],Y=[["ndan",-1,-1],["nden",-1,-1]],Z=[["la",-1,-1],["le",-1,-1]],$=[["ca",-1,-1],["ce",-1,-1]],_=[["im",-1,-1],["um",-1,-1],["üm",-1,-1],["ım",-1,-1]],aa=[["sin",-1,-1],["sun",-1,-1],["sün",-1,-1],["sın",-1,-1]],ba=[["iz",-1,-1],["uz",-1,-1],["üz",-1,-1],["ız",-1,-1]],ca=[["siniz",-1,-1],["sunuz",-1,-1],["sünüz",-1,-1],["sınız",-1,-1]],da=[["lar",-1,-1],["ler",-1,-1]],ea=[["niz",-1,-1],["nuz",-1,-1],["nüz",-1,-1],["nız",-1,-1]],fa=[["dir",-1,-1],["tir",-1,-1],["dur",-1,-1],["tur",-1,-1],["dür",-1,-1],["tür",-1,-1],["dır",-1,-1],["tır",-1,-1]],ga=[["casına",-1,-1],["cesine",-1,-1]],ha=[["di",-1,-1],["ti",-1,-1],["dik",-1,-1],["tik",-1,-1],["duk",-1,-1],["tuk",-1,-1],["dük",-1,-1],["tük",-1,-1],["dık",-1,-1],["tık",-1,-1],["dim",-1,-1],["tim",-1,-1],["dum",-1,-1],["tum",-1,-1],["düm",-1,-1],["tüm",-1,-1],["dım",-1,-1],["tım",-1,-1],["din",-1,-1],["tin",-1,-1],["dun",-1,-1],["tun",-1,-1],["dün",-1,-1],["tün",-1,-1],["dın",-1,-1],["tın",-1,-1],["du",-1,-1],["tu",-1,-1],["dü",-1,-1],["tü",-1,-1],["dı",-1,-1],["tı",-1,-1]],ia=[["sa",-1,-1],["se",-1,-1],["sak",-1,-1],["sek",-1,-1],["sam",-1,-1],["sem",-1,-1],["san",-1,-1],["sen",-1,-1]],ja=[["miş",-1,-1],["muş",-1,-1],["müş",-1,-1],["mış",-1,-1]],ka=[["b",-1,1],["c",-1,2],["d",-1,3],["ğ",-1,4]],la=[17,65,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,8,0,0,0,0,0,0,1],ma=[1,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,1],na=[1,64,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],oa=[17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130],pa=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],qa=[17],ra=[65],sa=[65],ta=!1;this.stem=function(){if(!M())return!1;O.limit_backward=O.cursor,O.cursor=O.limit;var a=O.limit-O.cursor;if(G(),O.cursor=O.limit-a,!ta)return!1;var b=O.limit-O.cursor;return I(),O.cursor=O.limit-b,O.cursor=O.limit_backward,N()?!0:!1},this.stemWord=function(a){return O.setCurrent(a),this.stem(),O.getCurrent()}};