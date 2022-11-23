goog.provide('clojure.core.rrb_vector.rrbt');
clojure.core.rrb_vector.rrbt.rrbt_concat_threshold = (33);
clojure.core.rrb_vector.rrbt.max_extra_search_steps = (2);

/**
 * @interface
 */
clojure.core.rrb_vector.rrbt.IVecImpl = function(){};

var clojure$core$rrb_vector$rrbt$IVecImpl$_tail_offset$dyn_8374 = (function (v){
var x__5393__auto__ = (((v == null))?null:v);
var m__5394__auto__ = (clojure.core.rrb_vector.rrbt._tail_offset[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(v) : m__5394__auto__.call(null,v));
} else {
var m__5392__auto__ = (clojure.core.rrb_vector.rrbt._tail_offset["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(v) : m__5392__auto__.call(null,v));
} else {
throw cljs.core.missing_protocol("IVecImpl.-tail-offset",v);
}
}
});
clojure.core.rrb_vector.rrbt._tail_offset = (function clojure$core$rrb_vector$rrbt$_tail_offset(v){
if((((!((v == null)))) && ((!((v.clojure$core$rrb_vector$rrbt$IVecImpl$_tail_offset$arity$1 == null)))))){
return v.clojure$core$rrb_vector$rrbt$IVecImpl$_tail_offset$arity$1(v);
} else {
return clojure$core$rrb_vector$rrbt$IVecImpl$_tail_offset$dyn_8374(v);
}
});

var clojure$core$rrb_vector$rrbt$IVecImpl$_array_for$dyn_8375 = (function (v,i){
var x__5393__auto__ = (((v == null))?null:v);
var m__5394__auto__ = (clojure.core.rrb_vector.rrbt._array_for[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(v,i) : m__5394__auto__.call(null,v,i));
} else {
var m__5392__auto__ = (clojure.core.rrb_vector.rrbt._array_for["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(v,i) : m__5392__auto__.call(null,v,i));
} else {
throw cljs.core.missing_protocol("IVecImpl.-array-for",v);
}
}
});
clojure.core.rrb_vector.rrbt._array_for = (function clojure$core$rrb_vector$rrbt$_array_for(v,i){
if((((!((v == null)))) && ((!((v.clojure$core$rrb_vector$rrbt$IVecImpl$_array_for$arity$2 == null)))))){
return v.clojure$core$rrb_vector$rrbt$IVecImpl$_array_for$arity$2(v,i);
} else {
return clojure$core$rrb_vector$rrbt$IVecImpl$_array_for$dyn_8375(v,i);
}
});


/**
 * @interface
 */
clojure.core.rrb_vector.rrbt.AsRRBT = function(){};

var clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$dyn_8376 = (function (v){
var x__5393__auto__ = (((v == null))?null:v);
var m__5394__auto__ = (clojure.core.rrb_vector.rrbt._as_rrbt[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(v) : m__5394__auto__.call(null,v));
} else {
var m__5392__auto__ = (clojure.core.rrb_vector.rrbt._as_rrbt["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(v) : m__5392__auto__.call(null,v));
} else {
throw cljs.core.missing_protocol("AsRRBT.-as-rrbt",v);
}
}
});
clojure.core.rrb_vector.rrbt._as_rrbt = (function clojure$core$rrb_vector$rrbt$_as_rrbt(v){
if((((!((v == null)))) && ((!((v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 == null)))))){
return v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1(v);
} else {
return clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$dyn_8376(v);
}
});


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ASeq}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.rrb_vector.rrbt.RRBChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179858668;
this.cljs$lang$protocol_mask$partition1$ = 1536;
});
(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,this$__$1);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__8300 = self__.vec;
var G__8301 = self__.node;
var G__8302 = self__.i;
var G__8303 = (self__.off + (1));
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4(G__8300,G__8301,G__8302,G__8303) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,G__8300,G__8301,G__8302,G__8303));
})();
if((s == null)){
return null;
} else {
return s;
}
} else {
return coll__$1.cljs$core$IChunkedNext$_chunked_next$arity$1(null);
}
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(self__.vec,(self__.i + self__.off),cljs.core.count(self__.vec)),f);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(self__.vec,(self__.i + self__.off),cljs.core.count(self__.vec)),f,start);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__8304 = self__.vec;
var G__8305 = self__.node;
var G__8306 = self__.i;
var G__8307 = (self__.off + (1));
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4(G__8304,G__8305,G__8306,G__8307) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,G__8304,G__8305,G__8306,G__8307));
})();
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return coll__$1.cljs$core$IChunkedSeq$_chunked_rest$arity$1(null);
}
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count(self__.vec)))?(function (){var G__8308 = self__.vec;
var G__8309 = (self__.i + l);
var G__8310 = (0);
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3(G__8308,G__8309,G__8310) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,G__8308,G__8309,G__8310));
})():null);
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5(self__.vec,self__.node,self__.i,self__.off,m) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m));
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count(self__.vec)))?(function (){var G__8311 = self__.vec;
var G__8312 = (self__.i + l);
var G__8313 = (0);
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3(G__8311,G__8312,G__8313) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,G__8311,G__8312,G__8313));
})():null);
if((s == null)){
return null;
} else {
return s;
}
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$type = true);

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/RRBChunkedSeq");

(clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"clojure.core.rrb-vector.rrbt/RRBChunkedSeq");
}));

/**
 * Positional factory function for clojure.core.rrb-vector.rrbt/RRBChunkedSeq.
 */
clojure.core.rrb_vector.rrbt.__GT_RRBChunkedSeq = (function clojure$core$rrb_vector$rrbt$__GT_RRBChunkedSeq(vec,node,i,off,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,__hash));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq = (function clojure$core$rrb_vector$rrbt$rrb_chunked_seq(var_args){
var G__8315 = arguments.length;
switch (G__8315) {
case 3:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 = (function (vec,i,off){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,clojure.core.rrb_vector.rrbt._array_for(vec,i),i,off,null,null));
}));

(clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 = (function (vec,node,i,off){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,null,null));
}));

(clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 = (function (vec,node,i,off,meta){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,null));
}));

(clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$lang$maxFixedArity = 5);

