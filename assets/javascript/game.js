$(document).ready(function() {
  gameOver = false;
  var obiWan = {
    name: 'Obi-Wan Kenobi',
    hp: 120,
    hpSelector: '.obi-wan-hp',
    defenderSelector: '.defender-obi-wan',
    baseAttackPower: 12,
    attackPower: 20,
    counterAttackPower: 20
  };

  var luke = {
    name: 'Luke Skywalker',
    hp: 100,
    hpSelector: '.luke-hp',
    defenderSelector: '.defender-luke',
    baseAttackPower: 6,
    attackPower: 6,
    counterAttackPower: 15
  };

  var darthS = {
    name: 'Darth Sidious',
    hp: 150,
    hpSelector: '.darth-sidious-hp',
    defenderSelector: '.defender-darth_sidious',
    baseAttackPower: 6,
    attackPower: 6,
    counterAttackPower: 20
  };

  var darthM = {
    name: 'Darth Maul',
    hp: 180,
    hpSelector: '.darth-maul-hp',
    defenderSelector: '.defender-darth_maul',
    baseAttackPower: 6,
    attackPower: 6,
    counterAttackPower: 20
  };

  var yourCharacter = [];
  var enemyCharacter = [];
  var defenderCharacter = [];

  function remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  $('.obi-wan').on('click', function() {
    yourCharacter.push(obiWan);
    enemyCharacter.push(luke);
    enemyCharacter.push(darthS);
    enemyCharacter.push(darthM);

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
    yourCharacter.push(luke);
    enemyCharacter.push(obiWan);
    enemyCharacter.push(darthS);
    enemyCharacter.push(darthM);

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
    yourCharacter.push(darthS);
    enemyCharacter.push(obiWan);
    enemyCharacter.push(luke);
    enemyCharacter.push(darthM);

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
    yourCharacter.push(darthM);
    enemyCharacter.push(obiWan);
    enemyCharacter.push(luke);
    enemyCharacter.push(darthS);

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

      remove(enemyCharacter, obiWan);
      defenderCharacter.push(obiWan);
      $('.result').text('');
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

      remove(enemyCharacter, luke);
      defenderCharacter.push(luke);
      $('.result').text('');
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

      remove(enemyCharacter, darthS);
      defenderCharacter.push(darthS);
      $('.result').text('');
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

      remove(enemyCharacter, darthM);
      defenderCharacter.push(darthM);
      $('.result').text('');
      $('.defender-darth_maul').css('background-color', 'black');
      $('.defender-darth_maul').show();
    }
  });

  $('.btn-primary').on('click', function() {
    if (!gameOver) {
      if (defenderCharacter.length === 0) {
        $('.result').text('No enemy here.');
      } else {
        var toDamage = yourCharacter[0].attackPower;

        yourCharacter[0].attackPower =
          yourCharacter[0].attackPower + yourCharacter[0].baseAttackPower;

        var defenderName = defenderCharacter[0].name;
        var backDamage = defenderCharacter[0].counterAttackPower;

        yourCharacter[0].hp = yourCharacter[0].hp - backDamage;
        defenderCharacter[0].hp = defenderCharacter[0].hp - toDamage;

        $(yourCharacter[0].hpSelector).text(yourCharacter[0].hp);
        $(defenderCharacter[0].hpSelector).text(defenderCharacter[0].hp);
      }

      if (yourCharacter[0].hp <= 0) {
        $('.result').text('You have been defeated...GAME OVER!!!');
        gameOver = true;
        $('.btn-secondary').show();
      } else if (defenderCharacter[0].hp <= 0) {
        $('.result').text(
          'You have defeated ' +
            defenderName +
            ', you can choose to fight another enemy.'
        );
        $(defenderCharacter[0].defenderSelector).hide();
        defenderCharacter.pop();
      } else {
        $('.result').html(
          'You attacked ' +
            defenderName +
            ' for ' +
            toDamage +
            ' damage.<br>' +
            defenderName +
            ' attacked back for ' +
            backDamage +
            ' damage.'
        );
      }
    }
  });

  $('.btn-secondary').on('click', function() {
    location.reload();
  });
});
