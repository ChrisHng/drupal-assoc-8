(function ($, Drupal) {
  Drupal.behaviors.da_calendar_load_calendar_entries = {
    attach: function (context, settings) {
      $('#calendar').fullCalendar({
        eventSources: [

        ]
      });
    }
  }
})(jQuery, Drupal);