clojure.core.rrb_vector.rrbt.slice_right = (function clojure$core$rrb_vector$rrbt$slice_right(node,shift,end){
if((shift === (0))){
var arr = node.arr;
var new_arr = (new Array(end));
cljs.core.array_copy(arr,(0),new_arr,(0),end);

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_(node);
var rngs = (((!(reg_QMARK_)))?clojure.core.rrb_vector.nodes.node_ranges(node):null);
var i = (((end - (1)) >> shift) & (31));
var i__$1 = ((reg_QMARK_)?i:(function (){var j = i;
while(true){
if((end <= (rngs[j]))){
return j;
} else {
var G__8385 = (j + (1));
j = G__8385;
continue;
}
break;
}
})());
var child_end = ((reg_QMARK_)?(function (){var ce = cljs.core.mod(end,((1) << shift));
if((ce === (0))){
return ((1) << shift);
} else {
return ce;
}
})():(((i__$1 > (0)))?(end - (rngs[(i__$1 - (1))])):end));
var arr = node.arr;
var new_child = (function (){var G__8316 = (arr[i__$1]);
var G__8317 = (shift - (5));
var G__8318 = child_end;
return (clojure.core.rrb_vector.rrbt.slice_right.cljs$core$IFn$_invoke$arity$3 ? clojure.core.rrb_vector.rrbt.slice_right.cljs$core$IFn$_invoke$arity$3(G__8316,G__8317,G__8318) : clojure.core.rrb_vector.rrbt.slice_right.call(null,G__8316,G__8317,G__8318));
})();
var regular_child_QMARK_ = (((shift === (5)))?((32) === new_child.arr.length):clojure.core.rrb_vector.nodes.regular_QMARK_(new_child));
var new_arr = (new Array(((((reg_QMARK_) && (regular_child_QMARK_)))?(32):(33))));
var new_child_rng = ((regular_child_QMARK_)?(function (){var m = cljs.core.mod(child_end,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(((shift === (5)))?new_child.arr.length:clojure.core.rrb_vector.nodes.last_range(new_child)));
cljs.core.array_copy(arr,(0),new_arr,(0),i__$1);

(new_arr[i__$1] = new_child);

if((!(((reg_QMARK_) && (regular_child_QMARK_))))){
var new_rngs_8386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step_8387 = ((1) << shift);
if(reg_QMARK_){
var n__5636__auto___8388 = i__$1;
var j_8389 = (0);
while(true){
if((j_8389 < n__5636__auto___8388)){
(new_rngs_8386[j_8389] = ((j_8389 + (1)) * step_8387));

var G__8390 = (j_8389 + (1));
j_8389 = G__8390;
continue;
} else {
}
break;
}
} else {
var n__5636__auto___8391 = i__$1;
var j_8392 = (0);
while(true){
if((j_8392 < n__5636__auto___8391)){
(new_rngs_8386[j_8392] = (rngs[j_8392]));

var G__8393 = (j_8392 + (1));
j_8392 = G__8393;
continue;
} else {
}
break;
}
}

(new_rngs_8386[i__$1] = ((((i__$1 > (0)))?(new_rngs_8386[(i__$1 - (1))]):(0)) + new_child_rng));

(new_rngs_8386[(32)] = (i__$1 + (1)));

(new_arr[(32)] = new_rngs_8386);
} else {
}

return cljs.core.__GT_VectorNode(null,new_arr);
}
});
clojure.core.rrb_vector.rrbt.slice_left = (function clojure$core$rrb_vector$rrbt$slice_left(node,shift,start,end){
if((shift === (0))){
var arr = node.arr;
var new_len = (arr.length - start);
var new_arr = (new Array(new_len));
cljs.core.array_copy(arr,start,new_arr,(0),new_len);

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_(node);
var arr = node.arr;
var rngs = (((!(reg_QMARK_)))?clojure.core.rrb_vector.nodes.node_ranges(node):null);
var i = ((start >> shift) & (31));
var i__$1 = ((reg_QMARK_)?i:(function (){var j = i;
while(true){
if((start < (rngs[j]))){
return j;
} else {
var G__8394 = (j + (1));
j = G__8394;
continue;
}
break;
}
})());
var len = ((reg_QMARK_)?(function (){var i__$2 = i__$1;
while(true){
if((((i__$2 === (32))) || (((arr[i__$2]) == null)))){
return i__$2;
} else {
var G__8395 = (i__$2 + (1));
i__$2 = G__8395;
continue;
}
break;
}
})():(rngs[(32)]));
var child_start = (((i__$1 > (0)))?(start - ((reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):start);
var child_end = ((reg_QMARK_)?(function (){var x__5133__auto__ = ((1) << shift);
var y__5134__auto__ = (((i__$1 > (0)))?(end - (i__$1 * ((1) << shift))):end);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})():(function (){var capped_end = (function (){var x__5133__auto__ = (rngs[i__$1]);
var y__5134__auto__ = end;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
if((i__$1 > (0))){
return (capped_end - (rngs[(i__$1 - (1))]));
} else {
return capped_end;
}
})());
var new_child = (function (){var G__8319 = (arr[i__$1]);
var G__8320 = (shift - (5));
var G__8321 = child_start;
var G__8322 = child_end;
return (clojure.core.rrb_vector.rrbt.slice_left.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.rrbt.slice_left.cljs$core$IFn$_invoke$arity$4(G__8319,G__8320,G__8321,G__8322) : clojure.core.rrb_vector.rrbt.slice_left.call(null,G__8319,G__8320,G__8321,G__8322));
})();
var new_len = (len - i__$1);
var new_len__$1 = (((new_child == null))?(new_len - (1)):new_len);
if((new_len__$1 === (0))){
return null;
} else {
if(reg_QMARK_){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rng0 = (((((new_child == null)) || ((((shift === (5))) || (clojure.core.rrb_vector.nodes.regular_QMARK_(new_child))))))?(((1) << shift) - ((start >> (shift - (5))) & (31))):clojure.core.rrb_vector.nodes.last_range(new_child));
var step = ((1) << shift);
var j_8398 = (0);
var r_8399 = rng0;
while(true){
if((j_8398 < new_len__$1)){
(rngs__$1[j_8398] = r_8399);

var G__8400 = (j_8398 + (1));
var G__8401 = (r_8399 + step);
j_8398 = G__8400;
r_8399 = G__8401;
continue;
} else {
}
break;
}

if((new_len__$1 > (1))){
(rngs__$1[(new_len__$1 - (1))] = (end - start));
} else {
}

(rngs__$1[(32)] = new_len__$1);

cljs.core.array_copy(arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if((!((new_child == null)))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = rngs__$1);

return cljs.core.__GT_VectorNode(node.edit,new_arr);
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var j_8402 = (0);
var i_8403__$2 = i__$1;
while(true){
if((j_8402 < new_len__$1)){
(new_rngs[j_8402] = ((rngs[i_8403__$2]) - start));

var G__8404 = (j_8402 + (1));
var G__8405 = (i_8403__$2 + (1));
j_8402 = G__8404;
i_8403__$2 = G__8405;
continue;
} else {
}
break;
}

(new_rngs[(32)] = new_len__$1);

cljs.core.array_copy(arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if((!((new_child == null)))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = new_rngs);

return cljs.core.__GT_VectorNode(node.edit,new_arr);

}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {clojure.core.rrb_vector.rrbt.AsRRBT}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {clojure.core.rrb_vector.protocols.PSliceableVector}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IMapEntry}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {clojure.core.rrb_vector.protocols.PSpliceableVector}
 * @implements {clojure.core.rrb_vector.rrbt.IVecImpl}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
clojure.core.rrb_vector.rrbt.Vector = (function (cnt,shift,root,tail,meta,__hash){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2315152159;
this.cljs$lang$protocol_mask$partition1$ = 2052;
});
(clojure.core.rrb_vector.rrbt.Vector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,k,null);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
return init;
} else {
var i = (0);
var j = (0);
var init__$1 = init;
var arr = this$__$1.clojure$core$rrb_vector$rrbt$IVecImpl$_array_for$arity$2(null,i);
var lim = (arr.length - (1));
var step = (lim + (1));
while(true){
var init__$2 = (function (){var G__8327 = init__$1;
var G__8328 = (i + j);
var G__8329 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8327,G__8328,G__8329) : f.call(null,G__8327,G__8328,G__8329));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return cljs.core.deref(init__$2);
} else {
if((j < lim)){
var G__8413 = i;
var G__8414 = (j + (1));
var G__8415 = init__$2;
var G__8416 = arr;
var G__8417 = lim;
var G__8418 = step;
i = G__8413;
j = G__8414;
init__$1 = G__8415;
arr = G__8416;
lim = G__8417;
step = G__8418;
continue;
} else {
var i__$1 = (i + step);
if((i__$1 < self__.cnt)){
var arr__$1 = this$__$1.clojure$core$rrb_vector$rrbt$IVecImpl$_array_for$arity$2(null,i__$1);
var len = arr__$1.length;
var lim__$1 = (len - (1));
var G__8419 = i__$1;
var G__8420 = (0);
var G__8421 = init__$2;
var G__8422 = arr__$1;
var G__8423 = lim__$1;
var G__8424 = len;
i = G__8419;
j = G__8420;
init__$1 = G__8421;
arr = G__8422;
lim = G__8423;
step = G__8424;
continue;
} else {
return init__$2;
}
}
}
break;
}
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if(((((0) <= i)) && ((i < self__.cnt)))){
var tail_off = (self__.cnt - self__.tail.length);
if((tail_off <= i)){
return (self__.tail[(i - tail_off)]);
} else {
var i__$1 = i;
var node = self__.root;
var shift__$1 = self__.shift;
while(true){
if((shift__$1 === (0))){
var arr = node.arr;
return (arr[((i__$1 >> shift__$1) & (31))]);
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
var arr = node.arr;
var idx = ((i__$1 >> shift__$1) & (31));
var i__$2 = i__$1;
var node__$1 = (arr[idx]);
var shift__$2 = (shift__$1 - (5));
while(true){
var arr__$1 = node__$1.arr;
var idx__$1 = ((i__$2 >> shift__$2) & (31));
if((shift__$2 === (0))){
return (arr__$1[idx__$1]);
} else {
var G__8427 = i__$2;
var G__8428 = (arr__$1[idx__$1]);
var G__8429 = (shift__$2 - (5));
i__$2 = G__8427;
node__$1 = G__8428;
shift__$2 = G__8429;
continue;
}
break;
}
} else {
var arr = node.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(node);
var idx = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__8431 = (j + (1));
j = G__8431;
continue;
}
break;
}
})();
var i__$2 = (((idx === (0)))?i__$1:(i__$1 - (rngs[(idx - (1))])));
var G__8432 = i__$2;
var G__8433 = (arr[idx]);
var G__8434 = (shift__$1 - (5));
i__$1 = G__8432;
node = G__8433;
shift__$1 = G__8434;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if((((i >= (0))) && ((i < self__.cnt)))){
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,i);
} else {
return not_found;
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,this$__$1);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if(((((0) <= i)) && ((i < self__.cnt)))){
var tail_off = this$__$1.clojure$core$rrb_vector$rrbt$IVecImpl$_tail_offset$arity$1(null);
if((i >= tail_off)){
var new_tail = (new Array(self__.tail.length));
var idx = (i - tail_off);
cljs.core.array_copy(self__.tail,(0),new_tail,(0),self__.tail.length);

(new_tail[idx] = val);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,clojure.core.rrb_vector.trees.do_assoc(self__.shift,self__.root,i,val),self__.tail,self__.meta,null));
}
} else {
if((i === self__.cnt)){
return this$__$1.cljs$core$ICollection$_conj$arity$2(null,val);
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);

}
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,(0));
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,(1));
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,(self__.cnt - (1)));
} else {
return null;
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if((self__.tail.length > (1))){
var new_tail = (new Array((self__.tail.length - (1))));
cljs.core.array_copy(self__.tail,(0),new_tail,(0),new_tail.length);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var new_tail = this$__$1.clojure$core$rrb_vector$rrbt$IVecImpl$_array_for$arity$2(null,(self__.cnt - (2)));
var root_cnt = this$__$1.clojure$core$rrb_vector$rrbt$IVecImpl$_tail_offset$arity$1(null);
var new_root = clojure.core.rrb_vector.trees.pop_tail(self__.shift,root_cnt,self__.root.edit,self__.root);
if((new_root == null)){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
if((((self__.shift > (5))) && (((new_root.arr[(1)]) == null)))){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),(self__.shift - (5)),(new_root.arr[(0)]),new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,new_root,new_tail,self__.meta,null));

}
}

}
}
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(this$__$1,(self__.cnt - (1)),null));
} else {
return null;
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = cljs.core.hash_ordered_coll(this$__$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential(this$__$1,that);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__8330 = self__.cnt;
var G__8331 = self__.shift;
var G__8332 = clojure.core.rrb_vector.transients.editable_root(self__.root);
var G__8333 = clojure.core.rrb_vector.transients.editable_tail(self__.tail);
var G__8334 = self__.tail.length;
return (clojure.core.rrb_vector.rrbt.__GT_Transient.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.rrbt.__GT_Transient.cljs$core$IFn$_invoke$arity$5(G__8330,G__8331,G__8332,G__8333,G__8334) : clojure.core.rrb_vector.rrbt.__GT_Transient.call(null,G__8330,G__8331,G__8332,G__8333,G__8334));
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3 = (function (this$,start,end){
var self__ = this;
var this$__$1 = this;
var new_cnt = (end - start);
if((((start < (0))) || ((end > self__.cnt)))){
throw (new Error("vector index out of bounds"));
} else {
if((start === end)){
return cljs.core.empty(this$__$1);
} else {
if((start > end)){
throw (new Error("start index greater than end index"));
} else {
var tail_off = this$__$1.clojure$core$rrb_vector$rrbt$IVecImpl$_tail_offset$arity$1(null);
if((start >= tail_off)){
var new_tail = (new Array(new_cnt));
cljs.core.array_copy(self__.tail,(start - tail_off),new_tail,(0),new_cnt);

return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var tail_cut_QMARK_ = (end > tail_off);
var new_root = ((tail_cut_QMARK_)?self__.root:clojure.core.rrb_vector.rrbt.slice_right(self__.root,self__.shift,end));
var new_root__$1 = (((start === (0)))?new_root:clojure.core.rrb_vector.rrbt.slice_left(new_root,self__.shift,start,(function (){var x__5133__auto__ = end;
var y__5134__auto__ = tail_off;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()));
var new_tail = ((tail_cut_QMARK_)?(function (){var new_len = (end - tail_off);
var new_tail = (new Array(new_len));
cljs.core.array_copy(self__.tail,(0),new_tail,(0),new_len);

return new_tail;
})():(new clojure.core.rrb_vector.rrbt.Vector(new_cnt,self__.shift,new_root__$1,[],self__.meta,null)).clojure$core$rrb_vector$rrbt$IVecImpl$_array_for$arity$2(null,(new_cnt - (1))));
var new_root__$2 = ((tail_cut_QMARK_)?new_root__$1:clojure.core.rrb_vector.trees.pop_tail(self__.shift,new_cnt,new_root__$1.edit,new_root__$1));
if((new_root__$2 == null)){
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var r = new_root__$2;
var s = self__.shift;
while(true){
if((((s > (5))) && (((r.arr[(1)]) == null)))){
var G__8442 = (r.arr[(0)]);
var G__8443 = (s - (5));
r = G__8442;
s = G__8443;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,s,r,new_tail,self__.meta,null));
}
break;
}
}
}

}
}
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$IVecImpl$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$IVecImpl$_tail_offset$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (self__.cnt - self__.tail.length);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$IVecImpl$_array_for$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if(((((0) <= i)) && ((i < self__.cnt)))){
if((i >= this$__$1.clojure$core$rrb_vector$rrbt$IVecImpl$_tail_offset$arity$1(null))){
return self__.tail;
} else {
var i__$1 = i;
var node = self__.root;
var shift__$1 = self__.shift;
while(true){
if((shift__$1 === (0))){
return node.arr;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
var node__$1 = (node.arr[((i__$1 >> shift__$1) & (31))]);
var shift__$2 = (shift__$1 - (5));
while(true){
if((shift__$2 === (0))){
return node__$1.arr;
} else {
var G__8448 = (node__$1.arr[((i__$1 >> shift__$2) & (31))]);
var G__8449 = (shift__$2 - (5));
node__$1 = G__8448;
shift__$2 = G__8449;
continue;
}
break;
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(node);
var j = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__8450 = (j + (1));
j = G__8450;
continue;
}
break;
}
})();
var i__$2 = (((j > (0)))?(i__$1 - (rngs[(j - (1))])):i__$1);
var G__8451 = i__$2;
var G__8452 = (node.arr[j]);
var G__8453 = (shift__$1 - (5));
i__$1 = G__8451;
node = G__8452;
shift__$1 = G__8453;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this$__$1,f);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this$__$1,f,start);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IVector$_assoc_n$arity$3(null,k,v);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((this$__$1.clojure$core$rrb_vector$rrbt$IVecImpl$_tail_offset$arity$1(null) === (0))){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(self__.tail);
} else {
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3(this$__$1,(0),(0));

}
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,self__.tail,meta__$1,self__.__hash));
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val){
var self__ = this;
var this$__$1 = this;
if((self__.tail.length < (32))){
var tail_len = self__.tail.length;
var new_tail = (new Array((tail_len + (1))));
cljs.core.array_copy(self__.tail,(0),new_tail,(0),tail_len);

(new_tail[tail_len] = val);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var tail_node = cljs.core.__GT_VectorNode(self__.root.edit,self__.tail);
var new_tail = (function (){var new_arr = [null];
(new_arr[(0)] = val);

return new_arr;
})();
if(clojure.core.rrb_vector.nodes.overflow_QMARK_(self__.root,self__.shift,self__.cnt)){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(self__.root)){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);
var G__8335_8455 = new_arr;
(G__8335_8455[(0)] = self__.root);

(G__8335_8455[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.node_ranges(self__.root)[(31)]);
var G__8336_8456 = new_arr;
(G__8336_8456[(0)] = self__.root);

(G__8336_8456[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));

(G__8336_8456[(32)] = new_rngs);


var G__8337_8457 = new_rngs;
(G__8337_8457[(0)] = root_total_range);

(G__8337_8457[(1)] = (root_total_range + (32)));

(G__8337_8457[(32)] = (2));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
}
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,clojure.core.rrb_vector.trees.push_tail(self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node),new_tail,self__.meta,null));
}
}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.call = (function (unused__10304__auto__){
var self__ = this;
var self__ = this;
var G__8338 = (arguments.length - (1));
switch (G__8338) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.apply = (function (self__,args8323){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8323)));
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$IIndexed$_nth$arity$2(null,k);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(this$__$1,that);
}));

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
var G__8339 = this$__$1;
var G__8340 = clojure.core.rrb_vector.rrbt._as_rrbt(that);
return (clojure.core.rrb_vector.rrbt.splice_rrbts.cljs$core$IFn$_invoke$arity$2 ? clojure.core.rrb_vector.rrbt.splice_rrbts.cljs$core$IFn$_invoke$arity$2(G__8339,G__8340) : clojure.core.rrb_vector.rrbt.splice_rrbts.call(null,G__8339,G__8340));
}));

