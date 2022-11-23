goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20071,p__20072){
var map__20073 = p__20071;
var map__20073__$1 = cljs.core.__destructure_map(map__20073);
var svc = map__20073__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20073__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20073__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20073__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20074 = p__20072;
var map__20074__$1 = cljs.core.__destructure_map(map__20074);
var msg = map__20074__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20074__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20074__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20074__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20074__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20076,p__20077){
var map__20078 = p__20076;
var map__20078__$1 = cljs.core.__destructure_map(map__20078);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20078__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20079 = p__20077;
var map__20079__$1 = cljs.core.__destructure_map(map__20079);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20079__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20084,p__20085){
var map__20087 = p__20084;
var map__20087__$1 = cljs.core.__destructure_map(map__20087);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20087__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20087__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20088 = p__20085;
var map__20088__$1 = cljs.core.__destructure_map(map__20088);
var msg = map__20088__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20088__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20093,tid){
var map__20094 = p__20093;
var map__20094__$1 = cljs.core.__destructure_map(map__20094);
var svc = map__20094__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20094__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20104 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20105 = null;
var count__20106 = (0);
var i__20107 = (0);
while(true){
if((i__20107 < count__20106)){
var vec__20124 = chunk__20105.cljs$core$IIndexed$_nth$arity$2(null,i__20107);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20124,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20124,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20148 = seq__20104;
var G__20149 = chunk__20105;
var G__20150 = count__20106;
var G__20151 = (i__20107 + (1));
seq__20104 = G__20148;
chunk__20105 = G__20149;
count__20106 = G__20150;
i__20107 = G__20151;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20104);
if(temp__5804__auto__){
var seq__20104__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20104__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20104__$1);
var G__20152 = cljs.core.chunk_rest(seq__20104__$1);
var G__20153 = c__5568__auto__;
var G__20154 = cljs.core.count(c__5568__auto__);
var G__20155 = (0);
seq__20104 = G__20152;
chunk__20105 = G__20153;
count__20106 = G__20154;
i__20107 = G__20155;
continue;
} else {
var vec__20129 = cljs.core.first(seq__20104__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20129,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20129,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20156 = cljs.core.next(seq__20104__$1);
var G__20157 = null;
var G__20158 = (0);
var G__20159 = (0);
seq__20104 = G__20156;
chunk__20105 = G__20157;
count__20106 = G__20158;
i__20107 = G__20159;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20098_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20098_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20100_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20100_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20101_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20101_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20102_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20102_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20134){
var map__20135 = p__20134;
var map__20135__$1 = cljs.core.__destructure_map(map__20135);
var svc = map__20135__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20135__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20135__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
