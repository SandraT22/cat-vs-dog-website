$(document).ready(function() {
  $("button#question").click(function() {
    $("ul#user").append("<p>Want to play a game?<p>");
    $("ul#webpage").append("<p>Let's play Cat vs Dog!<p>");
  });

  $("button#question1").click(function() {
    $("ul#user1").after("<li>Cat?</li>");
    $("ul#webpage1").after("<li>Dog?</li>");
  });

  $("button#question2").click(function() {
    $("ul#user2").after("<li>Human-sized cat?</li>");
    $("ul#webpage2").after("<li>Ant-sized dog?</li>");
  });
});
