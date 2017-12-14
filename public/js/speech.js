// event.preventDefault();
 ////////////////////////////////////////////
 //  recorderImplementation.js
 //
 //  contains cutom methods, etc for implementing
 //  the speech Recognition
 ////////////////////////////////////////////

 function reset() {
     return false;
 }

 if (!('webkitSpeechRecognition' in window)) {
     upgrade();
 } else {

     var final_transcript = '';
     var recognizing = false;
     var ignore_onend;
     var start_timestamp;

     //recognizing the voice from the mic//
     var recognition = new webkitSpeechRecognition();
     recognition.continuous = true;
     recognition.interimResults = true;

     recognizing=reset();
     recognition.onend = reset;

     recognition.onstart = function() {
         recognizing = true;
     };
       //catch errors//
     recognition.onerror = function(event) {
         console.log('error occurred', event);
         if(event.error === "network") {
             displayMessageGrowl('network error - this application requires a working internet connection', 'error');
         }
         // TODO handle other errors
         // see https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#dfn-emma
         // for error msgs

         //   if (event.error == ‘no-speech’) {
         //     start_img.src = ‘//www.google.com/intl/en/chrome/assets/common/images/content/mic.gif’;
         //     showInfo(‘info_no_speech’);
         //     ignore_onend = true;
         //   }
           // if (event.error == ‘audio-capture’) {
           //   start_img.src = ‘//www.google.com/intl/en/chrome/assets/common/images/content/mic.gif’;
           //   showInfo(‘info_no_microphone’);
           //   ignore_onend = true;
           // }
           if (event.error == 'not-allowed') {
             console.log('if ',event.error)
             if (event.timeStamp - start_timestamp < 100) {
               // showInfo(‘info_blocked’);
               console.log('if ',event.error)
             } else {
               console.log('else',event.error)
               // showInfo(‘info_denied’);
             }
             ignore_onend = true;
           }
     };
     //when the api stops recognizing audio//
     recognition.onend = function() {
         recognizing = false;
         if (ignore_onend) {
             return;
         }
         if (!final_transcript) {
             return;
         }
         if (window.getSelection) {
             window.getSelection().removeAllRanges();
             var range = document.createRange();
             range.selectNode(document.getElementById('final_span'));
             window.getSelection().addRange(range);

         }
     };
     // concatting the two strings to join the audio the mic recognizes//
     recognition.onresult = function(event) {
         var interim_transcript = '';
         if (typeof(event.results) == 'undefined') {
             recognition.onend = null;
             recognition.stop();
             upgrade();
             return;
         }
         for (var i = event.resultIndex; i < event.results.length; ++i) {
             if (event.results[i].isFinal) {
                 final_transcript += event.results[i][0].transcript;
                 console.log(final_transcript);


             } else {
                 interim_transcript += event.results[i][0].transcript;
             }
             window.localStorage.setItem(start_timestamp, final_transcript);
             window.localStorage.getItem('start_timestamp');
         }
         //the two strings that are concatinating//
         final_span.value = final_transcript;
         interim_span.value = interim_transcript;
     }
     Array.prototype.forEach.call(document.getElementsByClassName('final_span'), function (element) {
 element.style = 'color: #F00';
});

}
     function upgrade() {
         displayMessageGrowl('browser not compatible - upgrade to latest chrome', 'error');
     }


     function toggleStop(){
         if (recognizing) {
             recognition.stop();
             if(recognition.stop()==true){
               return (localStorage.keyNotes+=1);
             }
         }
         console.log('toggle recog ', recognizing);
         reset();
         document.getElementById('record_button').innerHTML = 'Click to Record';
         console.log(event.target);
         // if(event.target).on(‘click’,function(audio){
         //
         // })
     }
     // record button//
     $('#record_button').on('click touchstart', function() {
        function toggleStartStop() {
            if (recognizing) {
                toggleStop();

            } else {
                final_transcript = '';
                recognition.lang = 'en-US';
                recognition.start();

                final_span.value = '';
                interim_span.value = '';
                start_timestamp = event.timeStamp;
                document.getElementById('record_button').innerHTML = 'Stop Recording';
            }
        }
     })