(clojure.core.rrb_vector.rrbt.Vector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(clojure.core.rrb_vector.rrbt.Vector.cljs$lang$type = true);

(clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Vector");

(clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"clojure.core.rrb-vector.rrbt/Vector");
}));

/**
 * Positional factory function for clojure.core.rrb-vector.rrbt/Vector.
 */
clojure.core.rrb_vector.rrbt.__GT_Vector = (function clojure$core$rrb_vector$rrbt$__GT_Vector(cnt,shift,root,tail,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.Vector(cnt,shift,root,tail,meta,__hash));
});

(cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(cljs.core.count(this$__$1),this$__$1.shift,this$__$1.root,this$__$1.tail,cljs.core.meta(this$__$1),null));
}));

(cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
var v = this$__$1.v;
var start = this$__$1.start;
var end = this$__$1.end;
return clojure.core.rrb_vector.protocols._slicev(clojure.core.rrb_vector.rrbt._as_rrbt(v),start,end);
}));
clojure.core.rrb_vector.rrbt.shift_from_to = (function clojure$core$rrb_vector$rrbt$shift_from_to(node,from,to){
while(true){
if((from === to)){
return node;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
var G__8471 = cljs.core.__GT_VectorNode(node.edit,(function (){var G__8341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__8341[(0)] = node);

return G__8341;
})());
var G__8472 = ((5) + from);
var G__8473 = to;
node = G__8471;
from = G__8472;
to = G__8473;
continue;
} else {
var G__8474 = cljs.core.__GT_VectorNode(node.edit,(function (){var G__8342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__8342[(0)] = node);

(G__8342[(32)] = (function (){var G__8343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__8343[(0)] = clojure.core.rrb_vector.nodes.last_range(node));

(G__8343[(32)] = (1));

return G__8343;
})());

return G__8342;
})());
var G__8475 = ((5) + from);
var G__8476 = to;
node = G__8474;
from = G__8475;
to = G__8476;
continue;

}
}
break;
}
});
clojure.core.rrb_vector.rrbt.slot_count = (function clojure$core$rrb_vector$rrbt$slot_count(node,shift){
var arr = node.arr;
if((shift === (0))){
return arr.length;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
return clojure.core.rrb_vector.nodes.index_of_nil(arr);
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(node);
return (rngs[(32)]);
}
}
});
clojure.core.rrb_vector.rrbt.subtree_branch_count = (function clojure$core$rrb_vector$rrbt$subtree_branch_count(node,shift){
var arr = node.arr;
var cs = (shift - (5));
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
var i = (0);
var sbc = (0);
while(true){
if((i === (32))){
return sbc;
} else {
var temp__5802__auto__ = (arr[i]);
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
var G__8482 = (i + (1));
var G__8483 = (sbc + clojure.core.rrb_vector.rrbt.slot_count(child,cs));
i = G__8482;
sbc = G__8483;
continue;
} else {
return sbc;
}
}
break;
}
} else {
var lim = (clojure.core.rrb_vector.nodes.node_ranges(node)[(32)]);
var i = (0);
var sbc = (0);
while(true){
if((i === lim)){
return sbc;
} else {
var child = (arr[i]);
var G__8487 = (i + (1));
var G__8488 = (sbc + clojure.core.rrb_vector.rrbt.slot_count(child,cs));
i = G__8487;
sbc = G__8488;
continue;
}
break;
}
}
});
clojure.core.rrb_vector.rrbt.leaf_seq = (function clojure$core$rrb_vector$rrbt$leaf_seq(arr){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__8344_SHARP_){
return p1__8344_SHARP_.arr;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.take.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.nodes.index_of_nil(arr),arr)], 0));
});
clojure.core.rrb_vector.rrbt.rebalance_leaves = (function clojure$core$rrb_vector$rrbt$rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves){
var slc1 = clojure.core.rrb_vector.rrbt.slot_count(n1,(5));
var slc2 = clojure.core.rrb_vector.rrbt.slot_count(n2,(5));
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n1,(5));
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n2,(5));
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot((p - (1)),(32)) + (1)));
if((e <= (2))){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var reg_QMARK_ = (cljs.core.mod(p,(32)) === (0));
var new_arr = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr);
var i_8489 = (0);
var bs_8490 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.leaf_seq(n1.arr),clojure.core.rrb_vector.rrbt.leaf_seq(n2.arr)));
while(true){
var temp__5804__auto___8491 = cljs.core.seq(bs_8490);
if(temp__5804__auto___8491){
var xs__6360__auto___8492 = temp__5804__auto___8491;
var block_8493 = cljs.core.first(xs__6360__auto___8492);
var a_8494__$1 = (new Array(cljs.core.count(block_8493)));
var i_8495__$1 = (0);
var xs_8496 = cljs.core.seq(block_8493);
while(true){
if(xs_8496){
(a_8494__$1[i_8495__$1] = cljs.core.first(xs_8496));

var G__8497 = (i_8495__$1 + (1));
var G__8498 = cljs.core.next(xs_8496);
i_8495__$1 = G__8497;
xs_8496 = G__8498;
continue;
} else {
}
break;
}

(new_arr[i_8489] = cljs.core.__GT_VectorNode(null,a_8494__$1));

var G__8499 = (i_8489 + (1));
var G__8500 = cljs.core.next(bs_8490);
i_8489 = G__8499;
bs_8490 = G__8500;
continue;
} else {
}
break;
}

