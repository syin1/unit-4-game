$(document).ready(function() {
  $('.obi-wan').on('click', function() {
    // hide all first-row selections
    $('.obi-wan').hide();
    $('.luke').hide();
    $('.darth_sidious').hide();
    $('.darth_maul').hide();

    // only display your chosen character
    $('.your-obi-wan').show();

    // put the rest as enemies
    $('.enemy-luke').css('background-color', 'red');
    $('.enemy-luke').css('border', '1px solid black');
    $('.enemy-luke').show();

    $('.enemy-darth_sidious').css('background-color', 'red');
    $('.enemy-darth_sidious').css('border', '1px solid black');
    $('.enemy-darth_sidious').show();

    $('.enemy-darth_maul').css('background-color', 'red');
    $('.enemy-darth_maul').css('border', '1px solid black');
    $('.enemy-darth_maul').show();
  });

  $('.luke').on('click', function() {
    // hide all first-row selections
    $('.obi-wan').hide();
    $('.luke').hide();
    $('.darth_sidious').hide();
    $('.darth_maul').hide();

    // only display your chosen character
    $('.your-luke').show();

    // put the rest as enemies
    $('.enemy-obi-wan').css('background-color', 'red');
    $('.enemy-obi-wan').css('border', '1px solid black');
    $('.enemy-obi-wan').show();

    $('.enemy-darth_sidious').css('background-color', 'red');
    $('.enemy-darth_sidious').css('border', '1px solid black');
    $('.enemy-darth_sidious').show();

    $('.enemy-darth_maul').css('background-color', 'red');
    $('.enemy-darth_maul').css('border', '1px solid black');
    $('.enemy-darth_maul').show();
  });

  $('.darth_sidious').on('click', function() {
    // hide all first-row selections
    $('.obi-wan').hide();
    $('.luke').hide();
    $('.darth_sidious').hide();
    $('.darth_maul').hide();

    // only display your chosen character
    $('.darth_sidious').show();

    // put the rest as enemies
    $('.enemy-obi-wan').css('background-color', 'red');
    $('.enemy-obi-wan').css('border', '1px solid black');
    $('.enemy-obi-wan').show();

    $('.enemy-luke').css('background-color', 'red');
    $('.enemy-luke').css('border', '1px solid black');
    $('.enemy-luke').show();

    $('.enemy-darth_maul').css('background-color', 'red');
    $('.enemy-darth_maul').css('border', '1px solid black');
    $('.enemy-darth_maul').show();
  });

  $('.darth_maul').on('click', function() {
    // hide all first-row selections
    $('.obi-wan').hide();
    $('.luke').hide();
    $('.darth_sidious').hide();
    $('.darth_maul').hide();

    // only display your chosen character
    $('.darth_maul').show();

    // put the rest as enemies
    $('.enemy-obi-wan').css('background-color', 'red');
    $('.enemy-obi-wan').css('border', '1px solid black');
    $('.enemy-obi-wan').show();

    $('.enemy-luke').css('background-color', 'red');
    $('.enemy-luke').css('border', '1px solid black');
    $('.enemy-luke').show();

    $('.enemy-darth_sidious').css('background-color', 'red');
    $('.enemy-darth_sidious').css('border', '1px solid black');
    $('.enemy-darth_sidious').show();
  });

  $('.enemy-obi-wan').on('click', function() {
    if (
      $('.defender-luke').is(':hidden') &&
      $('.defender-darth_sidious').is(':hidden') &&
      $('.defender-darth_maul').is(':hidden')
    ) {
      $('.enemy-obi-wan').hide();

      $('.defender-obi-wan').css('background-color', 'black');
      $('.defender-obi-wan').show();
    }
  });

  $('.enemy-luke').on('click', function() {
    if (
      $('.defender-obi-wan').is(':hidden') &&
      $('.defender-darth_sidious').is(':hidden') &&
      $('.defender-darth_maul').is(':hidden')
    ) {
      $('.enemy-luke').hide();

      $('.defender-luke').css('background-color', 'black');
      $('.defender-luke').show();
    }
  });

  $('.enemy-darth_sidious').on('click', function() {
    if (
      $('.defender-obi-wan').is(':hidden') &&
      $('.defender-luke').is(':hidden') &&
      $('.defender-darth_maul').is(':hidden')
    ) {
      $('.enemy-darth_sidious').hide();

      $('.defender-darth_sidious').css('background-color', 'black');
      $('.defender-darth_sidious').show();
    }
  });

  $('.enemy-darth_maul').on('click', function() {
    if (
      $('.defender-obi-wan').is(':hidden') &&
      $('.defender-luke').is(':hidden') &&
      $('.defender-darth_sidious').is(':hidden')
    ) {
      $('.enemy-darth_maul').hide();

      $('.defender-darth_maul').css('background-color', 'black');
      $('.defender-darth_maul').show();
    }
  });
});
