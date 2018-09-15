$(function () {
  var index_table = [
    {"row":0, "column":0, "section": 0, commands: ["C0", "R0", "S0"]}, {"row":0, "column":1, "section": 0, commands: ["C1", "R0", "S0"]}, {"row":0, "column":2, "section": 0, commands: ["C2", "R0", "S0"]}, {"row":0, "column":3, "section": 3, commands: ["C3", "R0", "S1"]}, {"row":0, "column":4, "section": 3, commands: ["C4", "R0", "S1"]}, {"row":0, "column":5, "section": 3, commands: ["C5", "R0", "S1"]}, {"row":0, "column":6, "section": 6, commands: ["C6", "R0", "S2"]}, {"row":0, "column":7, "section": 6, commands: ["C7", "R0", "S2"]}, {"row":0, "column":8, "section": 6, commands: ["C8", "R0", "S2"]},
    {"row":1, "column":0, "section": 0, commands: ["C0", "R1", "S0"]}, {"row":1, "column":1, "section": 0, commands: ["C1", "R1", "S0"]}, {"row":1, "column":2, "section": 0, commands: ["C2", "R1", "S0"]}, {"row":1, "column":3, "section": 3, commands: ["C3", "R1", "S1"]}, {"row":1, "column":4, "section": 3, commands: ["C4", "R1", "S1"]}, {"row":1, "column":5, "section": 3, commands: ["C5", "R1", "S1"]}, {"row":1, "column":6, "section": 6, commands: ["C6", "R1", "S2"]}, {"row":1, "column":7, "section": 6, commands: ["C7", "R1", "S2"]}, {"row":1, "column":8, "section": 6, commands: ["C8", "R1", "S2"]},
    {"row":2, "column":0, "section": 0, commands: ["C0", "R2", "S0"]}, {"row":2, "column":1, "section": 0, commands: ["C1", "R2", "S0"]}, {"row":2, "column":2, "section": 0, commands: ["C2", "R2", "S0"]}, {"row":2, "column":3, "section": 3, commands: ["C3", "R2", "S1"]}, {"row":2, "column":4, "section": 3, commands: ["C4", "R2", "S1"]}, {"row":2, "column":5, "section": 3, commands: ["C5", "R2", "S1"]}, {"row":2, "column":6, "section": 6, commands: ["C6", "R2", "S2"]}, {"row":2, "column":7, "section": 6, commands: ["C7", "R2", "S2"]}, {"row":2, "column":8, "section": 6, commands: ["C8", "R2", "S2"]},

    {"row":3, "column":0, "section": 27, commands: ["C0", "R3", "S3"]}, {"row":3, "column":1, "section": 27, commands: ["C1", "R3", "S3"]}, {"row":3, "column":2, "section": 27, commands: ["C2", "R3", "S3"]}, {"row":3, "column":3, "section": 30, commands: ["C3", "R3", "S4"]}, {"row":3, "column":4, "section": 30, commands: ["C4", "R3", "S4"]}, {"row":3, "column":5, "section": 30, commands: ["C5", "R3", "S4"]}, {"row":3, "column":6, "section": 33, commands: ["C6", "R3", "S5"]}, {"row":3, "column":7, "section": 33, commands: ["C7", "R3", "S5"]}, {"row":3, "column":8, "section": 33, commands: ["C8", "R3", "S5"]},
    {"row":4, "column":0, "section": 27, commands: ["C0", "R4", "S3"]}, {"row":4, "column":1, "section": 27, commands: ["C1", "R4", "S3"]}, {"row":4, "column":2, "section": 27, commands: ["C2", "R4", "S3"]}, {"row":4, "column":3, "section": 30, commands: ["C3", "R4", "S4"]}, {"row":4, "column":4, "section": 30, commands: ["C4", "R4", "S4"]}, {"row":4, "column":5, "section": 30, commands: ["C5", "R4", "S4"]}, {"row":4, "column":6, "section": 33, commands: ["C6", "R4", "S5"]}, {"row":4, "column":7, "section": 33, commands: ["C7", "R4", "S5"]}, {"row":4, "column":8, "section": 33, commands: ["C8", "R4", "S5"]},
    {"row":5, "column":0, "section": 27, commands: ["C0", "R5", "S3"]}, {"row":5, "column":1, "section": 27, commands: ["C1", "R5", "S3"]}, {"row":5, "column":2, "section": 27, commands: ["C2", "R5", "S3"]}, {"row":5, "column":3, "section": 30, commands: ["C3", "R5", "S4"]}, {"row":5, "column":4, "section": 30, commands: ["C4", "R5", "S4"]}, {"row":5, "column":5, "section": 30, commands: ["C5", "R5", "S4"]}, {"row":5, "column":6, "section": 33, commands: ["C6", "R5", "S5"]}, {"row":5, "column":7, "section": 33, commands: ["C7", "R5", "S5"]}, {"row":5, "column":8, "section": 33, commands: ["C8", "R5", "S5"]},

    {"row":6, "column":0, "section": 54, commands: ["C0", "R6", "S6"]}, {"row":6, "column":1, "section": 54, commands: ["C1", "R6", "S6"]}, {"row":6, "column":2, "section": 54, commands: ["C2", "R6", "S6"]}, {"row":6, "column":3, "section": 57, commands: ["C3", "R6", "S7"]}, {"row":6, "column":4, "section": 57, commands: ["C4", "R6", "S7"]}, {"row":6, "column":5, "section": 57, commands: ["C5", "R6", "S7"]}, {"row":6, "column":6, "section": 60, commands: ["C6", "R6", "S8"]}, {"row":6, "column":7, "section": 60, commands: ["C7", "R6", "S8"]}, {"row":6, "column":8, "section": 60, commands: ["C8", "R6", "S8"]},
    {"row":7, "column":0, "section": 54, commands: ["C0", "R7", "S6"]}, {"row":7, "column":1, "section": 54, commands: ["C1", "R7", "S6"]}, {"row":7, "column":2, "section": 54, commands: ["C2", "R7", "S6"]}, {"row":7, "column":3, "section": 57, commands: ["C3", "R7", "S7"]}, {"row":7, "column":4, "section": 57, commands: ["C4", "R7", "S7"]}, {"row":7, "column":5, "section": 57, commands: ["C5", "R7", "S7"]}, {"row":7, "column":6, "section": 60, commands: ["C6", "R7", "S8"]}, {"row":7, "column":7, "section": 60, commands: ["C7", "R7", "S8"]}, {"row":7, "column":8, "section": 60, commands: ["C8", "R7", "S8"]},
    {"row":8, "column":0, "section": 54, commands: ["C0", "R8", "S6"]}, {"row":8, "column":1, "section": 54, commands: ["C1", "R8", "S6"]}, {"row":8, "column":2, "section": 54, commands: ["C2", "R8", "S6"]}, {"row":8, "column":3, "section": 57, commands: ["C3", "R8", "S7"]}, {"row":8, "column":4, "section": 57, commands: ["C4", "R8", "S7"]}, {"row":8, "column":5, "section": 57, commands: ["C5", "R8", "S7"]}, {"row":8, "column":6, "section": 60, commands: ["C6", "R8", "S8"]}, {"row":8, "column":7, "section": 60, commands: ["C7", "R8", "S8"]}, {"row":8, "column":8, "section": 60, commands: ["C8", "R8", "S8"]}
  ];
  var command_parameters = {
    "C0":{type:"C", "indices": [ 0,  9, 18, 27, 36, 45, 54, 63, 72]},
    "C1":{type:"C", "indices": [ 1, 10, 19, 28, 37, 46, 55, 64, 73]},
    "C2":{type:"C", "indices": [ 2, 11, 20, 29, 38, 47, 56, 65, 74]},
    "C3":{type:"C", "indices": [ 3, 12, 21, 30, 39, 48, 57, 66, 75]},
    "C4":{type:"C", "indices": [ 4, 13, 22, 31, 40, 49, 58, 67, 76]},
    "C5":{type:"C", "indices": [ 5, 14, 23, 32, 41, 50, 59, 68, 77]},
    "C6":{type:"C", "indices": [ 6, 15, 24, 33, 42, 51, 60, 69, 78]},
    "C7":{type:"C", "indices": [ 7, 16, 25, 34, 43, 52, 61, 70, 79]},
    "C8":{type:"C", "indices": [ 8, 17, 26, 35, 44, 53, 62, 71, 80]},
    "R0":{type:"R", "indices": [ 0,  1,  2,  3,  4,  5,  6,  7,  8]},
    "R1":{type:"R", "indices": [ 9, 10, 11, 12, 13, 14, 15, 16, 17]},
    "R2":{type:"R", "indices": [18, 19, 20, 21, 22, 23, 24, 25, 26]},
    "R3":{type:"R", "indices": [27, 28, 29, 30, 31, 32, 33, 34, 35]},
    "R4":{type:"R", "indices": [36, 37, 38, 39, 40, 41, 42, 43, 44]},
    "R5":{type:"R", "indices": [45, 46, 47, 48, 49, 50, 51, 52, 53]},
    "R6":{type:"R", "indices": [54, 55, 56, 57, 58, 59, 60, 61, 62]},
    "R7":{type:"R", "indices": [63, 64, 65, 66, 67, 68, 69, 70, 71]},
    "R8":{type:"R", "indices": [72, 73, 74, 75, 76, 77, 78, 79, 80]},
    "S0":{type:"S", "indices": [ 0,  1,  2,  9, 10, 11, 18, 19, 20]},
    "S1":{type:"S", "indices": [ 3,  4,  5, 12, 13, 14, 21, 22, 23]},
    "S2":{type:"S", "indices": [ 6,  7,  8, 15, 16, 17, 24, 25, 26]},
    "S3":{type:"S", "indices": [27, 28, 29, 36, 37, 38, 45, 46, 47]},
    "S4":{type:"S", "indices": [30, 31, 32, 39, 40, 41, 48, 49, 50]},
    "S5":{type:"S", "indices": [33, 34, 35, 42, 43, 44, 51, 52, 53]},
    "S6":{type:"S", "indices": [54, 55, 56, 63, 64, 65, 72, 73, 74]},
    "S7":{type:"S", "indices": [57, 58, 59, 66, 67, 68, 75, 76, 77]},
    "S8":{type:"S", "indices": [60, 61, 62, 69, 70, 71, 78, 79, 80]},
  };
  var parse_question = function(){
    var question_array = new Array();
    for (var index = 0; index < 81 ; ++index) {
      var cellname = "#cell" + index;
      var celtext = $(cellname).val();
      var found_index = "0123456789０１２３４５６７８９".indexOf(celtext);
      question_array[index] = found_index > 0 ? [found_index % 10] : [1, 2, 3, 4, 5, 6, 7, 8, 9];
    };
    return (question_array);
  };
  var refine_cell_group = function(question, indices) {
    var converged_cell_indices = [];
    indices.forEach(function(index) {
      var candidates = question[index];
      if (candidates.length === 1)
        converged_cell_indices.push({"index":index, "value":candidates[0]});
    });
    var err = false;
    var question_cache = {indices: []};
    indices.forEach(function(index) {
      var candidates = question_cache.indices.indexOf(index) >= 0 ? question_cache[index].new_value : question[index];
      converged_cell_indices.forEach(function(element) {
        if (index !== element.index) {
          var found_value_index = candidates.indexOf(element.value);
          if (found_value_index >= 0) {
            candidates.splice(found_value_index, 1);
            question_cache[index] = {"index":index, "new_value": candidates};
            if (question_cache.indices.indexOf(index) < 0)
              question_cache.indices.push(index);
            if (!err && candidates.length == 0)
              err = true;
            //console.log("3: index=", index, ", target=", element.value, ", candidates=", candidates);
          }
        }
      });
    });
    if (err)
      return (null);

    // ここから

    // 当該グループ内において、未使用のある値について、その値をとりうるマスがただ１つである場合、そのマスの値がその値であると判断する

    var value_counts = [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    indices.forEach(function(index) {
      var candidates = question_cache.indices.indexOf(index) >= 0 ? question_cache[index].new_value : question[index];
      candidates.forEach(function(value) {
        value_counts[value] += 1;
      });
    });
    value_counts.forEach(function (count, value) {
      if (count === 1) {
        indices.some(function(index) {
          var candidates = question_cache.indices.indexOf(index) >= 0 ? question_cache[index].new_value : question[index];
          if (candidates.length >= 2 && candidates.indexOf(value) >= 0) {
            candidates = [value];
            question_cache[index] = {"index":index, "new_value": candidates};
            if (question_cache.indices.indexOf(index) < 0)
              question_cache.indices.push(index);
          }
        });
      }
    });
    return (question_cache);
  };
  var resolve_question = function(question) {
    var commands = [
      "C0", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8",
      "R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8",
      "S0", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"
    ];
    var work = [];
    question.forEach(function(value, index) {
      work[index] = value.slice(0, value.length);
    });
    while (commands.length > 0) {
      var command = commands.pop();
      var command_type = command_parameters[command].type;
      var command_parameter = command_parameters[command].indices;
      var changed_cells = {};
      switch (command_type) {
      case "C":
      case "R":
      case "S":
        changed_cells = refine_cell_group(work, command_parameter);
        if (changed_cells === null)
          return (null);
        changed_cells.indices.forEach(function(changed_cell_index) {
          changed_cell_info = changed_cells[changed_cell_index];
          work[changed_cell_info.index] = changed_cell_info.new_value;
          var cell_info = index_table[changed_cell_info.index];
          cell_info.commands.forEach(function(new_command) {
            if (commands.indexOf(new_command) < 0)
              commands.push(new_command);
          });
        });
        break;
      default:
        return (null);
      }
    }
    return (work);
  };
  var print_answer = function(answer) {
    var answer_html = "";
    if (answer === null) {
      answer_html = "<span class='error-style'>問題を解くことができませんでした。</span>";
    } else {
      var html_text = "<table cellspacing=\"0\">";
      for (var row = 0; row < 9 ; ++row) {
        html_text += "<tr>";
        var row_text = row % 3 === 0 ? "top" : row === 8 ? "bottom" : "center";
        for (var column = 0 ; column < 9 ; ++column) {
          var column_text = column % 3 === 0 ? "left" : column === 8 ? "right" : "center";
          var style_text = "cell-" + column_text + "-" + row_text + "-style";
          var index = row * 9 + column;
          var value = answer[index];
          var value_text = "";
          if (value.length === 0)
            value_text = "<span class=\"error-style\">×</span>";
          else if (value.length === 1)
            value_text = "０１２３４５６７８９"[value[0]];
          else {
            //value_text = "？<br/>[" + value.join("/") + "]";
            value_text = "<span class=\"warning-style\">？<br/>" + "<span class=\"small-hint-style\">" + value.join("") + "</span></span>";
          }
          html_text += "<td class=\"" + style_text + "\">" + value_text +  "</td>";
        }
        html_text += "</tr>";
      }
      html_text += "</table>";
      answer_html = html_text;
    }
    $("#answer_text").html(answer_html);
  };
  var self_check = function () {
    $("#answer_text").html("");
    $("input[type='text'].cell-input-style").val("");
/*
    $("#cell1").val("1");
    $("#cell2").val("4");
    $("#cell3").val("6");
    $("#cell5").val("8");
    $("#cell6").val("2");
    $("#cell7").val("7");
    $("#cell9").val("7");
    $("#cell11").val("2");
    $("#cell12").val("4");
    $("#cell14").val("9");
    $("#cell15").val("1");
    $("#cell17").val("8");
    $("#cell18").val("6");
    $("#cell19").val("8");
    $("#cell21").val("2");
    $("#cell23").val("1");
    $("#cell25").val("3");
    $("#cell26").val("5");
    $("#cell27").val("9");
    $("#cell28").val("5");
    $("#cell29").val("3");
    $("#cell33").val("7");
    $("#cell34").val("4");
    $("#cell35").val("2");
    $("#cell45").val("1");
    $("#cell46").val("2");
    $("#cell47").val("8");
    $("#cell51").val("6");
    $("#cell52").val("5");
    $("#cell53").val("3");
    $("#cell54").val("8");
    $("#cell55").val("7");
    $("#cell57").val("9");
    $("#cell59").val("2");
    $("#cell61").val("1");
    $("#cell62").val("6");
    $("#cell63").val("2");
    $("#cell65").val("1");
    $("#cell66").val("5");
    $("#cell68").val("3");
    $("#cell69").val("9");
    $("#cell71").val("7");
    $("#cell73").val("9");
    $("#cell74").val("6");
    $("#cell75").val("1");
    $("#cell77").val("7");
    $("#cell78").val("5");
    $("#cell79").val("2");
*/

    $("#cell0").val("２");
    $("#cell4").val("３");
    $("#cell6").val("９");
    $("#cell10").val("5");
    $("#cell14").val("1");
    $("#cell20").val("4");
    $("#cell22").val("9");
    $("#cell26").val("2");
    $("#cell30").val("5");
    $("#cell32").val("4");
    $("#cell34").val("6");
    $("#cell36").val("8");
    $("#cell38").val("1");
    $("#cell42").val("２");
    $("#cell44").val("4");
    $("#cell46").val("9");
    $("#cell48").val("8");
    $("#cell50").val("２");
    $("#cell54").val("5");
    $("#cell58").val("２");
    $("#cell60").val("4");
    $("#cell66").val("6");
    $("#cell70").val("２");
    $("#cell74").val("9");
    $("#cell76").val("4");
    $("#cell80").val("1");

    if (index_table.length !== 81)
      $("#answer_text").html("<span class=\"error-style\">内部エラー1</span>");
    for (var r = 0; r < 9 ; ++r) {
      for (var c = 0; c < 9 ; ++c) {
        var i = r * 9 + c;
        var t = index_table[i];
        //console.log(i, ", ", t);
        if (t.row !== r) 
          $("#answer_text").html("<span class=\"error-style\">内部エラー2</span>");
        if (t.column !== c) 
          $("#answer_text").html("<span class=\"error-style\">内部エラー3</span>");
        var s_r = Math.floor(r / 3);
        var s_c = Math.floor(c / 3);
        var s = s_r * 27 + s_c * 3;
        if (t.section !== s) 
          $("#answer_text").html("<span class=\"error-style\">内部エラー4</span>");
        if (t.commands.indexOf("C" + c) < 0)
          $("#answer_text").html("<span class=\"error-style\">内部エラー5</span>");
        if (t.commands.indexOf("R" + r) < 0)
          $("#answer_text").html("<span class=\"error-style\">内部エラー6</span>");
        if (t.commands.indexOf("S" + (s_r * 3 + s_c)) < 0)
          $("#answer_text").html("<span class=\"error-style\">内部エラー7</span>");
        t.commands.forEach(function(command) {
          var parameter = command_parameters[command];
          if (command[0] !== parameter.type)
            $("#answer_text").html("<span class=\"error-style\">内部エラー8</span>");
          if (parameter.indices.indexOf(i) < 0)
            $("#answer_text").html("<span class=\"error-style\">内部エラー9</span>");
        });
      }
    }
  };
  $("#resolve_button").on("click", function (){
    var work = parse_question();
    work = resolve_question(work);
    print_answer(work);
  });
  // デバッグ用コード
  self_check();
})