if((!(reg_QMARK_))){
(new_arr[(32)] = clojure.core.rrb_vector.nodes.regular_ranges((5),p));
} else {
}

(transferred_leaves.val = sbc2);

return [new_n1,null];
} else {
var reg_QMARK_ = (cljs.core.mod(p,(32)) === (0));
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode(null,new_arr2);
var i_8505 = (0);
var bs_8506 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.leaf_seq(n1.arr),clojure.core.rrb_vector.rrbt.leaf_seq(n2.arr)));
while(true){
var temp__5804__auto___8507 = cljs.core.seq(bs_8506);
if(temp__5804__auto___8507){
var xs__6360__auto___8508 = temp__5804__auto___8507;
var block_8509 = cljs.core.first(xs__6360__auto___8508);
var a_8510__$1 = (new Array(cljs.core.count(block_8509)));
var i_8511__$1 = (0);
var xs_8512 = cljs.core.seq(block_8509);
while(true){
if(xs_8512){
(a_8510__$1[i_8511__$1] = cljs.core.first(xs_8512));

var G__8514 = (i_8511__$1 + (1));
var G__8515 = cljs.core.next(xs_8512);
i_8511__$1 = G__8514;
xs_8512 = G__8515;
continue;
} else {
}
break;
}

if((i_8505 < (32))){
(new_arr1[i_8505] = cljs.core.__GT_VectorNode(null,a_8510__$1));
} else {
(new_arr2[(i_8505 - (32))] = cljs.core.__GT_VectorNode(null,a_8510__$1));
}

var G__8519 = (i_8505 + (1));
var G__8520 = cljs.core.next(bs_8506);
i_8505 = G__8519;
bs_8506 = G__8520;
continue;
} else {
}
break;
}

