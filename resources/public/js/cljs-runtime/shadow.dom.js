goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19544 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19544(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19545 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19545(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17604 = coll;
var G__17605 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17604,G__17605) : shadow.dom.lazy_native_coll_seq.call(null,G__17604,G__17605));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17646 = arguments.length;
switch (G__17646) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17669 = arguments.length;
switch (G__17669) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17686 = arguments.length;
switch (G__17686) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17709 = arguments.length;
switch (G__17709) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17731 = arguments.length;
switch (G__17731) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17770 = arguments.length;
switch (G__17770) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17788){if((e17788 instanceof Object)){
var e = e17788;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17788;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17805 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17806 = null;
var count__17807 = (0);
var i__17808 = (0);
while(true){
if((i__17808 < count__17807)){
var el = chunk__17806.cljs$core$IIndexed$_nth$arity$2(null,i__17808);
var handler_19563__$1 = ((function (seq__17805,chunk__17806,count__17807,i__17808,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17805,chunk__17806,count__17807,i__17808,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19563__$1);


var G__19564 = seq__17805;
var G__19565 = chunk__17806;
var G__19566 = count__17807;
var G__19567 = (i__17808 + (1));
seq__17805 = G__19564;
chunk__17806 = G__19565;
count__17807 = G__19566;
i__17808 = G__19567;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17805);
if(temp__5804__auto__){
var seq__17805__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17805__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17805__$1);
var G__19568 = cljs.core.chunk_rest(seq__17805__$1);
var G__19569 = c__5568__auto__;
var G__19570 = cljs.core.count(c__5568__auto__);
var G__19571 = (0);
seq__17805 = G__19568;
chunk__17806 = G__19569;
count__17807 = G__19570;
i__17808 = G__19571;
continue;
} else {
var el = cljs.core.first(seq__17805__$1);
var handler_19574__$1 = ((function (seq__17805,chunk__17806,count__17807,i__17808,el,seq__17805__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17805,chunk__17806,count__17807,i__17808,el,seq__17805__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19574__$1);


var G__19575 = cljs.core.next(seq__17805__$1);
var G__19576 = null;
var G__19577 = (0);
var G__19578 = (0);
seq__17805 = G__19575;
chunk__17806 = G__19576;
count__17807 = G__19577;
i__17808 = G__19578;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17877 = arguments.length;
switch (G__17877) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17915 = cljs.core.seq(events);
var chunk__17916 = null;
var count__17917 = (0);
var i__17918 = (0);
while(true){
if((i__17918 < count__17917)){
var vec__17943 = chunk__17916.cljs$core$IIndexed$_nth$arity$2(null,i__17918);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17943,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19582 = seq__17915;
var G__19583 = chunk__17916;
var G__19584 = count__17917;
var G__19585 = (i__17918 + (1));
seq__17915 = G__19582;
chunk__17916 = G__19583;
count__17917 = G__19584;
i__17918 = G__19585;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17915);
if(temp__5804__auto__){
var seq__17915__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17915__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17915__$1);
var G__19586 = cljs.core.chunk_rest(seq__17915__$1);
var G__19587 = c__5568__auto__;
var G__19588 = cljs.core.count(c__5568__auto__);
var G__19589 = (0);
seq__17915 = G__19586;
chunk__17916 = G__19587;
count__17917 = G__19588;
i__17918 = G__19589;
continue;
} else {
var vec__17960 = cljs.core.first(seq__17915__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17960,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17960,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19590 = cljs.core.next(seq__17915__$1);
var G__19591 = null;
var G__19592 = (0);
var G__19593 = (0);
seq__17915 = G__19590;
chunk__17916 = G__19591;
count__17917 = G__19592;
i__17918 = G__19593;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17967 = cljs.core.seq(styles);
var chunk__17968 = null;
var count__17969 = (0);
var i__17970 = (0);
while(true){
if((i__17970 < count__17969)){
var vec__17990 = chunk__17968.cljs$core$IIndexed$_nth$arity$2(null,i__17970);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17990,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19594 = seq__17967;
var G__19595 = chunk__17968;
var G__19596 = count__17969;
var G__19597 = (i__17970 + (1));
seq__17967 = G__19594;
chunk__17968 = G__19595;
count__17969 = G__19596;
i__17970 = G__19597;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17967);
if(temp__5804__auto__){
var seq__17967__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17967__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17967__$1);
var G__19599 = cljs.core.chunk_rest(seq__17967__$1);
var G__19600 = c__5568__auto__;
var G__19601 = cljs.core.count(c__5568__auto__);
var G__19602 = (0);
seq__17967 = G__19599;
chunk__17968 = G__19600;
count__17969 = G__19601;
i__17970 = G__19602;
continue;
} else {
var vec__18008 = cljs.core.first(seq__17967__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18008,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18008,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19603 = cljs.core.next(seq__17967__$1);
var G__19604 = null;
var G__19605 = (0);
var G__19606 = (0);
seq__17967 = G__19603;
chunk__17968 = G__19604;
count__17969 = G__19605;
i__17970 = G__19606;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18022_19607 = key;
var G__18022_19608__$1 = (((G__18022_19607 instanceof cljs.core.Keyword))?G__18022_19607.fqn:null);
switch (G__18022_19608__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19610 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19610,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19610,"aria-");
}
})())){
el.setAttribute(ks_19610,value);
} else {
(el[ks_19610] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18049){
var map__18054 = p__18049;
var map__18054__$1 = cljs.core.__destructure_map(map__18054);
var props = map__18054__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18054__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18055 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18055,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18055,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18055,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18061 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18061,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18061;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18066 = arguments.length;
switch (G__18066) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18085){
var vec__18088 = p__18085;
var seq__18089 = cljs.core.seq(vec__18088);
var first__18090 = cljs.core.first(seq__18089);
var seq__18089__$1 = cljs.core.next(seq__18089);
var nn = first__18090;
var first__18090__$1 = cljs.core.first(seq__18089__$1);
var seq__18089__$2 = cljs.core.next(seq__18089__$1);
var np = first__18090__$1;
var nc = seq__18089__$2;
var node = vec__18088;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18095 = nn;
var G__18096 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18095,G__18096) : create_fn.call(null,G__18095,G__18096));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18098 = nn;
var G__18099 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18098,G__18099) : create_fn.call(null,G__18098,G__18099));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18114 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(1),null);
var seq__18120_19626 = cljs.core.seq(node_children);
var chunk__18121_19627 = null;
var count__18122_19628 = (0);
var i__18123_19629 = (0);
while(true){
if((i__18123_19629 < count__18122_19628)){
var child_struct_19632 = chunk__18121_19627.cljs$core$IIndexed$_nth$arity$2(null,i__18123_19629);
var children_19633 = shadow.dom.dom_node(child_struct_19632);
if(cljs.core.seq_QMARK_(children_19633)){
var seq__18231_19634 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19633));
var chunk__18233_19635 = null;
var count__18234_19636 = (0);
var i__18235_19637 = (0);
while(true){
if((i__18235_19637 < count__18234_19636)){
var child_19638 = chunk__18233_19635.cljs$core$IIndexed$_nth$arity$2(null,i__18235_19637);
if(cljs.core.truth_(child_19638)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19638);


var G__19640 = seq__18231_19634;
var G__19641 = chunk__18233_19635;
var G__19642 = count__18234_19636;
var G__19643 = (i__18235_19637 + (1));
seq__18231_19634 = G__19640;
chunk__18233_19635 = G__19641;
count__18234_19636 = G__19642;
i__18235_19637 = G__19643;
continue;
} else {
var G__19644 = seq__18231_19634;
var G__19645 = chunk__18233_19635;
var G__19646 = count__18234_19636;
var G__19647 = (i__18235_19637 + (1));
seq__18231_19634 = G__19644;
chunk__18233_19635 = G__19645;
count__18234_19636 = G__19646;
i__18235_19637 = G__19647;
continue;
}
} else {
var temp__5804__auto___19649 = cljs.core.seq(seq__18231_19634);
if(temp__5804__auto___19649){
var seq__18231_19650__$1 = temp__5804__auto___19649;
if(cljs.core.chunked_seq_QMARK_(seq__18231_19650__$1)){
var c__5568__auto___19651 = cljs.core.chunk_first(seq__18231_19650__$1);
var G__19652 = cljs.core.chunk_rest(seq__18231_19650__$1);
var G__19653 = c__5568__auto___19651;
var G__19654 = cljs.core.count(c__5568__auto___19651);
var G__19655 = (0);
seq__18231_19634 = G__19652;
chunk__18233_19635 = G__19653;
count__18234_19636 = G__19654;
i__18235_19637 = G__19655;
continue;
} else {
var child_19656 = cljs.core.first(seq__18231_19650__$1);
if(cljs.core.truth_(child_19656)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19656);


var G__19661 = cljs.core.next(seq__18231_19650__$1);
var G__19662 = null;
var G__19663 = (0);
var G__19664 = (0);
seq__18231_19634 = G__19661;
chunk__18233_19635 = G__19662;
count__18234_19636 = G__19663;
i__18235_19637 = G__19664;
continue;
} else {
var G__19665 = cljs.core.next(seq__18231_19650__$1);
var G__19666 = null;
var G__19667 = (0);
var G__19668 = (0);
seq__18231_19634 = G__19665;
chunk__18233_19635 = G__19666;
count__18234_19636 = G__19667;
i__18235_19637 = G__19668;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19633);
}


var G__19669 = seq__18120_19626;
var G__19670 = chunk__18121_19627;
var G__19671 = count__18122_19628;
var G__19672 = (i__18123_19629 + (1));
seq__18120_19626 = G__19669;
chunk__18121_19627 = G__19670;
count__18122_19628 = G__19671;
i__18123_19629 = G__19672;
continue;
} else {
var temp__5804__auto___19673 = cljs.core.seq(seq__18120_19626);
if(temp__5804__auto___19673){
var seq__18120_19674__$1 = temp__5804__auto___19673;
if(cljs.core.chunked_seq_QMARK_(seq__18120_19674__$1)){
var c__5568__auto___19676 = cljs.core.chunk_first(seq__18120_19674__$1);
var G__19677 = cljs.core.chunk_rest(seq__18120_19674__$1);
var G__19678 = c__5568__auto___19676;
var G__19679 = cljs.core.count(c__5568__auto___19676);
var G__19680 = (0);
seq__18120_19626 = G__19677;
chunk__18121_19627 = G__19678;
count__18122_19628 = G__19679;
i__18123_19629 = G__19680;
continue;
} else {
var child_struct_19682 = cljs.core.first(seq__18120_19674__$1);
var children_19683 = shadow.dom.dom_node(child_struct_19682);
if(cljs.core.seq_QMARK_(children_19683)){
var seq__18266_19684 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19683));
var chunk__18268_19685 = null;
var count__18269_19686 = (0);
var i__18270_19687 = (0);
while(true){
if((i__18270_19687 < count__18269_19686)){
var child_19689 = chunk__18268_19685.cljs$core$IIndexed$_nth$arity$2(null,i__18270_19687);
if(cljs.core.truth_(child_19689)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19689);


var G__19691 = seq__18266_19684;
var G__19692 = chunk__18268_19685;
var G__19693 = count__18269_19686;
var G__19694 = (i__18270_19687 + (1));
seq__18266_19684 = G__19691;
chunk__18268_19685 = G__19692;
count__18269_19686 = G__19693;
i__18270_19687 = G__19694;
continue;
} else {
var G__19695 = seq__18266_19684;
var G__19696 = chunk__18268_19685;
var G__19697 = count__18269_19686;
var G__19698 = (i__18270_19687 + (1));
seq__18266_19684 = G__19695;
chunk__18268_19685 = G__19696;
count__18269_19686 = G__19697;
i__18270_19687 = G__19698;
continue;
}
} else {
var temp__5804__auto___19700__$1 = cljs.core.seq(seq__18266_19684);
if(temp__5804__auto___19700__$1){
var seq__18266_19701__$1 = temp__5804__auto___19700__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18266_19701__$1)){
var c__5568__auto___19702 = cljs.core.chunk_first(seq__18266_19701__$1);
var G__19703 = cljs.core.chunk_rest(seq__18266_19701__$1);
var G__19704 = c__5568__auto___19702;
var G__19705 = cljs.core.count(c__5568__auto___19702);
var G__19706 = (0);
seq__18266_19684 = G__19703;
chunk__18268_19685 = G__19704;
count__18269_19686 = G__19705;
i__18270_19687 = G__19706;
continue;
} else {
var child_19707 = cljs.core.first(seq__18266_19701__$1);
if(cljs.core.truth_(child_19707)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19707);


var G__19709 = cljs.core.next(seq__18266_19701__$1);
var G__19710 = null;
var G__19711 = (0);
var G__19712 = (0);
seq__18266_19684 = G__19709;
chunk__18268_19685 = G__19710;
count__18269_19686 = G__19711;
i__18270_19687 = G__19712;
continue;
} else {
var G__19714 = cljs.core.next(seq__18266_19701__$1);
var G__19715 = null;
var G__19716 = (0);
var G__19717 = (0);
seq__18266_19684 = G__19714;
chunk__18268_19685 = G__19715;
count__18269_19686 = G__19716;
i__18270_19687 = G__19717;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19683);
}


var G__19718 = cljs.core.next(seq__18120_19674__$1);
var G__19719 = null;
var G__19720 = (0);
var G__19721 = (0);
seq__18120_19626 = G__19718;
chunk__18121_19627 = G__19719;
count__18122_19628 = G__19720;
i__18123_19629 = G__19721;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18372 = cljs.core.seq(node);
var chunk__18373 = null;
var count__18374 = (0);
var i__18375 = (0);
while(true){
if((i__18375 < count__18374)){
var n = chunk__18373.cljs$core$IIndexed$_nth$arity$2(null,i__18375);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19723 = seq__18372;
var G__19724 = chunk__18373;
var G__19725 = count__18374;
var G__19726 = (i__18375 + (1));
seq__18372 = G__19723;
chunk__18373 = G__19724;
count__18374 = G__19725;
i__18375 = G__19726;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18372);
if(temp__5804__auto__){
var seq__18372__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18372__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18372__$1);
var G__19727 = cljs.core.chunk_rest(seq__18372__$1);
var G__19728 = c__5568__auto__;
var G__19729 = cljs.core.count(c__5568__auto__);
var G__19730 = (0);
seq__18372 = G__19727;
chunk__18373 = G__19728;
count__18374 = G__19729;
i__18375 = G__19730;
continue;
} else {
var n = cljs.core.first(seq__18372__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19733 = cljs.core.next(seq__18372__$1);
var G__19734 = null;
var G__19735 = (0);
var G__19736 = (0);
seq__18372 = G__19733;
chunk__18373 = G__19734;
count__18374 = G__19735;
i__18375 = G__19736;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18413 = arguments.length;
switch (G__18413) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18421 = arguments.length;
switch (G__18421) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18479 = arguments.length;
switch (G__18479) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19747 = arguments.length;
var i__5770__auto___19748 = (0);
while(true){
if((i__5770__auto___19748 < len__5769__auto___19747)){
args__5775__auto__.push((arguments[i__5770__auto___19748]));

var G__19749 = (i__5770__auto___19748 + (1));
i__5770__auto___19748 = G__19749;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18541_19752 = cljs.core.seq(nodes);
var chunk__18543_19753 = null;
var count__18544_19754 = (0);
var i__18545_19755 = (0);
while(true){
if((i__18545_19755 < count__18544_19754)){
var node_19757 = chunk__18543_19753.cljs$core$IIndexed$_nth$arity$2(null,i__18545_19755);
fragment.appendChild(shadow.dom._to_dom(node_19757));


var G__19759 = seq__18541_19752;
var G__19760 = chunk__18543_19753;
var G__19761 = count__18544_19754;
var G__19762 = (i__18545_19755 + (1));
seq__18541_19752 = G__19759;
chunk__18543_19753 = G__19760;
count__18544_19754 = G__19761;
i__18545_19755 = G__19762;
continue;
} else {
var temp__5804__auto___19764 = cljs.core.seq(seq__18541_19752);
if(temp__5804__auto___19764){
var seq__18541_19765__$1 = temp__5804__auto___19764;
if(cljs.core.chunked_seq_QMARK_(seq__18541_19765__$1)){
var c__5568__auto___19766 = cljs.core.chunk_first(seq__18541_19765__$1);
var G__19767 = cljs.core.chunk_rest(seq__18541_19765__$1);
var G__19768 = c__5568__auto___19766;
var G__19769 = cljs.core.count(c__5568__auto___19766);
var G__19770 = (0);
seq__18541_19752 = G__19767;
chunk__18543_19753 = G__19768;
count__18544_19754 = G__19769;
i__18545_19755 = G__19770;
continue;
} else {
var node_19771 = cljs.core.first(seq__18541_19765__$1);
fragment.appendChild(shadow.dom._to_dom(node_19771));


var G__19773 = cljs.core.next(seq__18541_19765__$1);
var G__19774 = null;
var G__19775 = (0);
var G__19776 = (0);
seq__18541_19752 = G__19773;
chunk__18543_19753 = G__19774;
count__18544_19754 = G__19775;
i__18545_19755 = G__19776;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18526){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18526));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18567_19779 = cljs.core.seq(scripts);
var chunk__18568_19780 = null;
var count__18569_19781 = (0);
var i__18570_19782 = (0);
while(true){
if((i__18570_19782 < count__18569_19781)){
var vec__18593_19783 = chunk__18568_19780.cljs$core$IIndexed$_nth$arity$2(null,i__18570_19782);
var script_tag_19784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18593_19783,(0),null);
var script_body_19785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18593_19783,(1),null);
eval(script_body_19785);


var G__19786 = seq__18567_19779;
var G__19787 = chunk__18568_19780;
var G__19788 = count__18569_19781;
var G__19789 = (i__18570_19782 + (1));
seq__18567_19779 = G__19786;
chunk__18568_19780 = G__19787;
count__18569_19781 = G__19788;
i__18570_19782 = G__19789;
continue;
} else {
var temp__5804__auto___19790 = cljs.core.seq(seq__18567_19779);
if(temp__5804__auto___19790){
var seq__18567_19792__$1 = temp__5804__auto___19790;
if(cljs.core.chunked_seq_QMARK_(seq__18567_19792__$1)){
var c__5568__auto___19793 = cljs.core.chunk_first(seq__18567_19792__$1);
var G__19795 = cljs.core.chunk_rest(seq__18567_19792__$1);
var G__19796 = c__5568__auto___19793;
var G__19797 = cljs.core.count(c__5568__auto___19793);
var G__19798 = (0);
seq__18567_19779 = G__19795;
chunk__18568_19780 = G__19796;
count__18569_19781 = G__19797;
i__18570_19782 = G__19798;
continue;
} else {
var vec__18604_19799 = cljs.core.first(seq__18567_19792__$1);
var script_tag_19800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18604_19799,(0),null);
var script_body_19801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18604_19799,(1),null);
eval(script_body_19801);


var G__19803 = cljs.core.next(seq__18567_19792__$1);
var G__19804 = null;
var G__19805 = (0);
var G__19806 = (0);
seq__18567_19779 = G__19803;
chunk__18568_19780 = G__19804;
count__18569_19781 = G__19805;
i__18570_19782 = G__19806;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18612){
var vec__18614 = p__18612;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18614,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18614,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18628 = arguments.length;
switch (G__18628) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18645 = cljs.core.seq(style_keys);
var chunk__18646 = null;
var count__18647 = (0);
var i__18648 = (0);
while(true){
if((i__18648 < count__18647)){
var it = chunk__18646.cljs$core$IIndexed$_nth$arity$2(null,i__18648);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19816 = seq__18645;
var G__19817 = chunk__18646;
var G__19818 = count__18647;
var G__19819 = (i__18648 + (1));
seq__18645 = G__19816;
chunk__18646 = G__19817;
count__18647 = G__19818;
i__18648 = G__19819;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18645);
if(temp__5804__auto__){
var seq__18645__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18645__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18645__$1);
var G__19823 = cljs.core.chunk_rest(seq__18645__$1);
var G__19824 = c__5568__auto__;
var G__19825 = cljs.core.count(c__5568__auto__);
var G__19826 = (0);
seq__18645 = G__19823;
chunk__18646 = G__19824;
count__18647 = G__19825;
i__18648 = G__19826;
continue;
} else {
var it = cljs.core.first(seq__18645__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19827 = cljs.core.next(seq__18645__$1);
var G__19828 = null;
var G__19829 = (0);
var G__19830 = (0);
seq__18645 = G__19827;
chunk__18646 = G__19828;
count__18647 = G__19829;
i__18648 = G__19830;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18658,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18675 = k18658;
var G__18675__$1 = (((G__18675 instanceof cljs.core.Keyword))?G__18675.fqn:null);
switch (G__18675__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18658,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18684){
var vec__18686 = p__18684;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18686,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18686,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18657){
var self__ = this;
var G__18657__$1 = this;
return (new cljs.core.RecordIter((0),G__18657__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18659,other18660){
var self__ = this;
var this18659__$1 = this;
return (((!((other18660 == null)))) && ((((this18659__$1.constructor === other18660.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18659__$1.x,other18660.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18659__$1.y,other18660.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18659__$1.__extmap,other18660.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18658){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18728 = k18658;
var G__18728__$1 = (((G__18728 instanceof cljs.core.Keyword))?G__18728.fqn:null);
switch (G__18728__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18658);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18657){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18731 = cljs.core.keyword_identical_QMARK_;
var expr__18732 = k__5352__auto__;
if(cljs.core.truth_((pred__18731.cljs$core$IFn$_invoke$arity$2 ? pred__18731.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18732) : pred__18731.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18732)))){
return (new shadow.dom.Coordinate(G__18657,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18731.cljs$core$IFn$_invoke$arity$2 ? pred__18731.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18732) : pred__18731.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18732)))){
return (new shadow.dom.Coordinate(self__.x,G__18657,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18657),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18657){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18657,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18665){
var extmap__5385__auto__ = (function (){var G__18775 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18665,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18665)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18775);
} else {
return G__18775;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18665),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18665),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18819,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18838 = k18819;
var G__18838__$1 = (((G__18838 instanceof cljs.core.Keyword))?G__18838.fqn:null);
switch (G__18838__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18819,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18844){
var vec__18848 = p__18844;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18848,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18848,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18818){
var self__ = this;
var G__18818__$1 = this;
return (new cljs.core.RecordIter((0),G__18818__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18820,other18821){
var self__ = this;
var this18820__$1 = this;
return (((!((other18821 == null)))) && ((((this18820__$1.constructor === other18821.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18820__$1.w,other18821.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18820__$1.h,other18821.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18820__$1.__extmap,other18821.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18819){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18923 = k18819;
var G__18923__$1 = (((G__18923 instanceof cljs.core.Keyword))?G__18923.fqn:null);
switch (G__18923__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18819);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18818){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18930 = cljs.core.keyword_identical_QMARK_;
var expr__18931 = k__5352__auto__;
if(cljs.core.truth_((pred__18930.cljs$core$IFn$_invoke$arity$2 ? pred__18930.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18931) : pred__18930.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18931)))){
return (new shadow.dom.Size(G__18818,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18930.cljs$core$IFn$_invoke$arity$2 ? pred__18930.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18931) : pred__18930.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18931)))){
return (new shadow.dom.Size(self__.w,G__18818,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18818),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18818){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18818,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18829){
var extmap__5385__auto__ = (function (){var G__18942 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18829,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18829)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18942);
} else {
return G__18942;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18829),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18829),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19860 = (i + (1));
var G__19861 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19860;
ret = G__19861;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19026){
var vec__19028 = p__19026;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19028,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19028,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19048 = arguments.length;
switch (G__19048) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19867 = ps;
var G__19868 = (i + (1));
el__$1 = G__19867;
i = G__19868;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19203 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19203,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19203,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19203,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19213_19876 = cljs.core.seq(props);
var chunk__19216_19877 = null;
var count__19218_19878 = (0);
var i__19219_19879 = (0);
while(true){
if((i__19219_19879 < count__19218_19878)){
var vec__19263_19880 = chunk__19216_19877.cljs$core$IIndexed$_nth$arity$2(null,i__19219_19879);
var k_19881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19263_19880,(0),null);
var v_19882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19263_19880,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19881);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19881),v_19882);


var G__19883 = seq__19213_19876;
var G__19884 = chunk__19216_19877;
var G__19885 = count__19218_19878;
var G__19886 = (i__19219_19879 + (1));
seq__19213_19876 = G__19883;
chunk__19216_19877 = G__19884;
count__19218_19878 = G__19885;
i__19219_19879 = G__19886;
continue;
} else {
var temp__5804__auto___19887 = cljs.core.seq(seq__19213_19876);
if(temp__5804__auto___19887){
var seq__19213_19888__$1 = temp__5804__auto___19887;
if(cljs.core.chunked_seq_QMARK_(seq__19213_19888__$1)){
var c__5568__auto___19889 = cljs.core.chunk_first(seq__19213_19888__$1);
var G__19890 = cljs.core.chunk_rest(seq__19213_19888__$1);
var G__19891 = c__5568__auto___19889;
var G__19892 = cljs.core.count(c__5568__auto___19889);
var G__19893 = (0);
seq__19213_19876 = G__19890;
chunk__19216_19877 = G__19891;
count__19218_19878 = G__19892;
i__19219_19879 = G__19893;
continue;
} else {
var vec__19272_19894 = cljs.core.first(seq__19213_19888__$1);
var k_19895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19272_19894,(0),null);
var v_19896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19272_19894,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19895);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19895),v_19896);


var G__19897 = cljs.core.next(seq__19213_19888__$1);
var G__19898 = null;
var G__19899 = (0);
var G__19900 = (0);
seq__19213_19876 = G__19897;
chunk__19216_19877 = G__19898;
count__19218_19878 = G__19899;
i__19219_19879 = G__19900;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19289 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19289,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19289,(1),null);
var seq__19293_19903 = cljs.core.seq(node_children);
var chunk__19295_19904 = null;
var count__19296_19905 = (0);
var i__19297_19906 = (0);
while(true){
if((i__19297_19906 < count__19296_19905)){
var child_struct_19910 = chunk__19295_19904.cljs$core$IIndexed$_nth$arity$2(null,i__19297_19906);
if((!((child_struct_19910 == null)))){
if(typeof child_struct_19910 === 'string'){
var text_19911 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19911),child_struct_19910].join(''));
} else {
var children_19912 = shadow.dom.svg_node(child_struct_19910);
if(cljs.core.seq_QMARK_(children_19912)){
var seq__19353_19913 = cljs.core.seq(children_19912);
var chunk__19355_19914 = null;
var count__19356_19915 = (0);
var i__19357_19916 = (0);
while(true){
if((i__19357_19916 < count__19356_19915)){
var child_19917 = chunk__19355_19914.cljs$core$IIndexed$_nth$arity$2(null,i__19357_19916);
if(cljs.core.truth_(child_19917)){
node.appendChild(child_19917);


var G__19918 = seq__19353_19913;
var G__19919 = chunk__19355_19914;
var G__19920 = count__19356_19915;
var G__19921 = (i__19357_19916 + (1));
seq__19353_19913 = G__19918;
chunk__19355_19914 = G__19919;
count__19356_19915 = G__19920;
i__19357_19916 = G__19921;
continue;
} else {
var G__19922 = seq__19353_19913;
var G__19923 = chunk__19355_19914;
var G__19924 = count__19356_19915;
var G__19925 = (i__19357_19916 + (1));
seq__19353_19913 = G__19922;
chunk__19355_19914 = G__19923;
count__19356_19915 = G__19924;
i__19357_19916 = G__19925;
continue;
}
} else {
var temp__5804__auto___19926 = cljs.core.seq(seq__19353_19913);
if(temp__5804__auto___19926){
var seq__19353_19929__$1 = temp__5804__auto___19926;
if(cljs.core.chunked_seq_QMARK_(seq__19353_19929__$1)){
var c__5568__auto___19930 = cljs.core.chunk_first(seq__19353_19929__$1);
var G__19932 = cljs.core.chunk_rest(seq__19353_19929__$1);
var G__19933 = c__5568__auto___19930;
var G__19934 = cljs.core.count(c__5568__auto___19930);
var G__19935 = (0);
seq__19353_19913 = G__19932;
chunk__19355_19914 = G__19933;
count__19356_19915 = G__19934;
i__19357_19916 = G__19935;
continue;
} else {
var child_19937 = cljs.core.first(seq__19353_19929__$1);
if(cljs.core.truth_(child_19937)){
node.appendChild(child_19937);


var G__19938 = cljs.core.next(seq__19353_19929__$1);
var G__19939 = null;
var G__19940 = (0);
var G__19941 = (0);
seq__19353_19913 = G__19938;
chunk__19355_19914 = G__19939;
count__19356_19915 = G__19940;
i__19357_19916 = G__19941;
continue;
} else {
var G__19942 = cljs.core.next(seq__19353_19929__$1);
var G__19943 = null;
var G__19944 = (0);
var G__19945 = (0);
seq__19353_19913 = G__19942;
chunk__19355_19914 = G__19943;
count__19356_19915 = G__19944;
i__19357_19916 = G__19945;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19912);
}
}


var G__19946 = seq__19293_19903;
var G__19947 = chunk__19295_19904;
var G__19948 = count__19296_19905;
var G__19949 = (i__19297_19906 + (1));
seq__19293_19903 = G__19946;
chunk__19295_19904 = G__19947;
count__19296_19905 = G__19948;
i__19297_19906 = G__19949;
continue;
} else {
var G__19950 = seq__19293_19903;
var G__19951 = chunk__19295_19904;
var G__19952 = count__19296_19905;
var G__19953 = (i__19297_19906 + (1));
seq__19293_19903 = G__19950;
chunk__19295_19904 = G__19951;
count__19296_19905 = G__19952;
i__19297_19906 = G__19953;
continue;
}
} else {
var temp__5804__auto___19954 = cljs.core.seq(seq__19293_19903);
if(temp__5804__auto___19954){
var seq__19293_19955__$1 = temp__5804__auto___19954;
if(cljs.core.chunked_seq_QMARK_(seq__19293_19955__$1)){
var c__5568__auto___19956 = cljs.core.chunk_first(seq__19293_19955__$1);
var G__19957 = cljs.core.chunk_rest(seq__19293_19955__$1);
var G__19958 = c__5568__auto___19956;
var G__19959 = cljs.core.count(c__5568__auto___19956);
var G__19960 = (0);
seq__19293_19903 = G__19957;
chunk__19295_19904 = G__19958;
count__19296_19905 = G__19959;
i__19297_19906 = G__19960;
continue;
} else {
var child_struct_19961 = cljs.core.first(seq__19293_19955__$1);
if((!((child_struct_19961 == null)))){
if(typeof child_struct_19961 === 'string'){
var text_19962 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19962),child_struct_19961].join(''));
} else {
var children_19963 = shadow.dom.svg_node(child_struct_19961);
if(cljs.core.seq_QMARK_(children_19963)){
var seq__19410_19964 = cljs.core.seq(children_19963);
var chunk__19412_19965 = null;
var count__19413_19966 = (0);
var i__19414_19967 = (0);
while(true){
if((i__19414_19967 < count__19413_19966)){
var child_19968 = chunk__19412_19965.cljs$core$IIndexed$_nth$arity$2(null,i__19414_19967);
if(cljs.core.truth_(child_19968)){
node.appendChild(child_19968);


var G__19969 = seq__19410_19964;
var G__19970 = chunk__19412_19965;
var G__19971 = count__19413_19966;
var G__19972 = (i__19414_19967 + (1));
seq__19410_19964 = G__19969;
chunk__19412_19965 = G__19970;
count__19413_19966 = G__19971;
i__19414_19967 = G__19972;
continue;
} else {
var G__19973 = seq__19410_19964;
var G__19974 = chunk__19412_19965;
var G__19975 = count__19413_19966;
var G__19976 = (i__19414_19967 + (1));
seq__19410_19964 = G__19973;
chunk__19412_19965 = G__19974;
count__19413_19966 = G__19975;
i__19414_19967 = G__19976;
continue;
}
} else {
var temp__5804__auto___19977__$1 = cljs.core.seq(seq__19410_19964);
if(temp__5804__auto___19977__$1){
var seq__19410_19978__$1 = temp__5804__auto___19977__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19410_19978__$1)){
var c__5568__auto___19979 = cljs.core.chunk_first(seq__19410_19978__$1);
var G__19980 = cljs.core.chunk_rest(seq__19410_19978__$1);
var G__19981 = c__5568__auto___19979;
var G__19982 = cljs.core.count(c__5568__auto___19979);
var G__19983 = (0);
seq__19410_19964 = G__19980;
chunk__19412_19965 = G__19981;
count__19413_19966 = G__19982;
i__19414_19967 = G__19983;
continue;
} else {
var child_19984 = cljs.core.first(seq__19410_19978__$1);
if(cljs.core.truth_(child_19984)){
node.appendChild(child_19984);


var G__19987 = cljs.core.next(seq__19410_19978__$1);
var G__19988 = null;
var G__19989 = (0);
var G__19990 = (0);
seq__19410_19964 = G__19987;
chunk__19412_19965 = G__19988;
count__19413_19966 = G__19989;
i__19414_19967 = G__19990;
continue;
} else {
var G__19992 = cljs.core.next(seq__19410_19978__$1);
var G__19993 = null;
var G__19994 = (0);
var G__19995 = (0);
seq__19410_19964 = G__19992;
chunk__19412_19965 = G__19993;
count__19413_19966 = G__19994;
i__19414_19967 = G__19995;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19963);
}
}


var G__19997 = cljs.core.next(seq__19293_19955__$1);
var G__19998 = null;
var G__19999 = (0);
var G__20000 = (0);
seq__19293_19903 = G__19997;
chunk__19295_19904 = G__19998;
count__19296_19905 = G__19999;
i__19297_19906 = G__20000;
continue;
} else {
var G__20001 = cljs.core.next(seq__19293_19955__$1);
var G__20002 = null;
var G__20003 = (0);
var G__20004 = (0);
seq__19293_19903 = G__20001;
chunk__19295_19904 = G__20002;
count__19296_19905 = G__20003;
i__19297_19906 = G__20004;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20005 = arguments.length;
var i__5770__auto___20006 = (0);
while(true){
if((i__5770__auto___20006 < len__5769__auto___20005)){
args__5775__auto__.push((arguments[i__5770__auto___20006]));

var G__20008 = (i__5770__auto___20006 + (1));
i__5770__auto___20006 = G__20008;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19480){
var G__19481 = cljs.core.first(seq19480);
var seq19480__$1 = cljs.core.next(seq19480);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19481,seq19480__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19504 = arguments.length;
switch (G__19504) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13706__auto___20017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_19517){
var state_val_19518 = (state_19517[(1)]);
if((state_val_19518 === (1))){
var state_19517__$1 = state_19517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19517__$1,(2),once_or_cleanup);
} else {
if((state_val_19518 === (2))){
var inst_19514 = (state_19517[(2)]);
var inst_19515 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19517__$1 = (function (){var statearr_19519 = state_19517;
(statearr_19519[(7)] = inst_19514);

return statearr_19519;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19517__$1,inst_19515);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13395__auto__ = null;
var shadow$dom$state_machine__13395__auto____0 = (function (){
var statearr_19520 = [null,null,null,null,null,null,null,null];
(statearr_19520[(0)] = shadow$dom$state_machine__13395__auto__);

(statearr_19520[(1)] = (1));

return statearr_19520;
});
var shadow$dom$state_machine__13395__auto____1 = (function (state_19517){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_19517);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e19522){var ex__13398__auto__ = e19522;
var statearr_19523_20023 = state_19517;
(statearr_19523_20023[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_19517[(4)]))){
var statearr_19524_20026 = state_19517;
(statearr_19524_20026[(1)] = cljs.core.first((state_19517[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20027 = state_19517;
state_19517 = G__20027;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
shadow$dom$state_machine__13395__auto__ = function(state_19517){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13395__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13395__auto____1.call(this,state_19517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13395__auto____0;
shadow$dom$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13395__auto____1;
return shadow$dom$state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_19527 = f__13707__auto__();
(statearr_19527[(6)] = c__13706__auto___20017);

return statearr_19527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
