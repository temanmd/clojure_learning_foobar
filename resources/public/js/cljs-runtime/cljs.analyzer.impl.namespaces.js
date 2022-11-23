goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__6039 = libspec;
var seq__6040 = cljs.core.seq(vec__6039);
var first__6041 = cljs.core.first(seq__6040);
var seq__6040__$1 = cljs.core.next(seq__6040);
var lib = first__6041;
var spec = seq__6040__$1;
var libspec__$1 = vec__6039;
var vec__6043 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6043,(0),null);
var vec__6046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6043,(1),null);
var seq__6047 = cljs.core.seq(vec__6046);
var first__6048 = cljs.core.first(seq__6047);
var seq__6047__$1 = cljs.core.next(seq__6047);
var _ = first__6048;
var first__6048__$1 = cljs.core.first(seq__6047__$1);
var seq__6047__$2 = cljs.core.next(seq__6047__$1);
var alias = first__6048__$1;
var post_spec = seq__6047__$2;
var post = vec__6046;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__6075 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6075,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__6075;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__6088 = cljs.core.seq(new_as_aliases);
var chunk__6089 = null;
var count__6090 = (0);
var i__6091 = (0);
while(true){
if((i__6091 < count__6090)){
var vec__6123 = chunk__6089.cljs$core$IIndexed$_nth$arity$2(null,i__6091);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6123,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6123,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__6178 = seq__6088;
var G__6179 = chunk__6089;
var G__6180 = count__6090;
var G__6181 = (i__6091 + (1));
seq__6088 = G__6178;
chunk__6089 = G__6179;
count__6090 = G__6180;
i__6091 = G__6181;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__6088);
if(temp__5804__auto__){
var seq__6088__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6088__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__6088__$1);
var G__6182 = cljs.core.chunk_rest(seq__6088__$1);
var G__6183 = c__5568__auto__;
var G__6184 = cljs.core.count(c__5568__auto__);
var G__6185 = (0);
seq__6088 = G__6182;
chunk__6089 = G__6183;
count__6090 = G__6184;
i__6091 = G__6185;
continue;
} else {
var vec__6128 = cljs.core.first(seq__6088__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6128,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6128,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__6187 = cljs.core.next(seq__6088__$1);
var G__6188 = null;
var G__6189 = (0);
var G__6190 = (0);
seq__6088 = G__6187;
chunk__6089 = G__6188;
count__6090 = G__6189;
i__6091 = G__6190;
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
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__6134 = arguments.length;
switch (G__6134) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__6142 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__6142__$1 = cljs.core.__destructure_map(map__6142);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6142__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6142__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__6144 = ret__$1;
var G__6144__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__6144,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__6144);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__6144__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__6144__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6147,p__6148){
var map__6149 = p__6147;
var map__6149__$1 = cljs.core.__destructure_map(map__6149);
var ret__$1 = map__6149__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6149__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__6150 = p__6148;
var seq__6151 = cljs.core.seq(vec__6150);
var first__6152 = cljs.core.first(seq__6151);
var seq__6151__$1 = cljs.core.next(seq__6151);
var spec_key = first__6152;
var libspecs = seq__6151__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__6156 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__6156__$1 = cljs.core.__destructure_map(map__6156);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6156__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6156__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__6160 = ret__$1;
var G__6160__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__6160,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__6160);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__6160__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__6160__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
