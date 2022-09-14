
$(document).ready(function() {
     // Stuff to do as soon as the DOM is ready

     // Keyboard bindings
     enterDraft = function (e) {
         // enable functions upon entering text box
         // shortcuts to split, delete split, add short option, and exit short option
         // usual bold/italics shortcuts
         // copy/paste? how does one do that?
     };

     var splitDraft2 = function (e) {
         console.log('trying to split');
         var focused = $(':focus');

         for (i=0; i<3; i++) {
             var newPane = $('<div></div>');
             newPane.addClass('doc-section');
             newPane.addClass('doc-level-2');
             newPane.addClass('new');
             focused.append(newPane);
         }

         console.log($('.new'));
         return false;
     };

     var splitDraft3 = function (e) {
         var newPane1 = $('div.doc-section.doc-level-3');
         var newPane2 = $('div.doc-section.doc-level-3');
         var newPane3 = $('div.doc-section.doc-level-3');
         $(this).after(newPane1);
         $(this).after(newPane2);
         $(this).after(newPane3);
         return false;
     };

     var addShortOption = function (e) {

     };

     var doc = document.querySelector('#document');
     var mousetrap = new Mousetrap(doc);
     mousetrap.bind('shift+2', splitDraft2);
     mousetrap.bind('shift + 3', splitDraft3);
     mousetrap.bind('shift + del', function (e) {
         // delete this section
     });
     mousetrap.bind('shift + o', addShortOption);

     $(".short-option").focus(function (e) {
     });

     // enable Markdown? Key bindings: listen for # * _ etc.

});
