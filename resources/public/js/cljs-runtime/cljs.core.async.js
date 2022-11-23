goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13855 = arguments.length;
switch (G__13855) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13863 = (function (f,blockable,meta13864){
this.f = f;
this.blockable = blockable;
this.meta13864 = meta13864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13865,meta13864__$1){
var self__ = this;
var _13865__$1 = this;
return (new cljs.core.async.t_cljs$core$async13863(self__.f,self__.blockable,meta13864__$1));
}));

(cljs.core.async.t_cljs$core$async13863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13865){
var self__ = this;
var _13865__$1 = this;
return self__.meta13864;
}));

(cljs.core.async.t_cljs$core$async13863.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13863.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13864","meta13864",1770017031,null)], null);
}));

(cljs.core.async.t_cljs$core$async13863.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13863");

(cljs.core.async.t_cljs$core$async13863.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13863");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13863.
 */
cljs.core.async.__GT_t_cljs$core$async13863 = (function cljs$core$async$__GT_t_cljs$core$async13863(f__$1,blockable__$1,meta13864){
return (new cljs.core.async.t_cljs$core$async13863(f__$1,blockable__$1,meta13864));
});

}

return (new cljs.core.async.t_cljs$core$async13863(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13923 = arguments.length;
switch (G__13923) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13935 = arguments.length;
switch (G__13935) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13941 = arguments.length;
switch (G__13941) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17594 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17594) : fn1.call(null,val_17594));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17594) : fn1.call(null,val_17594));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13967 = arguments.length;
switch (G__13967) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17599 = n;
var x_17600 = (0);
while(true){
if((x_17600 < n__5636__auto___17599)){
(a[x_17600] = x_17600);

var G__17601 = (x_17600 + (1));
x_17600 = G__17601;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13982 = (function (flag,meta13983){
this.flag = flag;
this.meta13983 = meta13983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13984,meta13983__$1){
var self__ = this;
var _13984__$1 = this;
return (new cljs.core.async.t_cljs$core$async13982(self__.flag,meta13983__$1));
}));

(cljs.core.async.t_cljs$core$async13982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13984){
var self__ = this;
var _13984__$1 = this;
return self__.meta13983;
}));

(cljs.core.async.t_cljs$core$async13982.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13983","meta13983",-671363104,null)], null);
}));

(cljs.core.async.t_cljs$core$async13982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13982");

(cljs.core.async.t_cljs$core$async13982.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13982.
 */
cljs.core.async.__GT_t_cljs$core$async13982 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13982(flag__$1,meta13983){
return (new cljs.core.async.t_cljs$core$async13982(flag__$1,meta13983));
});

}

return (new cljs.core.async.t_cljs$core$async13982(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14003 = (function (flag,cb,meta14005){
this.flag = flag;
this.cb = cb;
this.meta14005 = meta14005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14006,meta14005__$1){
var self__ = this;
var _14006__$1 = this;
return (new cljs.core.async.t_cljs$core$async14003(self__.flag,self__.cb,meta14005__$1));
}));

(cljs.core.async.t_cljs$core$async14003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14006){
var self__ = this;
var _14006__$1 = this;
return self__.meta14005;
}));

(cljs.core.async.t_cljs$core$async14003.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14003.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14005","meta14005",1781234636,null)], null);
}));

(cljs.core.async.t_cljs$core$async14003.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14003");

(cljs.core.async.t_cljs$core$async14003.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14003");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14003.
 */
cljs.core.async.__GT_t_cljs$core$async14003 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14003(flag__$1,cb__$1,meta14005){
return (new cljs.core.async.t_cljs$core$async14003(flag__$1,cb__$1,meta14005));
});

}