if((!(reg_QMARK_))){
(new_arr2[(32)] = clojure.core.rrb_vector.nodes.regular_ranges((5),(p - (1024))));
} else {
}

(transferred_leaves.val = ((1024) - sbc1));

return [new_n1,new_n2];

}
}
});
clojure.core.rrb_vector.rrbt.child_seq = (function clojure$core$rrb_vector$rrbt$child_seq(node,shift,cnt){
var arr = node.arr;
var rngs = ((clojure.core.rrb_vector.nodes.regular_QMARK_(node))?clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt):clojure.core.rrb_vector.nodes.node_ranges(node));
var cs = (cljs.core.truth_(rngs)?(rngs[(32)]):clojure.core.rrb_vector.nodes.index_of_nil(arr));
var cseq = (function clojure$core$rrb_vector$rrbt$child_seq_$_cseq(c,r){
var arr__$1 = c.arr;
var rngs__$1 = ((clojure.core.rrb_vector.nodes.regular_QMARK_(c))?clojure.core.rrb_vector.nodes.regular_ranges((shift - (5)),r):clojure.core.rrb_vector.nodes.node_ranges(c));
var gcs = (cljs.core.truth_(rngs__$1)?(rngs__$1[(32)]):clojure.core.rrb_vector.nodes.index_of_nil(arr__$1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,cljs.core.take.cljs$core$IFn$_invoke$arity$2(gcs,arr__$1),cljs.core.take.cljs$core$IFn$_invoke$arity$2(gcs,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,rngs__$1,cljs.core.cons((0),rngs__$1))));
});
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cseq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.take.cljs$core$IFn$_invoke$arity$2(cs,arr),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cs,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,rngs,cljs.core.cons((0),rngs)))], 0));
});
clojure.core.rrb_vector.rrbt.rebalance = (function clojure$core$rrb_vector$rrbt$rebalance(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((n2 == null)){
return [n1,null];
} else {
var slc1 = clojure.core.rrb_vector.rrbt.slot_count(n1,shift);
var slc2 = clojure.core.rrb_vector.rrbt.slot_count(n2,shift);
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n1,shift);
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n2,shift);
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot((p - (1)),(32)) + (1)));
if((e <= (2))){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr);
var i_8531 = (0);
var bs_8532 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.child_seq(n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq(n2,shift,cnt2)));
while(true){
var temp__5804__auto___8533 = cljs.core.seq(bs_8532);
if(temp__5804__auto___8533){
var xs__6360__auto___8534 = temp__5804__auto___8533;
var block_8535 = cljs.core.first(xs__6360__auto___8534);
var a_8536__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_8537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_8536__$1[(32)] = r_8537);

(r_8537[(32)] = cljs.core.count(block_8535));

var i_8539__$1 = (0);
var o_8540 = (0);
var gcs_8541 = cljs.core.seq(block_8535);
while(true){
var temp__5804__auto___8542__$1 = cljs.core.seq(gcs_8541);
if(temp__5804__auto___8542__$1){
var xs__6360__auto___8543__$1 = temp__5804__auto___8542__$1;
var vec__8345_8544 = cljs.core.first(xs__6360__auto___8543__$1);
var gc_8545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8345_8544,(0),null);
var gcr_8546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8345_8544,(1),null);
(a_8536__$1[i_8539__$1] = gc_8545);

(r_8537[i_8539__$1] = (o_8540 + gcr_8546));

var G__8547 = (i_8539__$1 + (1));
var G__8548 = (o_8540 + gcr_8546);
var G__8549 = cljs.core.next(gcs_8541);
i_8539__$1 = G__8547;
o_8540 = G__8548;
gcs_8541 = G__8549;
continue;
} else {
}
break;
}

(new_arr[i_8531] = cljs.core.__GT_VectorNode(null,a_8536__$1));

(new_rngs[i_8531] = ((r_8537[((r_8537[(32)]) - (1))]) + (((i_8531 > (0)))?(new_rngs[(i_8531 - (1))]):(0))));

(new_rngs[(32)] = (i_8531 + (1)));

var G__8552 = (i_8531 + (1));
var G__8553 = cljs.core.next(bs_8532);
i_8531 = G__8552;
bs_8532 = G__8553;
continue;
} else {
}
break;
}

(new_arr[(32)] = new_rngs);

(transferred_leaves.val = cnt2);

return [new_n1,null];
} else {
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode(null,new_arr2);
var i_8557 = (0);
var bs_8558 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.child_seq(n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq(n2,shift,cnt2)));
while(true){
var temp__5804__auto___8559 = cljs.core.seq(bs_8558);
if(temp__5804__auto___8559){
var xs__6360__auto___8560 = temp__5804__auto___8559;
var block_8561 = cljs.core.first(xs__6360__auto___8560);
var a_8562__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_8563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_8562__$1[(32)] = r_8563);

(r_8563[(32)] = cljs.core.count(block_8561));

var i_8564__$1 = (0);
var o_8565 = (0);
var gcs_8566 = cljs.core.seq(block_8561);
while(true){
var temp__5804__auto___8567__$1 = cljs.core.seq(gcs_8566);
if(temp__5804__auto___8567__$1){
var xs__6360__auto___8568__$1 = temp__5804__auto___8567__$1;
var vec__8348_8569 = cljs.core.first(xs__6360__auto___8568__$1);
var gc_8570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8348_8569,(0),null);
var gcr_8571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8348_8569,(1),null);
(a_8562__$1[i_8564__$1] = gc_8570);

(r_8563[i_8564__$1] = (o_8565 + gcr_8571));

var G__8572 = (i_8564__$1 + (1));
var G__8573 = (o_8565 + gcr_8571);
var G__8574 = cljs.core.next(gcs_8566);
i_8564__$1 = G__8572;
o_8565 = G__8573;
gcs_8566 = G__8574;
continue;
} else {
}
break;
}

if((((i_8557 < (32))) && ((((i_8557 * (32)) + cljs.core.count(block_8561)) > sbc1)))){
var tbs_8575 = (((i_8557 * (32)) + cljs.core.count(block_8561)) - sbc1);
var li_8576 = ((r_8563[(32)]) - (1));
var d_8577 = (((tbs_8575 >= (32)))?(r_8563[li_8576]):((r_8563[li_8576]) - (r_8563[(li_8576 - tbs_8575)])));
(transferred_leaves.val = (transferred_leaves.val + d_8577));
} else {
}

var new_arr_8578 = (((i_8557 < (32)))?new_arr1:new_arr2);
var new_rngs_8579 = (((i_8557 < (32)))?new_rngs1:new_rngs2);
var i_8580__$1 = cljs.core.mod(i_8557,(32));
(new_arr_8578[i_8580__$1] = cljs.core.__GT_VectorNode(null,a_8562__$1));

(new_rngs_8579[i_8580__$1] = ((r_8563[((r_8563[(32)]) - (1))]) + (((i_8580__$1 > (0)))?(new_rngs_8579[(i_8580__$1 - (1))]):(0))));

(new_rngs_8579[(32)] = (i_8580__$1 + (1)));

var G__8581 = (i_8557 + (1));
var G__8582 = cljs.core.next(bs_8558);
i_8557 = G__8581;
bs_8558 = G__8582;
continue;
} else {
}
break;
}

(new_arr1[(32)] = new_rngs1);

(new_arr2[(32)] = new_rngs2);

