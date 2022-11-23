goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21102 = arguments.length;
var i__5770__auto___21103 = (0);
while(true){
if((i__5770__auto___21103 < len__5769__auto___21102)){
args__5775__auto__.push((arguments[i__5770__auto___21103]));

var G__21104 = (i__5770__auto___21103 + (1));
i__5770__auto___21103 = G__21104;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20819){
var G__20820 = cljs.core.first(seq20819);
var seq20819__$1 = cljs.core.next(seq20819);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20820,seq20819__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20822 = cljs.core.seq(sources);
var chunk__20823 = null;
var count__20824 = (0);
var i__20825 = (0);
while(true){
if((i__20825 < count__20824)){
var map__20832 = chunk__20823.cljs$core$IIndexed$_nth$arity$2(null,i__20825);
var map__20832__$1 = cljs.core.__destructure_map(map__20832);
var src = map__20832__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20833){var e_21105 = e20833;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21105);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21105.message)].join('')));
}

var G__21106 = seq__20822;
var G__21107 = chunk__20823;
var G__21108 = count__20824;
var G__21109 = (i__20825 + (1));
seq__20822 = G__21106;
chunk__20823 = G__21107;
count__20824 = G__21108;
i__20825 = G__21109;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20822);
if(temp__5804__auto__){
var seq__20822__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20822__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20822__$1);
var G__21110 = cljs.core.chunk_rest(seq__20822__$1);
var G__21111 = c__5568__auto__;
var G__21112 = cljs.core.count(c__5568__auto__);
var G__21113 = (0);
seq__20822 = G__21110;
chunk__20823 = G__21111;
count__20824 = G__21112;
i__20825 = G__21113;
continue;
} else {
var map__20834 = cljs.core.first(seq__20822__$1);
var map__20834__$1 = cljs.core.__destructure_map(map__20834);
var src = map__20834__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20834__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20834__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20834__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20834__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20835){var e_21114 = e20835;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21114);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21114.message)].join('')));
}

var G__21115 = cljs.core.next(seq__20822__$1);
var G__21116 = null;
var G__21117 = (0);
var G__21118 = (0);
seq__20822 = G__21115;
chunk__20823 = G__21116;
count__20824 = G__21117;
i__20825 = G__21118;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20836 = cljs.core.seq(js_requires);
var chunk__20837 = null;
var count__20838 = (0);
var i__20839 = (0);
while(true){
if((i__20839 < count__20838)){
var js_ns = chunk__20837.cljs$core$IIndexed$_nth$arity$2(null,i__20839);
var require_str_21119 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21119);


var G__21120 = seq__20836;
var G__21121 = chunk__20837;
var G__21122 = count__20838;
var G__21123 = (i__20839 + (1));
seq__20836 = G__21120;
chunk__20837 = G__21121;
count__20838 = G__21122;
i__20839 = G__21123;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20836);
if(temp__5804__auto__){
var seq__20836__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20836__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20836__$1);
var G__21124 = cljs.core.chunk_rest(seq__20836__$1);
var G__21125 = c__5568__auto__;
var G__21126 = cljs.core.count(c__5568__auto__);
var G__21127 = (0);
seq__20836 = G__21124;
chunk__20837 = G__21125;
count__20838 = G__21126;
i__20839 = G__21127;
continue;
} else {
var js_ns = cljs.core.first(seq__20836__$1);
var require_str_21128 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21128);


