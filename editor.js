
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
         var newPane1 = $('div.doc-section.doc-level-2');
         var newPane2 = $('div.doc-section.doc-level-2');
         $(this).after(newPane1);
         $(this).after(newPane2);
         return true;
     };

     var splitDraft3 = function (e) {
         var newPane1 = $('div.doc-section.doc-level-3');
         var newPane2 = $('div.doc-section.doc-level-3');
         var newPane3 = $('div.doc-section.doc-level-3');
         $(this).after(newPane1);
         $(this).after(newPane2);
         $(this).after(newPane3);
         return true;
     };

     var addShortOption = function (e) {
         ;
     }

     $("#document").focus(function (e) {
         keyboardJS.bind('shift + 2', splitDraft2);
         keyboardJS.bind('shift + 3', splitDraft3);
         keyboardJS.bind('shift + del', function (e) {
             // delete this section
         });
         keyboardJS.bind('shift + o', addShortOption);
     }
     );

     $(".short-option").focus(function (e) {
         ;
     })

     // enable Markdown? Key bindings: listen for # * _ etc.

});
