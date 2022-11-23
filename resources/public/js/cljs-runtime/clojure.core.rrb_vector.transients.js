goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_8230 = ret;
var shift_8231__$1 = shift;
while(true){
var arr_8232 = n_8230.arr;
var subidx_8233 = (((cnt - (1)) >> shift_8231__$1) & (31));
if((shift_8231__$1 === (5))){
(arr_8232[subidx_8233] = tail_node);
} else {
var child_8234 = (arr_8232[subidx_8233]);
if((child_8234 == null)){
(arr_8232[subidx_8233] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_8231__$1 - (5)),tail_node));
} else {
var editable_child_8236 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_8234);
(arr_8232[subidx_8233] = editable_child_8236);

var G__8237 = editable_child_8236;
var G__8238 = (shift_8231__$1 - (5));
n_8230 = G__8237;
shift_8231__$1 = G__8238;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__8209 = (shift - (5));
var G__8210 = ccnt;
var G__8211 = root_edit;
var G__8212 = child;
var G__8213 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__8209,G__8210,G__8211,G__8212,G__8213) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__8209,G__8210,G__8211,G__8212,G__8213));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_8240 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_8241 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_8240,data_8241);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__8214 = (shift - (5));
var G__8215 = cnt;
var G__8216 = root_edit;
var G__8217 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__8214,G__8215,G__8216,G__8217) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__8214,G__8215,G__8216,G__8217));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__8218 = (shift - (5));
var G__8219 = child_cnt;
var G__8220 = root_edit;
var G__8221 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__8218,G__8219,G__8220,G__8221) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__8218,G__8219,G__8220,G__8221));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_8258__$1 = shift;
var node_8259 = ret;
while(true){
if((shift_8258__$1 === (0))){
var arr_8263 = node_8259.arr;
(arr_8263[(i & (31))] = val);
} else {
var arr_8264 = node_8259.arr;
var subidx_8265 = ((i >> shift_8258__$1) & (31));
var child_8266 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_8264[subidx_8265]));
(arr_8264[subidx_8265] = child_8266);

var G__8269 = (shift_8258__$1 - (5));
var G__8270 = child_8266;
shift_8258__$1 = G__8269;
node_8259 = G__8270;
continue;
}
break;
}
} else {
var arr_8271 = ret.arr;
var rngs_8272 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_8273 = ((i >> shift) & (31));
var subidx_8274__$1 = (function (){var subidx_8274__$1 = subidx_8273;
while(true){
if((i < ((rngs_8272[subidx_8274__$1]) | (0)))){
return subidx_8274__$1;
} else {
var G__8277 = (subidx_8274__$1 + (1));
subidx_8274__$1 = G__8277;
continue;
}
break;
}
})();
var i_8275__$1 = (((subidx_8274__$1 === (0)))?i:(i - (rngs_8272[(subidx_8274__$1 - (1))])));
(arr_8271[subidx_8274__$1] = (function (){var G__8222 = (shift - (5));
var G__8223 = root_edit;
var G__8224 = (arr_8271[subidx_8274__$1]);
var G__8225 = i_8275__$1;
var G__8226 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__8222,G__8223,G__8224,G__8225,G__8226) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__8222,G__8223,G__8224,G__8225,G__8226));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
