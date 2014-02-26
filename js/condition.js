window.QueryBuilder = (function(exports, ko){

  function Condition(){
    var self = this;

    self.templateName = 'condition-template';

    self.fields = ko.observableArray(['Elnot', 'ProducerID', 'PRI', 'Freq', 'Lat', 'Lon', 'Time']);
    self.selectedField = ko.observable('Elnot');
    
    self.comparisons = ko.observableArray(['=', '<>', '<', '<=', '>', '>=']);
   
    self.selectedComparison = ko.observable('=');

    self.value = ko.observable(0);

    // the text() function is just an example to show output
    self.text = ko.computed(function(){
      return self.selectedField() + 
        ' ' +
        self.selectedComparison() + 
        ' ' + 
        self.value();
    });
  }

  exports.Condition = Condition;
  return exports;

})(window.QueryBuilder || {}, window.ko);