return [new_n1,new_n2];

}
}
}
});
clojure.core.rrb_vector.rrbt.zippath = (function clojure$core$rrb_vector$rrbt$zippath(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((shift === (5))){
return clojure.core.rrb_vector.rrbt.rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves);
} else {
var c1 = clojure.core.rrb_vector.nodes.last_child(n1);
var c2 = clojure.core.rrb_vector.nodes.first_child(n2);
var ccnt1 = ((clojure.core.rrb_vector.nodes.regular_QMARK_(n1))?(function (){var m = cljs.core.mod(cnt1,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(function (){var rngs = clojure.core.rrb_vector.nodes.node_ranges(n1);
var i = ((rngs[(32)]) - (1));
if((i === (0))){
return (rngs[(0)]);
} else {
return ((rngs[i]) - (rngs[(i - (1))]));
}
})());
var ccnt2 = ((clojure.core.rrb_vector.nodes.regular_QMARK_(n2))?(function (){var m = cljs.core.mod(cnt2,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(clojure.core.rrb_vector.nodes.node_ranges(n2)[(0)]));
var next_transferred_leaves = (new cljs.core.Box((0)));
var vec__8351 = (function (){var G__8354 = (shift - (5));
var G__8355 = c1;
var G__8356 = ccnt1;
var G__8357 = c2;
var G__8358 = ccnt2;
var G__8359 = next_transferred_leaves;
return (clojure.core.rrb_vector.rrbt.zippath.cljs$core$IFn$_invoke$arity$6 ? clojure.core.rrb_vector.rrbt.zippath.cljs$core$IFn$_invoke$arity$6(G__8354,G__8355,G__8356,G__8357,G__8358,G__8359) : clojure.core.rrb_vector.rrbt.zippath.call(null,G__8354,G__8355,G__8356,G__8357,G__8358,G__8359));
})();
var new_c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8351,(0),null);
var new_c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8351,(1),null);
var d = next_transferred_leaves.val;
(transferred_leaves.val = (transferred_leaves.val + d));

return clojure.core.rrb_vector.rrbt.rebalance(shift,(((c1 === new_c1))?n1:clojure.core.rrb_vector.nodes.replace_rightmost_child(shift,n1,new_c1,d)),(cnt1 + d),(cljs.core.truth_(new_c2)?(((c2 === new_c2))?n2:clojure.core.rrb_vector.nodes.replace_leftmost_child(shift,n2,cnt2,new_c2,d)):clojure.core.rrb_vector.nodes.remove_leftmost_child(shift,n2)),(cnt2 - d),transferred_leaves);
}
});
clojure.core.rrb_vector.rrbt.squash_nodes = (function clojure$core$rrb_vector$rrbt$squash_nodes(shift,n1,cnt1,n2,cnt2){
var arr1 = n1.arr;
var arr2 = n2.arr;
var li1 = clojure.core.rrb_vector.nodes.index_of_nil(arr1);
var li2 = clojure.core.rrb_vector.nodes.index_of_nil(arr2);
var slots = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(li1,arr1),cljs.core.take.cljs$core$IFn$_invoke$arity$2(li2,arr2));
if((cljs.core.count(slots) > (32))){
return [n1,n2];
} else {
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs1 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(li1,((clojure.core.rrb_vector.nodes.regular_QMARK_(n1))?clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt1):clojure.core.rrb_vector.nodes.node_ranges(n1)));
var rngs2 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(li2,((clojure.core.rrb_vector.nodes.regular_QMARK_(n2))?clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt2):clojure.core.rrb_vector.nodes.node_ranges(n2)));
var rngs2__$1 = (function (){var r = cljs.core.last(rngs1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8360_SHARP_){
return (p1__8360_SHARP_ + r);
}),rngs2);
})();
var rngs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rngs1,rngs2__$1);
(new_arr[(32)] = new_rngs);

var i_8586 = (0);
var cs_8587 = cljs.core.seq(slots);
while(true){
if(cs_8587){
(new_arr[i_8586] = cljs.core.first(cs_8587));

var G__8589 = (i_8586 + (1));
var G__8590 = cljs.core.next(cs_8587);
i_8586 = G__8589;
cs_8587 = G__8590;
continue;
} else {
}
break;
}

var i_8591 = (0);
var rngs_8592__$1 = cljs.core.seq(rngs);
while(true){
if(rngs_8592__$1){
(new_rngs[i_8591] = cljs.core.first(rngs_8592__$1));

var G__8593 = (i_8591 + (1));
var G__8594 = cljs.core.next(rngs_8592__$1);
i_8591 = G__8593;
rngs_8592__$1 = G__8594;
continue;
} else {
(new_rngs[(32)] = i_8591);
}
break;
}