var G__21129 = cljs.core.next(seq__20836__$1);
var G__21130 = null;
var G__21131 = (0);
var G__21132 = (0);
seq__20836 = G__21129;
chunk__20837 = G__21130;
count__20838 = G__21131;
i__20839 = G__21132;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20841){
var map__20842 = p__20841;
var map__20842__$1 = cljs.core.__destructure_map(map__20842);
var msg = map__20842__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20842__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20842__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20843(s__20844){
return (new cljs.core.LazySeq(null,(function (){
var s__20844__$1 = s__20844;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20844__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20849 = cljs.core.first(xs__6360__auto__);
var map__20849__$1 = cljs.core.__destructure_map(map__20849);
var src = map__20849__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20844__$1,map__20849,map__20849__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20842,map__20842__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20843_$_iter__20845(s__20846){
return (new cljs.core.LazySeq(null,((function (s__20844__$1,map__20849,map__20849__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20842,map__20842__$1,msg,info,reload_info){
return (function (){
var s__20846__$1 = s__20846;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20846__$1);
if(temp__5804__auto____$1){
var s__20846__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20846__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20846__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20848 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20847 = (0);
while(true){
if((i__20847 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20847);
cljs.core.chunk_append(b__20848,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21133 = (i__20847 + (1));
i__20847 = G__21133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20848),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20843_$_iter__20845(cljs.core.chunk_rest(s__20846__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20848),null);
}
} else {
var warning = cljs.core.first(s__20846__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20843_$_iter__20845(cljs.core.rest(s__20846__$2)));
}
} else {
return null;
}
break;
}
});})(s__20844__$1,map__20849,map__20849__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20842,map__20842__$1,msg,info,reload_info))
,null,null));
});})(s__20844__$1,map__20849,map__20849__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20842,map__20842__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20843(cljs.core.rest(s__20844__$1)));
} else {
var G__21134 = cljs.core.rest(s__20844__$1);
s__20844__$1 = G__21134;
continue;
}
} else {
var G__21135 = cljs.core.rest(s__20844__$1);
s__20844__$1 = G__21135;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20850_21136 = cljs.core.seq(warnings);
var chunk__20851_21137 = null;
var count__20852_21138 = (0);
var i__20853_21139 = (0);
while(true){
if((i__20853_21139 < count__20852_21138)){
var map__20856_21140 = chunk__20851_21137.cljs$core$IIndexed$_nth$arity$2(null,i__20853_21139);
var map__20856_21141__$1 = cljs.core.__destructure_map(map__20856_21140);
var w_21142 = map__20856_21141__$1;
var msg_21143__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856_21141__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856_21141__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856_21141__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856_21141__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21146)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21144),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21145),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21143__$1)].join(''));


var G__21147 = seq__20850_21136;
var G__21148 = chunk__20851_21137;
var G__21149 = count__20852_21138;
var G__21150 = (i__20853_21139 + (1));
seq__20850_21136 = G__21147;
chunk__20851_21137 = G__21148;
count__20852_21138 = G__21149;
i__20853_21139 = G__21150;
continue;
} else {
var temp__5804__auto___21151 = cljs.core.seq(seq__20850_21136);
if(temp__5804__auto___21151){
var seq__20850_21152__$1 = temp__5804__auto___21151;
if(cljs.core.chunked_seq_QMARK_(seq__20850_21152__$1)){
var c__5568__auto___21153 = cljs.core.chunk_first(seq__20850_21152__$1);
var G__21154 = cljs.core.chunk_rest(seq__20850_21152__$1);
var G__21155 = c__5568__auto___21153;
var G__21156 = cljs.core.count(c__5568__auto___21153);
var G__21157 = (0);
seq__20850_21136 = G__21154;
chunk__20851_21137 = G__21155;
count__20852_21138 = G__21156;
i__20853_21139 = G__21157;
continue;
} else {
var map__20857_21158 = cljs.core.first(seq__20850_21152__$1);
var map__20857_21159__$1 = cljs.core.__destructure_map(map__20857_21158);
var w_21160 = map__20857_21159__$1;
var msg_21161__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857_21159__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857_21159__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857_21159__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857_21159__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21164)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21162),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21163),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21161__$1)].join(''));


