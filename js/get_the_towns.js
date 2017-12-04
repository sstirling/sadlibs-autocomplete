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
    $("<div class='legislators1'>"+key.Ledgerstyle+"</div>")
  );
  $('.house').html(
    $("<div class='legislators1'>"+key.County+" County</div>" )
  );
 $('.house').append(
    $("<div class='legislators'><p>If you die under suspicious or strange circumstances, the <span class='robotext'>" + key.office + " Medical Examiner's Office</span> will be tasked with investigating your case.<br><br><p>This office completes <span class='robotext'>" + key.u60per + "% </span>of its cases in under 60 days, which <span class='robotext'>" + key.accred + " </span>make it eligible for accreditation from the National Association of Medical Examiners.</div>")
  );
  $('.house').append(
    $("<div class='legislators'><p>In 2016, the <span class='robotext'>" + key.office + " </span>office tossed out <span class='robotext'>" + key.per_released + "%</span> of its cases without ever viewing the body, which is <span class='robotext'>" +key.release_state+ " </span>than the state average of <span class='robotext'>" +key.nj_per_released + "% </span>.<br><br><p>This office completed <span class='robotext'>" + key.autopsy + "</span> autopsies, about <span class='robotext'>" + key.per_autopsy + "%</span> of the cases they handled. This is <span class='robotext'>" + key.auto_days_hl + " </span>than the state average of <span class='robotext'>" + key.nj_per_auto + "%</span>. <img src='chart-img/" + key.chart +"' width='100%'></div>")
  );

  // $('.house').append(
  //   $("<div class='legislators'><div class='name'>" + key.Assembly_2 + "</div><div class='contact-info'><table class='geo-table'><tr><td>Phone:</td><td><a href='tel:1-"+ key.Assembly_phone_1 + "'>" + key.Assembly_phone_2 + "</a></td></tr><tr><td> Email:</td><td><a href='mailto:" + key.Assembly_email_2 + "'>" + key.Assembly_email_2+"</a></td></tr><tr><td>Address:</td><td>"+ key.Assembly_office_2 +"</table></div></div>")
  // );
  pymChild.sendHeight();
};

// function create_cards_senate(data,town_val) {
//   key = data[town_val][0]
//   $('.senate').html(
//     $("<div class='chamber'>SENATE</div>")
//   );
//  $('.senate').append(
//       $("<div class='legislators'><div class='name'>" + key.Senate + "</div><div class='contact-info'><table class='geo-table'><tr><td>Phone:</td><td><a href='tel:1-"+ key.Senate_phone + "'>" + key.Senate_phone + "</a></td></tr><tr><td> Email:</td><td><a href='mailto:" + key.Senate_email + "'>" + key.Senate_email+"</a></td></tr><tr><td>Address:</td><td>"+ key.Senate_main_office +"</table></div></div>")
//   );
//   // $('#close-geo').show();
//   pymChild.sendHeight();
// };

function create_house_split(data,town_val) {
  key=data[town_val];
  console.log(key)
    $('.house').html(
      $("<div></div>")
    );
      $('.district').html(
      $("<div></div>")
    );
    //  $('.senate').html(
    //   $("<div></div>")
    // );
  $.each(key,function(i,item){

    $('.house').append(
    $("<div class='district title'>DISTRICT "+key[i].County+"</div><div class='chamber'>ASSEMBLY</div>")
  );
   $('.house').append(
      $("<div class='legislators'><div class='name'>" + key[i].Autopsy + "</div><div class='contact-info'><table class='geo-table'><tr><td>Phone:</td><td><a href='tel:1-"+ key[i].Assembly_phone_1 + "'>" + key[i].Assembly_phone_1 + "</a></td></tr><tr><td> Email:</td><td><a href='mailto:" + key[i].Assembly_email_1 + "'>" + key[i].Assembly_email_1+"</a></td></tr><tr><td>Address:</td><td>"+ key[i].Assembly_office_1 +"</table></div></div>")
    );
    $('.house').append(
      $("<div class='legislators'><div class='name'>" + key[i].Assembly_2 + "</div><div class='contact-info'><table class='geo-table'><tr><td>Phone:</td><td><a href='tel:1-"+ key[i].Assembly_phone_1 + "'>" + key[i].Assembly_phone_2 + "</a></td></tr><tr><td> Email:</td><td><a href='mailto:" + key[i].Assembly_email_2 + "'>" + key[i].Assembly_email_2+"</a></td></tr><tr><td>Address:</td><td>"+ key[i].Assembly_office_2 +"</table></div></div>")
    );
    $('.house').append(
    $("<div class='chamber'>SENATE</div>")
    );
    $('.house').append(
      $("<div class='legislators'><div class='name'>" + key[i].Senate + "</div><div class='contact-info'><table class='geo-table'><tr><td>Phone:</td><td><a href='tel:1-"+ key[i].Senate_phone + "'>" + key[i].Senate_phone + "</a></td></tr><tr><td> Email:</td><td><a href='mailto:" + key[i].Senate_email + "'>" + key[i].Senate_email+"</a></td></tr><tr><td>Address:</td><td>"+ key[i].Senate_main_office +"</table></div></div>")
      );
  });
  pymChild.sendHeight();
};


// function create_sen_split(data,town_val) {
//   key=data[town_val];
//     // $('.senate').html(
//     //   $("<div></div>")
//     // );
//   $.each(key,function(i,item){

//     $('.house').append(
//     $("<div class='district title'>"+key[i].County+"</div><div class='chamber'>SENATE</div>")
//   );
//    $('.house').append(
//       $("<div class='legislators'><div class='name'>" + key[i].Senate + " ("+ key[i].Senate_party+")</div><div class='contact-info'><table class='geo-table'><tr><td>Phone:</td><td><a href='tel:1-"+ key[i].Senate_phone + "'>" + key[i].Senate_phone + "</a></td></tr><tr><td> Email:</td><td><a href='mailto:" + key[i].Senate_email + "'>" + key[i].Senate_email+"</a></td></tr><tr><td>Address:</td><td>"+ key[i].Senate_main_office +"</table></div></div>")
//       );
//   });
//   pymChild.sendHeight();
// };




  // $('#close-geo').click(function(){
  //   console.log("this")
  //   $('.house').slideToggle(function(){pymChild.sendHeight();});
  //   $('.senate').slideToggle(function(){pymChild.sendHeight();});
  // });


});