return [cljs.core.__GT_VectorNode(null,new_arr),null];
}
});
clojure.core.rrb_vector.rrbt.peephole_optimization_config = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-fn","debug-fn",777839250),null], null));
clojure.core.rrb_vector.rrbt.peephole_optimization_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
clojure.core.rrb_vector.rrbt.child_nodes = (function clojure$core$rrb_vector$rrbt$child_nodes(node){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((32),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),node.arr));
});
clojure.core.rrb_vector.rrbt.bounded_grandchildren = (function clojure$core$rrb_vector$rrbt$bounded_grandchildren(children){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((33),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.rrb_vector.rrbt.child_nodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0)));
});
clojure.core.rrb_vector.rrbt.last_non_nil_idx = (function clojure$core$rrb_vector$rrbt$last_non_nil_idx(arr){
var i = (arr.length - (1));
while(true){
if((i < (0))){
return i;
} else {
if(((arr[i]) == null)){
var G__8595 = (i - (1));
i = G__8595;
continue;
} else {
return i;
}
}
break;
}
});
clojure.core.rrb_vector.rrbt.count_vector_elements_beneath = (function clojure$core$rrb_vector$rrbt$count_vector_elements_beneath(node,shift){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
var node__$1 = node;
var shift__$1 = shift;
var acc = (0);
while(true){
if((shift__$1 === (0))){
if((node__$1 == null)){
return acc;
} else {
return (acc + (32));
}
} else {
var arr = node__$1.arr;
var max_child_idx = clojure.core.rrb_vector.rrbt.last_non_nil_idx(arr);
var num_elems_in_full_child = ((1) << shift__$1);
if((max_child_idx < (0))){
return acc;
} else {
var G__8596 = (arr[max_child_idx]);
var G__8597 = (shift__$1 - (5));
var G__8598 = (acc + (max_child_idx * num_elems_in_full_child));
node__$1 = G__8596;
shift__$1 = G__8597;
acc = G__8598;
continue;
}
}
break;
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(node);
return (rngs[((rngs[(32)]) - (1))]);
}
});
clojure.core.rrb_vector.rrbt.peephole_optimize_root = (function clojure$core$rrb_vector$rrbt$peephole_optimize_root(v){
var config = cljs.core.deref(clojure.core.rrb_vector.rrbt.peephole_optimization_config);
if((v.shift <= (10))){
return v;
} else {
var root = v.root;
var children = clojure.core.rrb_vector.rrbt.child_nodes(root);
var grandchildren = clojure.core.rrb_vector.rrbt.bounded_grandchildren(children);
var num_granchildren_bounded = cljs.core.count(grandchildren);
var many_grandchildren_QMARK_ = (num_granchildren_bounded > (32));
if(many_grandchildren_QMARK_){
return v;
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(root.edit,new_arr);
var shift = v.shift;
var grandchild_shift = (shift - ((2) * (5)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.peephole_optimization_count,cljs.core.inc);

var idx_8599 = (0);
var remaining_gc_8600 = grandchildren;
var elem_sum_8601 = (0);
while(true){
var temp__5802__auto___8602 = cljs.core.seq(remaining_gc_8600);
if(temp__5802__auto___8602){
var remaining_gc_8603__$1 = temp__5802__auto___8602;
var grandchild_8604 = cljs.core.first(remaining_gc_8603__$1);
var num_elems_this_grandchild_8605 = clojure.core.rrb_vector.rrbt.count_vector_elements_beneath(grandchild_8604,grandchild_shift);
var next_elem_sum_8606 = (elem_sum_8601 + num_elems_this_grandchild_8605);
(new_arr[idx_8599] = grandchild_8604);

(new_rngs[idx_8599] = next_elem_sum_8606);

var G__8607 = (idx_8599 + (1));
var G__8608 = cljs.core.rest(remaining_gc_8603__$1);
var G__8609 = next_elem_sum_8606;
idx_8599 = G__8607;
remaining_gc_8600 = G__8608;
elem_sum_8601 = G__8609;
continue;
} else {
}
break;
}

(new_rngs[(32)] = num_granchildren_bounded);

(new_arr[(32)] = new_rngs);

var new_v = (new clojure.core.rrb_vector.rrbt.Vector(v.cnt,(shift - (5)),new_root,v.tail,v.meta,null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug-fn","debug-fn",777839250).cljs$core$IFn$_invoke$arity$1(config))){
var fexpr__8361_8610 = new cljs.core.Keyword(null,"debug-fn","debug-fn",777839250).cljs$core$IFn$_invoke$arity$1(config);
(fexpr__8361_8610.cljs$core$IFn$_invoke$arity$2 ? fexpr__8361_8610.cljs$core$IFn$_invoke$arity$2(v,new_v) : fexpr__8361_8610.call(null,v,new_v));
} else {
}

return new_v;
}
}
});
clojure.core.rrb_vector.rrbt.max_vector_elements = (2147483647);
clojure.core.rrb_vector.rrbt.shift_too_large_QMARK_ = (function clojure$core$rrb_vector$rrbt$shift_too_large_QMARK_(v){
return (v.shift > (30));
});
clojure.core.rrb_vector.rrbt.poor_branching_QMARK_ = (function clojure$core$rrb_vector$rrbt$poor_branching_QMARK_(v){
var tail_off = clojure.core.rrb_vector.rrbt._tail_offset(v);
if((tail_off === (0))){
return false;
} else {
var shift_amount = (v.shift - (5));
var max_capacity_divided_by_1024 = ((1) << shift_amount);
return (tail_off < max_capacity_divided_by_1024);
}
});
clojure.core.rrb_vector.rrbt.fallback_config = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-fn","debug-fn",777839250),null], null));
clojure.core.rrb_vector.rrbt.fallback_to_slow_splice_count1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
clojure.core.rrb_vector.rrbt.fallback_to_slow_splice_count2 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
clojure.core.rrb_vector.rrbt.fallback_to_slow_splice_if_needed = (function clojure$core$rrb_vector$rrbt$fallback_to_slow_splice_if_needed(v1,v2,splice_result){
var config = cljs.core.deref(clojure.core.rrb_vector.rrbt.fallback_config);
if(((clojure.core.rrb_vector.rrbt.shift_too_large_QMARK_(splice_result)) || (clojure.core.rrb_vector.rrbt.poor_branching_QMARK_(splice_result)))){

if(clojure.core.rrb_vector.rrbt.poor_branching_QMARK_(v1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.fallback_to_slow_splice_count1,cljs.core.inc);


var new_splice_result = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(v1),v1),v2);
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug-fn","debug-fn",777839250).cljs$core$IFn$_invoke$arity$1(config))){
var fexpr__8362_8613 = new cljs.core.Keyword(null,"debug-fn","debug-fn",777839250).cljs$core$IFn$_invoke$arity$1(config);
(fexpr__8362_8613.cljs$core$IFn$_invoke$arity$2 ? fexpr__8362_8613.cljs$core$IFn$_invoke$arity$2(splice_result,new_splice_result) : fexpr__8362_8613.call(null,splice_result,new_splice_result));
} else {
}

return new_splice_result;
} else {
var new_splice_result = cljs.core.into.cljs$core$IFn$_invoke$arity$2(v1,v2);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.fallback_to_slow_splice_count2,cljs.core.inc);

if(cljs.core.truth_(new cljs.core.Keyword(null,"debug-fn","debug-fn",777839250).cljs$core$IFn$_invoke$arity$1(config))){
var fexpr__8363_8614 = new cljs.core.Keyword(null,"debug-fn","debug-fn",777839250).cljs$core$IFn$_invoke$arity$1(config);
(fexpr__8363_8614.cljs$core$IFn$_invoke$arity$2 ? fexpr__8363_8614.cljs$core$IFn$_invoke$arity$2(splice_result,new_splice_result) : fexpr__8363_8614.call(null,splice_result,new_splice_result));
} else {
}

return new_splice_result;
}
} else {
return splice_result;
}
});
clojure.core.rrb_vector.rrbt.splice_rrbts_main = (function clojure$core$rrb_vector$rrbt$splice_rrbts_main(v1,v2){
if((cljs.core.count(v1) === (0))){
return v2;
} else {
if(((cljs.core.count(v1) + cljs.core.count(v2)) > clojure.core.rrb_vector.rrbt.max_vector_elements)){
var c1 = cljs.core.count(v1);
var c2 = cljs.core.count(v2);
throw (new Error(["Attempted to concatenate two vectors whose total"," number of elements is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((c1 + c2)),", which is"," larger than the maximum number of elements ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.rrb_vector.rrbt.max_vector_elements)," supported in a vector "].join('')));
} else {
if((cljs.core.count(v2) < (33))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v1,v2);
} else {
var s1 = v1.shift;
var s2 = v2.shift;
var r1 = v1.root;
var o_QMARK_ = clojure.core.rrb_vector.nodes.overflow_QMARK_(r1,s1,(cljs.core.count(v1) + ((32) - v1.tail.length)));
var r1__$1 = ((o_QMARK_)?(function (){var tail = v1.tail;
var tail_node = cljs.core.__GT_VectorNode(null,tail);
var reg_QMARK_ = ((clojure.core.rrb_vector.nodes.regular_QMARK_(r1)) && ((tail.length === (32))));
var arr = (new Array(((reg_QMARK_)?(32):(33))));
(arr[(0)] = r1);

(arr[(1)] = clojure.core.rrb_vector.nodes.new_path_STAR_(s1,tail_node));

if((!(reg_QMARK_))){
var rngs_8617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs_8617[(32)] = (2));

(rngs_8617[(0)] = (cljs.core.count(v1) - tail.length));

(rngs_8617[(1)] = cljs.core.count(v1));

(arr[(32)] = rngs_8617);
} else {
}

return cljs.core.__GT_VectorNode(null,arr);
})():clojure.core.rrb_vector.nodes.fold_tail(r1,s1,clojure.core.rrb_vector.rrbt._tail_offset(v1),v1.tail));
var s1__$1 = ((o_QMARK_)?(s1 + (5)):s1);
var r2 = v2.root;
var s = (function (){var x__5130__auto__ = s1__$1;
var y__5131__auto__ = s2;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var r1__$2 = clojure.core.rrb_vector.rrbt.shift_from_to(r1__$1,s1__$1,s);
var r2__$1 = clojure.core.rrb_vector.rrbt.shift_from_to(r2,s2,s);
var transferred_leaves = (new cljs.core.Box((0)));
var vec__8364 = clojure.core.rrb_vector.rrbt.zippath(s,r1__$2,cljs.core.count(v1),r2__$1,(cljs.core.count(v2) - v2.tail.length),transferred_leaves);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8364,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8364,(1),null);
var d = transferred_leaves.val;
var ncnt1 = (cljs.core.count(v1) + d);
var ncnt2 = ((cljs.core.count(v2) - v2.tail.length) - d);
var vec__8367 = (((n2 === r2__$1))?clojure.core.rrb_vector.rrbt.squash_nodes(s,n1,ncnt1,n2,ncnt2):[n1,n2]);
var n1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8367,(0),null);
var n2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8367,(1),null);
var ncnt1__$1 = (cljs.core.truth_(n2__$1)?ncnt1:(ncnt1 + ncnt2));
var ncnt2__$1 = (cljs.core.truth_(n2__$1)?ncnt2:(0));
if(cljs.core.truth_(n2__$1)){
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(null,arr);
(arr[(0)] = n1__$1);

(arr[(1)] = n2__$1);

(arr[(32)] = (function (){var G__8370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__8370[(0)] = ncnt1__$1);

(G__8370[(1)] = (ncnt1__$1 + ncnt2__$1));

(G__8370[(32)] = (2));

return G__8370;
})());

return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count(v1) + cljs.core.count(v2)),(s + (5)),new_root,v2.tail,null,null));
} else {
var r = n1__$1;
var s__$1 = s;
while(true){
if((((s__$1 > (5))) && (((r.arr[(1)]) == null)))){
var G__8623 = (r.arr[(0)]);
var G__8624 = (s__$1 - (5));
r = G__8623;
s__$1 = G__8624;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count(v1) + cljs.core.count(v2)),s__$1,r,v2.tail,null,null));
}
break;
}
}

}
}
}
});
clojure.core.rrb_vector.rrbt.splice_rrbts = (function clojure$core$rrb_vector$rrbt$splice_rrbts(v1,v2){
var r1 = clojure.core.rrb_vector.rrbt.splice_rrbts_main(v1,v2);
var r2 = clojure.core.rrb_vector.rrbt.peephole_optimize_root(r1);
return clojure.core.rrb_vector.rrbt.fallback_to_slow_splice_if_needed(v1,v2,r2);
});