var G__21165 = cljs.core.next(seq__20850_21152__$1);
var G__21166 = null;
var G__21167 = (0);
var G__21168 = (0);
seq__20850_21136 = G__21165;
chunk__20851_21137 = G__21166;
count__20852_21138 = G__21167;
i__20853_21139 = G__21168;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20840_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20840_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20858){
var map__20859 = p__20858;
var map__20859__$1 = cljs.core.__destructure_map(map__20859);
var msg = map__20859__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20859__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20859__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20860 = cljs.core.seq(updates);
var chunk__20862 = null;
var count__20863 = (0);
var i__20864 = (0);
while(true){
if((i__20864 < count__20863)){
var path = chunk__20862.cljs$core$IIndexed$_nth$arity$2(null,i__20864);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20974_21169 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20978_21170 = null;
var count__20979_21171 = (0);
var i__20980_21172 = (0);
while(true){
if((i__20980_21172 < count__20979_21171)){
var node_21173 = chunk__20978_21170.cljs$core$IIndexed$_nth$arity$2(null,i__20980_21172);
if(cljs.core.not(node_21173.shadow$old)){
var path_match_21174 = shadow.cljs.devtools.client.browser.match_paths(node_21173.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21174)){
var new_link_21175 = (function (){var G__21006 = node_21173.cloneNode(true);
G__21006.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21174),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21006;
})();
(node_21173.shadow$old = true);

(new_link_21175.onload = ((function (seq__20974_21169,chunk__20978_21170,count__20979_21171,i__20980_21172,seq__20860,chunk__20862,count__20863,i__20864,new_link_21175,path_match_21174,node_21173,path,map__20859,map__20859__$1,msg,updates,reload_info){
return (function (e){
var seq__21007_21176 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21009_21177 = null;
var count__21010_21178 = (0);
var i__21011_21179 = (0);
while(true){
if((i__21011_21179 < count__21010_21178)){
var map__21015_21180 = chunk__21009_21177.cljs$core$IIndexed$_nth$arity$2(null,i__21011_21179);
var map__21015_21181__$1 = cljs.core.__destructure_map(map__21015_21180);
var task_21182 = map__21015_21181__$1;
var fn_str_21183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21015_21181__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21015_21181__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21185 = goog.getObjectByName(fn_str_21183,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21184)].join(''));

(fn_obj_21185.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21185.cljs$core$IFn$_invoke$arity$2(path,new_link_21175) : fn_obj_21185.call(null,path,new_link_21175));


var G__21186 = seq__21007_21176;
var G__21187 = chunk__21009_21177;
var G__21188 = count__21010_21178;
var G__21189 = (i__21011_21179 + (1));
seq__21007_21176 = G__21186;
chunk__21009_21177 = G__21187;
count__21010_21178 = G__21188;
i__21011_21179 = G__21189;
continue;
} else {
var temp__5804__auto___21190 = cljs.core.seq(seq__21007_21176);
if(temp__5804__auto___21190){
var seq__21007_21191__$1 = temp__5804__auto___21190;
if(cljs.core.chunked_seq_QMARK_(seq__21007_21191__$1)){
var c__5568__auto___21192 = cljs.core.chunk_first(seq__21007_21191__$1);
var G__21193 = cljs.core.chunk_rest(seq__21007_21191__$1);
var G__21194 = c__5568__auto___21192;
var G__21195 = cljs.core.count(c__5568__auto___21192);
var G__21196 = (0);
seq__21007_21176 = G__21193;
chunk__21009_21177 = G__21194;
count__21010_21178 = G__21195;
i__21011_21179 = G__21196;
continue;
} else {
var map__21016_21197 = cljs.core.first(seq__21007_21191__$1);
var map__21016_21198__$1 = cljs.core.__destructure_map(map__21016_21197);
var task_21199 = map__21016_21198__$1;
var fn_str_21200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21016_21198__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21016_21198__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21202 = goog.getObjectByName(fn_str_21200,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21201)].join(''));

(fn_obj_21202.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21202.cljs$core$IFn$_invoke$arity$2(path,new_link_21175) : fn_obj_21202.call(null,path,new_link_21175));


var G__21203 = cljs.core.next(seq__21007_21191__$1);
var G__21204 = null;
var G__21205 = (0);
var G__21206 = (0);
seq__21007_21176 = G__21203;
chunk__21009_21177 = G__21204;
count__21010_21178 = G__21205;
i__21011_21179 = G__21206;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21173);
});})(seq__20974_21169,chunk__20978_21170,count__20979_21171,i__20980_21172,seq__20860,chunk__20862,count__20863,i__20864,new_link_21175,path_match_21174,node_21173,path,map__20859,map__20859__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21174], 0));

goog.dom.insertSiblingAfter(new_link_21175,node_21173);


var G__21207 = seq__20974_21169;
var G__21208 = chunk__20978_21170;
var G__21209 = count__20979_21171;
var G__21210 = (i__20980_21172 + (1));
seq__20974_21169 = G__21207;
chunk__20978_21170 = G__21208;
count__20979_21171 = G__21209;
i__20980_21172 = G__21210;
continue;
} else {
var G__21211 = seq__20974_21169;
var G__21212 = chunk__20978_21170;
var G__21213 = count__20979_21171;
var G__21214 = (i__20980_21172 + (1));
seq__20974_21169 = G__21211;
chunk__20978_21170 = G__21212;
count__20979_21171 = G__21213;
i__20980_21172 = G__21214;
continue;
}
} else {
var G__21215 = seq__20974_21169;
var G__21216 = chunk__20978_21170;
var G__21217 = count__20979_21171;
var G__21218 = (i__20980_21172 + (1));
seq__20974_21169 = G__21215;
chunk__20978_21170 = G__21216;
count__20979_21171 = G__21217;
i__20980_21172 = G__21218;
continue;
}
} else {
var temp__5804__auto___21219 = cljs.core.seq(seq__20974_21169);
if(temp__5804__auto___21219){
var seq__20974_21220__$1 = temp__5804__auto___21219;
if(cljs.core.chunked_seq_QMARK_(seq__20974_21220__$1)){
var c__5568__auto___21221 = cljs.core.chunk_first(seq__20974_21220__$1);
var G__21222 = cljs.core.chunk_rest(seq__20974_21220__$1);
var G__21223 = c__5568__auto___21221;
var G__21224 = cljs.core.count(c__5568__auto___21221);
var G__21225 = (0);
seq__20974_21169 = G__21222;
chunk__20978_21170 = G__21223;
count__20979_21171 = G__21224;
i__20980_21172 = G__21225;
continue;
} else {
var node_21226 = cljs.core.first(seq__20974_21220__$1);
if(cljs.core.not(node_21226.shadow$old)){
var path_match_21227 = shadow.cljs.devtools.client.browser.match_paths(node_21226.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21227)){
var new_link_21228 = (function (){var G__21017 = node_21226.cloneNode(true);
G__21017.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21227),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21017;
})();
(node_21226.shadow$old = true);

(new_link_21228.onload = ((function (seq__20974_21169,chunk__20978_21170,count__20979_21171,i__20980_21172,seq__20860,chunk__20862,count__20863,i__20864,new_link_21228,path_match_21227,node_21226,seq__20974_21220__$1,temp__5804__auto___21219,path,map__20859,map__20859__$1,msg,updates,reload_info){
return (function (e){
var seq__21018_21229 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21020_21230 = null;
var count__21021_21231 = (0);
var i__21022_21232 = (0);
while(true){
if((i__21022_21232 < count__21021_21231)){
var map__21026_21233 = chunk__21020_21230.cljs$core$IIndexed$_nth$arity$2(null,i__21022_21232);
var map__21026_21234__$1 = cljs.core.__destructure_map(map__21026_21233);
var task_21235 = map__21026_21234__$1;
var fn_str_21236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21026_21234__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21026_21234__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21238 = goog.getObjectByName(fn_str_21236,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21237)].join(''));

(fn_obj_21238.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21238.cljs$core$IFn$_invoke$arity$2(path,new_link_21228) : fn_obj_21238.call(null,path,new_link_21228));


var G__21239 = seq__21018_21229;
var G__21240 = chunk__21020_21230;
var G__21241 = count__21021_21231;
var G__21242 = (i__21022_21232 + (1));
seq__21018_21229 = G__21239;
chunk__21020_21230 = G__21240;
count__21021_21231 = G__21241;
i__21022_21232 = G__21242;
continue;
} else {
var temp__5804__auto___21243__$1 = cljs.core.seq(seq__21018_21229);
if(temp__5804__auto___21243__$1){
var seq__21018_21244__$1 = temp__5804__auto___21243__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21018_21244__$1)){
var c__5568__auto___21245 = cljs.core.chunk_first(seq__21018_21244__$1);
var G__21246 = cljs.core.chunk_rest(seq__21018_21244__$1);
var G__21247 = c__5568__auto___21245;
var G__21248 = cljs.core.count(c__5568__auto___21245);
var G__21249 = (0);
seq__21018_21229 = G__21246;
chunk__21020_21230 = G__21247;
count__21021_21231 = G__21248;
i__21022_21232 = G__21249;
continue;
} else {
var map__21027_21250 = cljs.core.first(seq__21018_21244__$1);
var map__21027_21251__$1 = cljs.core.__destructure_map(map__21027_21250);
var task_21252 = map__21027_21251__$1;
var fn_str_21253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21027_21251__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21027_21251__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21255 = goog.getObjectByName(fn_str_21253,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21254)].join(''));

(fn_obj_21255.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21255.cljs$core$IFn$_invoke$arity$2(path,new_link_21228) : fn_obj_21255.call(null,path,new_link_21228));


var G__21256 = cljs.core.next(seq__21018_21244__$1);
var G__21257 = null;
var G__21258 = (0);
var G__21259 = (0);
seq__21018_21229 = G__21256;
chunk__21020_21230 = G__21257;
count__21021_21231 = G__21258;
i__21022_21232 = G__21259;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21226);
});})(seq__20974_21169,chunk__20978_21170,count__20979_21171,i__20980_21172,seq__20860,chunk__20862,count__20863,i__20864,new_link_21228,path_match_21227,node_21226,seq__20974_21220__$1,temp__5804__auto___21219,path,map__20859,map__20859__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21227], 0));

goog.dom.insertSiblingAfter(new_link_21228,node_21226);


var G__21260 = cljs.core.next(seq__20974_21220__$1);
var G__21261 = null;
var G__21262 = (0);
var G__21263 = (0);
seq__20974_21169 = G__21260;
chunk__20978_21170 = G__21261;
count__20979_21171 = G__21262;
i__20980_21172 = G__21263;
continue;
} else {
var G__21264 = cljs.core.next(seq__20974_21220__$1);
var G__21265 = null;
var G__21266 = (0);
var G__21267 = (0);
seq__20974_21169 = G__21264;
chunk__20978_21170 = G__21265;
count__20979_21171 = G__21266;
i__20980_21172 = G__21267;
continue;
}
} else {
var G__21268 = cljs.core.next(seq__20974_21220__$1);
var G__21269 = null;
var G__21270 = (0);
var G__21271 = (0);
seq__20974_21169 = G__21268;
chunk__20978_21170 = G__21269;
count__20979_21171 = G__21270;
i__20980_21172 = G__21271;
continue;
}
}
} else {
}
}
break;
}


