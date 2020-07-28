(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio-root-korio', 'korma-root-korma', 'kds-root-kds', 'korim-root-korim', 'korge-root-korge', 'korgw-root-korgw'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio-root-korio'), require('korma-root-korma'), require('kds-root-kds'), require('korim-root-korim'), require('korge-root-korge'), require('korgw-root-korgw'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'NumberGame'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'NumberGame'.");
    }if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'NumberGame'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'NumberGame'.");
    }if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'NumberGame'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'NumberGame'.");
    }if (typeof this['kds-root-kds'] === 'undefined') {
      throw new Error("Error loading module 'NumberGame'. Its dependency 'kds-root-kds' was not found. Please, check whether 'kds-root-kds' is loaded prior to 'NumberGame'.");
    }if (typeof this['korim-root-korim'] === 'undefined') {
      throw new Error("Error loading module 'NumberGame'. Its dependency 'korim-root-korim' was not found. Please, check whether 'korim-root-korim' is loaded prior to 'NumberGame'.");
    }if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'NumberGame'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'NumberGame'.");
    }if (typeof this['korgw-root-korgw'] === 'undefined') {
      throw new Error("Error loading module 'NumberGame'. Its dependency 'korgw-root-korgw' was not found. Please, check whether 'korgw-root-korgw' is loaded prior to 'NumberGame'.");
    }root.NumberGame = factory(typeof NumberGame === 'undefined' ? {} : NumberGame, kotlin, this['korio-root-korio'], this['korma-root-korma'], this['kds-root-kds'], this['korim-root-korim'], this['korge-root-korge'], this['korgw-root-korgw']);
  }
}(this, function (_, Kotlin, $module$korio_root_korio, $module$korma_root_korma, $module$kds_root_kds, $module$korim_root_korim, $module$korge_root_korge, $module$korgw_root_korgw) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Signal = $module$korio_root_korio.com.soywiz.korio.async.Signal;
  var Unit = Kotlin.kotlin.Unit;
  var Extra = $module$kds_root_kds.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_root_kds.com.soywiz.kds.Extra.Mixin;
  var PointInt = $module$korma_root_korma.com.soywiz.korma.geom.PointInt;
  var Array2 = $module$kds_root_kds.com.soywiz.kds.Array2;
  var Random = Kotlin.kotlin.random.Random;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  var Array_0 = Array;
  var Collection = Kotlin.kotlin.collections.Collection;
  var checkCountOverflow = Kotlin.kotlin.collections.checkCountOverflow_za3lpa$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var Extra$Property = $module$kds_root_kds.com.soywiz.kds.Extra.Property;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var getCallableRef = Kotlin.getCallableRef;
  var color = $module$korim_root_korim.com.soywiz.korim.color;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var MouseButton = $module$korgw_root_korgw.com.soywiz.korev.MouseButton;
  var equals = Kotlin.equals;
  var Any = Object;
  var setExtra = $module$kds_root_kds.com.soywiz.kds.setExtra_46skc7$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var get_mouse = $module$korge_root_korge.com.soywiz.korge.input.get_mouse_gohfi1$;
  var launchImmediately = $module$korge_root_korge.$$importsForInline$$['korio-root-korio'].com.soywiz.korio.async.launchImmediately_ykkwzu$;
  var korge = $module$korge_root_korge.com.soywiz.korge;
  var AsyncSignal = $module$korio_root_korio.com.soywiz.korio.async.AsyncSignal;
  var position = $module$korge_root_korge.com.soywiz.korge.view.position_ajix5r$;
  var alignLeftToRightOf = $module$korge_root_korge.com.soywiz.korge.view.alignLeftToRightOf_qcv975$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var alignTopToBottomOf = $module$korge_root_korge.com.soywiz.korge.view.alignTopToBottomOf_qcv975$;
  var alignTopToTopOf = $module$korge_root_korge.com.soywiz.korge.view.alignTopToTopOf_qcv975$;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_nig4hr$;
  var position_0 = $module$korge_root_korge.com.soywiz.korge.view.position_2cbtc5$;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_38ydlf$;
  var coerceIn_0 = Kotlin.kotlin.ranges.coerceIn_nayhkp$;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  var get_defaultUISkin = $module$korge_root_korge.com.soywiz.korge.ui.get_defaultUISkin_gohfi1$;
  var get_defaultUIFont = $module$korge_root_korge.com.soywiz.korge.ui.get_defaultUIFont_gohfi1$;
  var TextButton_init = $module$korge_root_korge.com.soywiz.korge.ui.TextButton;
  var addTo = $module$korge_root_korge.com.soywiz.korge.view.addTo_fct211$;
  var color_0 = $module$korge_root_korge.$$importsForInline$$['korim-root-korim'].com.soywiz.korim.color;
  var Fonts = $module$korge_root_korge.com.soywiz.korge.view.Fonts;
  var Text = $module$korge_root_korge.com.soywiz.korge.view.Text;
  var Math_0 = Math;
  var Container_init = $module$korge_root_korge.com.soywiz.korge.view.Container;
  var SolidRect_init = $module$korge_root_korge.com.soywiz.korge.view.SolidRect;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var sequence = Kotlin.kotlin.sequences.sequence_o0x0bg$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var AssertionError_init = Kotlin.kotlin.AssertionError_init_s8jyv4$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var slice = Kotlin.kotlin.collections.slice_6bjbi1$;
  var slice_0 = Kotlin.kotlin.collections.slice_b9tsm5$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  MineState.prototype = Object.create(Enum.prototype);
  MineState.prototype.constructor = MineState;
  Action.prototype = Object.create(Enum.prototype);
  Action.prototype.constructor = Action;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  Solver$CellState.prototype = Object.create(Enum.prototype);
  Solver$CellState.prototype.constructor = Solver$CellState;
  function MineState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MineState_initFields() {
    MineState_initFields = function () {
    };
    MineState$UNMARKED_instance = new MineState('UNMARKED', 0);
    MineState$EMPTY_instance = new MineState('EMPTY', 1);
    MineState$MARKED_instance = new MineState('MARKED', 2);
    MineState$MINE_instance = new MineState('MINE', 3);
  }
  var MineState$UNMARKED_instance;
  function MineState$UNMARKED_getInstance() {
    MineState_initFields();
    return MineState$UNMARKED_instance;
  }
  var MineState$EMPTY_instance;
  function MineState$EMPTY_getInstance() {
    MineState_initFields();
    return MineState$EMPTY_instance;
  }
  var MineState$MARKED_instance;
  function MineState$MARKED_getInstance() {
    MineState_initFields();
    return MineState$MARKED_instance;
  }
  var MineState$MINE_instance;
  function MineState$MINE_getInstance() {
    MineState_initFields();
    return MineState$MINE_instance;
  }
  MineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MineState',
    interfaces: [Enum]
  };
  function MineState$values() {
    return [MineState$UNMARKED_getInstance(), MineState$EMPTY_getInstance(), MineState$MARKED_getInstance(), MineState$MINE_getInstance()];
  }
  MineState.values = MineState$values;
  function MineState$valueOf(name) {
    switch (name) {
      case 'UNMARKED':
        return MineState$UNMARKED_getInstance();
      case 'EMPTY':
        return MineState$EMPTY_getInstance();
      case 'MARKED':
        return MineState$MARKED_getInstance();
      case 'MINE':
        return MineState$MINE_getInstance();
      default:throwISE('No enum constant MineState.' + name);
    }
  }
  MineState.valueOf_61zpoe$ = MineState$valueOf;
  function Board(width, height, mineCount) {
    if (width === void 0)
      width = 5;
    if (height === void 0)
      height = 5;
    if (mineCount === void 0)
      mineCount = 0.25;
    this.width = width;
    this.height = height;
    this.mineCount_0 = mineCount;
    this.$delegate_12bdfq$_0 = new Extra$Mixin();
    this.gameOverSignal_0 = new Signal();
    this.emptyFlaggedSignal_0 = new Signal();
    this.mistakeSignal_0 = new Signal();
    var width_0 = this.width;
    var height_0 = this.height;
    var tmp$;
    var array = Array_0(Kotlin.imul(width_0, height_0));
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = Random.Default.nextDouble() < this.mineCount_0;
    }
    this.mineMap_0 = new Array2(width_0, height_0, Kotlin.isArray(tmp$ = array) ? tmp$ : throwCCE());
    var width_1 = this.width;
    var height_1 = this.height;
    var tmp$_1;
    var array_0 = Array_0(Kotlin.imul(width_1, height_1));
    var tmp$_0_0;
    tmp$_0_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0_0; i_0++) {
      array_0[i_0] = new Board$Cell(this, i_0 % this.width, i_0 / this.width | 0);
    }
    this.cells = new Array2(width_1, height_1, Kotlin.isArray(tmp$_1 = array_0) ? tmp$_1 : throwCCE());
    var $receiver = this.mineMap_0;
    var count$result;
    count$break: do {
      var tmp$_2;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        count$result = 0;
        break count$break;
      }var count = 0;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (!element)
          checkCountOverflow((count = count + 1 | 0, count));
      }
      count$result = count;
    }
     while (false);
    this.emptyCount_0 = count$result;
    this.emptyFlaggedCount_0 = 0;
    this.mistakeCount_0 = 0;
    var width_2 = this.width;
    var height_2 = this.height;
    var tmp$_3;
    var array_1 = Array_0(Kotlin.imul(width_2, height_2));
    var tmp$_0_1;
    tmp$_0_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_0_1; i_1++) {
      array_1[i_1] = new Board$CountPosition();
    }
    this.countMap_0 = new Array2(width_2, height_2, Kotlin.isArray(tmp$_3 = array_1) ? tmp$_3 : throwCCE());
    this.colEmptyCount_0 = null;
    this.rowEmptyCount_0 = null;
    var size = this.width;
    var list = ArrayList_init(size);
    for (var index = 0; index < size; index++) {
      list.add_11rb$(ArrayList_init_0());
    }
    var emptyCountCol = list;
    var size_0 = this.height;
    var list_0 = ArrayList_init(size_0);
    for (var index_0 = 0; index_0 < size_0; index_0++) {
      list_0.add_11rb$(ArrayList_init_0());
    }
    var emptyCountRow = list_0;
    var tmp$_4;
    tmp$_4 = this.cells.iterator();
    while (tmp$_4.hasNext()) {
      var element_0 = tmp$_4.next();
      var p = element_0.pos;
      if (!this.mineMap_0.get_vux9f0$(p.x, p.y)) {
        var posX = element_0.pos.x;
        var posY = element_0.pos.y;
        var countCol = emptyCountCol.get_za3lpa$(posX);
        var countRow = emptyCountRow.get_za3lpa$(posY);
        if (posX === 0 || this.mineMap_0.get_vux9f0$(posX - 1 | 0, posY)) {
          countRow.add_11rb$(1);
        } else {
          countRow.set_wxm5ur$(countRow.size - 1 | 0, last(countRow) + 1 | 0);
        }
        if (posY === 0 || this.mineMap_0.get_vux9f0$(posX, posY - 1 | 0)) {
          countCol.add_11rb$(1);
        } else {
          countCol.set_wxm5ur$(countCol.size - 1 | 0, last(countCol) + 1 | 0);
        }
        var $receiver_0 = this.countMap_0;
        var p_0 = element_0.pos;
        var value = new Board$CountPosition(countRow.size - 1 | 0, countCol.size - 1 | 0);
        $receiver_0.set_vq7693$(p_0.x, p_0.y, value);
      }}
    var destination = ArrayList_init(collectionSizeOrDefault(emptyCountRow, 10));
    var tmp$_5;
    tmp$_5 = emptyCountRow.iterator();
    while (tmp$_5.hasNext()) {
      var item = tmp$_5.next();
      var tmp$_6 = destination.add_11rb$;
      var destination_0 = ArrayList_init(collectionSizeOrDefault(item, 10));
      var tmp$_7;
      tmp$_7 = item.iterator();
      while (tmp$_7.hasNext()) {
        var item_0 = tmp$_7.next();
        destination_0.add_11rb$(new Board$EmptyCount(item_0));
      }
      tmp$_6.call(destination, destination_0);
    }
    this.rowEmptyCount_0 = destination;
    var destination_1 = ArrayList_init(collectionSizeOrDefault(emptyCountCol, 10));
    var tmp$_8;
    tmp$_8 = emptyCountCol.iterator();
    while (tmp$_8.hasNext()) {
      var item_1 = tmp$_8.next();
      var tmp$_9 = destination_1.add_11rb$;
      var destination_2 = ArrayList_init(collectionSizeOrDefault(item_1, 10));
      var tmp$_10;
      tmp$_10 = item_1.iterator();
      while (tmp$_10.hasNext()) {
        var item_2 = tmp$_10.next();
        destination_2.add_11rb$(new Board$EmptyCount(item_2));
      }
      tmp$_9.call(destination_1, destination_2);
    }
    this.colEmptyCount_0 = destination_1;
    this.emptyFlaggedSignal_0.invoke_qlkmfe$(Board_init$lambda(this));
    this.mistakeSignal_0.invoke_qlkmfe$(Board_init$lambda_0(this));
  }
  function Board$CountPosition(rowPosition, colPosition) {
    if (rowPosition === void 0)
      rowPosition = -1;
    if (colPosition === void 0)
      colPosition = -1;
    this.rowPosition = rowPosition;
    this.colPosition = colPosition;
  }
  Board$CountPosition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CountPosition',
    interfaces: []
  };
  Board$CountPosition.prototype.component1 = function () {
    return this.rowPosition;
  };
  Board$CountPosition.prototype.component2 = function () {
    return this.colPosition;
  };
  Board$CountPosition.prototype.copy_vux9f0$ = function (rowPosition, colPosition) {
    return new Board$CountPosition(rowPosition === void 0 ? this.rowPosition : rowPosition, colPosition === void 0 ? this.colPosition : colPosition);
  };
  Board$CountPosition.prototype.toString = function () {
    return 'CountPosition(rowPosition=' + Kotlin.toString(this.rowPosition) + (', colPosition=' + Kotlin.toString(this.colPosition)) + ')';
  };
  Board$CountPosition.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.rowPosition) | 0;
    result = result * 31 + Kotlin.hashCode(this.colPosition) | 0;
    return result;
  };
  Board$CountPosition.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.rowPosition, other.rowPosition) && Kotlin.equals(this.colPosition, other.colPosition)))));
  };
  function Board$EmptyCount(numEmpty, numFlagged, signalDone) {
    if (numEmpty === void 0)
      numEmpty = 0;
    if (numFlagged === void 0)
      numFlagged = 0;
    if (signalDone === void 0)
      signalDone = new Signal();
    this.numEmpty = numEmpty;
    this.numFlagged = numFlagged;
    this.signalDone = signalDone;
  }
  Board$EmptyCount.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptyCount',
    interfaces: []
  };
  Board$EmptyCount.prototype.component1 = function () {
    return this.numEmpty;
  };
  Board$EmptyCount.prototype.component2 = function () {
    return this.numFlagged;
  };
  Board$EmptyCount.prototype.component3 = function () {
    return this.signalDone;
  };
  Board$EmptyCount.prototype.copy_azi3zz$ = function (numEmpty, numFlagged, signalDone) {
    return new Board$EmptyCount(numEmpty === void 0 ? this.numEmpty : numEmpty, numFlagged === void 0 ? this.numFlagged : numFlagged, signalDone === void 0 ? this.signalDone : signalDone);
  };
  Board$EmptyCount.prototype.toString = function () {
    return 'EmptyCount(numEmpty=' + Kotlin.toString(this.numEmpty) + (', numFlagged=' + Kotlin.toString(this.numFlagged)) + (', signalDone=' + Kotlin.toString(this.signalDone)) + ')';
  };
  Board$EmptyCount.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.numEmpty) | 0;
    result = result * 31 + Kotlin.hashCode(this.numFlagged) | 0;
    result = result * 31 + Kotlin.hashCode(this.signalDone) | 0;
    return result;
  };
  Board$EmptyCount.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.numEmpty, other.numEmpty) && Kotlin.equals(this.numFlagged, other.numFlagged) && Kotlin.equals(this.signalDone, other.signalDone)))));
  };
  function Board$Cell($outer, x, y) {
    this.$outer = $outer;
    this.$delegate_9s2yqe$_0 = new Extra$Mixin();
    this.pos = PointInt.Companion.invoke_vux9f0$(x, y);
    this.state_e69oqb$_0 = MineState$UNMARKED_getInstance();
  }
  Object.defineProperty(Board$Cell.prototype, 'state', {
    get: function () {
      return this.state_e69oqb$_0;
    },
    set: function (state) {
      this.state_e69oqb$_0 = state;
    }
  });
  Board$Cell.prototype.mark = function () {
    if (this.state === MineState$UNMARKED_getInstance())
      this.state = MineState$MARKED_getInstance();
  };
  Board$Cell.prototype.unmark = function () {
    if (this.state === MineState$MARKED_getInstance())
      this.state = MineState$UNMARKED_getInstance();
  };
  Board$Cell.prototype.check = function () {
    var tmp$;
    if (this.state === MineState$UNMARKED_getInstance()) {
      var p = this.pos;
      if (this.$outer.mineMap_0.get_vux9f0$(p.x, p.y)) {
        var $receiver = MineState$MINE_getInstance();
        this.$outer;
        this.$outer.mistakeSignal_0.invoke_11rb$(Unit);
        tmp$ = $receiver;
      } else {
        var $receiver_0 = MineState$EMPTY_getInstance();
        this.$outer;
        this.$outer.emptyFlaggedSignal_0.invoke_11rb$(this.pos);
        tmp$ = $receiver_0;
      }
      this.state = tmp$;
    }};
  Object.defineProperty(Board$Cell.prototype, 'extra', {
    get: function () {
      return this.$delegate_9s2yqe$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_9s2yqe$_0.extra = tmp$;
    }
  });
  Board$Cell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cell',
    interfaces: [Extra]
  };
  Object.defineProperty(Board.prototype, 'emptyCountCol', {
    get: function () {
      var $receiver = this.colEmptyCount_0;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var destination_0 = ArrayList_init(collectionSizeOrDefault(item, 10));
        var tmp$_1;
        tmp$_1 = item.iterator();
        while (tmp$_1.hasNext()) {
          var item_0 = tmp$_1.next();
          destination_0.add_11rb$(item_0.numEmpty);
        }
        tmp$_0.call(destination, destination_0);
      }
      return destination;
    }
  });
  Object.defineProperty(Board.prototype, 'emptyCountRow', {
    get: function () {
      var $receiver = this.rowEmptyCount_0;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var destination_0 = ArrayList_init(collectionSizeOrDefault(item, 10));
        var tmp$_1;
        tmp$_1 = item.iterator();
        while (tmp$_1.hasNext()) {
          var item_0 = tmp$_1.next();
          destination_0.add_11rb$(item_0.numEmpty);
        }
        tmp$_0.call(destination, destination_0);
      }
      return destination;
    }
  });
  Board.prototype.get_vux9f0$ = function (x, y) {
    return this.cells.get_vux9f0$(x, y);
  };
  Board.prototype.gameOver_b4k9x1$ = function (handler) {
    return this.gameOverSignal_0.once_qlkmfe$(handler);
  };
  Board.prototype.onColCountDone_dxxoxs$ = function (col, count, handler) {
    return this.colEmptyCount_0.get_za3lpa$(col).get_za3lpa$(count).signalDone.once_qlkmfe$(handler);
  };
  Board.prototype.onRowCountDone_dxxoxs$ = function (row, count, handler) {
    return this.rowEmptyCount_0.get_za3lpa$(row).get_za3lpa$(count).signalDone.once_qlkmfe$(handler);
  };
  Board.prototype.cleanUp = function () {
    this.mistakeSignal_0.clear();
    this.emptyFlaggedSignal_0.clear();
    this.gameOverSignal_0.clear();
    var tmp$;
    tmp$ = this.colEmptyCount_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = element.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        element_0.signalDone.clear();
      }
    }
    var tmp$_1;
    tmp$_1 = this.rowEmptyCount_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      var tmp$_2;
      tmp$_2 = element_1.iterator();
      while (tmp$_2.hasNext()) {
        var element_2 = tmp$_2.next();
        element_2.signalDone.clear();
      }
    }
  };
  Object.defineProperty(Board.prototype, 'extra', {
    get: function () {
      return this.$delegate_12bdfq$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_12bdfq$_0.extra = tmp$;
    }
  });
  function Board_init$lambda(this$Board) {
    return function (it) {
      var tmp$;
      var countPosition = this$Board.countMap_0.get_vux9f0$(it.x, it.y);
      var colCount = this$Board.colEmptyCount_0.get_za3lpa$(it.x).get_za3lpa$(countPosition.colPosition);
      colCount.numFlagged = colCount.numFlagged + 1 | 0;
      if (colCount.numFlagged >= colCount.numEmpty) {
        colCount.signalDone.invoke_11rb$(Unit);
      }var rowCount = this$Board.rowEmptyCount_0.get_za3lpa$(it.y).get_za3lpa$(countPosition.rowPosition);
      rowCount.numFlagged = rowCount.numFlagged + 1 | 0;
      if (rowCount.numFlagged >= rowCount.numEmpty) {
        rowCount.signalDone.invoke_11rb$(Unit);
      }tmp$ = this$Board.emptyFlaggedCount_0;
      this$Board.emptyFlaggedCount_0 = tmp$ + 1 | 0;
      println('Remaining count ' + (this$Board.emptyCount_0 - this$Board.emptyFlaggedCount_0 | 0));
      if (this$Board.emptyFlaggedCount_0 === this$Board.emptyCount_0) {
        this$Board.gameOverSignal_0.invoke_11rb$(this$Board.mistakeCount_0);
      }return Unit;
    };
  }
  function Board_init$lambda_0(this$Board) {
    return function (it) {
      var tmp$;
      tmp$ = this$Board.mistakeCount_0;
      this$Board.mistakeCount_0 = tmp$ + 1 | 0;
      return Unit;
    };
  }
  Board.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Board',
    interfaces: [Extra]
  };
  function Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$handler = closure$handler_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$doMouseEvent$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.constructor = Coroutine$doMouseEvent$lambda$lambda$lambda;
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$handler(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doMouseEvent$lambda$lambda(closure$mouse, closure$handler) {
    return function (it) {
      launchImmediately(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda(closure$handler, it));
      return Unit;
    };
  }
  function Coroutine$doMouseEvent$lambda$lambda$lambda_0(closure$handler_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$handler = closure$handler_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.prototype.constructor = Coroutine$doMouseEvent$lambda$lambda$lambda_0;
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$handler(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doMouseEvent$lambda$lambda$lambda_0(closure$handler_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$doMouseEvent$lambda$lambda$lambda_0(closure$handler_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doMouseEvent$lambda$lambda_0(closure$mouse, closure$handler) {
    return function (it) {
      launchImmediately(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda_0(closure$handler, it));
      return Unit;
    };
  }
  function Coroutine$doMouseEvent$lambda$lambda$lambda_1(closure$handler_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$handler = closure$handler_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$doMouseEvent$lambda$lambda$lambda_1.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$doMouseEvent$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMouseEvent$lambda$lambda$lambda_1.prototype.constructor = Coroutine$doMouseEvent$lambda$lambda$lambda_1;
  Coroutine$doMouseEvent$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$handler(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doMouseEvent$lambda$lambda$lambda_1(closure$handler_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$doMouseEvent$lambda$lambda$lambda_1(closure$handler_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doMouseEvent$lambda$lambda_1(closure$mouse, closure$handler) {
    return function (it) {
      launchImmediately(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda_1(closure$handler, it));
      return Unit;
    };
  }
  function view$lambda() {
    return null;
  }
  var view;
  var view_metadata = new PropertyMetadata('view');
  function get_view($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = view.name) != null ? tmp$ : view_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = view.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = view.name) != null ? tmp$_3 : view_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_view($receiver, view_0) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = view.name) != null ? tmp$ : view_metadata.callableName, (tmp$_0 = view_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  }
  function drag$lambda() {
    return null;
  }
  var drag;
  var drag_metadata = new PropertyMetadata('drag');
  function get_drag($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = drag.name) != null ? tmp$ : drag_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = drag.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = drag.name) != null ? tmp$_3 : drag_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_drag($receiver, drag_0) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = drag.name) != null ? tmp$ : drag_metadata.callableName, (tmp$_0 = drag_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  }
  function Action(name, ordinal, execute) {
    Enum.call(this);
    this.execute = execute;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Action_initFields() {
    Action_initFields = function () {
    };
    Action$NONE_instance = new Action('NONE', 0, getCallableRef('noAction', function ($receiver) {
      return noAction($receiver), Unit;
    }));
    Action$UNMARK_instance = new Action('UNMARK', 1, getCallableRef('unmark', function ($receiver) {
      return $receiver.unmark(), Unit;
    }));
    Action$MARK_instance = new Action('MARK', 2, getCallableRef('mark', function ($receiver) {
      return $receiver.mark(), Unit;
    }));
    Action$CHECK_instance = new Action('CHECK', 3, getCallableRef('check', function ($receiver) {
      return $receiver.check(), Unit;
    }));
  }
  var Action$NONE_instance;
  function Action$NONE_getInstance() {
    Action_initFields();
    return Action$NONE_instance;
  }
  var Action$UNMARK_instance;
  function Action$UNMARK_getInstance() {
    Action_initFields();
    return Action$UNMARK_instance;
  }
  var Action$MARK_instance;
  function Action$MARK_getInstance() {
    Action_initFields();
    return Action$MARK_instance;
  }
  var Action$CHECK_instance;
  function Action$CHECK_getInstance() {
    Action_initFields();
    return Action$CHECK_instance;
  }
  Action.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Action',
    interfaces: [Enum]
  };
  function Action$values() {
    return [Action$NONE_getInstance(), Action$UNMARK_getInstance(), Action$MARK_getInstance(), Action$CHECK_getInstance()];
  }
  Action.values = Action$values;
  function Action$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Action$NONE_getInstance();
      case 'UNMARK':
        return Action$UNMARK_getInstance();
      case 'MARK':
        return Action$MARK_getInstance();
      case 'CHECK':
        return Action$CHECK_getInstance();
      default:throwISE('No enum constant Action.' + name);
    }
  }
  Action.valueOf_61zpoe$ = Action$valueOf;
  function Direction(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$NONE_instance = new Direction('NONE', 0);
    Direction$ROW_instance = new Direction('ROW', 1);
    Direction$COL_instance = new Direction('COL', 2);
  }
  var Direction$NONE_instance;
  function Direction$NONE_getInstance() {
    Direction_initFields();
    return Direction$NONE_instance;
  }
  var Direction$ROW_instance;
  function Direction$ROW_getInstance() {
    Direction_initFields();
    return Direction$ROW_instance;
  }
  var Direction$COL_instance;
  function Direction$COL_getInstance() {
    Direction_initFields();
    return Direction$COL_instance;
  }
  Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Direction$values() {
    return [Direction$NONE_getInstance(), Direction$ROW_getInstance(), Direction$COL_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Direction$NONE_getInstance();
      case 'ROW':
        return Direction$ROW_getInstance();
      case 'COL':
        return Direction$COL_getInstance();
      default:throwISE('No enum constant Direction.' + name);
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function DragInfo(action, start, direction) {
    if (action === void 0)
      action = Action$NONE_getInstance();
    if (start === void 0)
      start = PointInt.Companion.invoke_vux9f0$(0, 0);
    if (direction === void 0)
      direction = Direction$NONE_getInstance();
    this.action = action;
    this.start = start;
    this.direction = direction;
  }
  DragInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DragInfo',
    interfaces: []
  };
  DragInfo.prototype.component1 = function () {
    return this.action;
  };
  DragInfo.prototype.component2 = function () {
    return this.start;
  };
  DragInfo.prototype.component3 = function () {
    return this.direction;
  };
  DragInfo.prototype.copy_z9vdt4$ = function (action, start, direction) {
    return new DragInfo(action === void 0 ? this.action : action, start === void 0 ? this.start : start, direction === void 0 ? this.direction : direction);
  };
  DragInfo.prototype.toString = function () {
    return 'DragInfo(action=' + Kotlin.toString(this.action) + (', start=' + Kotlin.toString(this.start)) + (', direction=' + Kotlin.toString(this.direction)) + ')';
  };
  DragInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.action) | 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.direction) | 0;
    return result;
  };
  DragInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.action, other.action) && Kotlin.equals(this.start, other.start) && Kotlin.equals(this.direction, other.direction)))));
  };
  function noAction($receiver) {
  }
  function update($receiver) {
    var tmp$, tmp$_0;
    tmp$_0 = get_view($receiver);
    switch ($receiver.state.name) {
      case 'UNMARKED':
        tmp$ = color.Colors.WHITE;
        break;
      case 'EMPTY':
        tmp$ = color.Colors.DARKGRAY;
        break;
      case 'MARKED':
        tmp$ = color.Colors.RED;
        break;
      case 'MINE':
        tmp$ = color.Colors.PURPLE;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    tmp$_0 != null ? (tmp$_0.colorMul = tmp$) : null;
  }
  function Coroutine$init$lambda(this$init_0, closure$parent_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$init = this$init_0;
    this.local$closure$parent = closure$parent_0;
    this.local$it = it_0;
  }
  Coroutine$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init$lambda.prototype.constructor = Coroutine$init$lambda;
  Coroutine$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var action = getAction(this.local$this$init, this.local$it);
            if (action === Action$NONE_getInstance())
              return;
            set_drag(this.local$closure$parent, new DragInfo(action, this.local$this$init.pos));
            performAction(this.local$this$init, action);
            if (this.local$this$init.state === MineState$MINE_getInstance()) {
              return set_drag(this.local$closure$parent, null), Unit;
            }
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function init$lambda(this$init_0, closure$parent_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$init$lambda(this$init_0, closure$parent_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$init$lambda_0(this$init_0, closure$parent_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$init = this$init_0;
    this.local$closure$parent = closure$parent_0;
  }
  Coroutine$init$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init$lambda_0.prototype.constructor = Coroutine$init$lambda_0;
  Coroutine$init$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.local$this$init.state === MineState$MINE_getInstance()) {
              set_drag(this.local$closure$parent, null);
              return;
            }
            tmp$ = get_drag(this.local$closure$parent);
            if (tmp$ == null) {
              return;
            }
            var drag = tmp$;
            var sameX = this.local$this$init.pos.x === drag.start.x;
            var sameY = this.local$this$init.pos.y === drag.start.y;
            if (drag.direction === Direction$NONE_getInstance()) {
              if (sameX ^ sameY) {
                drag.direction = sameX ? Direction$COL_getInstance() : Direction$ROW_getInstance();
              }}
            if (sameX && drag.direction === Direction$COL_getInstance() || (sameY && drag.direction === Direction$ROW_getInstance())) {
              performAction(this.local$this$init, drag.action);
            }
            if (this.local$this$init.state === MineState$MINE_getInstance()) {
              return set_drag(this.local$closure$parent, null), Unit;
            }
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function init$lambda_0(this$init_0, closure$parent_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$init$lambda_0(this$init_0, closure$parent_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$init$lambda_1(closure$parent_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$parent = closure$parent_0;
  }
  Coroutine$init$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init$lambda_1.prototype.constructor = Coroutine$init$lambda_1;
  Coroutine$init$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return set_drag(this.local$closure$parent, null), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function init$lambda_1(closure$parent_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$init$lambda_1(closure$parent_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function init($receiver_1, view, parent) {
    set_view($receiver_1, view);
    var prop = getPropertyCallableRef('down', 1, function ($receiver) {
      return $receiver.down;
    });
    var tmp$;
    if ((tmp$ = view != null ? get_mouse(view) : null) != null) {
      prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$, init$lambda($receiver_1, parent)));
    }var prop_0 = getPropertyCallableRef('downFromOutside', 1, function ($receiver) {
      return $receiver.downFromOutside;
    });
    var tmp$_0;
    if ((tmp$_0 = view != null ? get_mouse(view) : null) != null) {
      prop_0.get(tmp$_0).add_qlkmfe$(doMouseEvent$lambda$lambda_0(tmp$_0, init$lambda_0($receiver_1, parent)));
    }var prop_1 = getPropertyCallableRef('up', 1, function ($receiver_0) {
      return $receiver_0.up;
    });
    var tmp$_1;
    if ((tmp$_1 = view != null ? get_mouse(view) : null) != null) {
      prop_1.get(tmp$_1).add_qlkmfe$(doMouseEvent$lambda$lambda_1(tmp$_1, init$lambda_1(parent)));
    }}
  function getAction($receiver, event) {
    if (event.button === MouseButton.RIGHT || event.button === MouseButton.MIDDLE || (event.button === MouseButton.LEFT && (event.isShiftDown || event.isCtrlDown))) {
      switch ($receiver.state.name) {
        case 'MARKED':
          return Action$UNMARK_getInstance();
        case 'UNMARKED':
          return Action$MARK_getInstance();
        default:return Action$NONE_getInstance();
      }
    } else if (event.button === MouseButton.LEFT) {
      if (equals($receiver.state, MineState$UNMARKED_getInstance()))
        return Action$CHECK_getInstance();
      else
        return Action$NONE_getInstance();
    } else
      return Action$NONE_getInstance();
  }
  function performAction($receiver, action) {
    action.execute($receiver);
    update($receiver);
  }
  function Coroutine$doMouseEvent$lambda$lambda$lambda_2(closure$handler_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$handler = closure$handler_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$doMouseEvent$lambda$lambda$lambda_2.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$doMouseEvent$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMouseEvent$lambda$lambda$lambda_2.prototype.constructor = Coroutine$doMouseEvent$lambda$lambda$lambda_2;
  Coroutine$doMouseEvent$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$handler(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doMouseEvent$lambda$lambda$lambda_2(closure$handler_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$doMouseEvent$lambda$lambda$lambda_2(closure$handler_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doMouseEvent$lambda$lambda_2(closure$mouse, closure$handler) {
    return function (it) {
      launchImmediately(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda_2(closure$handler, it));
      return Unit;
    };
  }
  function textButton$lambda($receiver) {
    return Unit;
  }
  function text$lambda($receiver) {
    return Unit;
  }
  function container$lambda($receiver) {
    return Unit;
  }
  function solidRect$lambda($receiver) {
    return Unit;
  }
  function Coroutine$main$lambda$lambda$lambda$lambda(closure$newGame_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$newGame = closure$newGame_0;
  }
  Coroutine$main$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda$lambda$lambda;
  Coroutine$main$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$newGame.invoke_11rb$(Unit, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda$lambda(closure$newGame_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda$lambda(closure$newGame_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda$lambda$lambda$lambda$lambda(closure$board_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$board = closure$board_0;
    this.local$it = it_0;
  }
  Coroutine$main$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$main$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return update(this.local$closure$board.get_vux9f0$(this.local$it.x, this.local$it.y)), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda$lambda$lambda$lambda(closure$board_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda$lambda$lambda$lambda(closure$board_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda$lambda$lambda_0(closure$board_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$board = closure$board_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$main$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$main$lambda$lambda$lambda$lambda_0;
  Coroutine$main$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$closure$board.v) != null) {
              this.state_0 = 2;
              this.result_0 = Solver_getInstance().solve_f6xcb4$(tmp$, main$lambda$lambda$lambda$lambda$lambda$lambda(tmp$), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.local$tmp$ = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = Unit;
            this.state_0 = 3;
            continue;
          case 3:
            return this.local$tmp$;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda$lambda_0(closure$board_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda$lambda_0(closure$board_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$lambda$lambda(it) {
    return it.toString();
  }
  function Coroutine$main$lambda$lambda$lambda(closure$boardWidth_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$boardWidth = closure$boardWidth_0;
    this.local$it = it_0;
  }
  Coroutine$main$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda$lambda;
  Coroutine$main$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$boardWidth.v = this.local$it, Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda_0(closure$boardWidth_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda(closure$boardWidth_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$lambda$lambda_1(closure$newGameButton) {
    return function ($receiver) {
      alignTopToBottomOf($receiver, closure$newGameButton, 20.0);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_2(it) {
    return it.toString();
  }
  function Coroutine$main$lambda$lambda$lambda_0(closure$boardHeight_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$boardHeight = closure$boardHeight_0;
    this.local$it = it_0;
  }
  Coroutine$main$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda_0.prototype.constructor = Coroutine$main$lambda$lambda$lambda_0;
  Coroutine$main$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$boardHeight.v = this.local$it, Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda_3(closure$boardHeight_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda_0(closure$boardHeight_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$lambda$lambda_4(closure$widthConf) {
    return function ($receiver) {
      alignTopToTopOf($receiver, closure$widthConf);
      alignLeftToRightOf($receiver, closure$widthConf, 40.0);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_5(it) {
    return (it * 10 | 0).toString() + '%';
  }
  function Coroutine$main$lambda$lambda$lambda_1(closure$minePercent_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$minePercent = closure$minePercent_0;
    this.local$it = it_0;
  }
  Coroutine$main$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda_1.prototype.constructor = Coroutine$main$lambda$lambda$lambda_1;
  Coroutine$main$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$minePercent.v = this.local$it, Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda_6(closure$minePercent_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda_1(closure$minePercent_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$lambda$lambda_7(closure$heightConf) {
    return function ($receiver) {
      alignTopToTopOf($receiver, closure$heightConf);
      alignLeftToRightOf($receiver, closure$heightConf, 40.0);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_1(this$, closure$gameOverText) {
    return function (mistakes) {
      println('Game Over, mistakes: ' + mistakes);
      var tmp$ = closure$gameOverText;
      var $receiver = this$;
      var text = 'Game Over, Mistakes made: ' + mistakes;
      var color_0_0;
      var font;
      color_0_0 = color_0.Colors.WHITE;
      font = Fonts.Companion.defaultFont;
      var $receiver_0 = addTo(Text.Companion.invoke_8ii8iq$(text, 16.0, color_0_0, font), $receiver);
      position_0($receiver_0, 20.0, 20.0);
      tmp$.v = $receiver_0;
      return Unit;
    };
  }
  function Coroutine$main$lambda$lambda(closure$boardContainer_0, this$_0, closure$gameOverText_0, closure$gameOverCloseable_0, closure$board_0, closure$boardWidth_0, closure$boardHeight_0, closure$minePercent_0, closure$buttonContainer_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$boardContainer = closure$boardContainer_0;
    this.local$this$ = this$_0;
    this.local$closure$gameOverText = closure$gameOverText_0;
    this.local$closure$gameOverCloseable = closure$gameOverCloseable_0;
    this.local$closure$board = closure$board_0;
    this.local$closure$boardWidth = closure$boardWidth_0;
    this.local$closure$boardHeight = closure$boardHeight_0;
    this.local$closure$minePercent = closure$minePercent_0;
    this.local$closure$buttonContainer = closure$buttonContainer_0;
  }
  Coroutine$main$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda;
  Coroutine$main$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.local$this$.removeChild_gohfih$(this.local$closure$boardContainer.v);
            this.local$this$.removeChild_gohfih$(this.local$closure$gameOverText.v);
            (tmp$ = this.local$closure$gameOverCloseable.v) != null ? (tmp$.close(), Unit) : null;
            (tmp$_0 = this.local$closure$board.v) != null ? (tmp$_0.cleanUp(), Unit) : null;
            var tmp$_1 = this.local$closure$board;
            var $receiver = new Board(this.local$closure$boardWidth.v, this.local$closure$boardHeight.v, coerceIn(this.local$closure$minePercent.v / 10, 0.0, 1.0));
            var this$ = this.local$this$;
            var closure$boardWidth = this.local$closure$boardWidth;
            var closure$boardHeight = this.local$closure$boardHeight;
            var closure$boardContainer = this.local$closure$boardContainer;
            var closure$buttonContainer = this.local$closure$buttonContainer;
            var closure$gameOverText = this.local$closure$gameOverText;
            var closure$gameOverCloseable = this.local$closure$gameOverCloseable;
            var tmp$_2;
            var a = this$.views.virtualWidth / (closure$boardWidth.v * 1.2);
            var b = this$.views.virtualHeight / (closure$boardHeight.v * 1.2);
            var blockSize = Math_0.min(a, b) / 2;
            closure$boardContainer.v = createBoard(this$, $receiver, blockSize);
            (tmp$_2 = closure$boardContainer.v) != null ? alignTopToBottomOf(tmp$_2, closure$buttonContainer, 20.0) : null;
            closure$gameOverCloseable.v = $receiver.gameOver_b4k9x1$(main$lambda$lambda$lambda$lambda_1(this$, closure$gameOverText));
            return tmp$_1.v = $receiver, Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda(closure$boardContainer_0, this$_0, closure$gameOverText_0, closure$gameOverCloseable_0, closure$board_0, closure$boardWidth_0, closure$boardHeight_0, closure$minePercent_0, closure$buttonContainer_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda(closure$boardContainer_0, this$_0, closure$gameOverText_0, closure$gameOverCloseable_0, closure$board_0, closure$boardWidth_0, closure$boardHeight_0, closure$minePercent_0, closure$buttonContainer_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var board = {v: null};
            var boardContainer = {v: null};
            var gameOverText = {v: null};
            var gameOverCloseable = {v: null};
            var newGame = new AsyncSignal();
            var boardWidth = {v: 5};
            var boardHeight = {v: 5};
            var minePercent = {v: 5};
            var $receiver_0_0 = addTo(new Container_init(), this.local$$receiver);
            position($receiver_0_0, 40, 40);
            var $receiver_0_1 = addTo(new TextButton_init(128.0, 64.0, 'New Game', get_defaultUISkin($receiver_0_0), get_defaultUIFont($receiver_0_0)), $receiver_0_0);
            var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$;
            if ((tmp$ = $receiver_0_1 != null ? get_mouse($receiver_0_1) : null) != null) {
              prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda_2(tmp$, main$lambda$lambda$lambda$lambda(newGame)));
            }
            var newGameButton = $receiver_0_1;
            var $receiver_0_2 = addTo(new TextButton_init(128.0, 64.0, 'Solve', get_defaultUISkin($receiver_0_0), get_defaultUIFont($receiver_0_0)), $receiver_0_0);
            alignLeftToRightOf($receiver_0_2, newGameButton, 20.0);
            var prop_0 = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$_0;
            if ((tmp$_0 = $receiver_0_2 != null ? get_mouse($receiver_0_2) : null) != null) {
              prop_0.get(tmp$_0).add_qlkmfe$(doMouseEvent$lambda$lambda_2(tmp$_0, main$lambda$lambda$lambda$lambda_0(board)));
            }
            var widthConf = configuration($receiver_0_0, 'Width:', boardWidth.v, main$lambda$lambda$lambda, new IntRange(0, 2147483647), main$lambda$lambda$lambda_0(boardWidth), main$lambda$lambda$lambda_1(newGameButton));
            var heightConf = configuration($receiver_0_0, 'Height:', boardHeight.v, main$lambda$lambda$lambda_2, new IntRange(0, 2147483647), main$lambda$lambda$lambda_3(boardHeight), main$lambda$lambda$lambda_4(widthConf));
            configuration($receiver_0_0, 'Mine Percent:', minePercent.v, main$lambda$lambda$lambda_5, new IntRange(0, 10), main$lambda$lambda$lambda_6(minePercent), main$lambda$lambda$lambda_7(heightConf));
            var buttonContainer = $receiver_0_0;
            newGame.invoke_25kf2w$(main$lambda$lambda(boardContainer, this.local$$receiver, gameOverText, gameOverCloseable, board, boardWidth, boardHeight, minePercent, buttonContainer));
            this.state_0 = 2;
            this.result_0 = newGame.invoke_11rb$(Unit, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main(continuation) {
    return korge.Korge.invoke_hyfg37$(void 0, 1600, 900, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, color.Colors.get_61zpoe$('#2b2b2b'), void 0, void 0, void 0, void 0, void 0, void 0, main$lambda, continuation);
  }
  function createBoard$lambda$lambda$lambda(this$) {
    return function (it) {
      this$.color = color.Colors.DARKGRAY;
      return Unit;
    };
  }
  function createBoard$lambda$lambda$lambda_0(this$) {
    return function (it) {
      this$.color = color.Colors.DARKGRAY;
      return Unit;
    };
  }
  function createBoard($receiver, board, blockSize) {
    if (blockSize === void 0)
      blockSize = 40.0;
    var $receiver_0 = addTo(new Container_init(), $receiver);
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    position($receiver_0, 100, 100);
    var size = coerceAtMost(blockSize, 40.0);
    var padding = size / 5;
    tmp$ = board.width;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = board.height;
      for (var j = 0; j < tmp$_0; j++) {
        var $receiver_0_0 = addTo(new SolidRect_init(size, size, color.Colors.WHITE), $receiver_0);
        position_0($receiver_0_0, i * (size + padding), j * (size + padding));
        init(board.get_vux9f0$(i, j), $receiver_0_0, board);
      }
    }
    tmp$_1 = board.width;
    for (var i_0 = 0; i_0 < tmp$_1; i_0++) {
      tmp$_2 = board.emptyCountCol.get_za3lpa$(i_0);
      for (var j_0 = 0; j_0 !== tmp$_2.size; ++j_0) {
        var text = board.emptyCountCol.get_za3lpa$(i_0).get_za3lpa$(j_0).toString();
        var textSize = coerceAtMost(size / 2, 16.0);
        var color_0_0;
        var font;
        color_0_0 = color_0.Colors.WHITE;
        font = Fonts.Companion.defaultFont;
        var $receiver_0_1 = addTo(Text.Companion.invoke_8ii8iq$(text, textSize, color_0_0, font), $receiver_0);
        position_0($receiver_0_1, i_0 * (size + padding), (j_0 + board.height | 0) * (size + padding));
        board.onColCountDone_dxxoxs$(i_0, j_0, createBoard$lambda$lambda$lambda($receiver_0_1));
      }
    }
    tmp$_3 = board.height;
    for (var j_1 = 0; j_1 < tmp$_3; j_1++) {
      tmp$_4 = board.emptyCountRow.get_za3lpa$(j_1);
      for (var i_1 = 0; i_1 !== tmp$_4.size; ++i_1) {
        var text_0 = board.emptyCountRow.get_za3lpa$(j_1).get_za3lpa$(i_1).toString();
        var textSize_0 = coerceAtMost(size / 2, 16.0);
        var color_0_1;
        var font_0;
        color_0_1 = color_0.Colors.WHITE;
        font_0 = Fonts.Companion.defaultFont;
        var $receiver_0_2 = addTo(Text.Companion.invoke_8ii8iq$(text_0, textSize_0, color_0_1, font_0), $receiver_0);
        position_0($receiver_0_2, (i_1 + board.width | 0) * (size + padding), j_1 * (size + padding));
        board.onRowCountDone_dxxoxs$(j_1, i_1, createBoard$lambda$lambda$lambda_0($receiver_0_2));
      }
    }
    return $receiver_0;
  }
  function configuration$lambda($receiver) {
    return Unit;
  }
  function Coroutine$configuration$lambda$lambda$lambda(closure$newVal_0, closure$range_0, closure$countSignal_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$newVal = closure$newVal_0;
    this.local$closure$range = closure$range_0;
    this.local$closure$countSignal = closure$countSignal_0;
  }
  Coroutine$configuration$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$configuration$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$configuration$lambda$lambda$lambda.prototype.constructor = Coroutine$configuration$lambda$lambda$lambda;
  Coroutine$configuration$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$newVal.v = coerceIn_0(this.local$closure$newVal.v - 1 | 0, this.local$closure$range);
            this.state_0 = 2;
            this.result_0 = this.local$closure$countSignal.invoke_11rb$(this.local$closure$newVal.v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function configuration$lambda$lambda$lambda(closure$newVal_0, closure$range_0, closure$countSignal_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$configuration$lambda$lambda$lambda(closure$newVal_0, closure$range_0, closure$countSignal_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$configuration$lambda$lambda$lambda_0(closure$format_0, closure$newVal_0, this$_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$format = closure$format_0;
    this.local$closure$newVal = closure$newVal_0;
    this.local$this$ = this$_0;
  }
  Coroutine$configuration$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$configuration$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$configuration$lambda$lambda$lambda_0.prototype.constructor = Coroutine$configuration$lambda$lambda$lambda_0;
  Coroutine$configuration$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$.text = this.local$closure$format(this.local$closure$newVal.v), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function configuration$lambda$lambda$lambda_0(closure$format_0, closure$newVal_0, this$_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$configuration$lambda$lambda$lambda_0(closure$format_0, closure$newVal_0, this$_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$configuration$lambda$lambda$lambda_1(closure$newVal_0, closure$range_0, closure$countSignal_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$newVal = closure$newVal_0;
    this.local$closure$range = closure$range_0;
    this.local$closure$countSignal = closure$countSignal_0;
  }
  Coroutine$configuration$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$configuration$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$configuration$lambda$lambda$lambda_1.prototype.constructor = Coroutine$configuration$lambda$lambda$lambda_1;
  Coroutine$configuration$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$newVal.v = coerceIn_0(this.local$closure$newVal.v + 1 | 0, this.local$closure$range);
            this.state_0 = 2;
            this.result_0 = this.local$closure$countSignal.invoke_11rb$(this.local$closure$newVal.v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function configuration$lambda$lambda$lambda_1(closure$newVal_0, closure$range_0, closure$countSignal_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$configuration$lambda$lambda$lambda_1(closure$newVal_0, closure$range_0, closure$countSignal_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function configuration($receiver, label, initial, format, range, ntfy, callback) {
    if (callback === void 0)
      callback = configuration$lambda;
    var $receiver_0_0 = addTo(new Container_init(), $receiver);
    var newVal = {v: initial};
    var countSignal = new AsyncSignal();
    countSignal.add_25kf2w$(ntfy);
    var color_0_0;
    var font;
    color_0_0 = color_0.Colors.WHITE;
    font = Fonts.Companion.defaultFont;
    var $receiver_0_1 = addTo(Text.Companion.invoke_8ii8iq$(label, 16.0, color_0_0, font), $receiver_0_0);
    text$lambda($receiver_0_1);
    var countLabel = $receiver_0_1;
    var color_0_1;
    var font_0;
    color_0_1 = color_0.Colors.WHITE;
    font_0 = Fonts.Companion.defaultFont;
    var $receiver_0_2 = addTo(Text.Companion.invoke_8ii8iq$('-', 16.0, color_0_1, font_0), $receiver_0_0);
    alignLeftToRightOf($receiver_0_2, countLabel, 20.0);
    var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
      return $receiver_0.click;
    });
    var tmp$;
    if ((tmp$ = $receiver_0_2 != null ? get_mouse($receiver_0_2) : null) != null) {
      prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda_2(tmp$, configuration$lambda$lambda$lambda(newVal, range, countSignal)));
    }var countMinus = $receiver_0_2;
    var text = format(newVal.v);
    var color_0_2;
    var font_1;
    color_0_2 = color_0.Colors.WHITE;
    font_1 = Fonts.Companion.defaultFont;
    var $receiver_0_3 = addTo(Text.Companion.invoke_8ii8iq$(text, 16.0, color_0_2, font_1), $receiver_0_0);
    alignLeftToRightOf($receiver_0_3, countMinus, 20.0);
    countSignal.invoke_25kf2w$(configuration$lambda$lambda$lambda_0(format, newVal, $receiver_0_3));
    var countText = $receiver_0_3;
    var color_0_3;
    var font_2;
    color_0_3 = color_0.Colors.WHITE;
    font_2 = Fonts.Companion.defaultFont;
    var $receiver_0_4 = addTo(Text.Companion.invoke_8ii8iq$('+', 16.0, color_0_3, font_2), $receiver_0_0);
    alignLeftToRightOf($receiver_0_4, countText, 20.0);
    var prop_0 = getPropertyCallableRef('click', 1, function ($receiver_0) {
      return $receiver_0.click;
    });
    var tmp$_0;
    if ((tmp$_0 = $receiver_0_4 != null ? get_mouse($receiver_0_4) : null) != null) {
      prop_0.get(tmp$_0).add_qlkmfe$(doMouseEvent$lambda$lambda_2(tmp$_0, configuration$lambda$lambda$lambda_1(newVal, range, countSignal)));
    }callback($receiver_0_0);
    return $receiver_0_0;
  }
  function Solver() {
    Solver_instance = this;
  }
  function Solver$CellState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Solver$CellState_initFields() {
    Solver$CellState_initFields = function () {
    };
    Solver$CellState$NONE_instance = new Solver$CellState('NONE', 0);
    Solver$CellState$EMPTY_instance = new Solver$CellState('EMPTY', 1);
    Solver$CellState$MINE_instance = new Solver$CellState('MINE', 2);
  }
  var Solver$CellState$NONE_instance;
  function Solver$CellState$NONE_getInstance() {
    Solver$CellState_initFields();
    return Solver$CellState$NONE_instance;
  }
  var Solver$CellState$EMPTY_instance;
  function Solver$CellState$EMPTY_getInstance() {
    Solver$CellState_initFields();
    return Solver$CellState$EMPTY_instance;
  }
  var Solver$CellState$MINE_instance;
  function Solver$CellState$MINE_getInstance() {
    Solver$CellState_initFields();
    return Solver$CellState$MINE_instance;
  }
  Solver$CellState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CellState',
    interfaces: [Enum]
  };
  function Solver$CellState$values() {
    return [Solver$CellState$NONE_getInstance(), Solver$CellState$EMPTY_getInstance(), Solver$CellState$MINE_getInstance()];
  }
  Solver$CellState.values = Solver$CellState$values;
  function Solver$CellState$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Solver$CellState$NONE_getInstance();
      case 'EMPTY':
        return Solver$CellState$EMPTY_getInstance();
      case 'MINE':
        return Solver$CellState$MINE_getInstance();
      default:throwISE('No enum constant Solver.CellState.' + name);
    }
  }
  Solver$CellState.valueOf_61zpoe$ = Solver$CellState$valueOf;
  Solver.prototype.solve_f6xcb4$ = function (board, updateCell, continuation) {
    var boardVal = board.cells;
  };
  Solver.prototype.solveLine_n8dhtq$ = function (line, counts) {
    var mines = line.size - sum(counts) | 0;
    var availableMines = mines - coerceAtLeast(counts.size - 1 | 0, 0) | 0;
    var availablePositions = counts.size + 1 | 0;
    if (availableMines === 0) {
      var list = ArrayList_init(availablePositions);
      for (var index = 0; index < availablePositions; index++) {
        list.add_11rb$(0);
      }
      return this.makeLine_0(list, counts);
    } else if (availablePositions === 1) {
      var list_0 = ArrayList_init(availablePositions);
      for (var index_0 = 0; index_0 < availablePositions; index_0++) {
        list_0.add_11rb$(availableMines);
      }
      return this.makeLine_0(list_0, counts);
    }var possibleMinePositions = partition(availableMines, availablePositions);
    var destination = ArrayList_init(collectionSizeOrDefault(possibleMinePositions, 10));
    var tmp$;
    tmp$ = possibleMinePositions.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver = this.makeLine_0(item, counts);
      var cond = $receiver.size === line.size;
      var message = 'Possible line matches new line length';
      if (!cond)
        throw AssertionError_init(message);
      tmp$_0.call(destination, $receiver);
    }
    var destination_0 = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = destination.iterator();
    loop_label: while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var $receiver_0 = zip(element, line);
      var all$result;
      all$break: do {
        var tmp$_2;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          all$result = true;
          break all$break;
        }tmp$_2 = $receiver_0.iterator();
        while (tmp$_2.hasNext()) {
          var element_0 = tmp$_2.next();
          if (!(element_0.second === MineState$UNMARKED_getInstance() || (element_0.first === Solver$CellState$EMPTY_getInstance() && element_0.second !== MineState$MINE_getInstance() && element_0.second !== MineState$MARKED_getInstance()) || (element_0.first === Solver$CellState$MINE_getInstance() && (element_0.second === MineState$MINE_getInstance() || element_0.second === MineState$MARKED_getInstance())))) {
            all$result = false;
            break all$break;
          }}
        all$result = true;
      }
       while (false);
      if (all$result)
        destination_0.add_11rb$(element);
    }
    var iterator = destination_0.iterator();
    if (!iterator.hasNext())
      throw UnsupportedOperationException_init("Empty collection can't be reduced.");
    var accumulator = iterator.next();
    while (iterator.hasNext()) {
      var $receiver_1 = zip(accumulator, iterator.next());
      var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_3;
      tmp$_3 = $receiver_1.iterator();
      while (tmp$_3.hasNext()) {
        var item_0 = tmp$_3.next();
        var tmp$_4 = destination_1.add_11rb$;
        var transform$result;
        if (item_0.first === item_0.second) {
          transform$result = item_0.first;
        } else {
          transform$result = Solver$CellState$NONE_getInstance();
        }
        tmp$_4.call(destination_1, transform$result);
      }
      accumulator = destination_1;
    }
    return accumulator;
  };
  function Coroutine$Solver$makeLine$lambda(closure$mineCount_0, closure$emptyCount_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$mineCount = closure$mineCount_0;
    this.local$closure$emptyCount = closure$emptyCount_0;
    this.local$mineList = void 0;
    this.local$emptyList = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Solver$makeLine$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Solver$makeLine$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Solver$makeLine$lambda.prototype.constructor = Coroutine$Solver$makeLine$lambda;
  Coroutine$Solver$makeLine$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$mineList = this.local$closure$mineCount.iterator();
            this.local$emptyList = this.local$closure$emptyCount.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$mineList.hasNext() || !this.local$emptyList.hasNext()) {
              this.state_0 = 7;
              continue;
            }
            var size = this.local$mineList.next();
            var list = ArrayList_init(size);
            for (var index = 0; index < size; index++) {
              list.add_11rb$(Solver$CellState$MINE_getInstance());
            }

            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yieldAll_p1ys8y$(list, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var size_0 = this.local$emptyList.next();
            var list_0 = ArrayList_init(size_0);
            for (var index_0 = 0; index_0 < size_0; index_0++) {
              list_0.add_11rb$(Solver$CellState$EMPTY_getInstance());
            }

            this.state_0 = 4;
            this.result_0 = this.local$$receiver.yieldAll_p1ys8y$(list_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            if (this.local$emptyList.hasNext()) {
              this.state_0 = 5;
              this.result_0 = this.local$$receiver.yield_11rb$(Solver$CellState$MINE_getInstance(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 6;
              continue;
            }

          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 2;
            continue;
          case 7:
            var cond = !this.local$emptyList.hasNext();
            var message = 'Empty list is longer than mine list';
            if (!cond)
              throw AssertionError_init(message);
            var cond_0 = this.local$mineList.hasNext();
            var message_0 = 'Mine list is same length as empty list';
            if (!cond_0)
              throw AssertionError_init(message_0);
            var size_1 = this.local$mineList.next();
            var list_1 = ArrayList_init(size_1);
            for (var index_1 = 0; index_1 < size_1; index_1++) {
              list_1.add_11rb$(Solver$CellState$MINE_getInstance());
            }

            this.state_0 = 8;
            this.result_0 = this.local$$receiver.yieldAll_p1ys8y$(list_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            var cond_1 = !this.local$mineList.hasNext();
            var message_1 = 'Mine list should be one value longer than empty list';
            if (!cond_1)
              throw AssertionError_init(message_1);
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Solver$makeLine$lambda(closure$mineCount_0, closure$emptyCount_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Solver$makeLine$lambda(closure$mineCount_0, closure$emptyCount_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Solver.prototype.makeLine_0 = function (mineCount, emptyCount) {
    return toList(sequence(Solver$makeLine$lambda(mineCount, emptyCount)));
  };
  Solver.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Solver',
    interfaces: []
  };
  var Solver_instance = null;
  function Solver_getInstance() {
    if (Solver_instance === null) {
      new Solver();
    }return Solver_instance;
  }
  var map = defineInlineFunction('NumberGame.map_a5qy59$', wrapFunction(function () {
    var Array2 = _.$$importsForInline$$['kds-root-kds'].com.soywiz.kds.Array2;
    var throwCCE = Kotlin.throwCCE;
    var Array_0 = Array;
    return function ($receiver, transform) {
      var width = $receiver.width;
      var height = $receiver.height;
      var tmp$;
      var array = Array_0(Kotlin.imul(width, height));
      var tmp$_0;
      tmp$_0 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_0; i++) {
        array[i] = transform($receiver.get_vux9f0$(i % $receiver.width, i / $receiver.width | 0));
      }
      return new Array2(width, height, Kotlin.isArray(tmp$ = array) ? tmp$ : throwCCE());
    };
  }));
  var assert = defineInlineFunction('NumberGame.assert_qlx5jl$', wrapFunction(function () {
    var AssertionError_init = Kotlin.kotlin.AssertionError_init_s8jyv4$;
    return function (cond, message) {
      if (message === void 0)
        message = null;
      if (!cond)
        throw AssertionError_init(message);
    };
  }));
  function row($receiver, row) {
    return slice(toList_0($receiver), until(Kotlin.imul(row, $receiver.width), Kotlin.imul(row, $receiver.width + 1 | 0)));
  }
  function col($receiver, col) {
    var tmp$ = toList_0($receiver);
    var $receiver_0 = until(0, $receiver.height);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(Kotlin.imul(item, $receiver.width) + col | 0);
    }
    return slice_0(tmp$, destination);
  }
  function factorial($receiver, min) {
    if (min === void 0)
      min = 1;
    var tmp$;
    var accumulator = 1;
    tmp$ = (new IntRange(min, $receiver)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = Kotlin.imul(accumulator, element);
    }
    return accumulator;
  }
  function choose($receiver, num) {
    var high = num <= ($receiver / 2 | 0) ? $receiver - num | 0 : num;
    var low = $receiver - high | 0;
    return factorial($receiver, high + 1 | 0) / factorial(low) | 0;
  }
  function enumerateCombinations$enumerate(range, k) {
    var tmp$, tmp$_0;
    if (k === 0)
      return listOf(emptyList());
    if (k === 1) {
      var $receiver = toList_0(range);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(listOf(item));
      }
      return destination;
    }var out = ArrayList_init_0();
    tmp$ = range.first;
    tmp$_0 = range.last - (k - 1) | 0;
    for (var i = tmp$; i <= tmp$_0; i++) {
      var $receiver_0 = enumerateCombinations$enumerate(new IntRange(i + 1 | 0, range.last), k - 1 | 0);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var item_0 = tmp$_2.next();
        var tmp$_3 = destination_0.add_11rb$;
        var $receiver_1 = toMutableList(item_0);
        $receiver_1.add_wxm5ur$(0, i);
        tmp$_3.call(destination_0, $receiver_1);
      }
      var next = destination_0;
      out.addAll_brywnq$(next);
    }
    return out;
  }
  function enumerateCombinations(n, k) {
    var enumerate = enumerateCombinations$enumerate;
    return enumerate(until(0, n), k);
  }
  function partition(n, k) {
    var dividers = k - 1 | 0;
    var total = n + dividers | 0;
    var $receiver = enumerateCombinations(total, dividers);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var out = ArrayList_init_0();
      for (var i = 0; i < k; i++) {
        var index = i - 1 | 0;
        var count = (i >= 0 && i <= get_lastIndex(item) ? item.get_za3lpa$(i) : total) - (index >= 0 && index <= get_lastIndex(item) ? item.get_za3lpa$(index) : -1) - 1 | 0;
        out.add_11rb$(count);
      }
      tmp$_0.call(destination, out);
    }
    return destination;
  }
  Object.defineProperty(MineState, 'UNMARKED', {
    get: MineState$UNMARKED_getInstance
  });
  Object.defineProperty(MineState, 'EMPTY', {
    get: MineState$EMPTY_getInstance
  });
  Object.defineProperty(MineState, 'MARKED', {
    get: MineState$MARKED_getInstance
  });
  Object.defineProperty(MineState, 'MINE', {
    get: MineState$MINE_getInstance
  });
  _.MineState = MineState;
  Board.CountPosition = Board$CountPosition;
  Board.EmptyCount = Board$EmptyCount;
  $$importsForInline$$['korma-root-korma'] = $module$korma_root_korma;
  Board.Cell = Board$Cell;
  $$importsForInline$$['kds-root-kds'] = $module$kds_root_kds;
  _.Board = Board;
  _.get_view_j23osb$ = get_view;
  _.set_view_299t0$ = set_view;
  _.get_drag_wzskkp$ = get_drag;
  _.set_drag_lcw384$ = set_drag;
  Object.defineProperty(Action, 'NONE', {
    get: Action$NONE_getInstance
  });
  Object.defineProperty(Action, 'UNMARK', {
    get: Action$UNMARK_getInstance
  });
  Object.defineProperty(Action, 'MARK', {
    get: Action$MARK_getInstance
  });
  Object.defineProperty(Action, 'CHECK', {
    get: Action$CHECK_getInstance
  });
  _.Action = Action;
  Object.defineProperty(Direction, 'NONE', {
    get: Direction$NONE_getInstance
  });
  Object.defineProperty(Direction, 'ROW', {
    get: Direction$ROW_getInstance
  });
  Object.defineProperty(Direction, 'COL', {
    get: Direction$COL_getInstance
  });
  _.Direction = Direction;
  _.DragInfo = DragInfo;
  _.noAction_j23osb$ = noAction;
  _.update_j23osb$ = update;
  $$importsForInline$$['korge-root-korge'] = $module$korge_root_korge;
  _.init_oqxwnp$ = init;
  _.getAction_8akief$ = getAction;
  _.performAction_nf53fp$ = performAction;
  _.main = main;
  _.createBoard_jm6i93$ = createBoard;
  _.configuration_yrwhay$ = configuration;
  Object.defineProperty(Solver$CellState, 'NONE', {
    get: Solver$CellState$NONE_getInstance
  });
  Object.defineProperty(Solver$CellState, 'EMPTY', {
    get: Solver$CellState$EMPTY_getInstance
  });
  Object.defineProperty(Solver$CellState, 'MINE', {
    get: Solver$CellState$MINE_getInstance
  });
  Solver.prototype.CellState = Solver$CellState;
  $$importsForInline$$.NumberGame = _;
  Object.defineProperty(_, 'Solver', {
    get: Solver_getInstance
  });
  _.map_a5qy59$ = map;
  _.assert_qlx5jl$ = assert;
  _.row_wca0k6$ = row;
  _.col_wca0k6$ = col;
  _.factorial_dqglrj$ = factorial;
  _.choose_dqglrj$ = choose;
  _.enumerateCombinations_vux9f0$ = enumerateCombinations;
  _.partition_vux9f0$ = partition;
  view = new Extra$Property(void 0, view$lambda);
  drag = new Extra$Property(void 0, drag$lambda);
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('NumberGame', _);
  return _;
}));

//# sourceMappingURL=NumberGame.js.map