return (new cljs.core.async.t_cljs$core$async14003(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14035_SHARP_){
var G__14044 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14035_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14044) : fret.call(null,G__14044));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14036_SHARP_){
var G__14045 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14036_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14045) : fret.call(null,G__14045));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17613 = (i + (1));
i = G__17613;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17616 = arguments.length;
var i__5770__auto___17617 = (0);
while(true){
if((i__5770__auto___17617 < len__5769__auto___17616)){
args__5775__auto__.push((arguments[i__5770__auto___17617]));

var G__17618 = (i__5770__auto___17617 + (1));
i__5770__auto___17617 = G__17618;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14059){
var map__14060 = p__14059;
var map__14060__$1 = cljs.core.__destructure_map(map__14060);
var opts = map__14060__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14057){
var G__14058 = cljs.core.first(seq14057);
var seq14057__$1 = cljs.core.next(seq14057);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14058,seq14057__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14075 = arguments.length;
switch (G__14075) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13706__auto___17633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_14113){
var state_val_14116 = (state_14113[(1)]);
if((state_val_14116 === (7))){
var inst_14108 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
var statearr_14128_17638 = state_14113__$1;
(statearr_14128_17638[(2)] = inst_14108);

(statearr_14128_17638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14116 === (1))){
var state_14113__$1 = state_14113;
var statearr_14129_17641 = state_14113__$1;
(statearr_14129_17641[(2)] = null);

(statearr_14129_17641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14116 === (4))){
var inst_14085 = (state_14113[(7)]);
var inst_14085__$1 = (state_14113[(2)]);
var inst_14086 = (inst_14085__$1 == null);
var state_14113__$1 = (function (){var statearr_14138 = state_14113;
(statearr_14138[(7)] = inst_14085__$1);

return statearr_14138;
})();
if(cljs.core.truth_(inst_14086)){
var statearr_14139_17645 = state_14113__$1;
(statearr_14139_17645[(1)] = (5));

} else {
var statearr_14140_17647 = state_14113__$1;
(statearr_14140_17647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14116 === (13))){
var state_14113__$1 = state_14113;
var statearr_14145_17649 = state_14113__$1;
(statearr_14145_17649[(2)] = null);

(statearr_14145_17649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14116 === (6))){
var inst_14085 = (state_14113[(7)]);
var state_14113__$1 = state_14113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14113__$1,(11),to,inst_14085);
} else {
if((state_val_14116 === (3))){
var inst_14111 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14113__$1,inst_14111);
} else {
if((state_val_14116 === (12))){
var state_14113__$1 = state_14113;
var statearr_14158_17652 = state_14113__$1;
(statearr_14158_17652[(2)] = null);

(statearr_14158_17652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14116 === (2))){
var state_14113__$1 = state_14113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14113__$1,(4),from);
} else {
if((state_val_14116 === (11))){
var inst_14101 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
if(cljs.core.truth_(inst_14101)){
var statearr_14166_17657 = state_14113__$1;
(statearr_14166_17657[(1)] = (12));

} else {
var statearr_14172_17658 = state_14113__$1;
(statearr_14172_17658[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14116 === (9))){
var state_14113__$1 = state_14113;
var statearr_14176_17659 = state_14113__$1;
(statearr_14176_17659[(2)] = null);

(statearr_14176_17659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14116 === (5))){
var state_14113__$1 = state_14113;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14185_17660 = state_14113__$1;
(statearr_14185_17660[(1)] = (8));

} else {
var statearr_14192_17661 = state_14113__$1;
(statearr_14192_17661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14116 === (14))){
var inst_14106 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
var statearr_14193_17662 = state_14113__$1;
(statearr_14193_17662[(2)] = inst_14106);

(statearr_14193_17662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14116 === (10))){
var inst_14097 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
var statearr_14197_17663 = state_14113__$1;
(statearr_14197_17663[(2)] = inst_14097);

(statearr_14197_17663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14116 === (8))){
var inst_14089 = cljs.core.async.close_BANG_(to);
var state_14113__$1 = state_14113;
var statearr_14204_17665 = state_14113__$1;
(statearr_14204_17665[(2)] = inst_14089);

(statearr_14204_17665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13395__auto__ = null;
var cljs$core$async$state_machine__13395__auto____0 = (function (){
var statearr_14205 = [null,null,null,null,null,null,null,null];
(statearr_14205[(0)] = cljs$core$async$state_machine__13395__auto__);

(statearr_14205[(1)] = (1));

return statearr_14205;
});
var cljs$core$async$state_machine__13395__auto____1 = (function (state_14113){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_14113);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e14206){var ex__13398__auto__ = e14206;
var statearr_14207_17667 = state_14113;
(statearr_14207_17667[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_14113[(4)]))){
var statearr_14208_17668 = state_14113;
(statearr_14208_17668[(1)] = cljs.core.first((state_14113[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17670 = state_14113;
state_14113 = G__17670;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$state_machine__13395__auto__ = function(state_14113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13395__auto____1.call(this,state_14113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13395__auto____0;
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13395__auto____1;
return cljs$core$async$state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_14214 = f__13707__auto__();
(statearr_14214[(6)] = c__13706__auto___17633);

return statearr_14214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14235){
var vec__14236 = p__14235;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14236,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14236,(1),null);
var job = vec__14236;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13706__auto___17683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_14243){
var state_val_14244 = (state_14243[(1)]);
if((state_val_14244 === (1))){
var state_14243__$1 = state_14243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14243__$1,(2),res,v);
} else {
if((state_val_14244 === (2))){
var inst_14240 = (state_14243[(2)]);
var inst_14241 = cljs.core.async.close_BANG_(res);
var state_14243__$1 = (function (){var statearr_14255 = state_14243;
(statearr_14255[(7)] = inst_14240);

return statearr_14255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14243__$1,inst_14241);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0 = (function (){
var statearr_14267 = [null,null,null,null,null,null,null,null];
(statearr_14267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__);

(statearr_14267[(1)] = (1));

return statearr_14267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1 = (function (state_14243){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_14243);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e14274){var ex__13398__auto__ = e14274;
var statearr_14279_17696 = state_14243;
(statearr_14279_17696[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_14243[(4)]))){
var statearr_14281_17698 = state_14243;
(statearr_14281_17698[(1)] = cljs.core.first((state_14243[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17699 = state_14243;
state_14243 = G__17699;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__ = function(state_14243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1.call(this,state_14243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_14289 = f__13707__auto__();
(statearr_14289[(6)] = c__13706__auto___17683);

return statearr_14289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14297){
var vec__14303 = p__14297;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14303,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14303,(1),null);
var job = vec__14303;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17700 = n;
var __17701 = (0);
while(true){
if((__17701 < n__5636__auto___17700)){
var G__14321_17702 = type;
var G__14321_17703__$1 = (((G__14321_17702 instanceof cljs.core.Keyword))?G__14321_17702.fqn:null);
switch (G__14321_17703__$1) {
case "compute":
var c__13706__auto___17705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17701,c__13706__auto___17705,G__14321_17702,G__14321_17703__$1,n__5636__auto___17700,jobs,results,process__$1,async){
return (function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = ((function (__17701,c__13706__auto___17705,G__14321_17702,G__14321_17703__$1,n__5636__auto___17700,jobs,results,process__$1,async){
return (function (state_14335){
var state_val_14336 = (state_14335[(1)]);
if((state_val_14336 === (1))){
var state_14335__$1 = state_14335;
var statearr_14352_17708 = state_14335__$1;
(statearr_14352_17708[(2)] = null);

(statearr_14352_17708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14336 === (2))){
var state_14335__$1 = state_14335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14335__$1,(4),jobs);
} else {
if((state_val_14336 === (3))){
var inst_14333 = (state_14335[(2)]);
var state_14335__$1 = state_14335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14335__$1,inst_14333);
} else {
if((state_val_14336 === (4))){
var inst_14325 = (state_14335[(2)]);
var inst_14326 = process__$1(inst_14325);
var state_14335__$1 = state_14335;
if(cljs.core.truth_(inst_14326)){
var statearr_14363_17711 = state_14335__$1;
(statearr_14363_17711[(1)] = (5));

} else {
var statearr_14364_17712 = state_14335__$1;
(statearr_14364_17712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14336 === (5))){
var state_14335__$1 = state_14335;
var statearr_14368_17713 = state_14335__$1;
(statearr_14368_17713[(2)] = null);

(statearr_14368_17713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14336 === (6))){
var state_14335__$1 = state_14335;
var statearr_14369_17715 = state_14335__$1;
(statearr_14369_17715[(2)] = null);

(statearr_14369_17715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14336 === (7))){
var inst_14331 = (state_14335[(2)]);
var state_14335__$1 = state_14335;
var statearr_14371_17716 = state_14335__$1;
(statearr_14371_17716[(2)] = inst_14331);

(statearr_14371_17716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17701,c__13706__auto___17705,G__14321_17702,G__14321_17703__$1,n__5636__auto___17700,jobs,results,process__$1,async))
;
return ((function (__17701,switch__13394__auto__,c__13706__auto___17705,G__14321_17702,G__14321_17703__$1,n__5636__auto___17700,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0 = (function (){
var statearr_14375 = [null,null,null,null,null,null,null];
(statearr_14375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__);

(statearr_14375[(1)] = (1));

return statearr_14375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1 = (function (state_14335){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_14335);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e14377){var ex__13398__auto__ = e14377;
var statearr_14378_17717 = state_14335;
(statearr_14378_17717[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_14335[(4)]))){
var statearr_14379_17720 = state_14335;
(statearr_14379_17720[(1)] = cljs.core.first((state_14335[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17721 = state_14335;
state_14335 = G__17721;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__ = function(state_14335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1.call(this,state_14335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__;
})()
;})(__17701,switch__13394__auto__,c__13706__auto___17705,G__14321_17702,G__14321_17703__$1,n__5636__auto___17700,jobs,results,process__$1,async))
})();
var state__13708__auto__ = (function (){var statearr_14381 = f__13707__auto__();
(statearr_14381[(6)] = c__13706__auto___17705);

return statearr_14381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
});})(__17701,c__13706__auto___17705,G__14321_17702,G__14321_17703__$1,n__5636__auto___17700,jobs,results,process__$1,async))
);


break;
case "async":
var c__13706__auto___17726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17701,c__13706__auto___17726,G__14321_17702,G__14321_17703__$1,n__5636__auto___17700,jobs,results,process__$1,async){
return (function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = ((function (__17701,c__13706__auto___17726,G__14321_17702,G__14321_17703__$1,n__5636__auto___17700,jobs,results,process__$1,async){
return (function (state_14394){
var state_val_14395 = (state_14394[(1)]);
if((state_val_14395 === (1))){
var state_14394__$1 = state_14394;
var statearr_14396_17732 = state_14394__$1;
(statearr_14396_17732[(2)] = null);

(statearr_14396_17732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14395 === (2))){
var state_14394__$1 = state_14394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14394__$1,(4),jobs);
} else {
if((state_val_14395 === (3))){
var inst_14392 = (state_14394[(2)]);
var state_14394__$1 = state_14394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14394__$1,inst_14392);
} else {
if((state_val_14395 === (4))){
var inst_14384 = (state_14394[(2)]);
var inst_14385 = async(inst_14384);
var state_14394__$1 = state_14394;
if(cljs.core.truth_(inst_14385)){
var statearr_14405_17736 = state_14394__$1;
(statearr_14405_17736[(1)] = (5));

} else {
var statearr_14406_17741 = state_14394__$1;
(statearr_14406_17741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14395 === (5))){
var state_14394__$1 = state_14394;
var statearr_14407_17743 = state_14394__$1;
(statearr_14407_17743[(2)] = null);

(statearr_14407_17743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14395 === (6))){
var state_14394__$1 = state_14394;
var statearr_14413_17744 = state_14394__$1;
(statearr_14413_17744[(2)] = null);

(statearr_14413_17744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14395 === (7))){
var inst_14390 = (state_14394[(2)]);
var state_14394__$1 = state_14394;
var statearr_14417_17745 = state_14394__$1;
(statearr_14417_17745[(2)] = inst_14390);

(statearr_14417_17745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17701,c__13706__auto___17726,G__14321_17702,G__14321_17703__$1,n__5636__auto___17700,jobs,results,process__$1,async))
;
return ((function (__17701,switch__13394__auto__,c__13706__auto___17726,G__14321_17702,G__14321_17703__$1,n__5636__auto___17700,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0 = (function (){
var statearr_14419 = [null,null,null,null,null,null,null];
(statearr_14419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__);

(statearr_14419[(1)] = (1));

return statearr_14419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1 = (function (state_14394){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_14394);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e14421){var ex__13398__auto__ = e14421;
var statearr_14422_17758 = state_14394;
(statearr_14422_17758[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_14394[(4)]))){
var statearr_14423_17759 = state_14394;
(statearr_14423_17759[(1)] = cljs.core.first((state_14394[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17765 = state_14394;
state_14394 = G__17765;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__ = function(state_14394){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1.call(this,state_14394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__;
})()
;})(__17701,switch__13394__auto__,c__13706__auto___17726,G__14321_17702,G__14321_17703__$1,n__5636__auto___17700,jobs,results,process__$1,async))
})();
var state__13708__auto__ = (function (){var statearr_14430 = f__13707__auto__();
(statearr_14430[(6)] = c__13706__auto___17726);

return statearr_14430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
});})(__17701,c__13706__auto___17726,G__14321_17702,G__14321_17703__$1,n__5636__auto___17700,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14321_17703__$1)].join('')));

}

var G__17766 = (__17701 + (1));
__17701 = G__17766;
continue;
} else {
}
break;
}

var c__13706__auto___17767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_14464){
var state_val_14465 = (state_14464[(1)]);
if((state_val_14465 === (7))){
var inst_14459 = (state_14464[(2)]);
var state_14464__$1 = state_14464;
var statearr_14468_17769 = state_14464__$1;
(statearr_14468_17769[(2)] = inst_14459);

(statearr_14468_17769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14465 === (1))){
var state_14464__$1 = state_14464;
var statearr_14472_17771 = state_14464__$1;
(statearr_14472_17771[(2)] = null);

(statearr_14472_17771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14465 === (4))){
var inst_14437 = (state_14464[(7)]);
var inst_14437__$1 = (state_14464[(2)]);
var inst_14438 = (inst_14437__$1 == null);
var state_14464__$1 = (function (){var statearr_14480 = state_14464;
(statearr_14480[(7)] = inst_14437__$1);

return statearr_14480;
})();
if(cljs.core.truth_(inst_14438)){
var statearr_14481_17772 = state_14464__$1;
(statearr_14481_17772[(1)] = (5));

} else {
var statearr_14482_17775 = state_14464__$1;
(statearr_14482_17775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14465 === (6))){
var inst_14437 = (state_14464[(7)]);
var inst_14442 = (state_14464[(8)]);
var inst_14442__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14447 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14451 = [inst_14437,inst_14442__$1];
var inst_14452 = (new cljs.core.PersistentVector(null,2,(5),inst_14447,inst_14451,null));
var state_14464__$1 = (function (){var statearr_14484 = state_14464;
(statearr_14484[(8)] = inst_14442__$1);

return statearr_14484;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14464__$1,(8),jobs,inst_14452);
} else {
if((state_val_14465 === (3))){
var inst_14461 = (state_14464[(2)]);
var state_14464__$1 = state_14464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14464__$1,inst_14461);
} else {
if((state_val_14465 === (2))){
var state_14464__$1 = state_14464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14464__$1,(4),from);
} else {
if((state_val_14465 === (9))){
var inst_14456 = (state_14464[(2)]);
var state_14464__$1 = (function (){var statearr_14485 = state_14464;
(statearr_14485[(9)] = inst_14456);

return statearr_14485;
})();
var statearr_14486_17776 = state_14464__$1;
(statearr_14486_17776[(2)] = null);

(statearr_14486_17776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14465 === (5))){
var inst_14440 = cljs.core.async.close_BANG_(jobs);
var state_14464__$1 = state_14464;
var statearr_14493_17777 = state_14464__$1;
(statearr_14493_17777[(2)] = inst_14440);

(statearr_14493_17777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14465 === (8))){
var inst_14442 = (state_14464[(8)]);
var inst_14454 = (state_14464[(2)]);
var state_14464__$1 = (function (){var statearr_14495 = state_14464;
(statearr_14495[(10)] = inst_14454);

return statearr_14495;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14464__$1,(9),results,inst_14442);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0 = (function (){
var statearr_14496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14496[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__);

(statearr_14496[(1)] = (1));

return statearr_14496;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1 = (function (state_14464){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_14464);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e14497){var ex__13398__auto__ = e14497;
var statearr_14498_17787 = state_14464;
(statearr_14498_17787[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_14464[(4)]))){
var statearr_14499_17789 = state_14464;
(statearr_14499_17789[(1)] = cljs.core.first((state_14464[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17794 = state_14464;
state_14464 = G__17794;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__ = function(state_14464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1.call(this,state_14464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_14505 = f__13707__auto__();
(statearr_14505[(6)] = c__13706__auto___17767);

return statearr_14505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));


var c__13706__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_14550){
var state_val_14551 = (state_14550[(1)]);
if((state_val_14551 === (7))){
var inst_14546 = (state_14550[(2)]);
var state_14550__$1 = state_14550;
var statearr_14552_17796 = state_14550__$1;
(statearr_14552_17796[(2)] = inst_14546);

(statearr_14552_17796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (20))){
var state_14550__$1 = state_14550;
var statearr_14553_17797 = state_14550__$1;
(statearr_14553_17797[(2)] = null);

(statearr_14553_17797[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (1))){
var state_14550__$1 = state_14550;
var statearr_14555_17798 = state_14550__$1;
(statearr_14555_17798[(2)] = null);

(statearr_14555_17798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (4))){
var inst_14510 = (state_14550[(7)]);
var inst_14510__$1 = (state_14550[(2)]);
var inst_14512 = (inst_14510__$1 == null);
var state_14550__$1 = (function (){var statearr_14559 = state_14550;
(statearr_14559[(7)] = inst_14510__$1);

return statearr_14559;
})();
if(cljs.core.truth_(inst_14512)){
var statearr_14560_17799 = state_14550__$1;
(statearr_14560_17799[(1)] = (5));

} else {
var statearr_14561_17800 = state_14550__$1;
(statearr_14561_17800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (15))){
var inst_14527 = (state_14550[(8)]);
var state_14550__$1 = state_14550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14550__$1,(18),to,inst_14527);
} else {
if((state_val_14551 === (21))){
var inst_14541 = (state_14550[(2)]);
var state_14550__$1 = state_14550;
var statearr_14562_17801 = state_14550__$1;
(statearr_14562_17801[(2)] = inst_14541);

(statearr_14562_17801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (13))){
var inst_14543 = (state_14550[(2)]);
var state_14550__$1 = (function (){var statearr_14563 = state_14550;
(statearr_14563[(9)] = inst_14543);

return statearr_14563;
})();
var statearr_14564_17802 = state_14550__$1;
(statearr_14564_17802[(2)] = null);

(statearr_14564_17802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (6))){
var inst_14510 = (state_14550[(7)]);
var state_14550__$1 = state_14550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14550__$1,(11),inst_14510);
} else {
if((state_val_14551 === (17))){
var inst_14536 = (state_14550[(2)]);
var state_14550__$1 = state_14550;
if(cljs.core.truth_(inst_14536)){
var statearr_14566_17803 = state_14550__$1;
(statearr_14566_17803[(1)] = (19));

} else {
var statearr_14567_17804 = state_14550__$1;
(statearr_14567_17804[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (3))){
var inst_14548 = (state_14550[(2)]);
var state_14550__$1 = state_14550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14550__$1,inst_14548);
} else {
if((state_val_14551 === (12))){
var inst_14521 = (state_14550[(10)]);
var state_14550__$1 = state_14550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14550__$1,(14),inst_14521);
} else {
if((state_val_14551 === (2))){
var state_14550__$1 = state_14550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14550__$1,(4),results);
} else {
if((state_val_14551 === (19))){
var state_14550__$1 = state_14550;
var statearr_14574_17809 = state_14550__$1;
(statearr_14574_17809[(2)] = null);

(statearr_14574_17809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (11))){
var inst_14521 = (state_14550[(2)]);
var state_14550__$1 = (function (){var statearr_14584 = state_14550;
(statearr_14584[(10)] = inst_14521);

return statearr_14584;
})();
var statearr_14585_17812 = state_14550__$1;
(statearr_14585_17812[(2)] = null);

(statearr_14585_17812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (9))){
var state_14550__$1 = state_14550;
var statearr_14586_17813 = state_14550__$1;
(statearr_14586_17813[(2)] = null);

(statearr_14586_17813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (5))){
var state_14550__$1 = state_14550;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14587_17814 = state_14550__$1;
(statearr_14587_17814[(1)] = (8));

} else {
var statearr_14588_17815 = state_14550__$1;
(statearr_14588_17815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (14))){
var inst_14527 = (state_14550[(8)]);
var inst_14530 = (state_14550[(11)]);
var inst_14527__$1 = (state_14550[(2)]);
var inst_14529 = (inst_14527__$1 == null);
var inst_14530__$1 = cljs.core.not(inst_14529);
var state_14550__$1 = (function (){var statearr_14589 = state_14550;
(statearr_14589[(8)] = inst_14527__$1);

(statearr_14589[(11)] = inst_14530__$1);

return statearr_14589;
})();
if(inst_14530__$1){
var statearr_14596_17817 = state_14550__$1;
(statearr_14596_17817[(1)] = (15));

} else {
var statearr_14598_17819 = state_14550__$1;
(statearr_14598_17819[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (16))){
var inst_14530 = (state_14550[(11)]);
var state_14550__$1 = state_14550;
var statearr_14599_17826 = state_14550__$1;
(statearr_14599_17826[(2)] = inst_14530);

(statearr_14599_17826[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (10))){
var inst_14518 = (state_14550[(2)]);
var state_14550__$1 = state_14550;
var statearr_14608_17827 = state_14550__$1;
(statearr_14608_17827[(2)] = inst_14518);

(statearr_14608_17827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (18))){
var inst_14533 = (state_14550[(2)]);
var state_14550__$1 = state_14550;
var statearr_14612_17828 = state_14550__$1;
(statearr_14612_17828[(2)] = inst_14533);

(statearr_14612_17828[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (8))){
var inst_14515 = cljs.core.async.close_BANG_(to);
var state_14550__$1 = state_14550;
var statearr_14613_17830 = state_14550__$1;
(statearr_14613_17830[(2)] = inst_14515);

(statearr_14613_17830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0 = (function (){
var statearr_14614 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__);

(statearr_14614[(1)] = (1));

return statearr_14614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1 = (function (state_14550){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_14550);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e14615){var ex__13398__auto__ = e14615;
var statearr_14616_17835 = state_14550;
(statearr_14616_17835[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_14550[(4)]))){
var statearr_14617_17836 = state_14550;
(statearr_14617_17836[(1)] = cljs.core.first((state_14550[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17839 = state_14550;
state_14550 = G__17839;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__ = function(state_14550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1.call(this,state_14550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13395__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_14619 = f__13707__auto__();
(statearr_14619[(6)] = c__13706__auto__);

return statearr_14619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));

return c__13706__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14634 = arguments.length;
switch (G__14634) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14638 = arguments.length;
switch (G__14638) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14643 = arguments.length;
switch (G__14643) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13706__auto___17873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_14694){
var state_val_14695 = (state_14694[(1)]);
if((state_val_14695 === (7))){
var inst_14687 = (state_14694[(2)]);
var state_14694__$1 = state_14694;
var statearr_14701_17878 = state_14694__$1;
(statearr_14701_17878[(2)] = inst_14687);

(statearr_14701_17878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (1))){
var state_14694__$1 = state_14694;
var statearr_14702_17879 = state_14694__$1;
(statearr_14702_17879[(2)] = null);

(statearr_14702_17879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (4))){
var inst_14665 = (state_14694[(7)]);
var inst_14665__$1 = (state_14694[(2)]);
var inst_14666 = (inst_14665__$1 == null);
var state_14694__$1 = (function (){var statearr_14704 = state_14694;
(statearr_14704[(7)] = inst_14665__$1);

return statearr_14704;
})();
if(cljs.core.truth_(inst_14666)){
var statearr_14705_17881 = state_14694__$1;
(statearr_14705_17881[(1)] = (5));

} else {
var statearr_14706_17882 = state_14694__$1;
(statearr_14706_17882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (13))){
var state_14694__$1 = state_14694;
var statearr_14707_17883 = state_14694__$1;
(statearr_14707_17883[(2)] = null);

(statearr_14707_17883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (6))){
var inst_14665 = (state_14694[(7)]);
var inst_14674 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14665) : p.call(null,inst_14665));
var state_14694__$1 = state_14694;
if(cljs.core.truth_(inst_14674)){
var statearr_14709_17888 = state_14694__$1;
(statearr_14709_17888[(1)] = (9));

} else {
var statearr_14710_17889 = state_14694__$1;
(statearr_14710_17889[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (3))){
var inst_14689 = (state_14694[(2)]);
var state_14694__$1 = state_14694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14694__$1,inst_14689);
} else {
if((state_val_14695 === (12))){
var state_14694__$1 = state_14694;
var statearr_14711_17890 = state_14694__$1;
(statearr_14711_17890[(2)] = null);

(statearr_14711_17890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (2))){
var state_14694__$1 = state_14694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14694__$1,(4),ch);
} else {
if((state_val_14695 === (11))){
var inst_14665 = (state_14694[(7)]);
var inst_14678 = (state_14694[(2)]);
var state_14694__$1 = state_14694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14694__$1,(8),inst_14678,inst_14665);
} else {
if((state_val_14695 === (9))){
var state_14694__$1 = state_14694;
var statearr_14712_17892 = state_14694__$1;
(statearr_14712_17892[(2)] = tc);

(statearr_14712_17892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (5))){
var inst_14668 = cljs.core.async.close_BANG_(tc);
var inst_14672 = cljs.core.async.close_BANG_(fc);
var state_14694__$1 = (function (){var statearr_14714 = state_14694;
(statearr_14714[(8)] = inst_14668);

return statearr_14714;
})();
var statearr_14715_17894 = state_14694__$1;
(statearr_14715_17894[(2)] = inst_14672);

(statearr_14715_17894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (14))){
var inst_14685 = (state_14694[(2)]);
var state_14694__$1 = state_14694;
var statearr_14718_17895 = state_14694__$1;
(statearr_14718_17895[(2)] = inst_14685);

(statearr_14718_17895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (10))){
var state_14694__$1 = state_14694;
var statearr_14719_17896 = state_14694__$1;
(statearr_14719_17896[(2)] = fc);

(statearr_14719_17896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (8))){
var inst_14680 = (state_14694[(2)]);
var state_14694__$1 = state_14694;
if(cljs.core.truth_(inst_14680)){
var statearr_14721_17899 = state_14694__$1;
(statearr_14721_17899[(1)] = (12));

} else {
var statearr_14723_17900 = state_14694__$1;
(statearr_14723_17900[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13395__auto__ = null;
var cljs$core$async$state_machine__13395__auto____0 = (function (){
var statearr_14732 = [null,null,null,null,null,null,null,null,null];
(statearr_14732[(0)] = cljs$core$async$state_machine__13395__auto__);

(statearr_14732[(1)] = (1));

return statearr_14732;
});
var cljs$core$async$state_machine__13395__auto____1 = (function (state_14694){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_14694);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e14733){var ex__13398__auto__ = e14733;
var statearr_14734_17903 = state_14694;
(statearr_14734_17903[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_14694[(4)]))){
var statearr_14735_17906 = state_14694;
(statearr_14735_17906[(1)] = cljs.core.first((state_14694[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17910 = state_14694;
state_14694 = G__17910;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$state_machine__13395__auto__ = function(state_14694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13395__auto____1.call(this,state_14694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13395__auto____0;
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13395__auto____1;
return cljs$core$async$state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_14739 = f__13707__auto__();
(statearr_14739[(6)] = c__13706__auto___17873);

return statearr_14739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13706__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_14779){
var state_val_14780 = (state_14779[(1)]);
if((state_val_14780 === (7))){
var inst_14773 = (state_14779[(2)]);
var state_14779__$1 = state_14779;
var statearr_14785_17924 = state_14779__$1;
(statearr_14785_17924[(2)] = inst_14773);

(statearr_14785_17924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14780 === (1))){
var inst_14742 = init;
var inst_14744 = inst_14742;
var state_14779__$1 = (function (){var statearr_14788 = state_14779;
(statearr_14788[(7)] = inst_14744);

return statearr_14788;
})();
var statearr_14790_17931 = state_14779__$1;
(statearr_14790_17931[(2)] = null);

(statearr_14790_17931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14780 === (4))){
var inst_14747 = (state_14779[(8)]);
var inst_14747__$1 = (state_14779[(2)]);
var inst_14748 = (inst_14747__$1 == null);
var state_14779__$1 = (function (){var statearr_14793 = state_14779;
(statearr_14793[(8)] = inst_14747__$1);

return statearr_14793;
})();
if(cljs.core.truth_(inst_14748)){
var statearr_14794_17935 = state_14779__$1;
(statearr_14794_17935[(1)] = (5));

} else {
var statearr_14796_17936 = state_14779__$1;
(statearr_14796_17936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14780 === (6))){
var inst_14747 = (state_14779[(8)]);
var inst_14752 = (state_14779[(9)]);
var inst_14744 = (state_14779[(7)]);
var inst_14752__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14744,inst_14747) : f.call(null,inst_14744,inst_14747));
var inst_14753 = cljs.core.reduced_QMARK_(inst_14752__$1);
var state_14779__$1 = (function (){var statearr_14801 = state_14779;
(statearr_14801[(9)] = inst_14752__$1);

return statearr_14801;
})();
if(inst_14753){
var statearr_14804_17940 = state_14779__$1;
(statearr_14804_17940[(1)] = (8));

} else {
var statearr_14809_17941 = state_14779__$1;
(statearr_14809_17941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14780 === (3))){
var inst_14775 = (state_14779[(2)]);
var state_14779__$1 = state_14779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14779__$1,inst_14775);
} else {
if((state_val_14780 === (2))){
var state_14779__$1 = state_14779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14779__$1,(4),ch);
} else {
if((state_val_14780 === (9))){
var inst_14752 = (state_14779[(9)]);
var inst_14744 = inst_14752;
var state_14779__$1 = (function (){var statearr_14811 = state_14779;
(statearr_14811[(7)] = inst_14744);

return statearr_14811;
})();
var statearr_14812_17947 = state_14779__$1;
(statearr_14812_17947[(2)] = null);

(statearr_14812_17947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14780 === (5))){
var inst_14744 = (state_14779[(7)]);
var state_14779__$1 = state_14779;
var statearr_14817_17949 = state_14779__$1;
(statearr_14817_17949[(2)] = inst_14744);

(statearr_14817_17949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14780 === (10))){
var inst_14770 = (state_14779[(2)]);
var state_14779__$1 = state_14779;
var statearr_14822_17954 = state_14779__$1;
(statearr_14822_17954[(2)] = inst_14770);

(statearr_14822_17954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14780 === (8))){
var inst_14752 = (state_14779[(9)]);
var inst_14763 = cljs.core.deref(inst_14752);
var state_14779__$1 = state_14779;
var statearr_14827_17956 = state_14779__$1;
(statearr_14827_17956[(2)] = inst_14763);

(statearr_14827_17956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13395__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13395__auto____0 = (function (){
var statearr_14830 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14830[(0)] = cljs$core$async$reduce_$_state_machine__13395__auto__);

(statearr_14830[(1)] = (1));

return statearr_14830;
});
var cljs$core$async$reduce_$_state_machine__13395__auto____1 = (function (state_14779){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_14779);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e14835){var ex__13398__auto__ = e14835;
var statearr_14837_17964 = state_14779;
(statearr_14837_17964[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_14779[(4)]))){
var statearr_14839_17965 = state_14779;
(statearr_14839_17965[(1)] = cljs.core.first((state_14779[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17966 = state_14779;
state_14779 = G__17966;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13395__auto__ = function(state_14779){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13395__auto____1.call(this,state_14779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13395__auto____0;
cljs$core$async$reduce_$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13395__auto____1;
return cljs$core$async$reduce_$_state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_14841 = f__13707__auto__();
(statearr_14841[(6)] = c__13706__auto__);

return statearr_14841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));

return c__13706__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13706__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_14864){
var state_val_14865 = (state_14864[(1)]);
if((state_val_14865 === (1))){
var inst_14857 = cljs.core.async.reduce(f__$1,init,ch);
var state_14864__$1 = state_14864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14864__$1,(2),inst_14857);
} else {
if((state_val_14865 === (2))){
var inst_14859 = (state_14864[(2)]);
var inst_14861 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14859) : f__$1.call(null,inst_14859));
var state_14864__$1 = state_14864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14864__$1,inst_14861);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13395__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13395__auto____0 = (function (){
var statearr_14875 = [null,null,null,null,null,null,null];
(statearr_14875[(0)] = cljs$core$async$transduce_$_state_machine__13395__auto__);

(statearr_14875[(1)] = (1));

return statearr_14875;
});
var cljs$core$async$transduce_$_state_machine__13395__auto____1 = (function (state_14864){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_14864);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e14877){var ex__13398__auto__ = e14877;
var statearr_14880_17977 = state_14864;
(statearr_14880_17977[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_14864[(4)]))){
var statearr_14881_17978 = state_14864;
(statearr_14881_17978[(1)] = cljs.core.first((state_14864[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17979 = state_14864;
state_14864 = G__17979;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13395__auto__ = function(state_14864){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13395__auto____1.call(this,state_14864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13395__auto____0;
cljs$core$async$transduce_$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13395__auto____1;
return cljs$core$async$transduce_$_state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_14883 = f__13707__auto__();
(statearr_14883[(6)] = c__13706__auto__);

return statearr_14883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));

return c__13706__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14888 = arguments.length;
switch (G__14888) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13706__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_14932){
var state_val_14933 = (state_14932[(1)]);
if((state_val_14933 === (7))){
var inst_14908 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
var statearr_14938_17986 = state_14932__$1;
(statearr_14938_17986[(2)] = inst_14908);

(statearr_14938_17986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14933 === (1))){
var inst_14902 = cljs.core.seq(coll);
var inst_14903 = inst_14902;
var state_14932__$1 = (function (){var statearr_14940 = state_14932;
(statearr_14940[(7)] = inst_14903);

return statearr_14940;
})();
var statearr_14941_17989 = state_14932__$1;
(statearr_14941_17989[(2)] = null);

(statearr_14941_17989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14933 === (4))){
var inst_14903 = (state_14932[(7)]);
var inst_14906 = cljs.core.first(inst_14903);
var state_14932__$1 = state_14932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14932__$1,(7),ch,inst_14906);
} else {
if((state_val_14933 === (13))){
var inst_14924 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
var statearr_14948_17993 = state_14932__$1;
(statearr_14948_17993[(2)] = inst_14924);

(statearr_14948_17993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14933 === (6))){
var inst_14911 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
if(cljs.core.truth_(inst_14911)){
var statearr_14950_17994 = state_14932__$1;
(statearr_14950_17994[(1)] = (8));

} else {
var statearr_14954_17995 = state_14932__$1;
(statearr_14954_17995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14933 === (3))){
var inst_14928 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14932__$1,inst_14928);
} else {
if((state_val_14933 === (12))){
var state_14932__$1 = state_14932;
var statearr_14959_18004 = state_14932__$1;
(statearr_14959_18004[(2)] = null);

(statearr_14959_18004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14933 === (2))){
var inst_14903 = (state_14932[(7)]);
var state_14932__$1 = state_14932;
if(cljs.core.truth_(inst_14903)){
var statearr_14962_18006 = state_14932__$1;
(statearr_14962_18006[(1)] = (4));

} else {
var statearr_14963_18007 = state_14932__$1;
(statearr_14963_18007[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14933 === (11))){
var inst_14921 = cljs.core.async.close_BANG_(ch);
var state_14932__$1 = state_14932;
var statearr_14965_18011 = state_14932__$1;
(statearr_14965_18011[(2)] = inst_14921);

(statearr_14965_18011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14933 === (9))){
var state_14932__$1 = state_14932;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14970_18012 = state_14932__$1;
(statearr_14970_18012[(1)] = (11));

} else {
var statearr_14971_18013 = state_14932__$1;
(statearr_14971_18013[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14933 === (5))){
var inst_14903 = (state_14932[(7)]);
var state_14932__$1 = state_14932;
var statearr_14974_18015 = state_14932__$1;
(statearr_14974_18015[(2)] = inst_14903);

(statearr_14974_18015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14933 === (10))){
var inst_14926 = (state_14932[(2)]);
var state_14932__$1 = state_14932;
var statearr_14978_18016 = state_14932__$1;
(statearr_14978_18016[(2)] = inst_14926);

(statearr_14978_18016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14933 === (8))){
var inst_14903 = (state_14932[(7)]);
var inst_14913 = cljs.core.next(inst_14903);
var inst_14903__$1 = inst_14913;
var state_14932__$1 = (function (){var statearr_14979 = state_14932;
(statearr_14979[(7)] = inst_14903__$1);

return statearr_14979;
})();
var statearr_14980_18017 = state_14932__$1;
(statearr_14980_18017[(2)] = null);

(statearr_14980_18017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13395__auto__ = null;
var cljs$core$async$state_machine__13395__auto____0 = (function (){
var statearr_14988 = [null,null,null,null,null,null,null,null];
(statearr_14988[(0)] = cljs$core$async$state_machine__13395__auto__);

(statearr_14988[(1)] = (1));

return statearr_14988;
});
var cljs$core$async$state_machine__13395__auto____1 = (function (state_14932){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_14932);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e14999){var ex__13398__auto__ = e14999;
var statearr_15000_18020 = state_14932;
(statearr_15000_18020[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_14932[(4)]))){
var statearr_15003_18021 = state_14932;
(statearr_15003_18021[(1)] = cljs.core.first((state_14932[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18023 = state_14932;
state_14932 = G__18023;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$state_machine__13395__auto__ = function(state_14932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13395__auto____1.call(this,state_14932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13395__auto____0;
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13395__auto____1;
return cljs$core$async$state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_15007 = f__13707__auto__();
(statearr_15007[(6)] = c__13706__auto__);

return statearr_15007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));

return c__13706__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15017 = arguments.length;
switch (G__15017) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18027 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18027(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18031 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18031(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18032 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18032(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18033 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18033(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15067 = (function (ch,cs,meta15068){
this.ch = ch;
this.cs = cs;
this.meta15068 = meta15068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15069,meta15068__$1){
var self__ = this;
var _15069__$1 = this;
return (new cljs.core.async.t_cljs$core$async15067(self__.ch,self__.cs,meta15068__$1));
}));

(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15069){
var self__ = this;
var _15069__$1 = this;
return self__.meta15068;
}));

(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15068","meta15068",-1456241163,null)], null);
}));

(cljs.core.async.t_cljs$core$async15067.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15067");

(cljs.core.async.t_cljs$core$async15067.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15067");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15067.
 */
cljs.core.async.__GT_t_cljs$core$async15067 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15067(ch__$1,cs__$1,meta15068){
return (new cljs.core.async.t_cljs$core$async15067(ch__$1,cs__$1,meta15068));
});

}

return (new cljs.core.async.t_cljs$core$async15067(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13706__auto___18039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_15247){
var state_val_15250 = (state_15247[(1)]);
if((state_val_15250 === (7))){
var inst_15240 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
var statearr_15257_18040 = state_15247__$1;
(statearr_15257_18040[(2)] = inst_15240);

(statearr_15257_18040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (20))){
var inst_15127 = (state_15247[(7)]);
var inst_15139 = cljs.core.first(inst_15127);
var inst_15140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15139,(0),null);
var inst_15141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15139,(1),null);
var state_15247__$1 = (function (){var statearr_15264 = state_15247;
(statearr_15264[(8)] = inst_15140);

return statearr_15264;
})();
if(cljs.core.truth_(inst_15141)){
var statearr_15265_18041 = state_15247__$1;
(statearr_15265_18041[(1)] = (22));

} else {
var statearr_15266_18042 = state_15247__$1;
(statearr_15266_18042[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (27))){
var inst_15171 = (state_15247[(9)]);
var inst_15173 = (state_15247[(10)]);
var inst_15180 = (state_15247[(11)]);
var inst_15089 = (state_15247[(12)]);
var inst_15180__$1 = cljs.core._nth(inst_15171,inst_15173);
var inst_15181 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15180__$1,inst_15089,done);
var state_15247__$1 = (function (){var statearr_15269 = state_15247;
(statearr_15269[(11)] = inst_15180__$1);

return statearr_15269;
})();
if(cljs.core.truth_(inst_15181)){
var statearr_15271_18043 = state_15247__$1;
(statearr_15271_18043[(1)] = (30));

} else {
var statearr_15272_18044 = state_15247__$1;
(statearr_15272_18044[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (1))){
var state_15247__$1 = state_15247;
var statearr_15274_18045 = state_15247__$1;
(statearr_15274_18045[(2)] = null);

(statearr_15274_18045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (24))){
var inst_15127 = (state_15247[(7)]);
var inst_15146 = (state_15247[(2)]);
var inst_15148 = cljs.core.next(inst_15127);
var inst_15100 = inst_15148;
var inst_15101 = null;
var inst_15102 = (0);
var inst_15103 = (0);
var state_15247__$1 = (function (){var statearr_15282 = state_15247;
(statearr_15282[(13)] = inst_15146);

(statearr_15282[(14)] = inst_15102);

(statearr_15282[(15)] = inst_15103);

(statearr_15282[(16)] = inst_15100);

(statearr_15282[(17)] = inst_15101);

return statearr_15282;
})();
var statearr_15283_18047 = state_15247__$1;
(statearr_15283_18047[(2)] = null);

(statearr_15283_18047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (39))){
var state_15247__$1 = state_15247;
var statearr_15291_18048 = state_15247__$1;
(statearr_15291_18048[(2)] = null);

(statearr_15291_18048[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (4))){
var inst_15089 = (state_15247[(12)]);
var inst_15089__$1 = (state_15247[(2)]);
var inst_15090 = (inst_15089__$1 == null);
var state_15247__$1 = (function (){var statearr_15292 = state_15247;
(statearr_15292[(12)] = inst_15089__$1);

return statearr_15292;
})();
if(cljs.core.truth_(inst_15090)){
var statearr_15294_18050 = state_15247__$1;
(statearr_15294_18050[(1)] = (5));

} else {
var statearr_15295_18053 = state_15247__$1;
(statearr_15295_18053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (15))){
var inst_15102 = (state_15247[(14)]);
var inst_15103 = (state_15247[(15)]);
var inst_15100 = (state_15247[(16)]);
var inst_15101 = (state_15247[(17)]);
var inst_15123 = (state_15247[(2)]);
var inst_15124 = (inst_15103 + (1));
var tmp15284 = inst_15102;
var tmp15285 = inst_15100;
var tmp15286 = inst_15101;
var inst_15100__$1 = tmp15285;
var inst_15101__$1 = tmp15286;
var inst_15102__$1 = tmp15284;
var inst_15103__$1 = inst_15124;
var state_15247__$1 = (function (){var statearr_15300 = state_15247;
(statearr_15300[(14)] = inst_15102__$1);

(statearr_15300[(15)] = inst_15103__$1);

(statearr_15300[(16)] = inst_15100__$1);

(statearr_15300[(18)] = inst_15123);

(statearr_15300[(17)] = inst_15101__$1);

return statearr_15300;
})();
var statearr_15304_18058 = state_15247__$1;
(statearr_15304_18058[(2)] = null);

(statearr_15304_18058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (21))){
var inst_15152 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
var statearr_15308_18059 = state_15247__$1;
(statearr_15308_18059[(2)] = inst_15152);

(statearr_15308_18059[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (31))){
var inst_15180 = (state_15247[(11)]);
var inst_15189 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15180);
var state_15247__$1 = state_15247;
var statearr_15312_18060 = state_15247__$1;
(statearr_15312_18060[(2)] = inst_15189);

(statearr_15312_18060[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (32))){
var inst_15171 = (state_15247[(9)]);
var inst_15173 = (state_15247[(10)]);
var inst_15172 = (state_15247[(19)]);
var inst_15170 = (state_15247[(20)]);
var inst_15191 = (state_15247[(2)]);
var inst_15192 = (inst_15173 + (1));
var tmp15305 = inst_15171;
var tmp15306 = inst_15172;
var tmp15307 = inst_15170;
var inst_15170__$1 = tmp15307;
var inst_15171__$1 = tmp15305;
var inst_15172__$1 = tmp15306;
var inst_15173__$1 = inst_15192;
var state_15247__$1 = (function (){var statearr_15319 = state_15247;
(statearr_15319[(9)] = inst_15171__$1);

(statearr_15319[(10)] = inst_15173__$1);

(statearr_15319[(21)] = inst_15191);

(statearr_15319[(19)] = inst_15172__$1);

(statearr_15319[(20)] = inst_15170__$1);

return statearr_15319;
})();
var statearr_15321_18062 = state_15247__$1;
(statearr_15321_18062[(2)] = null);

(statearr_15321_18062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (40))){
var inst_15205 = (state_15247[(22)]);
var inst_15211 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15205);
var state_15247__$1 = state_15247;
var statearr_15327_18064 = state_15247__$1;
(statearr_15327_18064[(2)] = inst_15211);

(statearr_15327_18064[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (33))){
var inst_15195 = (state_15247[(23)]);
var inst_15198 = cljs.core.chunked_seq_QMARK_(inst_15195);
var state_15247__$1 = state_15247;
if(inst_15198){
var statearr_15332_18065 = state_15247__$1;
(statearr_15332_18065[(1)] = (36));

} else {
var statearr_15335_18067 = state_15247__$1;
(statearr_15335_18067[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (13))){
var inst_15114 = (state_15247[(24)]);
var inst_15120 = cljs.core.async.close_BANG_(inst_15114);
var state_15247__$1 = state_15247;
var statearr_15342_18069 = state_15247__$1;
(statearr_15342_18069[(2)] = inst_15120);

(statearr_15342_18069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (22))){
var inst_15140 = (state_15247[(8)]);
var inst_15143 = cljs.core.async.close_BANG_(inst_15140);
var state_15247__$1 = state_15247;
var statearr_15345_18073 = state_15247__$1;
(statearr_15345_18073[(2)] = inst_15143);

(statearr_15345_18073[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (36))){
var inst_15195 = (state_15247[(23)]);
var inst_15200 = cljs.core.chunk_first(inst_15195);
var inst_15201 = cljs.core.chunk_rest(inst_15195);
var inst_15202 = cljs.core.count(inst_15200);
var inst_15170 = inst_15201;
var inst_15171 = inst_15200;
var inst_15172 = inst_15202;
var inst_15173 = (0);
var state_15247__$1 = (function (){var statearr_15351 = state_15247;
(statearr_15351[(9)] = inst_15171);

(statearr_15351[(10)] = inst_15173);

(statearr_15351[(19)] = inst_15172);

(statearr_15351[(20)] = inst_15170);

return statearr_15351;
})();
var statearr_15352_18076 = state_15247__$1;
(statearr_15352_18076[(2)] = null);

(statearr_15352_18076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (41))){
var inst_15195 = (state_15247[(23)]);
var inst_15213 = (state_15247[(2)]);
var inst_15214 = cljs.core.next(inst_15195);
var inst_15170 = inst_15214;
var inst_15171 = null;
var inst_15172 = (0);
var inst_15173 = (0);
var state_15247__$1 = (function (){var statearr_15354 = state_15247;
(statearr_15354[(9)] = inst_15171);

(statearr_15354[(10)] = inst_15173);

(statearr_15354[(25)] = inst_15213);

(statearr_15354[(19)] = inst_15172);

(statearr_15354[(20)] = inst_15170);

return statearr_15354;
})();
var statearr_15356_18077 = state_15247__$1;
(statearr_15356_18077[(2)] = null);

(statearr_15356_18077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (43))){
var state_15247__$1 = state_15247;
var statearr_15358_18078 = state_15247__$1;
(statearr_15358_18078[(2)] = null);

(statearr_15358_18078[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (29))){
var inst_15223 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
var statearr_15359_18079 = state_15247__$1;
(statearr_15359_18079[(2)] = inst_15223);

(statearr_15359_18079[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (44))){
var inst_15237 = (state_15247[(2)]);
var state_15247__$1 = (function (){var statearr_15362 = state_15247;
(statearr_15362[(26)] = inst_15237);

return statearr_15362;
})();
var statearr_15363_18082 = state_15247__$1;
(statearr_15363_18082[(2)] = null);

(statearr_15363_18082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (6))){
var inst_15162 = (state_15247[(27)]);
var inst_15161 = cljs.core.deref(cs);
var inst_15162__$1 = cljs.core.keys(inst_15161);
var inst_15163 = cljs.core.count(inst_15162__$1);
var inst_15164 = cljs.core.reset_BANG_(dctr,inst_15163);
var inst_15169 = cljs.core.seq(inst_15162__$1);
var inst_15170 = inst_15169;
var inst_15171 = null;
var inst_15172 = (0);
var inst_15173 = (0);
var state_15247__$1 = (function (){var statearr_15366 = state_15247;
(statearr_15366[(9)] = inst_15171);

(statearr_15366[(10)] = inst_15173);

(statearr_15366[(28)] = inst_15164);

(statearr_15366[(27)] = inst_15162__$1);

(statearr_15366[(19)] = inst_15172);

(statearr_15366[(20)] = inst_15170);

return statearr_15366;
})();
var statearr_15368_18084 = state_15247__$1;
(statearr_15368_18084[(2)] = null);

(statearr_15368_18084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (28))){
var inst_15195 = (state_15247[(23)]);
var inst_15170 = (state_15247[(20)]);
var inst_15195__$1 = cljs.core.seq(inst_15170);
var state_15247__$1 = (function (){var statearr_15370 = state_15247;
(statearr_15370[(23)] = inst_15195__$1);

return statearr_15370;
})();
if(inst_15195__$1){
var statearr_15371_18086 = state_15247__$1;
(statearr_15371_18086[(1)] = (33));

} else {
var statearr_15372_18087 = state_15247__$1;
(statearr_15372_18087[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (25))){
var inst_15173 = (state_15247[(10)]);
var inst_15172 = (state_15247[(19)]);
var inst_15176 = (inst_15173 < inst_15172);
var inst_15177 = inst_15176;
var state_15247__$1 = state_15247;
if(cljs.core.truth_(inst_15177)){
var statearr_15374_18091 = state_15247__$1;
(statearr_15374_18091[(1)] = (27));

} else {
var statearr_15375_18092 = state_15247__$1;
(statearr_15375_18092[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (34))){
var state_15247__$1 = state_15247;
var statearr_15378_18093 = state_15247__$1;
(statearr_15378_18093[(2)] = null);

(statearr_15378_18093[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (17))){
var state_15247__$1 = state_15247;
var statearr_15380_18094 = state_15247__$1;
(statearr_15380_18094[(2)] = null);

(statearr_15380_18094[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (3))){
var inst_15244 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15247__$1,inst_15244);
} else {
if((state_val_15250 === (12))){
var inst_15157 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
var statearr_15384_18097 = state_15247__$1;
(statearr_15384_18097[(2)] = inst_15157);

(statearr_15384_18097[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (2))){
var state_15247__$1 = state_15247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15247__$1,(4),ch);
} else {
if((state_val_15250 === (23))){
var state_15247__$1 = state_15247;
var statearr_15386_18100 = state_15247__$1;
(statearr_15386_18100[(2)] = null);

(statearr_15386_18100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (35))){
var inst_15220 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
var statearr_15387_18107 = state_15247__$1;
(statearr_15387_18107[(2)] = inst_15220);

(statearr_15387_18107[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (19))){
var inst_15127 = (state_15247[(7)]);
var inst_15131 = cljs.core.chunk_first(inst_15127);
var inst_15132 = cljs.core.chunk_rest(inst_15127);
var inst_15133 = cljs.core.count(inst_15131);
var inst_15100 = inst_15132;
var inst_15101 = inst_15131;
var inst_15102 = inst_15133;
var inst_15103 = (0);
var state_15247__$1 = (function (){var statearr_15393 = state_15247;
(statearr_15393[(14)] = inst_15102);

(statearr_15393[(15)] = inst_15103);

(statearr_15393[(16)] = inst_15100);

(statearr_15393[(17)] = inst_15101);

return statearr_15393;
})();
var statearr_15396_18108 = state_15247__$1;
(statearr_15396_18108[(2)] = null);

(statearr_15396_18108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (11))){
var inst_15100 = (state_15247[(16)]);
var inst_15127 = (state_15247[(7)]);
var inst_15127__$1 = cljs.core.seq(inst_15100);
var state_15247__$1 = (function (){var statearr_15399 = state_15247;
(statearr_15399[(7)] = inst_15127__$1);

return statearr_15399;
})();
if(inst_15127__$1){
var statearr_15401_18112 = state_15247__$1;
(statearr_15401_18112[(1)] = (16));

} else {
var statearr_15402_18113 = state_15247__$1;
(statearr_15402_18113[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (9))){
var inst_15159 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
var statearr_15408_18119 = state_15247__$1;
(statearr_15408_18119[(2)] = inst_15159);

(statearr_15408_18119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (5))){
var inst_15098 = cljs.core.deref(cs);
var inst_15099 = cljs.core.seq(inst_15098);
var inst_15100 = inst_15099;
var inst_15101 = null;
var inst_15102 = (0);
var inst_15103 = (0);
var state_15247__$1 = (function (){var statearr_15411 = state_15247;
(statearr_15411[(14)] = inst_15102);

(statearr_15411[(15)] = inst_15103);

(statearr_15411[(16)] = inst_15100);

(statearr_15411[(17)] = inst_15101);

return statearr_15411;
})();
var statearr_15415_18130 = state_15247__$1;
(statearr_15415_18130[(2)] = null);

(statearr_15415_18130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (14))){
var state_15247__$1 = state_15247;
var statearr_15416_18131 = state_15247__$1;
(statearr_15416_18131[(2)] = null);

(statearr_15416_18131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (45))){
var inst_15234 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
var statearr_15417_18132 = state_15247__$1;
(statearr_15417_18132[(2)] = inst_15234);

(statearr_15417_18132[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (26))){
var inst_15162 = (state_15247[(27)]);
var inst_15226 = (state_15247[(2)]);
var inst_15231 = cljs.core.seq(inst_15162);
var state_15247__$1 = (function (){var statearr_15418 = state_15247;
(statearr_15418[(29)] = inst_15226);

return statearr_15418;
})();
if(inst_15231){
var statearr_15424_18140 = state_15247__$1;
(statearr_15424_18140[(1)] = (42));

} else {
var statearr_15425_18141 = state_15247__$1;
(statearr_15425_18141[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (16))){
var inst_15127 = (state_15247[(7)]);
var inst_15129 = cljs.core.chunked_seq_QMARK_(inst_15127);
var state_15247__$1 = state_15247;
if(inst_15129){
var statearr_15429_18145 = state_15247__$1;
(statearr_15429_18145[(1)] = (19));

} else {
var statearr_15430_18146 = state_15247__$1;
(statearr_15430_18146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (38))){
var inst_15217 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
var statearr_15434_18147 = state_15247__$1;
(statearr_15434_18147[(2)] = inst_15217);

(statearr_15434_18147[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (30))){
var state_15247__$1 = state_15247;
var statearr_15435_18148 = state_15247__$1;
(statearr_15435_18148[(2)] = null);

(statearr_15435_18148[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (10))){
var inst_15103 = (state_15247[(15)]);
var inst_15101 = (state_15247[(17)]);
var inst_15113 = cljs.core._nth(inst_15101,inst_15103);
var inst_15114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15113,(0),null);
var inst_15118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15113,(1),null);
var state_15247__$1 = (function (){var statearr_15439 = state_15247;
(statearr_15439[(24)] = inst_15114);

return statearr_15439;
})();
if(cljs.core.truth_(inst_15118)){
var statearr_15440_18149 = state_15247__$1;
(statearr_15440_18149[(1)] = (13));

} else {
var statearr_15441_18150 = state_15247__$1;
(statearr_15441_18150[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (18))){
var inst_15155 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
var statearr_15446_18151 = state_15247__$1;
(statearr_15446_18151[(2)] = inst_15155);

(statearr_15446_18151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (42))){
var state_15247__$1 = state_15247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15247__$1,(45),dchan);
} else {
if((state_val_15250 === (37))){
var inst_15205 = (state_15247[(22)]);
var inst_15195 = (state_15247[(23)]);
var inst_15089 = (state_15247[(12)]);
var inst_15205__$1 = cljs.core.first(inst_15195);
var inst_15207 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15205__$1,inst_15089,done);
var state_15247__$1 = (function (){var statearr_15479 = state_15247;
(statearr_15479[(22)] = inst_15205__$1);

return statearr_15479;
})();
if(cljs.core.truth_(inst_15207)){
var statearr_15488_18152 = state_15247__$1;
(statearr_15488_18152[(1)] = (39));

} else {
var statearr_15489_18153 = state_15247__$1;
(statearr_15489_18153[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (8))){
var inst_15102 = (state_15247[(14)]);
var inst_15103 = (state_15247[(15)]);
var inst_15107 = (inst_15103 < inst_15102);
var inst_15108 = inst_15107;
var state_15247__$1 = state_15247;
if(cljs.core.truth_(inst_15108)){
var statearr_15497_18155 = state_15247__$1;
(statearr_15497_18155[(1)] = (10));

} else {
var statearr_15504_18156 = state_15247__$1;
(statearr_15504_18156[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13395__auto__ = null;
var cljs$core$async$mult_$_state_machine__13395__auto____0 = (function (){
var statearr_15509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15509[(0)] = cljs$core$async$mult_$_state_machine__13395__auto__);

(statearr_15509[(1)] = (1));

return statearr_15509;
});
var cljs$core$async$mult_$_state_machine__13395__auto____1 = (function (state_15247){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_15247);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e15510){var ex__13398__auto__ = e15510;
var statearr_15511_18167 = state_15247;
(statearr_15511_18167[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_15247[(4)]))){
var statearr_15514_18168 = state_15247;
(statearr_15514_18168[(1)] = cljs.core.first((state_15247[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18171 = state_15247;
state_15247 = G__18171;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13395__auto__ = function(state_15247){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13395__auto____1.call(this,state_15247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13395__auto____0;
cljs$core$async$mult_$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13395__auto____1;
return cljs$core$async$mult_$_state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_15518 = f__13707__auto__();
(statearr_15518[(6)] = c__13706__auto___18039);

return statearr_15518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15524 = arguments.length;
switch (G__15524) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18183 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18183(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18191 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18191(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18199 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18199(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18201 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18201(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18205 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18205(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18206 = arguments.length;
var i__5770__auto___18207 = (0);
while(true){
if((i__5770__auto___18207 < len__5769__auto___18206)){
args__5775__auto__.push((arguments[i__5770__auto___18207]));

var G__18208 = (i__5770__auto___18207 + (1));
i__5770__auto___18207 = G__18208;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15607){
var map__15608 = p__15607;
var map__15608__$1 = cljs.core.__destructure_map(map__15608);
var opts = map__15608__$1;
var statearr_15611_18210 = state;
(statearr_15611_18210[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15615_18212 = state;
(statearr_15615_18212[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15618_18216 = state;
(statearr_15618_18216[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15598){
var G__15599 = cljs.core.first(seq15598);
var seq15598__$1 = cljs.core.next(seq15598);
var G__15600 = cljs.core.first(seq15598__$1);
var seq15598__$2 = cljs.core.next(seq15598__$1);
var G__15601 = cljs.core.first(seq15598__$2);
var seq15598__$3 = cljs.core.next(seq15598__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15599,G__15600,G__15601,seq15598__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15663 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15664){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15664 = meta15664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15665,meta15664__$1){
var self__ = this;
var _15665__$1 = this;
return (new cljs.core.async.t_cljs$core$async15663(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15664__$1));
}));

(cljs.core.async.t_cljs$core$async15663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15665){
var self__ = this;
var _15665__$1 = this;
return self__.meta15664;
}));

(cljs.core.async.t_cljs$core$async15663.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15663.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15663.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15663.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15663.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15663.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15663.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15664","meta15664",1690667979,null)], null);
}));

(cljs.core.async.t_cljs$core$async15663.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15663");

(cljs.core.async.t_cljs$core$async15663.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15663");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15663.
 */
cljs.core.async.__GT_t_cljs$core$async15663 = (function cljs$core$async$mix_$___GT_t_cljs$core$async15663(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15664){
return (new cljs.core.async.t_cljs$core$async15663(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15664));
});

}

return (new cljs.core.async.t_cljs$core$async15663(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13706__auto___18260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_15788){
var state_val_15789 = (state_15788[(1)]);
if((state_val_15789 === (7))){
var inst_15737 = (state_15788[(2)]);
var state_15788__$1 = state_15788;
if(cljs.core.truth_(inst_15737)){
var statearr_15798_18264 = state_15788__$1;
(statearr_15798_18264[(1)] = (8));

} else {
var statearr_15800_18265 = state_15788__$1;
(statearr_15800_18265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (20))){
var inst_15730 = (state_15788[(7)]);
var state_15788__$1 = state_15788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15788__$1,(23),out,inst_15730);
} else {
if((state_val_15789 === (1))){
var inst_15711 = calc_state();
var inst_15713 = cljs.core.__destructure_map(inst_15711);
var inst_15714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15713,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15713,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15713,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15717 = inst_15711;
var state_15788__$1 = (function (){var statearr_15807 = state_15788;
(statearr_15807[(8)] = inst_15715);

(statearr_15807[(9)] = inst_15714);

(statearr_15807[(10)] = inst_15716);

(statearr_15807[(11)] = inst_15717);

return statearr_15807;
})();
var statearr_15808_18273 = state_15788__$1;
(statearr_15808_18273[(2)] = null);

(statearr_15808_18273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (24))){
var inst_15720 = (state_15788[(12)]);
var inst_15717 = inst_15720;
var state_15788__$1 = (function (){var statearr_15812 = state_15788;
(statearr_15812[(11)] = inst_15717);

return statearr_15812;
})();
var statearr_15815_18274 = state_15788__$1;
(statearr_15815_18274[(2)] = null);

(statearr_15815_18274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (4))){
var inst_15732 = (state_15788[(13)]);
var inst_15730 = (state_15788[(7)]);
var inst_15729 = (state_15788[(2)]);
var inst_15730__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15729,(0),null);
var inst_15731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15729,(1),null);
var inst_15732__$1 = (inst_15730__$1 == null);
var state_15788__$1 = (function (){var statearr_15822 = state_15788;
(statearr_15822[(13)] = inst_15732__$1);

(statearr_15822[(7)] = inst_15730__$1);

(statearr_15822[(14)] = inst_15731);

return statearr_15822;
})();
if(cljs.core.truth_(inst_15732__$1)){
var statearr_15823_18278 = state_15788__$1;
(statearr_15823_18278[(1)] = (5));

} else {
var statearr_15824_18279 = state_15788__$1;
(statearr_15824_18279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (15))){
var inst_15722 = (state_15788[(15)]);
var inst_15754 = (state_15788[(16)]);
var inst_15754__$1 = cljs.core.empty_QMARK_(inst_15722);
var state_15788__$1 = (function (){var statearr_15827 = state_15788;
(statearr_15827[(16)] = inst_15754__$1);

return statearr_15827;
})();
if(inst_15754__$1){
var statearr_15830_18282 = state_15788__$1;
(statearr_15830_18282[(1)] = (17));

} else {
var statearr_15832_18284 = state_15788__$1;
(statearr_15832_18284[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (21))){
var inst_15720 = (state_15788[(12)]);
var inst_15717 = inst_15720;
var state_15788__$1 = (function (){var statearr_15835 = state_15788;
(statearr_15835[(11)] = inst_15717);

return statearr_15835;
})();
var statearr_15842_18286 = state_15788__$1;
(statearr_15842_18286[(2)] = null);

(statearr_15842_18286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (13))){
var inst_15745 = (state_15788[(2)]);
var inst_15747 = calc_state();
var inst_15717 = inst_15747;
var state_15788__$1 = (function (){var statearr_15846 = state_15788;
(statearr_15846[(11)] = inst_15717);

(statearr_15846[(17)] = inst_15745);

return statearr_15846;
})();
var statearr_15847_18290 = state_15788__$1;
(statearr_15847_18290[(2)] = null);

(statearr_15847_18290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (22))){
var inst_15775 = (state_15788[(2)]);
var state_15788__$1 = state_15788;
var statearr_15849_18291 = state_15788__$1;
(statearr_15849_18291[(2)] = inst_15775);

(statearr_15849_18291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (6))){
var inst_15731 = (state_15788[(14)]);
var inst_15735 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15731,change);
var state_15788__$1 = state_15788;
var statearr_15856_18293 = state_15788__$1;
(statearr_15856_18293[(2)] = inst_15735);

(statearr_15856_18293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (25))){
var state_15788__$1 = state_15788;
var statearr_15858_18295 = state_15788__$1;
(statearr_15858_18295[(2)] = null);

(statearr_15858_18295[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (17))){
var inst_15723 = (state_15788[(18)]);
var inst_15731 = (state_15788[(14)]);
var inst_15756 = (inst_15723.cljs$core$IFn$_invoke$arity$1 ? inst_15723.cljs$core$IFn$_invoke$arity$1(inst_15731) : inst_15723.call(null,inst_15731));
var inst_15757 = cljs.core.not(inst_15756);
var state_15788__$1 = state_15788;
var statearr_15860_18299 = state_15788__$1;
(statearr_15860_18299[(2)] = inst_15757);

(statearr_15860_18299[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (3))){
var inst_15779 = (state_15788[(2)]);
var state_15788__$1 = state_15788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15788__$1,inst_15779);
} else {
if((state_val_15789 === (12))){
var state_15788__$1 = state_15788;
var statearr_15869_18300 = state_15788__$1;
(statearr_15869_18300[(2)] = null);

(statearr_15869_18300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (2))){
var inst_15717 = (state_15788[(11)]);
var inst_15720 = (state_15788[(12)]);
var inst_15720__$1 = cljs.core.__destructure_map(inst_15717);
var inst_15722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15720__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15720__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15720__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15788__$1 = (function (){var statearr_15884 = state_15788;
(statearr_15884[(18)] = inst_15723);

(statearr_15884[(15)] = inst_15722);

(statearr_15884[(12)] = inst_15720__$1);

return statearr_15884;
})();
return cljs.core.async.ioc_alts_BANG_(state_15788__$1,(4),inst_15724);
} else {
if((state_val_15789 === (23))){
var inst_15766 = (state_15788[(2)]);
var state_15788__$1 = state_15788;
if(cljs.core.truth_(inst_15766)){
var statearr_15889_18309 = state_15788__$1;
(statearr_15889_18309[(1)] = (24));

} else {
var statearr_15892_18310 = state_15788__$1;
(statearr_15892_18310[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (19))){
var inst_15760 = (state_15788[(2)]);
var state_15788__$1 = state_15788;
var statearr_15894_18311 = state_15788__$1;
(statearr_15894_18311[(2)] = inst_15760);

(statearr_15894_18311[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (11))){
var inst_15731 = (state_15788[(14)]);
var inst_15741 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15731);
var state_15788__$1 = state_15788;
var statearr_15898_18316 = state_15788__$1;
(statearr_15898_18316[(2)] = inst_15741);

(statearr_15898_18316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (9))){
var inst_15722 = (state_15788[(15)]);
var inst_15731 = (state_15788[(14)]);
var inst_15751 = (state_15788[(19)]);
var inst_15751__$1 = (inst_15722.cljs$core$IFn$_invoke$arity$1 ? inst_15722.cljs$core$IFn$_invoke$arity$1(inst_15731) : inst_15722.call(null,inst_15731));
var state_15788__$1 = (function (){var statearr_15906 = state_15788;
(statearr_15906[(19)] = inst_15751__$1);

return statearr_15906;
})();
if(cljs.core.truth_(inst_15751__$1)){
var statearr_15907_18319 = state_15788__$1;
(statearr_15907_18319[(1)] = (14));

} else {
var statearr_15909_18320 = state_15788__$1;
(statearr_15909_18320[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (5))){
var inst_15732 = (state_15788[(13)]);
var state_15788__$1 = state_15788;
var statearr_15910_18322 = state_15788__$1;
(statearr_15910_18322[(2)] = inst_15732);

(statearr_15910_18322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (14))){
var inst_15751 = (state_15788[(19)]);
var state_15788__$1 = state_15788;
var statearr_15915_18328 = state_15788__$1;
(statearr_15915_18328[(2)] = inst_15751);

(statearr_15915_18328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (26))){
var inst_15771 = (state_15788[(2)]);
var state_15788__$1 = state_15788;
var statearr_15919_18329 = state_15788__$1;
(statearr_15919_18329[(2)] = inst_15771);

(statearr_15919_18329[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (16))){
var inst_15762 = (state_15788[(2)]);
var state_15788__$1 = state_15788;
if(cljs.core.truth_(inst_15762)){
var statearr_15921_18330 = state_15788__$1;
(statearr_15921_18330[(1)] = (20));

} else {
var statearr_15922_18331 = state_15788__$1;
(statearr_15922_18331[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (10))){
var inst_15777 = (state_15788[(2)]);
var state_15788__$1 = state_15788;
var statearr_15929_18332 = state_15788__$1;
(statearr_15929_18332[(2)] = inst_15777);

(statearr_15929_18332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (18))){
var inst_15754 = (state_15788[(16)]);
var state_15788__$1 = state_15788;
var statearr_15937_18333 = state_15788__$1;
(statearr_15937_18333[(2)] = inst_15754);

(statearr_15937_18333[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15789 === (8))){
var inst_15730 = (state_15788[(7)]);
var inst_15739 = (inst_15730 == null);
var state_15788__$1 = state_15788;
if(cljs.core.truth_(inst_15739)){
var statearr_15945_18334 = state_15788__$1;
(statearr_15945_18334[(1)] = (11));

} else {
var statearr_15946_18335 = state_15788__$1;
(statearr_15946_18335[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13395__auto__ = null;
var cljs$core$async$mix_$_state_machine__13395__auto____0 = (function (){
var statearr_15953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15953[(0)] = cljs$core$async$mix_$_state_machine__13395__auto__);

(statearr_15953[(1)] = (1));

return statearr_15953;
});
var cljs$core$async$mix_$_state_machine__13395__auto____1 = (function (state_15788){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_15788);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e15955){var ex__13398__auto__ = e15955;
var statearr_15956_18336 = state_15788;
(statearr_15956_18336[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_15788[(4)]))){
var statearr_15958_18341 = state_15788;
(statearr_15958_18341[(1)] = cljs.core.first((state_15788[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18342 = state_15788;
state_15788 = G__18342;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13395__auto__ = function(state_15788){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13395__auto____1.call(this,state_15788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13395__auto____0;
cljs$core$async$mix_$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13395__auto____1;
return cljs$core$async$mix_$_state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_15972 = f__13707__auto__();
(statearr_15972[(6)] = c__13706__auto___18260);

return statearr_15972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18371 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18371(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18379 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18379(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18392 = (function() {
var G__18393 = null;
var G__18393__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18393__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18393 = function(p,v){
switch(arguments.length){
case 1:
return G__18393__1.call(this,p);
case 2:
return G__18393__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18393.cljs$core$IFn$_invoke$arity$1 = G__18393__1;
G__18393.cljs$core$IFn$_invoke$arity$2 = G__18393__2;
return G__18393;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16007 = arguments.length;
switch (G__16007) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18392(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18392(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16040 = arguments.length;
switch (G__16040) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16031_SHARP_){
if(cljs.core.truth_((p1__16031_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16031_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16031_SHARP_.call(null,topic)))){
return p1__16031_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16031_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16046 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16047){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16047 = meta16047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16048,meta16047__$1){
var self__ = this;
var _16048__$1 = this;
return (new cljs.core.async.t_cljs$core$async16046(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16047__$1));
}));

(cljs.core.async.t_cljs$core$async16046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16048){
var self__ = this;
var _16048__$1 = this;
return self__.meta16047;
}));

(cljs.core.async.t_cljs$core$async16046.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16046.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16046.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16046.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16046.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16046.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16047","meta16047",-1379562318,null)], null);
}));

(cljs.core.async.t_cljs$core$async16046.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16046");

(cljs.core.async.t_cljs$core$async16046.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16046");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16046.
 */
cljs.core.async.__GT_t_cljs$core$async16046 = (function cljs$core$async$__GT_t_cljs$core$async16046(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16047){
return (new cljs.core.async.t_cljs$core$async16046(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16047));
});

}

return (new cljs.core.async.t_cljs$core$async16046(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13706__auto___18417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_16164){
var state_val_16167 = (state_16164[(1)]);
if((state_val_16167 === (7))){
var inst_16160 = (state_16164[(2)]);
var state_16164__$1 = state_16164;
var statearr_16168_18419 = state_16164__$1;
(statearr_16168_18419[(2)] = inst_16160);

(statearr_16168_18419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (20))){
var state_16164__$1 = state_16164;
var statearr_16169_18420 = state_16164__$1;
(statearr_16169_18420[(2)] = null);

(statearr_16169_18420[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (1))){
var state_16164__$1 = state_16164;
var statearr_16171_18422 = state_16164__$1;
(statearr_16171_18422[(2)] = null);

(statearr_16171_18422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (24))){
var inst_16133 = (state_16164[(7)]);
var inst_16152 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16133);
var state_16164__$1 = state_16164;
var statearr_16172_18423 = state_16164__$1;
(statearr_16172_18423[(2)] = inst_16152);

(statearr_16172_18423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (4))){
var inst_16079 = (state_16164[(8)]);
var inst_16079__$1 = (state_16164[(2)]);
var inst_16080 = (inst_16079__$1 == null);
var state_16164__$1 = (function (){var statearr_16177 = state_16164;
(statearr_16177[(8)] = inst_16079__$1);

return statearr_16177;
})();
if(cljs.core.truth_(inst_16080)){
var statearr_16180_18425 = state_16164__$1;
(statearr_16180_18425[(1)] = (5));

} else {
var statearr_16183_18426 = state_16164__$1;
(statearr_16183_18426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (15))){
var inst_16127 = (state_16164[(2)]);
var state_16164__$1 = state_16164;
var statearr_16184_18427 = state_16164__$1;
(statearr_16184_18427[(2)] = inst_16127);

(statearr_16184_18427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (21))){
var inst_16157 = (state_16164[(2)]);
var state_16164__$1 = (function (){var statearr_16186 = state_16164;
(statearr_16186[(9)] = inst_16157);

return statearr_16186;
})();
var statearr_16187_18428 = state_16164__$1;
(statearr_16187_18428[(2)] = null);

(statearr_16187_18428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (13))){
var inst_16109 = (state_16164[(10)]);
var inst_16111 = cljs.core.chunked_seq_QMARK_(inst_16109);
var state_16164__$1 = state_16164;
if(inst_16111){
var statearr_16189_18429 = state_16164__$1;
(statearr_16189_18429[(1)] = (16));

} else {
var statearr_16190_18430 = state_16164__$1;
(statearr_16190_18430[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (22))){
var inst_16148 = (state_16164[(2)]);
var state_16164__$1 = state_16164;
if(cljs.core.truth_(inst_16148)){
var statearr_16191_18431 = state_16164__$1;
(statearr_16191_18431[(1)] = (23));

} else {
var statearr_16192_18432 = state_16164__$1;
(statearr_16192_18432[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (6))){
var inst_16079 = (state_16164[(8)]);
var inst_16138 = (state_16164[(11)]);
var inst_16133 = (state_16164[(7)]);
var inst_16133__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16079) : topic_fn.call(null,inst_16079));
var inst_16137 = cljs.core.deref(mults);
var inst_16138__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16137,inst_16133__$1);
var state_16164__$1 = (function (){var statearr_16193 = state_16164;
(statearr_16193[(11)] = inst_16138__$1);

(statearr_16193[(7)] = inst_16133__$1);

return statearr_16193;
})();
if(cljs.core.truth_(inst_16138__$1)){
var statearr_16198_18433 = state_16164__$1;
(statearr_16198_18433[(1)] = (19));

} else {
var statearr_16199_18434 = state_16164__$1;
(statearr_16199_18434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (25))){
var inst_16154 = (state_16164[(2)]);
var state_16164__$1 = state_16164;
var statearr_16201_18438 = state_16164__$1;
(statearr_16201_18438[(2)] = inst_16154);

(statearr_16201_18438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (17))){
var inst_16109 = (state_16164[(10)]);
var inst_16118 = cljs.core.first(inst_16109);
var inst_16119 = cljs.core.async.muxch_STAR_(inst_16118);
var inst_16120 = cljs.core.async.close_BANG_(inst_16119);
var inst_16121 = cljs.core.next(inst_16109);
var inst_16089 = inst_16121;
var inst_16090 = null;
var inst_16091 = (0);
var inst_16092 = (0);
var state_16164__$1 = (function (){var statearr_16203 = state_16164;
(statearr_16203[(12)] = inst_16092);

(statearr_16203[(13)] = inst_16089);

(statearr_16203[(14)] = inst_16091);

(statearr_16203[(15)] = inst_16120);

(statearr_16203[(16)] = inst_16090);

return statearr_16203;
})();
var statearr_16205_18447 = state_16164__$1;
(statearr_16205_18447[(2)] = null);

(statearr_16205_18447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (3))){
var inst_16162 = (state_16164[(2)]);
var state_16164__$1 = state_16164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16164__$1,inst_16162);
} else {
if((state_val_16167 === (12))){
var inst_16129 = (state_16164[(2)]);
var state_16164__$1 = state_16164;
var statearr_16207_18454 = state_16164__$1;
(statearr_16207_18454[(2)] = inst_16129);

(statearr_16207_18454[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (2))){
var state_16164__$1 = state_16164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16164__$1,(4),ch);
} else {
if((state_val_16167 === (23))){
var state_16164__$1 = state_16164;
var statearr_16208_18456 = state_16164__$1;
(statearr_16208_18456[(2)] = null);

(statearr_16208_18456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (19))){
var inst_16079 = (state_16164[(8)]);
var inst_16138 = (state_16164[(11)]);
var inst_16146 = cljs.core.async.muxch_STAR_(inst_16138);
var state_16164__$1 = state_16164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16164__$1,(22),inst_16146,inst_16079);
} else {
if((state_val_16167 === (11))){
var inst_16089 = (state_16164[(13)]);
var inst_16109 = (state_16164[(10)]);
var inst_16109__$1 = cljs.core.seq(inst_16089);
var state_16164__$1 = (function (){var statearr_16213 = state_16164;
(statearr_16213[(10)] = inst_16109__$1);

return statearr_16213;
})();
if(inst_16109__$1){
var statearr_16214_18458 = state_16164__$1;
(statearr_16214_18458[(1)] = (13));

} else {
var statearr_16216_18459 = state_16164__$1;
(statearr_16216_18459[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (9))){
var inst_16131 = (state_16164[(2)]);
var state_16164__$1 = state_16164;
var statearr_16218_18460 = state_16164__$1;
(statearr_16218_18460[(2)] = inst_16131);

(statearr_16218_18460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (5))){
var inst_16086 = cljs.core.deref(mults);
var inst_16087 = cljs.core.vals(inst_16086);
var inst_16088 = cljs.core.seq(inst_16087);
var inst_16089 = inst_16088;
var inst_16090 = null;
var inst_16091 = (0);
var inst_16092 = (0);
var state_16164__$1 = (function (){var statearr_16219 = state_16164;
(statearr_16219[(12)] = inst_16092);

(statearr_16219[(13)] = inst_16089);

(statearr_16219[(14)] = inst_16091);

(statearr_16219[(16)] = inst_16090);

return statearr_16219;
})();
var statearr_16220_18467 = state_16164__$1;
(statearr_16220_18467[(2)] = null);

(statearr_16220_18467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (14))){
var state_16164__$1 = state_16164;
var statearr_16224_18468 = state_16164__$1;
(statearr_16224_18468[(2)] = null);

(statearr_16224_18468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (16))){
var inst_16109 = (state_16164[(10)]);
var inst_16113 = cljs.core.chunk_first(inst_16109);
var inst_16114 = cljs.core.chunk_rest(inst_16109);
var inst_16115 = cljs.core.count(inst_16113);
var inst_16089 = inst_16114;
var inst_16090 = inst_16113;
var inst_16091 = inst_16115;
var inst_16092 = (0);
var state_16164__$1 = (function (){var statearr_16229 = state_16164;
(statearr_16229[(12)] = inst_16092);

(statearr_16229[(13)] = inst_16089);

(statearr_16229[(14)] = inst_16091);

(statearr_16229[(16)] = inst_16090);

return statearr_16229;
})();
var statearr_16231_18478 = state_16164__$1;
(statearr_16231_18478[(2)] = null);

(statearr_16231_18478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (10))){
var inst_16092 = (state_16164[(12)]);
var inst_16089 = (state_16164[(13)]);
var inst_16091 = (state_16164[(14)]);
var inst_16090 = (state_16164[(16)]);
var inst_16102 = cljs.core._nth(inst_16090,inst_16092);
var inst_16104 = cljs.core.async.muxch_STAR_(inst_16102);
var inst_16105 = cljs.core.async.close_BANG_(inst_16104);
var inst_16106 = (inst_16092 + (1));
var tmp16221 = inst_16089;
var tmp16222 = inst_16091;
var tmp16223 = inst_16090;
var inst_16089__$1 = tmp16221;
var inst_16090__$1 = tmp16223;
var inst_16091__$1 = tmp16222;
var inst_16092__$1 = inst_16106;
var state_16164__$1 = (function (){var statearr_16232 = state_16164;
(statearr_16232[(12)] = inst_16092__$1);

(statearr_16232[(13)] = inst_16089__$1);

(statearr_16232[(14)] = inst_16091__$1);

(statearr_16232[(17)] = inst_16105);

(statearr_16232[(16)] = inst_16090__$1);

return statearr_16232;
})();
var statearr_16233_18480 = state_16164__$1;
(statearr_16233_18480[(2)] = null);

(statearr_16233_18480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (18))){
var inst_16124 = (state_16164[(2)]);
var state_16164__$1 = state_16164;
var statearr_16238_18483 = state_16164__$1;
(statearr_16238_18483[(2)] = inst_16124);

(statearr_16238_18483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (8))){
var inst_16092 = (state_16164[(12)]);
var inst_16091 = (state_16164[(14)]);
var inst_16099 = (inst_16092 < inst_16091);
var inst_16100 = inst_16099;
var state_16164__$1 = state_16164;
if(cljs.core.truth_(inst_16100)){
var statearr_16240_18491 = state_16164__$1;
(statearr_16240_18491[(1)] = (10));

} else {
var statearr_16241_18492 = state_16164__$1;
(statearr_16241_18492[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13395__auto__ = null;
var cljs$core$async$state_machine__13395__auto____0 = (function (){
var statearr_16243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16243[(0)] = cljs$core$async$state_machine__13395__auto__);

(statearr_16243[(1)] = (1));

return statearr_16243;
});
var cljs$core$async$state_machine__13395__auto____1 = (function (state_16164){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_16164);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e16244){var ex__13398__auto__ = e16244;
var statearr_16245_18493 = state_16164;
(statearr_16245_18493[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_16164[(4)]))){
var statearr_16246_18496 = state_16164;
(statearr_16246_18496[(1)] = cljs.core.first((state_16164[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18499 = state_16164;
state_16164 = G__18499;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$state_machine__13395__auto__ = function(state_16164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13395__auto____1.call(this,state_16164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13395__auto____0;
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13395__auto____1;
return cljs$core$async$state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_16247 = f__13707__auto__();
(statearr_16247[(6)] = c__13706__auto___18417);

return statearr_16247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16249 = arguments.length;
switch (G__16249) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16257 = arguments.length;
switch (G__16257) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16268 = arguments.length;
switch (G__16268) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13706__auto___18521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_16324){
var state_val_16325 = (state_16324[(1)]);
if((state_val_16325 === (7))){
var state_16324__$1 = state_16324;
var statearr_16330_18522 = state_16324__$1;
(statearr_16330_18522[(2)] = null);

(statearr_16330_18522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (1))){
var state_16324__$1 = state_16324;
var statearr_16331_18523 = state_16324__$1;
(statearr_16331_18523[(2)] = null);

(statearr_16331_18523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (4))){
var inst_16278 = (state_16324[(7)]);
var inst_16277 = (state_16324[(8)]);
var inst_16280 = (inst_16278 < inst_16277);
var state_16324__$1 = state_16324;
if(cljs.core.truth_(inst_16280)){
var statearr_16332_18524 = state_16324__$1;
(statearr_16332_18524[(1)] = (6));

} else {
var statearr_16334_18527 = state_16324__$1;
(statearr_16334_18527[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (15))){
var inst_16304 = (state_16324[(9)]);
var inst_16309 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16304);
var state_16324__$1 = state_16324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16324__$1,(17),out,inst_16309);
} else {
if((state_val_16325 === (13))){
var inst_16304 = (state_16324[(9)]);
var inst_16304__$1 = (state_16324[(2)]);
var inst_16305 = cljs.core.some(cljs.core.nil_QMARK_,inst_16304__$1);
var state_16324__$1 = (function (){var statearr_16339 = state_16324;
(statearr_16339[(9)] = inst_16304__$1);

return statearr_16339;
})();
if(cljs.core.truth_(inst_16305)){
var statearr_16342_18528 = state_16324__$1;
(statearr_16342_18528[(1)] = (14));

} else {
var statearr_16345_18529 = state_16324__$1;
(statearr_16345_18529[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (6))){
var state_16324__$1 = state_16324;
var statearr_16346_18533 = state_16324__$1;
(statearr_16346_18533[(2)] = null);

(statearr_16346_18533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (17))){
var inst_16311 = (state_16324[(2)]);
var state_16324__$1 = (function (){var statearr_16359 = state_16324;
(statearr_16359[(10)] = inst_16311);

return statearr_16359;
})();
var statearr_16360_18537 = state_16324__$1;
(statearr_16360_18537[(2)] = null);

(statearr_16360_18537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (3))){
var inst_16316 = (state_16324[(2)]);
var state_16324__$1 = state_16324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16324__$1,inst_16316);
} else {
if((state_val_16325 === (12))){
var _ = (function (){var statearr_16363 = state_16324;
(statearr_16363[(4)] = cljs.core.rest((state_16324[(4)])));

return statearr_16363;
})();
var state_16324__$1 = state_16324;
var ex16357 = (state_16324__$1[(2)]);
var statearr_16364_18542 = state_16324__$1;
(statearr_16364_18542[(5)] = ex16357);


if((ex16357 instanceof Object)){
var statearr_16367_18546 = state_16324__$1;
(statearr_16367_18546[(1)] = (11));

(statearr_16367_18546[(5)] = null);

} else {
throw ex16357;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (2))){
var inst_16276 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16277 = cnt;
var inst_16278 = (0);
var state_16324__$1 = (function (){var statearr_16374 = state_16324;
(statearr_16374[(11)] = inst_16276);

(statearr_16374[(7)] = inst_16278);

(statearr_16374[(8)] = inst_16277);

return statearr_16374;
})();
var statearr_16376_18547 = state_16324__$1;
(statearr_16376_18547[(2)] = null);

(statearr_16376_18547[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (11))){
var inst_16282 = (state_16324[(2)]);
var inst_16283 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16324__$1 = (function (){var statearr_16377 = state_16324;
(statearr_16377[(12)] = inst_16282);

return statearr_16377;
})();
var statearr_16378_18548 = state_16324__$1;
(statearr_16378_18548[(2)] = inst_16283);

(statearr_16378_18548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (9))){
var inst_16278 = (state_16324[(7)]);
var _ = (function (){var statearr_16382 = state_16324;
(statearr_16382[(4)] = cljs.core.cons((12),(state_16324[(4)])));

return statearr_16382;
})();
var inst_16290 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16278) : chs__$1.call(null,inst_16278));
var inst_16291 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16278) : done.call(null,inst_16278));
var inst_16292 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16290,inst_16291);
var ___$1 = (function (){var statearr_16392 = state_16324;
(statearr_16392[(4)] = cljs.core.rest((state_16324[(4)])));

return statearr_16392;
})();
var state_16324__$1 = state_16324;
var statearr_16393_18553 = state_16324__$1;
(statearr_16393_18553[(2)] = inst_16292);

(statearr_16393_18553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (5))){
var inst_16302 = (state_16324[(2)]);
var state_16324__$1 = (function (){var statearr_16398 = state_16324;
(statearr_16398[(13)] = inst_16302);

return statearr_16398;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16324__$1,(13),dchan);
} else {
if((state_val_16325 === (14))){
var inst_16307 = cljs.core.async.close_BANG_(out);
var state_16324__$1 = state_16324;
var statearr_16399_18554 = state_16324__$1;
(statearr_16399_18554[(2)] = inst_16307);

(statearr_16399_18554[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (16))){
var inst_16314 = (state_16324[(2)]);
var state_16324__$1 = state_16324;
var statearr_16401_18559 = state_16324__$1;
(statearr_16401_18559[(2)] = inst_16314);

(statearr_16401_18559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (10))){
var inst_16278 = (state_16324[(7)]);
var inst_16295 = (state_16324[(2)]);
var inst_16296 = (inst_16278 + (1));
var inst_16278__$1 = inst_16296;
var state_16324__$1 = (function (){var statearr_16402 = state_16324;
(statearr_16402[(14)] = inst_16295);

(statearr_16402[(7)] = inst_16278__$1);

return statearr_16402;
})();
var statearr_16403_18560 = state_16324__$1;
(statearr_16403_18560[(2)] = null);

(statearr_16403_18560[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (8))){
var inst_16300 = (state_16324[(2)]);
var state_16324__$1 = state_16324;
var statearr_16404_18561 = state_16324__$1;
(statearr_16404_18561[(2)] = inst_16300);

(statearr_16404_18561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13395__auto__ = null;
var cljs$core$async$state_machine__13395__auto____0 = (function (){
var statearr_16419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16419[(0)] = cljs$core$async$state_machine__13395__auto__);

(statearr_16419[(1)] = (1));

return statearr_16419;
});
var cljs$core$async$state_machine__13395__auto____1 = (function (state_16324){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_16324);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e16427){var ex__13398__auto__ = e16427;
var statearr_16428_18562 = state_16324;
(statearr_16428_18562[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_16324[(4)]))){
var statearr_16429_18563 = state_16324;
(statearr_16429_18563[(1)] = cljs.core.first((state_16324[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18564 = state_16324;
state_16324 = G__18564;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$state_machine__13395__auto__ = function(state_16324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13395__auto____1.call(this,state_16324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13395__auto____0;
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13395__auto____1;
return cljs$core$async$state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_16430 = f__13707__auto__();
(statearr_16430[(6)] = c__13706__auto___18521);

return statearr_16430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16437 = arguments.length;
switch (G__16437) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13706__auto___18566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_16478){
var state_val_16479 = (state_16478[(1)]);
if((state_val_16479 === (7))){
var inst_16457 = (state_16478[(7)]);
var inst_16458 = (state_16478[(8)]);
var inst_16457__$1 = (state_16478[(2)]);
var inst_16458__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16457__$1,(0),null);
var inst_16459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16457__$1,(1),null);
var inst_16460 = (inst_16458__$1 == null);
var state_16478__$1 = (function (){var statearr_16480 = state_16478;
(statearr_16480[(7)] = inst_16457__$1);

(statearr_16480[(8)] = inst_16458__$1);

(statearr_16480[(9)] = inst_16459);

return statearr_16480;
})();
if(cljs.core.truth_(inst_16460)){
var statearr_16481_18571 = state_16478__$1;
(statearr_16481_18571[(1)] = (8));

} else {
var statearr_16487_18572 = state_16478__$1;
(statearr_16487_18572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16479 === (1))){
var inst_16444 = cljs.core.vec(chs);
var inst_16445 = inst_16444;
var state_16478__$1 = (function (){var statearr_16495 = state_16478;
(statearr_16495[(10)] = inst_16445);

return statearr_16495;
})();
var statearr_16500_18576 = state_16478__$1;
(statearr_16500_18576[(2)] = null);

(statearr_16500_18576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16479 === (4))){
var inst_16445 = (state_16478[(10)]);
var state_16478__$1 = state_16478;
return cljs.core.async.ioc_alts_BANG_(state_16478__$1,(7),inst_16445);
} else {
if((state_val_16479 === (6))){
var inst_16474 = (state_16478[(2)]);
var state_16478__$1 = state_16478;
var statearr_16510_18577 = state_16478__$1;
(statearr_16510_18577[(2)] = inst_16474);

(statearr_16510_18577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16479 === (3))){
var inst_16476 = (state_16478[(2)]);
var state_16478__$1 = state_16478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16478__$1,inst_16476);
} else {
if((state_val_16479 === (2))){
var inst_16445 = (state_16478[(10)]);
var inst_16447 = cljs.core.count(inst_16445);
var inst_16448 = (inst_16447 > (0));
var state_16478__$1 = state_16478;
if(cljs.core.truth_(inst_16448)){
var statearr_16512_18578 = state_16478__$1;
(statearr_16512_18578[(1)] = (4));

} else {
var statearr_16519_18579 = state_16478__$1;
(statearr_16519_18579[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16479 === (11))){
var inst_16445 = (state_16478[(10)]);
var inst_16467 = (state_16478[(2)]);
var tmp16511 = inst_16445;
var inst_16445__$1 = tmp16511;
var state_16478__$1 = (function (){var statearr_16520 = state_16478;
(statearr_16520[(11)] = inst_16467);

(statearr_16520[(10)] = inst_16445__$1);

return statearr_16520;
})();
var statearr_16521_18580 = state_16478__$1;
(statearr_16521_18580[(2)] = null);

(statearr_16521_18580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16479 === (9))){
var inst_16458 = (state_16478[(8)]);
var state_16478__$1 = state_16478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16478__$1,(11),out,inst_16458);
} else {
if((state_val_16479 === (5))){
var inst_16472 = cljs.core.async.close_BANG_(out);
var state_16478__$1 = state_16478;
var statearr_16527_18584 = state_16478__$1;
(statearr_16527_18584[(2)] = inst_16472);

(statearr_16527_18584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16479 === (10))){
var inst_16470 = (state_16478[(2)]);
var state_16478__$1 = state_16478;
var statearr_16528_18586 = state_16478__$1;
(statearr_16528_18586[(2)] = inst_16470);

(statearr_16528_18586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16479 === (8))){
var inst_16457 = (state_16478[(7)]);
var inst_16445 = (state_16478[(10)]);
var inst_16458 = (state_16478[(8)]);
var inst_16459 = (state_16478[(9)]);
var inst_16462 = (function (){var cs = inst_16445;
var vec__16453 = inst_16457;
var v = inst_16458;
var c = inst_16459;
return (function (p1__16431_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16431_SHARP_);
});
})();
var inst_16463 = cljs.core.filterv(inst_16462,inst_16445);
var inst_16445__$1 = inst_16463;
var state_16478__$1 = (function (){var statearr_16535 = state_16478;
(statearr_16535[(10)] = inst_16445__$1);

return statearr_16535;
})();
var statearr_16537_18592 = state_16478__$1;
(statearr_16537_18592[(2)] = null);

(statearr_16537_18592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13395__auto__ = null;
var cljs$core$async$state_machine__13395__auto____0 = (function (){
var statearr_16539 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16539[(0)] = cljs$core$async$state_machine__13395__auto__);

(statearr_16539[(1)] = (1));

return statearr_16539;
});
var cljs$core$async$state_machine__13395__auto____1 = (function (state_16478){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_16478);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e16540){var ex__13398__auto__ = e16540;
var statearr_16541_18601 = state_16478;
(statearr_16541_18601[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_16478[(4)]))){
var statearr_16544_18602 = state_16478;
(statearr_16544_18602[(1)] = cljs.core.first((state_16478[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18603 = state_16478;
state_16478 = G__18603;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$state_machine__13395__auto__ = function(state_16478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13395__auto____1.call(this,state_16478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13395__auto____0;
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13395__auto____1;
return cljs$core$async$state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_16550 = f__13707__auto__();
(statearr_16550[(6)] = c__13706__auto___18566);

return statearr_16550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16562 = arguments.length;
switch (G__16562) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13706__auto___18613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_16603){
var state_val_16604 = (state_16603[(1)]);
if((state_val_16604 === (7))){
var inst_16582 = (state_16603[(7)]);
var inst_16582__$1 = (state_16603[(2)]);
var inst_16583 = (inst_16582__$1 == null);
var inst_16584 = cljs.core.not(inst_16583);
var state_16603__$1 = (function (){var statearr_16609 = state_16603;
(statearr_16609[(7)] = inst_16582__$1);

return statearr_16609;
})();
if(inst_16584){
var statearr_16613_18617 = state_16603__$1;
(statearr_16613_18617[(1)] = (8));

} else {
var statearr_16614_18618 = state_16603__$1;
(statearr_16614_18618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (1))){
var inst_16572 = (0);
var state_16603__$1 = (function (){var statearr_16615 = state_16603;
(statearr_16615[(8)] = inst_16572);

return statearr_16615;
})();
var statearr_16616_18619 = state_16603__$1;
(statearr_16616_18619[(2)] = null);

(statearr_16616_18619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (4))){
var state_16603__$1 = state_16603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16603__$1,(7),ch);
} else {
if((state_val_16604 === (6))){
var inst_16596 = (state_16603[(2)]);
var state_16603__$1 = state_16603;
var statearr_16621_18620 = state_16603__$1;
(statearr_16621_18620[(2)] = inst_16596);

(statearr_16621_18620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (3))){
var inst_16598 = (state_16603[(2)]);
var inst_16599 = cljs.core.async.close_BANG_(out);
var state_16603__$1 = (function (){var statearr_16624 = state_16603;
(statearr_16624[(9)] = inst_16598);

return statearr_16624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16603__$1,inst_16599);
} else {
if((state_val_16604 === (2))){
var inst_16572 = (state_16603[(8)]);
var inst_16575 = (inst_16572 < n);
var state_16603__$1 = state_16603;
if(cljs.core.truth_(inst_16575)){
var statearr_16629_18621 = state_16603__$1;
(statearr_16629_18621[(1)] = (4));

} else {
var statearr_16634_18622 = state_16603__$1;
(statearr_16634_18622[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (11))){
var inst_16572 = (state_16603[(8)]);
var inst_16587 = (state_16603[(2)]);
var inst_16588 = (inst_16572 + (1));
var inst_16572__$1 = inst_16588;
var state_16603__$1 = (function (){var statearr_16635 = state_16603;
(statearr_16635[(10)] = inst_16587);

(statearr_16635[(8)] = inst_16572__$1);

return statearr_16635;
})();
var statearr_16636_18623 = state_16603__$1;
(statearr_16636_18623[(2)] = null);

(statearr_16636_18623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (9))){
var state_16603__$1 = state_16603;
var statearr_16642_18624 = state_16603__$1;
(statearr_16642_18624[(2)] = null);

(statearr_16642_18624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (5))){
var state_16603__$1 = state_16603;
var statearr_16643_18625 = state_16603__$1;
(statearr_16643_18625[(2)] = null);

(statearr_16643_18625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (10))){
var inst_16592 = (state_16603[(2)]);
var state_16603__$1 = state_16603;
var statearr_16644_18626 = state_16603__$1;
(statearr_16644_18626[(2)] = inst_16592);

(statearr_16644_18626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (8))){
var inst_16582 = (state_16603[(7)]);
var state_16603__$1 = state_16603;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16603__$1,(11),out,inst_16582);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13395__auto__ = null;
var cljs$core$async$state_machine__13395__auto____0 = (function (){
var statearr_16647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16647[(0)] = cljs$core$async$state_machine__13395__auto__);

(statearr_16647[(1)] = (1));

return statearr_16647;
});
var cljs$core$async$state_machine__13395__auto____1 = (function (state_16603){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_16603);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e16648){var ex__13398__auto__ = e16648;
var statearr_16649_18629 = state_16603;
(statearr_16649_18629[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_16603[(4)]))){
var statearr_16650_18630 = state_16603;
(statearr_16650_18630[(1)] = cljs.core.first((state_16603[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18631 = state_16603;
state_16603 = G__18631;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$state_machine__13395__auto__ = function(state_16603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13395__auto____1.call(this,state_16603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13395__auto____0;
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13395__auto____1;
return cljs$core$async$state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_16657 = f__13707__auto__();
(statearr_16657[(6)] = c__13706__auto___18613);

return statearr_16657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16667 = (function (f,ch,meta16668){
this.f = f;
this.ch = ch;
this.meta16668 = meta16668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16669,meta16668__$1){
var self__ = this;
var _16669__$1 = this;
return (new cljs.core.async.t_cljs$core$async16667(self__.f,self__.ch,meta16668__$1));
}));

(cljs.core.async.t_cljs$core$async16667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16669){
var self__ = this;
var _16669__$1 = this;
return self__.meta16668;
}));

(cljs.core.async.t_cljs$core$async16667.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16667.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16667.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16667.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16667.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16680 = (function (f,ch,meta16668,_,fn1,meta16681){
this.f = f;
this.ch = ch;
this.meta16668 = meta16668;
this._ = _;
this.fn1 = fn1;
this.meta16681 = meta16681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16682,meta16681__$1){
var self__ = this;
var _16682__$1 = this;
return (new cljs.core.async.t_cljs$core$async16680(self__.f,self__.ch,self__.meta16668,self__._,self__.fn1,meta16681__$1));
}));

(cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16682){
var self__ = this;
var _16682__$1 = this;
return self__.meta16681;
}));

(cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16660_SHARP_){
var G__16692 = (((p1__16660_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16660_SHARP_) : self__.f.call(null,p1__16660_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16692) : f1.call(null,G__16692));
});
}));

(cljs.core.async.t_cljs$core$async16680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16668","meta16668",269215532,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16667","cljs.core.async/t_cljs$core$async16667",1314849653,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16681","meta16681",-666521420,null)], null);
}));

(cljs.core.async.t_cljs$core$async16680.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16680");

(cljs.core.async.t_cljs$core$async16680.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16680");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16680.
 */
cljs.core.async.__GT_t_cljs$core$async16680 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16680(f__$1,ch__$1,meta16668__$1,___$2,fn1__$1,meta16681){
return (new cljs.core.async.t_cljs$core$async16680(f__$1,ch__$1,meta16668__$1,___$2,fn1__$1,meta16681));
});

}

return (new cljs.core.async.t_cljs$core$async16680(self__.f,self__.ch,self__.meta16668,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16698 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16698) : self__.f.call(null,G__16698));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16667.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16667.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16668","meta16668",269215532,null)], null);
}));

(cljs.core.async.t_cljs$core$async16667.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16667");

(cljs.core.async.t_cljs$core$async16667.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16667");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16667.
 */
cljs.core.async.__GT_t_cljs$core$async16667 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16667(f__$1,ch__$1,meta16668){
return (new cljs.core.async.t_cljs$core$async16667(f__$1,ch__$1,meta16668));
});

}

return (new cljs.core.async.t_cljs$core$async16667(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16707 = (function (f,ch,meta16708){
this.f = f;
this.ch = ch;
this.meta16708 = meta16708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16709,meta16708__$1){
var self__ = this;
var _16709__$1 = this;
return (new cljs.core.async.t_cljs$core$async16707(self__.f,self__.ch,meta16708__$1));
}));

(cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16709){
var self__ = this;
var _16709__$1 = this;
return self__.meta16708;
}));

(cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16707.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16708","meta16708",-1110130615,null)], null);
}));

(cljs.core.async.t_cljs$core$async16707.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16707");

(cljs.core.async.t_cljs$core$async16707.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16707");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16707.
 */
cljs.core.async.__GT_t_cljs$core$async16707 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16707(f__$1,ch__$1,meta16708){
return (new cljs.core.async.t_cljs$core$async16707(f__$1,ch__$1,meta16708));
});

}

return (new cljs.core.async.t_cljs$core$async16707(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16730 = (function (p,ch,meta16731){
this.p = p;
this.ch = ch;
this.meta16731 = meta16731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16732,meta16731__$1){
var self__ = this;
var _16732__$1 = this;
return (new cljs.core.async.t_cljs$core$async16730(self__.p,self__.ch,meta16731__$1));
}));

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16732){
var self__ = this;
var _16732__$1 = this;
return self__.meta16731;
}));

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16730.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16731","meta16731",89929976,null)], null);
}));

(cljs.core.async.t_cljs$core$async16730.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16730");

(cljs.core.async.t_cljs$core$async16730.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16730");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16730.
 */
cljs.core.async.__GT_t_cljs$core$async16730 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16730(p__$1,ch__$1,meta16731){
return (new cljs.core.async.t_cljs$core$async16730(p__$1,ch__$1,meta16731));
});

}

return (new cljs.core.async.t_cljs$core$async16730(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16746 = arguments.length;
switch (G__16746) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13706__auto___18663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_16776){
var state_val_16777 = (state_16776[(1)]);
if((state_val_16777 === (7))){
var inst_16772 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16782_18666 = state_16776__$1;
(statearr_16782_18666[(2)] = inst_16772);

(statearr_16782_18666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (1))){
var state_16776__$1 = state_16776;
var statearr_16783_18668 = state_16776__$1;
(statearr_16783_18668[(2)] = null);

(statearr_16783_18668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (4))){
var inst_16758 = (state_16776[(7)]);
var inst_16758__$1 = (state_16776[(2)]);
var inst_16759 = (inst_16758__$1 == null);
var state_16776__$1 = (function (){var statearr_16787 = state_16776;
(statearr_16787[(7)] = inst_16758__$1);

return statearr_16787;
})();
if(cljs.core.truth_(inst_16759)){
var statearr_16788_18669 = state_16776__$1;
(statearr_16788_18669[(1)] = (5));

} else {
var statearr_16790_18670 = state_16776__$1;
(statearr_16790_18670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (6))){
var inst_16758 = (state_16776[(7)]);
var inst_16763 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16758) : p.call(null,inst_16758));
var state_16776__$1 = state_16776;
if(cljs.core.truth_(inst_16763)){
var statearr_16794_18671 = state_16776__$1;
(statearr_16794_18671[(1)] = (8));

} else {
var statearr_16795_18673 = state_16776__$1;
(statearr_16795_18673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (3))){
var inst_16774 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16776__$1,inst_16774);
} else {
if((state_val_16777 === (2))){
var state_16776__$1 = state_16776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16776__$1,(4),ch);
} else {
if((state_val_16777 === (11))){
var inst_16766 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16796_18674 = state_16776__$1;
(statearr_16796_18674[(2)] = inst_16766);

(statearr_16796_18674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (9))){
var state_16776__$1 = state_16776;
var statearr_16801_18676 = state_16776__$1;
(statearr_16801_18676[(2)] = null);

(statearr_16801_18676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (5))){
var inst_16761 = cljs.core.async.close_BANG_(out);
var state_16776__$1 = state_16776;
var statearr_16802_18678 = state_16776__$1;
(statearr_16802_18678[(2)] = inst_16761);

(statearr_16802_18678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (10))){
var inst_16769 = (state_16776[(2)]);
var state_16776__$1 = (function (){var statearr_16803 = state_16776;
(statearr_16803[(8)] = inst_16769);

return statearr_16803;
})();
var statearr_16804_18679 = state_16776__$1;
(statearr_16804_18679[(2)] = null);

(statearr_16804_18679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16777 === (8))){
var inst_16758 = (state_16776[(7)]);
var state_16776__$1 = state_16776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16776__$1,(11),out,inst_16758);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13395__auto__ = null;
var cljs$core$async$state_machine__13395__auto____0 = (function (){
var statearr_16808 = [null,null,null,null,null,null,null,null,null];
(statearr_16808[(0)] = cljs$core$async$state_machine__13395__auto__);

(statearr_16808[(1)] = (1));

return statearr_16808;
});
var cljs$core$async$state_machine__13395__auto____1 = (function (state_16776){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_16776);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e16809){var ex__13398__auto__ = e16809;
var statearr_16810_18681 = state_16776;
(statearr_16810_18681[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_16776[(4)]))){
var statearr_16814_18682 = state_16776;
(statearr_16814_18682[(1)] = cljs.core.first((state_16776[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18683 = state_16776;
state_16776 = G__18683;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$state_machine__13395__auto__ = function(state_16776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13395__auto____1.call(this,state_16776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13395__auto____0;
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13395__auto____1;
return cljs$core$async$state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_16815 = f__13707__auto__();
(statearr_16815[(6)] = c__13706__auto___18663);

return statearr_16815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16821 = arguments.length;
switch (G__16821) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13706__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_16890){
var state_val_16891 = (state_16890[(1)]);
if((state_val_16891 === (7))){
var inst_16883 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16892_18690 = state_16890__$1;
(statearr_16892_18690[(2)] = inst_16883);

(statearr_16892_18690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (20))){
var inst_16853 = (state_16890[(7)]);
var inst_16864 = (state_16890[(2)]);
var inst_16865 = cljs.core.next(inst_16853);
var inst_16837 = inst_16865;
var inst_16838 = null;
var inst_16839 = (0);
var inst_16840 = (0);
var state_16890__$1 = (function (){var statearr_16893 = state_16890;
(statearr_16893[(8)] = inst_16839);

(statearr_16893[(9)] = inst_16840);

(statearr_16893[(10)] = inst_16838);

(statearr_16893[(11)] = inst_16864);

(statearr_16893[(12)] = inst_16837);

return statearr_16893;
})();
var statearr_16894_18692 = state_16890__$1;
(statearr_16894_18692[(2)] = null);

(statearr_16894_18692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (1))){
var state_16890__$1 = state_16890;
var statearr_16897_18694 = state_16890__$1;
(statearr_16897_18694[(2)] = null);

(statearr_16897_18694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (4))){
var inst_16826 = (state_16890[(13)]);
var inst_16826__$1 = (state_16890[(2)]);
var inst_16827 = (inst_16826__$1 == null);
var state_16890__$1 = (function (){var statearr_16901 = state_16890;
(statearr_16901[(13)] = inst_16826__$1);

return statearr_16901;
})();
if(cljs.core.truth_(inst_16827)){
var statearr_16905_18695 = state_16890__$1;
(statearr_16905_18695[(1)] = (5));

} else {
var statearr_16906_18696 = state_16890__$1;
(statearr_16906_18696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (15))){
var state_16890__$1 = state_16890;
var statearr_16912_18697 = state_16890__$1;
(statearr_16912_18697[(2)] = null);

(statearr_16912_18697[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (21))){
var state_16890__$1 = state_16890;
var statearr_16913_18698 = state_16890__$1;
(statearr_16913_18698[(2)] = null);

(statearr_16913_18698[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (13))){
var inst_16839 = (state_16890[(8)]);
var inst_16840 = (state_16890[(9)]);
var inst_16838 = (state_16890[(10)]);
var inst_16837 = (state_16890[(12)]);
var inst_16849 = (state_16890[(2)]);
var inst_16850 = (inst_16840 + (1));
var tmp16909 = inst_16839;
var tmp16910 = inst_16838;
var tmp16911 = inst_16837;
var inst_16837__$1 = tmp16911;
var inst_16838__$1 = tmp16910;
var inst_16839__$1 = tmp16909;
var inst_16840__$1 = inst_16850;
var state_16890__$1 = (function (){var statearr_16916 = state_16890;
(statearr_16916[(8)] = inst_16839__$1);

(statearr_16916[(9)] = inst_16840__$1);

(statearr_16916[(14)] = inst_16849);

(statearr_16916[(10)] = inst_16838__$1);

(statearr_16916[(12)] = inst_16837__$1);

return statearr_16916;
})();
var statearr_16919_18702 = state_16890__$1;
(statearr_16919_18702[(2)] = null);

(statearr_16919_18702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (22))){
var state_16890__$1 = state_16890;
var statearr_16920_18703 = state_16890__$1;
(statearr_16920_18703[(2)] = null);

(statearr_16920_18703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (6))){
var inst_16826 = (state_16890[(13)]);
var inst_16835 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16826) : f.call(null,inst_16826));
var inst_16836 = cljs.core.seq(inst_16835);
var inst_16837 = inst_16836;
var inst_16838 = null;
var inst_16839 = (0);
var inst_16840 = (0);
var state_16890__$1 = (function (){var statearr_16921 = state_16890;
(statearr_16921[(8)] = inst_16839);

(statearr_16921[(9)] = inst_16840);

(statearr_16921[(10)] = inst_16838);

(statearr_16921[(12)] = inst_16837);

return statearr_16921;
})();
var statearr_16924_18707 = state_16890__$1;
(statearr_16924_18707[(2)] = null);

(statearr_16924_18707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (17))){
var inst_16853 = (state_16890[(7)]);
var inst_16857 = cljs.core.chunk_first(inst_16853);
var inst_16858 = cljs.core.chunk_rest(inst_16853);
var inst_16859 = cljs.core.count(inst_16857);
var inst_16837 = inst_16858;
var inst_16838 = inst_16857;
var inst_16839 = inst_16859;
var inst_16840 = (0);
var state_16890__$1 = (function (){var statearr_16925 = state_16890;
(statearr_16925[(8)] = inst_16839);

(statearr_16925[(9)] = inst_16840);

(statearr_16925[(10)] = inst_16838);

(statearr_16925[(12)] = inst_16837);

return statearr_16925;
})();
var statearr_16926_18708 = state_16890__$1;
(statearr_16926_18708[(2)] = null);

(statearr_16926_18708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (3))){
var inst_16885 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16890__$1,inst_16885);
} else {
if((state_val_16891 === (12))){
var inst_16873 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16930_18712 = state_16890__$1;
(statearr_16930_18712[(2)] = inst_16873);

(statearr_16930_18712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (2))){
var state_16890__$1 = state_16890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16890__$1,(4),in$);
} else {
if((state_val_16891 === (23))){
var inst_16881 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16942_18713 = state_16890__$1;
(statearr_16942_18713[(2)] = inst_16881);

(statearr_16942_18713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (19))){
var inst_16868 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16943_18714 = state_16890__$1;
(statearr_16943_18714[(2)] = inst_16868);

(statearr_16943_18714[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (11))){
var inst_16853 = (state_16890[(7)]);
var inst_16837 = (state_16890[(12)]);
var inst_16853__$1 = cljs.core.seq(inst_16837);
var state_16890__$1 = (function (){var statearr_16946 = state_16890;
(statearr_16946[(7)] = inst_16853__$1);

return statearr_16946;
})();
if(inst_16853__$1){
var statearr_16947_18715 = state_16890__$1;
(statearr_16947_18715[(1)] = (14));

} else {
var statearr_16948_18716 = state_16890__$1;
(statearr_16948_18716[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (9))){
var inst_16875 = (state_16890[(2)]);
var inst_16876 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16890__$1 = (function (){var statearr_16960 = state_16890;
(statearr_16960[(15)] = inst_16875);

return statearr_16960;
})();
if(cljs.core.truth_(inst_16876)){
var statearr_16964_18717 = state_16890__$1;
(statearr_16964_18717[(1)] = (21));

} else {
var statearr_16965_18718 = state_16890__$1;
(statearr_16965_18718[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (5))){
var inst_16829 = cljs.core.async.close_BANG_(out);
var state_16890__$1 = state_16890;
var statearr_16972_18719 = state_16890__$1;
(statearr_16972_18719[(2)] = inst_16829);

(statearr_16972_18719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (14))){
var inst_16853 = (state_16890[(7)]);
var inst_16855 = cljs.core.chunked_seq_QMARK_(inst_16853);
var state_16890__$1 = state_16890;
if(inst_16855){
var statearr_16973_18720 = state_16890__$1;
(statearr_16973_18720[(1)] = (17));

} else {
var statearr_16974_18721 = state_16890__$1;
(statearr_16974_18721[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (16))){
var inst_16871 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16975_18724 = state_16890__$1;
(statearr_16975_18724[(2)] = inst_16871);

(statearr_16975_18724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16891 === (10))){
var inst_16840 = (state_16890[(9)]);
var inst_16838 = (state_16890[(10)]);
var inst_16847 = cljs.core._nth(inst_16838,inst_16840);
var state_16890__$1 = state_16890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16890__$1,(13),out,inst_16847);
} else {
if((state_val_16891 === (18))){
var inst_16853 = (state_16890[(7)]);
var inst_16862 = cljs.core.first(inst_16853);
var state_16890__$1 = state_16890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16890__$1,(20),out,inst_16862);
} else {
if((state_val_16891 === (8))){
var inst_16839 = (state_16890[(8)]);
var inst_16840 = (state_16890[(9)]);
var inst_16843 = (inst_16840 < inst_16839);
var inst_16844 = inst_16843;
var state_16890__$1 = state_16890;
if(cljs.core.truth_(inst_16844)){
var statearr_17003_18726 = state_16890__$1;
(statearr_17003_18726[(1)] = (10));

} else {
var statearr_17005_18727 = state_16890__$1;
(statearr_17005_18727[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13395__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13395__auto____0 = (function (){
var statearr_17020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17020[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13395__auto__);

(statearr_17020[(1)] = (1));

return statearr_17020;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13395__auto____1 = (function (state_16890){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_16890);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e17022){var ex__13398__auto__ = e17022;
var statearr_17023_18730 = state_16890;
(statearr_17023_18730[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_16890[(4)]))){
var statearr_17024_18734 = state_16890;
(statearr_17024_18734[(1)] = cljs.core.first((state_16890[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18735 = state_16890;
state_16890 = G__18735;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13395__auto__ = function(state_16890){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13395__auto____1.call(this,state_16890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13395__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13395__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_17030 = f__13707__auto__();
(statearr_17030[(6)] = c__13706__auto__);

return statearr_17030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));

return c__13706__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17038 = arguments.length;
switch (G__17038) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17053 = arguments.length;
switch (G__17053) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17069 = arguments.length;
switch (G__17069) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13706__auto___18744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_17112){
var state_val_17113 = (state_17112[(1)]);
if((state_val_17113 === (7))){
var inst_17105 = (state_17112[(2)]);
var state_17112__$1 = state_17112;
var statearr_17118_18745 = state_17112__$1;
(statearr_17118_18745[(2)] = inst_17105);

(statearr_17118_18745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17113 === (1))){
var inst_17085 = null;
var state_17112__$1 = (function (){var statearr_17120 = state_17112;
(statearr_17120[(7)] = inst_17085);

return statearr_17120;
})();
var statearr_17123_18753 = state_17112__$1;
(statearr_17123_18753[(2)] = null);

(statearr_17123_18753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17113 === (4))){
var inst_17088 = (state_17112[(8)]);
var inst_17088__$1 = (state_17112[(2)]);
var inst_17089 = (inst_17088__$1 == null);
var inst_17090 = cljs.core.not(inst_17089);
var state_17112__$1 = (function (){var statearr_17127 = state_17112;
(statearr_17127[(8)] = inst_17088__$1);

return statearr_17127;
})();
if(inst_17090){
var statearr_17128_18768 = state_17112__$1;
(statearr_17128_18768[(1)] = (5));

} else {
var statearr_17129_18769 = state_17112__$1;
(statearr_17129_18769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17113 === (6))){
var state_17112__$1 = state_17112;
var statearr_17131_18774 = state_17112__$1;
(statearr_17131_18774[(2)] = null);

(statearr_17131_18774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17113 === (3))){
var inst_17107 = (state_17112[(2)]);
var inst_17108 = cljs.core.async.close_BANG_(out);
var state_17112__$1 = (function (){var statearr_17135 = state_17112;
(statearr_17135[(9)] = inst_17107);

return statearr_17135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17112__$1,inst_17108);
} else {
if((state_val_17113 === (2))){
var state_17112__$1 = state_17112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17112__$1,(4),ch);
} else {
if((state_val_17113 === (11))){
var inst_17088 = (state_17112[(8)]);
var inst_17099 = (state_17112[(2)]);
var inst_17085 = inst_17088;
var state_17112__$1 = (function (){var statearr_17141 = state_17112;
(statearr_17141[(7)] = inst_17085);

(statearr_17141[(10)] = inst_17099);

return statearr_17141;
})();
var statearr_17145_18797 = state_17112__$1;
(statearr_17145_18797[(2)] = null);

(statearr_17145_18797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17113 === (9))){
var inst_17088 = (state_17112[(8)]);
var state_17112__$1 = state_17112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17112__$1,(11),out,inst_17088);
} else {
if((state_val_17113 === (5))){
var inst_17088 = (state_17112[(8)]);
var inst_17085 = (state_17112[(7)]);
var inst_17093 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17088,inst_17085);
var state_17112__$1 = state_17112;
if(inst_17093){
var statearr_17158_18800 = state_17112__$1;
(statearr_17158_18800[(1)] = (8));

} else {
var statearr_17160_18802 = state_17112__$1;
(statearr_17160_18802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17113 === (10))){
var inst_17102 = (state_17112[(2)]);
var state_17112__$1 = state_17112;
var statearr_17162_18803 = state_17112__$1;
(statearr_17162_18803[(2)] = inst_17102);

(statearr_17162_18803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17113 === (8))){
var inst_17085 = (state_17112[(7)]);
var tmp17148 = inst_17085;
var inst_17085__$1 = tmp17148;
var state_17112__$1 = (function (){var statearr_17165 = state_17112;
(statearr_17165[(7)] = inst_17085__$1);

return statearr_17165;
})();
var statearr_17166_18805 = state_17112__$1;
(statearr_17166_18805[(2)] = null);

(statearr_17166_18805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13395__auto__ = null;
var cljs$core$async$state_machine__13395__auto____0 = (function (){
var statearr_17170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17170[(0)] = cljs$core$async$state_machine__13395__auto__);

(statearr_17170[(1)] = (1));

return statearr_17170;
});
var cljs$core$async$state_machine__13395__auto____1 = (function (state_17112){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_17112);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e17171){var ex__13398__auto__ = e17171;
var statearr_17173_18810 = state_17112;
(statearr_17173_18810[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_17112[(4)]))){
var statearr_17179_18811 = state_17112;
(statearr_17179_18811[(1)] = cljs.core.first((state_17112[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18812 = state_17112;
state_17112 = G__18812;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$state_machine__13395__auto__ = function(state_17112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13395__auto____1.call(this,state_17112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13395__auto____0;
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13395__auto____1;
return cljs$core$async$state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_17180 = f__13707__auto__();
(statearr_17180[(6)] = c__13706__auto___18744);

return statearr_17180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17195 = arguments.length;
switch (G__17195) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13706__auto___18814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_17262){
var state_val_17263 = (state_17262[(1)]);
if((state_val_17263 === (7))){
var inst_17254 = (state_17262[(2)]);
var state_17262__$1 = state_17262;
var statearr_17266_18815 = state_17262__$1;
(statearr_17266_18815[(2)] = inst_17254);

(statearr_17266_18815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (1))){
var inst_17205 = (new Array(n));
var inst_17206 = inst_17205;
var inst_17207 = (0);
var state_17262__$1 = (function (){var statearr_17267 = state_17262;
(statearr_17267[(7)] = inst_17206);

(statearr_17267[(8)] = inst_17207);

return statearr_17267;
})();
var statearr_17268_18816 = state_17262__$1;
(statearr_17268_18816[(2)] = null);

(statearr_17268_18816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (4))){
var inst_17210 = (state_17262[(9)]);
var inst_17210__$1 = (state_17262[(2)]);
var inst_17211 = (inst_17210__$1 == null);
var inst_17212 = cljs.core.not(inst_17211);
var state_17262__$1 = (function (){var statearr_17269 = state_17262;
(statearr_17269[(9)] = inst_17210__$1);

return statearr_17269;
})();
if(inst_17212){
var statearr_17271_18824 = state_17262__$1;
(statearr_17271_18824[(1)] = (5));

} else {
var statearr_17274_18826 = state_17262__$1;
(statearr_17274_18826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (15))){
var inst_17244 = (state_17262[(2)]);
var state_17262__$1 = state_17262;
var statearr_17277_18831 = state_17262__$1;
(statearr_17277_18831[(2)] = inst_17244);

(statearr_17277_18831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (13))){
var state_17262__$1 = state_17262;
var statearr_17279_18833 = state_17262__$1;
(statearr_17279_18833[(2)] = null);

(statearr_17279_18833[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (6))){
var inst_17207 = (state_17262[(8)]);
var inst_17240 = (inst_17207 > (0));
var state_17262__$1 = state_17262;
if(cljs.core.truth_(inst_17240)){
var statearr_17282_18834 = state_17262__$1;
(statearr_17282_18834[(1)] = (12));

} else {
var statearr_17283_18835 = state_17262__$1;
(statearr_17283_18835[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (3))){
var inst_17260 = (state_17262[(2)]);
var state_17262__$1 = state_17262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17262__$1,inst_17260);
} else {
if((state_val_17263 === (12))){
var inst_17206 = (state_17262[(7)]);
var inst_17242 = cljs.core.vec(inst_17206);
var state_17262__$1 = state_17262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17262__$1,(15),out,inst_17242);
} else {
if((state_val_17263 === (2))){
var state_17262__$1 = state_17262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17262__$1,(4),ch);
} else {
if((state_val_17263 === (11))){
var inst_17230 = (state_17262[(2)]);
var inst_17235 = (new Array(n));
var inst_17206 = inst_17235;
var inst_17207 = (0);
var state_17262__$1 = (function (){var statearr_17286 = state_17262;
(statearr_17286[(7)] = inst_17206);

(statearr_17286[(8)] = inst_17207);

(statearr_17286[(10)] = inst_17230);

return statearr_17286;
})();
var statearr_17287_18837 = state_17262__$1;
(statearr_17287_18837[(2)] = null);

(statearr_17287_18837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (9))){
var inst_17206 = (state_17262[(7)]);
var inst_17228 = cljs.core.vec(inst_17206);
var state_17262__$1 = state_17262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17262__$1,(11),out,inst_17228);
} else {
if((state_val_17263 === (5))){
var inst_17215 = (state_17262[(11)]);
var inst_17206 = (state_17262[(7)]);
var inst_17210 = (state_17262[(9)]);
var inst_17207 = (state_17262[(8)]);
var inst_17214 = (inst_17206[inst_17207] = inst_17210);
var inst_17215__$1 = (inst_17207 + (1));
var inst_17216 = (inst_17215__$1 < n);
var state_17262__$1 = (function (){var statearr_17290 = state_17262;
(statearr_17290[(12)] = inst_17214);

(statearr_17290[(11)] = inst_17215__$1);

return statearr_17290;
})();
if(cljs.core.truth_(inst_17216)){
var statearr_17291_18841 = state_17262__$1;
(statearr_17291_18841[(1)] = (8));

} else {
var statearr_17292_18842 = state_17262__$1;
(statearr_17292_18842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (14))){
var inst_17247 = (state_17262[(2)]);
var inst_17252 = cljs.core.async.close_BANG_(out);
var state_17262__$1 = (function (){var statearr_17295 = state_17262;
(statearr_17295[(13)] = inst_17247);

return statearr_17295;
})();
var statearr_17296_18843 = state_17262__$1;
(statearr_17296_18843[(2)] = inst_17252);

(statearr_17296_18843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (10))){
var inst_17238 = (state_17262[(2)]);
var state_17262__$1 = state_17262;
var statearr_17297_18845 = state_17262__$1;
(statearr_17297_18845[(2)] = inst_17238);

(statearr_17297_18845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17263 === (8))){
var inst_17215 = (state_17262[(11)]);
var inst_17206 = (state_17262[(7)]);
var tmp17293 = inst_17206;
var inst_17206__$1 = tmp17293;
var inst_17207 = inst_17215;
var state_17262__$1 = (function (){var statearr_17305 = state_17262;
(statearr_17305[(7)] = inst_17206__$1);

(statearr_17305[(8)] = inst_17207);

return statearr_17305;
})();
var statearr_17309_18852 = state_17262__$1;
(statearr_17309_18852[(2)] = null);

(statearr_17309_18852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13395__auto__ = null;
var cljs$core$async$state_machine__13395__auto____0 = (function (){
var statearr_17318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17318[(0)] = cljs$core$async$state_machine__13395__auto__);

(statearr_17318[(1)] = (1));

return statearr_17318;
});
var cljs$core$async$state_machine__13395__auto____1 = (function (state_17262){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_17262);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e17328){var ex__13398__auto__ = e17328;
var statearr_17334_18853 = state_17262;
(statearr_17334_18853[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_17262[(4)]))){
var statearr_17340_18855 = state_17262;
(statearr_17340_18855[(1)] = cljs.core.first((state_17262[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18856 = state_17262;
state_17262 = G__18856;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$state_machine__13395__auto__ = function(state_17262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13395__auto____1.call(this,state_17262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13395__auto____0;
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13395__auto____1;
return cljs$core$async$state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_17347 = f__13707__auto__();
(statearr_17347[(6)] = c__13706__auto___18814);

return statearr_17347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17356 = arguments.length;
switch (G__17356) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13706__auto___18858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13707__auto__ = (function (){var switch__13394__auto__ = (function (state_17402){
var state_val_17403 = (state_17402[(1)]);
if((state_val_17403 === (7))){
var inst_17398 = (state_17402[(2)]);
var state_17402__$1 = state_17402;
var statearr_17404_18859 = state_17402__$1;
(statearr_17404_18859[(2)] = inst_17398);

(statearr_17404_18859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17403 === (1))){
var inst_17357 = [];
var inst_17358 = inst_17357;
var inst_17359 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17402__$1 = (function (){var statearr_17405 = state_17402;
(statearr_17405[(7)] = inst_17358);

(statearr_17405[(8)] = inst_17359);

return statearr_17405;
})();
var statearr_17406_18866 = state_17402__$1;
(statearr_17406_18866[(2)] = null);

(statearr_17406_18866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17403 === (4))){
var inst_17362 = (state_17402[(9)]);
var inst_17362__$1 = (state_17402[(2)]);
var inst_17363 = (inst_17362__$1 == null);
var inst_17364 = cljs.core.not(inst_17363);
var state_17402__$1 = (function (){var statearr_17407 = state_17402;
(statearr_17407[(9)] = inst_17362__$1);

return statearr_17407;
})();
if(inst_17364){
var statearr_17408_18869 = state_17402__$1;
(statearr_17408_18869[(1)] = (5));

} else {
var statearr_17409_18870 = state_17402__$1;
(statearr_17409_18870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17403 === (15))){
var inst_17358 = (state_17402[(7)]);
var inst_17390 = cljs.core.vec(inst_17358);
var state_17402__$1 = state_17402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17402__$1,(18),out,inst_17390);
} else {
if((state_val_17403 === (13))){
var inst_17385 = (state_17402[(2)]);
var state_17402__$1 = state_17402;
var statearr_17415_18874 = state_17402__$1;
(statearr_17415_18874[(2)] = inst_17385);

(statearr_17415_18874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17403 === (6))){
var inst_17358 = (state_17402[(7)]);
var inst_17387 = inst_17358.length;
var inst_17388 = (inst_17387 > (0));
var state_17402__$1 = state_17402;
if(cljs.core.truth_(inst_17388)){
var statearr_17416_18879 = state_17402__$1;
(statearr_17416_18879[(1)] = (15));

} else {
var statearr_17417_18882 = state_17402__$1;
(statearr_17417_18882[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17403 === (17))){
var inst_17395 = (state_17402[(2)]);
var inst_17396 = cljs.core.async.close_BANG_(out);
var state_17402__$1 = (function (){var statearr_17418 = state_17402;
(statearr_17418[(10)] = inst_17395);

return statearr_17418;
})();
var statearr_17419_18886 = state_17402__$1;
(statearr_17419_18886[(2)] = inst_17396);

(statearr_17419_18886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17403 === (3))){
var inst_17400 = (state_17402[(2)]);
var state_17402__$1 = state_17402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17402__$1,inst_17400);
} else {
if((state_val_17403 === (12))){
var inst_17358 = (state_17402[(7)]);
var inst_17378 = cljs.core.vec(inst_17358);
var state_17402__$1 = state_17402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17402__$1,(14),out,inst_17378);
} else {
if((state_val_17403 === (2))){
var state_17402__$1 = state_17402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17402__$1,(4),ch);
} else {
if((state_val_17403 === (11))){
var inst_17358 = (state_17402[(7)]);
var inst_17362 = (state_17402[(9)]);
var inst_17367 = (state_17402[(11)]);
var inst_17375 = inst_17358.push(inst_17362);
var tmp17420 = inst_17358;
var inst_17358__$1 = tmp17420;
var inst_17359 = inst_17367;
var state_17402__$1 = (function (){var statearr_17421 = state_17402;
(statearr_17421[(7)] = inst_17358__$1);

(statearr_17421[(8)] = inst_17359);

(statearr_17421[(12)] = inst_17375);

return statearr_17421;
})();
var statearr_17422_18895 = state_17402__$1;
(statearr_17422_18895[(2)] = null);

(statearr_17422_18895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17403 === (9))){
var inst_17359 = (state_17402[(8)]);
var inst_17371 = cljs.core.keyword_identical_QMARK_(inst_17359,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17402__$1 = state_17402;
var statearr_17423_18901 = state_17402__$1;
(statearr_17423_18901[(2)] = inst_17371);

(statearr_17423_18901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17403 === (5))){
var inst_17362 = (state_17402[(9)]);
var inst_17359 = (state_17402[(8)]);
var inst_17368 = (state_17402[(13)]);
var inst_17367 = (state_17402[(11)]);
var inst_17367__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17362) : f.call(null,inst_17362));
var inst_17368__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17367__$1,inst_17359);
var state_17402__$1 = (function (){var statearr_17427 = state_17402;
(statearr_17427[(13)] = inst_17368__$1);

(statearr_17427[(11)] = inst_17367__$1);

return statearr_17427;
})();
if(inst_17368__$1){
var statearr_17428_18906 = state_17402__$1;
(statearr_17428_18906[(1)] = (8));

} else {
var statearr_17433_18907 = state_17402__$1;
(statearr_17433_18907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17403 === (14))){
var inst_17362 = (state_17402[(9)]);
var inst_17367 = (state_17402[(11)]);
var inst_17380 = (state_17402[(2)]);
var inst_17381 = [];
var inst_17382 = inst_17381.push(inst_17362);
var inst_17358 = inst_17381;
var inst_17359 = inst_17367;
var state_17402__$1 = (function (){var statearr_17438 = state_17402;
(statearr_17438[(7)] = inst_17358);

(statearr_17438[(8)] = inst_17359);

(statearr_17438[(14)] = inst_17380);

(statearr_17438[(15)] = inst_17382);

return statearr_17438;
})();
var statearr_17442_18914 = state_17402__$1;
(statearr_17442_18914[(2)] = null);

(statearr_17442_18914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17403 === (16))){
var state_17402__$1 = state_17402;
var statearr_17443_18915 = state_17402__$1;
(statearr_17443_18915[(2)] = null);

(statearr_17443_18915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17403 === (10))){
var inst_17373 = (state_17402[(2)]);
var state_17402__$1 = state_17402;
if(cljs.core.truth_(inst_17373)){
var statearr_17444_18916 = state_17402__$1;
(statearr_17444_18916[(1)] = (11));

} else {
var statearr_17445_18917 = state_17402__$1;
(statearr_17445_18917[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17403 === (18))){
var inst_17392 = (state_17402[(2)]);
var state_17402__$1 = state_17402;
var statearr_17454_18920 = state_17402__$1;
(statearr_17454_18920[(2)] = inst_17392);

(statearr_17454_18920[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17403 === (8))){
var inst_17368 = (state_17402[(13)]);
var state_17402__$1 = state_17402;
var statearr_17460_18921 = state_17402__$1;
(statearr_17460_18921[(2)] = inst_17368);

(statearr_17460_18921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13395__auto__ = null;
var cljs$core$async$state_machine__13395__auto____0 = (function (){
var statearr_17461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17461[(0)] = cljs$core$async$state_machine__13395__auto__);

(statearr_17461[(1)] = (1));

return statearr_17461;
});
var cljs$core$async$state_machine__13395__auto____1 = (function (state_17402){
while(true){
var ret_value__13396__auto__ = (function (){try{while(true){
var result__13397__auto__ = switch__13394__auto__(state_17402);
if(cljs.core.keyword_identical_QMARK_(result__13397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13397__auto__;
}
break;
}
}catch (e17465){var ex__13398__auto__ = e17465;
var statearr_17466_18927 = state_17402;
(statearr_17466_18927[(2)] = ex__13398__auto__);


if(cljs.core.seq((state_17402[(4)]))){
var statearr_17475_18928 = state_17402;
(statearr_17475_18928[(1)] = cljs.core.first((state_17402[(4)])));

} else {
throw ex__13398__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18929 = state_17402;
state_17402 = G__18929;
continue;
} else {
return ret_value__13396__auto__;
}
break;
}
});
cljs$core$async$state_machine__13395__auto__ = function(state_17402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13395__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13395__auto____1.call(this,state_17402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13395__auto____0;
cljs$core$async$state_machine__13395__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13395__auto____1;
return cljs$core$async$state_machine__13395__auto__;
})()
})();
var state__13708__auto__ = (function (){var statearr_17491 = f__13707__auto__();
(statearr_17491[(6)] = c__13706__auto___18858);

return statearr_17491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13708__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