var G__21272 = seq__20860;
var G__21273 = chunk__20862;
var G__21274 = count__20863;
var G__21275 = (i__20864 + (1));
seq__20860 = G__21272;
chunk__20862 = G__21273;
count__20863 = G__21274;
i__20864 = G__21275;
continue;
} else {
var G__21276 = seq__20860;
var G__21277 = chunk__20862;
var G__21278 = count__20863;
var G__21279 = (i__20864 + (1));
seq__20860 = G__21276;
chunk__20862 = G__21277;
count__20863 = G__21278;
i__20864 = G__21279;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20860);
if(temp__5804__auto__){
var seq__20860__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20860__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20860__$1);
var G__21280 = cljs.core.chunk_rest(seq__20860__$1);
var G__21281 = c__5568__auto__;
var G__21282 = cljs.core.count(c__5568__auto__);
var G__21283 = (0);
seq__20860 = G__21280;
chunk__20862 = G__21281;
count__20863 = G__21282;
i__20864 = G__21283;
continue;
} else {
var path = cljs.core.first(seq__20860__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21028_21284 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21032_21285 = null;
var count__21033_21286 = (0);
var i__21034_21287 = (0);
while(true){
if((i__21034_21287 < count__21033_21286)){
var node_21288 = chunk__21032_21285.cljs$core$IIndexed$_nth$arity$2(null,i__21034_21287);
if(cljs.core.not(node_21288.shadow$old)){
var path_match_21289 = shadow.cljs.devtools.client.browser.match_paths(node_21288.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21289)){
var new_link_21290 = (function (){var G__21060 = node_21288.cloneNode(true);
G__21060.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21289),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21060;
})();
(node_21288.shadow$old = true);

(new_link_21290.onload = ((function (seq__21028_21284,chunk__21032_21285,count__21033_21286,i__21034_21287,seq__20860,chunk__20862,count__20863,i__20864,new_link_21290,path_match_21289,node_21288,path,seq__20860__$1,temp__5804__auto__,map__20859,map__20859__$1,msg,updates,reload_info){
return (function (e){
var seq__21061_21291 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21063_21292 = null;
var count__21064_21293 = (0);
var i__21065_21294 = (0);
while(true){
if((i__21065_21294 < count__21064_21293)){
var map__21069_21295 = chunk__21063_21292.cljs$core$IIndexed$_nth$arity$2(null,i__21065_21294);
var map__21069_21296__$1 = cljs.core.__destructure_map(map__21069_21295);
var task_21297 = map__21069_21296__$1;
var fn_str_21298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069_21296__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069_21296__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21300 = goog.getObjectByName(fn_str_21298,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21299)].join(''));

(fn_obj_21300.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21300.cljs$core$IFn$_invoke$arity$2(path,new_link_21290) : fn_obj_21300.call(null,path,new_link_21290));


var G__21301 = seq__21061_21291;
var G__21302 = chunk__21063_21292;
var G__21303 = count__21064_21293;
var G__21304 = (i__21065_21294 + (1));
seq__21061_21291 = G__21301;
chunk__21063_21292 = G__21302;
count__21064_21293 = G__21303;
i__21065_21294 = G__21304;
continue;
} else {
var temp__5804__auto___21305__$1 = cljs.core.seq(seq__21061_21291);
if(temp__5804__auto___21305__$1){
var seq__21061_21306__$1 = temp__5804__auto___21305__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21061_21306__$1)){
var c__5568__auto___21307 = cljs.core.chunk_first(seq__21061_21306__$1);
var G__21308 = cljs.core.chunk_rest(seq__21061_21306__$1);
var G__21309 = c__5568__auto___21307;
var G__21310 = cljs.core.count(c__5568__auto___21307);
var G__21311 = (0);
seq__21061_21291 = G__21308;
chunk__21063_21292 = G__21309;
count__21064_21293 = G__21310;
i__21065_21294 = G__21311;
continue;
} else {
var map__21070_21312 = cljs.core.first(seq__21061_21306__$1);
var map__21070_21313__$1 = cljs.core.__destructure_map(map__21070_21312);
var task_21314 = map__21070_21313__$1;
var fn_str_21315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21070_21313__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21070_21313__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21317 = goog.getObjectByName(fn_str_21315,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21316)].join(''));

(fn_obj_21317.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21317.cljs$core$IFn$_invoke$arity$2(path,new_link_21290) : fn_obj_21317.call(null,path,new_link_21290));


var G__21318 = cljs.core.next(seq__21061_21306__$1);
var G__21319 = null;
var G__21320 = (0);
var G__21321 = (0);
seq__21061_21291 = G__21318;
chunk__21063_21292 = G__21319;
count__21064_21293 = G__21320;
i__21065_21294 = G__21321;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21288);
});})(seq__21028_21284,chunk__21032_21285,count__21033_21286,i__21034_21287,seq__20860,chunk__20862,count__20863,i__20864,new_link_21290,path_match_21289,node_21288,path,seq__20860__$1,temp__5804__auto__,map__20859,map__20859__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21289], 0));

goog.dom.insertSiblingAfter(new_link_21290,node_21288);


var G__21322 = seq__21028_21284;
var G__21323 = chunk__21032_21285;
var G__21324 = count__21033_21286;
var G__21325 = (i__21034_21287 + (1));
seq__21028_21284 = G__21322;
chunk__21032_21285 = G__21323;
count__21033_21286 = G__21324;
i__21034_21287 = G__21325;
continue;
} else {
var G__21326 = seq__21028_21284;
var G__21327 = chunk__21032_21285;
var G__21328 = count__21033_21286;
var G__21329 = (i__21034_21287 + (1));
seq__21028_21284 = G__21326;
chunk__21032_21285 = G__21327;
count__21033_21286 = G__21328;
i__21034_21287 = G__21329;
continue;
}
} else {
var G__21330 = seq__21028_21284;
var G__21331 = chunk__21032_21285;
var G__21332 = count__21033_21286;
var G__21333 = (i__21034_21287 + (1));
seq__21028_21284 = G__21330;
chunk__21032_21285 = G__21331;
count__21033_21286 = G__21332;
i__21034_21287 = G__21333;
continue;
}
} else {
var temp__5804__auto___21334__$1 = cljs.core.seq(seq__21028_21284);
if(temp__5804__auto___21334__$1){
var seq__21028_21335__$1 = temp__5804__auto___21334__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21028_21335__$1)){
var c__5568__auto___21336 = cljs.core.chunk_first(seq__21028_21335__$1);
var G__21337 = cljs.core.chunk_rest(seq__21028_21335__$1);
var G__21338 = c__5568__auto___21336;
var G__21339 = cljs.core.count(c__5568__auto___21336);
var G__21340 = (0);
seq__21028_21284 = G__21337;
chunk__21032_21285 = G__21338;
count__21033_21286 = G__21339;
i__21034_21287 = G__21340;
continue;
} else {
var node_21341 = cljs.core.first(seq__21028_21335__$1);
if(cljs.core.not(node_21341.shadow$old)){
var path_match_21342 = shadow.cljs.devtools.client.browser.match_paths(node_21341.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21342)){
var new_link_21343 = (function (){var G__21071 = node_21341.cloneNode(true);
G__21071.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21342),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21071;
})();
(node_21341.shadow$old = true);

(new_link_21343.onload = ((function (seq__21028_21284,chunk__21032_21285,count__21033_21286,i__21034_21287,seq__20860,chunk__20862,count__20863,i__20864,new_link_21343,path_match_21342,node_21341,seq__21028_21335__$1,temp__5804__auto___21334__$1,path,seq__20860__$1,temp__5804__auto__,map__20859,map__20859__$1,msg,updates,reload_info){
return (function (e){
var seq__21072_21344 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21074_21345 = null;
var count__21075_21346 = (0);
var i__21076_21347 = (0);
while(true){
if((i__21076_21347 < count__21075_21346)){
var map__21080_21348 = chunk__21074_21345.cljs$core$IIndexed$_nth$arity$2(null,i__21076_21347);
var map__21080_21349__$1 = cljs.core.__destructure_map(map__21080_21348);
var task_21350 = map__21080_21349__$1;
var fn_str_21351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21080_21349__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21080_21349__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21353 = goog.getObjectByName(fn_str_21351,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21352)].join(''));

(fn_obj_21353.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21353.cljs$core$IFn$_invoke$arity$2(path,new_link_21343) : fn_obj_21353.call(null,path,new_link_21343));


var G__21354 = seq__21072_21344;
var G__21355 = chunk__21074_21345;
var G__21356 = count__21075_21346;
var G__21357 = (i__21076_21347 + (1));
seq__21072_21344 = G__21354;
chunk__21074_21345 = G__21355;
count__21075_21346 = G__21356;
i__21076_21347 = G__21357;
continue;
} else {
var temp__5804__auto___21358__$2 = cljs.core.seq(seq__21072_21344);
if(temp__5804__auto___21358__$2){
var seq__21072_21359__$1 = temp__5804__auto___21358__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21072_21359__$1)){
var c__5568__auto___21360 = cljs.core.chunk_first(seq__21072_21359__$1);
var G__21361 = cljs.core.chunk_rest(seq__21072_21359__$1);
var G__21362 = c__5568__auto___21360;
var G__21363 = cljs.core.count(c__5568__auto___21360);
var G__21364 = (0);
seq__21072_21344 = G__21361;
chunk__21074_21345 = G__21362;
count__21075_21346 = G__21363;
i__21076_21347 = G__21364;
continue;
} else {
var map__21081_21365 = cljs.core.first(seq__21072_21359__$1);
var map__21081_21366__$1 = cljs.core.__destructure_map(map__21081_21365);
var task_21367 = map__21081_21366__$1;
var fn_str_21368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21081_21366__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21081_21366__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21370 = goog.getObjectByName(fn_str_21368,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21369)].join(''));

(fn_obj_21370.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21370.cljs$core$IFn$_invoke$arity$2(path,new_link_21343) : fn_obj_21370.call(null,path,new_link_21343));


var G__21371 = cljs.core.next(seq__21072_21359__$1);
var G__21372 = null;
var G__21373 = (0);
var G__21374 = (0);
seq__21072_21344 = G__21371;
chunk__21074_21345 = G__21372;
count__21075_21346 = G__21373;
i__21076_21347 = G__21374;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21341);
});})(seq__21028_21284,chunk__21032_21285,count__21033_21286,i__21034_21287,seq__20860,chunk__20862,count__20863,i__20864,new_link_21343,path_match_21342,node_21341,seq__21028_21335__$1,temp__5804__auto___21334__$1,path,seq__20860__$1,temp__5804__auto__,map__20859,map__20859__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21342], 0));