/**
* @constructor
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ITransientVector}
 * @implements {cljs.core.ITransientAssociative}
 * @implements {clojure.core.rrb_vector.rrbt.IVecImpl}
*/
clojure.core.rrb_vector.rrbt.Transient = (function (cnt,shift,root,tail,tidx){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.tidx = tidx;
this.cljs$lang$protocol_mask$partition1$ = 88;
this.cljs$lang$protocol_mask$partition0$ = 2;
});
(clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.tidx < (32))){
(self__.tail[self__.tidx] = o);

(self__.cnt = (self__.cnt + (1)));

(self__.tidx = (self__.tidx + (1)));

return this$__$1;
} else {
var tail_node = cljs.core.__GT_VectorNode(self__.root.edit,self__.tail);
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

(self__.tail = new_tail);

(self__.tidx = (1));

if(clojure.core.rrb_vector.nodes.overflow_QMARK_(self__.root,self__.shift,self__.cnt)){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(self__.root)){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var G__8371_8626 = new_arr;
(G__8371_8626[(0)] = self__.root);

(G__8371_8626[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));


(self__.root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr));

(self__.shift = (self__.shift + (5)));

(self__.cnt = (self__.cnt + (1)));

return this$__$1;
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.node_ranges(self__.root)[(31)]);
var G__8372_8628 = new_arr;
(G__8372_8628[(0)] = self__.root);

(G__8372_8628[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));

(G__8372_8628[(32)] = new_rngs);


var G__8373_8631 = new_rngs;
(G__8373_8631[(0)] = root_total_range);

(G__8373_8631[(1)] = (root_total_range + (32)));

(G__8373_8631[(32)] = (2));


(self__.root = new_root);

(self__.shift = (self__.shift + (5)));

(self__.cnt = (self__.cnt + (1)));

return this$__$1;
}
} else {
var new_root = clojure.core.rrb_vector.transients.push_tail_BANG_(self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node);
(self__.root = new_root);

(self__.cnt = (self__.cnt + (1)));

return this$__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
}));

(clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
(self__.root.edit = null);

var trimmed_tail = (new Array(self__.tidx));
cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),self__.tidx);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,trimmed_tail,null,null));
} else {
throw (new Error("persistent! called twice"));
}
}));

(clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key,val){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(null,key,val);
}));

(clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if(((((0) <= i)) && ((i < self__.cnt)))){
var tail_off = (self__.cnt - self__.tidx);
if((tail_off <= i)){
(self__.tail[(i - tail_off)] = val);
} else {
(self__.root = clojure.core.rrb_vector.transients.do_assoc_BANG_(self__.shift,self__.root.edit,self__.root,i,val));
}

return this$__$1;
} else {
if((i === self__.cnt)){
return this$__$1.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,val);
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
}));

(clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
(self__.cnt = (0));

(self__.tidx = (0));

(self__.tail[(0)] = null);

return this$__$1;
} else {
if((self__.tidx > (1))){
(self__.cnt = (self__.cnt - (1)));

(self__.tidx = (self__.tidx - (1)));

(self__.tail[self__.tidx] = null);

return this$__$1;
} else {
var new_tail_base = this$__$1.clojure$core$rrb_vector$rrbt$IVecImpl$_array_for$arity$2(null,(self__.cnt - (2)));
var new_tail = clojure.core.rrb_vector.transients.editable_tail(new_tail_base);
var new_tidx = new_tail_base.length;
var new_root = clojure.core.rrb_vector.transients.pop_tail_BANG_(self__.shift,self__.cnt,self__.root.edit,self__.root);
if((new_root == null)){
(self__.cnt = (self__.cnt - (1)));

(self__.root = clojure.core.rrb_vector.transients.ensure_editable(self__.root.edit,clojure.core.rrb_vector.nodes.empty_node));

(self__.tail = new_tail);

(self__.tidx = new_tidx);

return this$__$1;
} else {
if((((self__.shift > (5))) && (((new_root.arr[(1)]) == null)))){
(self__.cnt = (self__.cnt - (1)));

(self__.shift = (self__.shift - (5)));

(self__.root = clojure.core.rrb_vector.transients.ensure_editable(self__.root.edit,(new_root.arr[(0)])));

(self__.tail = new_tail);

(self__.tidx = new_tidx);

return this$__$1;
} else {
(self__.cnt = (self__.cnt - (1)));

(self__.root = new_root);

(self__.tail = new_tail);

(self__.tidx = new_tidx);

return this$__$1;

}
}

}
}
}
} else {
throw (new Error("count after persistent!"));
}
}));

(clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
}));

(clojure.core.rrb_vector.rrbt.Transient.prototype.clojure$core$rrb_vector$rrbt$IVecImpl$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.core.rrb_vector.rrbt.Transient.prototype.clojure$core$rrb_vector$rrbt$IVecImpl$_tail_offset$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (self__.cnt - self__.tidx);
}));

(clojure.core.rrb_vector.rrbt.Transient.prototype.clojure$core$rrb_vector$rrbt$IVecImpl$_array_for$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if(((((0) <= i)) && ((i < self__.cnt)))){
if((i >= this$__$1.clojure$core$rrb_vector$rrbt$IVecImpl$_tail_offset$arity$1(null))){
return self__.tail;
} else {
var i__$1 = i;
var node = self__.root;
var shift__$1 = self__.shift;
while(true){
if((shift__$1 === (0))){
return node.arr;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
var node__$1 = (node.arr[((i__$1 >> shift__$1) & (31))]);
var shift__$2 = (shift__$1 - (5));
while(true){
if((shift__$2 === (0))){
return node__$1.arr;
} else {
var G__8635 = (node__$1.arr[((i__$1 >> shift__$2) & (31))]);
var G__8636 = (shift__$2 - (5));
node__$1 = G__8635;
shift__$2 = G__8636;
continue;
}
break;
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(node);
var j = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__8637 = (j + (1));
j = G__8637;
continue;
}
break;
}
})();
var i__$2 = (((j > (0)))?(i__$1 - (rngs[(j - (1))])):i__$1);
var G__8638 = i__$2;
var G__8639 = (node.arr[j]);
var G__8640 = (shift__$1 - (5));
i__$1 = G__8638;
node = G__8639;
shift__$1 = G__8640;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);
}
}));

(clojure.core.rrb_vector.rrbt.Transient.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tidx","tidx",1939123455,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(clojure.core.rrb_vector.rrbt.Transient.cljs$lang$type = true);

(clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Transient");

(clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"clojure.core.rrb-vector.rrbt/Transient");
}));

/**
 * Positional factory function for clojure.core.rrb-vector.rrbt/Transient.
 */
clojure.core.rrb_vector.rrbt.__GT_Transient = (function clojure$core$rrb_vector$rrbt$__GT_Transient(cnt,shift,root,tail,tidx){
return (new clojure.core.rrb_vector.rrbt.Transient(cnt,shift,root,tail,tidx));
});


//# sourceMappingURL=clojure.core.rrb_vector.rrbt.js.map
