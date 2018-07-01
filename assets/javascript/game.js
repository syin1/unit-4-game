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
    $('.enemy-luke').show();
    $('.enemy-darth_sidious').show();
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
    $('.enemy-obi-wan').show();
    $('.enemy-darth_sidious').show();
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
    $('.enemy-obi-wan').show();
    $('.enemy-luke').show();
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
    $('.enemy-obi-wan').show();
    $('.enemy-luke').show();
    $('.enemy-darth_sidious').show();
  });

  $('.enemy-obi-wan').on('click', function() {
    if (
      $('.defender-luke').is(':hidden') &&
      $('.defender-darth_sidious').is(':hidden') &&
      $('.defender-darth_maul').is(':hidden')
    ) {
      $('.enemy-obi-wan').hide();
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
      $('.defender-darth_maul').show();
    }
  });
});