goog.dom.insertSiblingAfter(new_link_21343,node_21341);


var G__21375 = cljs.core.next(seq__21028_21335__$1);
var G__21376 = null;
var G__21377 = (0);
var G__21378 = (0);
seq__21028_21284 = G__21375;
chunk__21032_21285 = G__21376;
count__21033_21286 = G__21377;
i__21034_21287 = G__21378;
continue;
} else {
var G__21379 = cljs.core.next(seq__21028_21335__$1);
var G__21380 = null;
var G__21381 = (0);
var G__21382 = (0);
seq__21028_21284 = G__21379;
chunk__21032_21285 = G__21380;
count__21033_21286 = G__21381;
i__21034_21287 = G__21382;
continue;
}
} else {
var G__21383 = cljs.core.next(seq__21028_21335__$1);
var G__21384 = null;
var G__21385 = (0);
var G__21386 = (0);
seq__21028_21284 = G__21383;
chunk__21032_21285 = G__21384;
count__21033_21286 = G__21385;
i__21034_21287 = G__21386;
continue;
}
}
} else {
}
}
break;
}


var G__21387 = cljs.core.next(seq__20860__$1);
var G__21388 = null;
var G__21389 = (0);
var G__21390 = (0);
seq__20860 = G__21387;
chunk__20862 = G__21388;
count__20863 = G__21389;
i__20864 = G__21390;
continue;
} else {
var G__21391 = cljs.core.next(seq__20860__$1);
var G__21392 = null;
var G__21393 = (0);
var G__21394 = (0);
seq__20860 = G__21391;
chunk__20862 = G__21392;
count__20863 = G__21393;
i__20864 = G__21394;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21082){
var map__21083 = p__21082;
var map__21083__$1 = cljs.core.__destructure_map(map__21083);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21083__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21084){
var map__21085 = p__21084;
var map__21085__$1 = cljs.core.__destructure_map(map__21085);
var _ = map__21085__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21085__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21086,done,error){
var map__21087 = p__21086;
var map__21087__$1 = cljs.core.__destructure_map(map__21087);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21087__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21088,done,error){
var map__21089 = p__21088;
var map__21089__$1 = cljs.core.__destructure_map(map__21089);
var msg = map__21089__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21090){
var map__21091 = p__21090;
var map__21091__$1 = cljs.core.__destructure_map(map__21091);
var src = map__21091__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21091__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21092 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21092) : done.call(null,G__21092));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21093){
var map__21094 = p__21093;
var map__21094__$1 = cljs.core.__destructure_map(map__21094);
var msg__$1 = map__21094__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21095){var ex = e21095;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21096){
var map__21097 = p__21096;
var map__21097__$1 = cljs.core.__destructure_map(map__21097);
var env = map__21097__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21098){
var map__21099 = p__21098;
var map__21099__$1 = cljs.core.__destructure_map(map__21099);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21099__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21099__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21100){
var map__21101 = p__21100;
var map__21101__$1 = cljs.core.__destructure_map(map__21101);
var svc = map__21101__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21101__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
