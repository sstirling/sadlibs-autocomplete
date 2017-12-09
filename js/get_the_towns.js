var pymChild = null;

var pymChild = new pym.Child();

var results_json = [];

$(document).ready(function () {

$.getJSON( 'js/muni-co-working.json', function( data ) {
  results_json.push(data)
  pymChild.sendHeight();
});

// pymChild = new pym.Child();

$('#town').autoComplete({
    minChars: 1,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = Object.keys(results_json[0]);
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        pymChild.sendHeight();
        suggest(matches);
        pymChild.sendHeight();
    }

});

$("#input_click" ).click(function() {
  var town = $('#town').val();
  if (town == 'nothing' | town == 'burger'){
    console.log("this")
    $('.exception').html(
    $("<div class='weirdness'></div>")
    );
    create_house_split(results_json[0],town)
    // create_sen_split(results_json[0],town)
  } else {
    create_cards_house(results_json[0],town)
    // create_cards_senate(results_json[0],town)
    pymChild.sendHeight();
    console.log(pymChild);
  };
  $('.house').show();
  $('.senate').show();
});

function create_cards_house(data,town_val) {
  key = data[town_val][0]
  //  $('.district').html(
  //   $("<div class='img-pic'><img src='county-img/" +key.coimg+ "'></div>")
  // );
  $('.district').html(
    $("<div class='sadlib-block1'>"+key.Ledgerstyle+"</div>")
  );
  $('.house').html(
    $("<div class='sadlib-block1'>"+key.County+" County</div>" )
  );
 $('.house').append(
    $("<div class='sadlib-block'><p>If you die under suspicious or strange circumstances, the <span class='robotext'>" + key.office + " Medical Examiner's Office</span> will be tasked with investigating your case.<br><p>In <span class='robotext'>" + key.year + "</span>, the most recent data available, this office completed <span class='robotext'>" + key.u60per + "% </span>of its cases in under 60 days, which <span class='robotext'>" + key.accred + " </span>make it eligible for accreditation from the National Association of Medical Examiners.<br><img src='accred-img/" + key.chart +"' width='100%'></div>")
  );
  $('.house').append(
    $("<div class='sadlib-block'><p>In 2016, the <span class='robotext'>" + key.office + " </span>office tossed out <span class='robotext'>" + key.per_released + "%</span> of its cases without ever viewing the body, which is <span class='robotext'>" +key.release_state_ml+ " </span>than the state average of <span class='robotext'>" +key.nj_per_released + "% </span>.<br><p>This office completed <span class='robotext'>" + key.autopsy + "</span> autopsies, about <span class='robotext'>" + key.per_autopsy + "%</span> of the cases they handled. This is <span class='robotext'>" + key.auto_days_hl + " </span>than the state average of <span class='robotext'>" + key.nj_per_auto + "%</span>.<br><p>In <span class='robotext'>" + key.year + "</span> it took this office <span class='robotext'>" + key.days_overall + "</span> days to complete an average case, which is <span class='robotext'>" + key.days_hl + "</span> than the state average of <span class='robotext'>" + key.days_state + "</span>. <img src='chart-img/" + key.chart +"' width='100%'></div>")
  );


  pymChild.sendHeight();
};



});






