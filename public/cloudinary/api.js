const CLOUDINARY_URL = 	'https://api.cloudinary.com/v1_1/quartertwo/upload';
const CLOUDINARY_UPLOAD_PRESET = 'wyaejzmi';


var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change',function(event){
  var file = event.target.files[0]
  var formData = new FormData();
  formData.append('file',file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
  }).then(function(res){
    console.log(res.data.secure_url)
    imgPreview.src = res.data.secure_url;
    postPicture(res.data.secure_url)
  }).catch(function(err){
    console.error(err);
  })
    function postPicture(image_url){
      console.log(image_url)
      const options = {
    contentType: 'application/json',
    data: JSON.stringify({image_url: image_url}),
    dataType: 'json',
    type: 'POST',
    url: '/image'
  }

  $.ajax(options)
    .done(() => {
      console.log("in here")
    })
    .fail(($xhr) => {
      Materialize.toast($xhr.responseText, 3000);
    })}

    const options = {
    contentType: 'application/json',
    data: JSON.stringify({image_url: image_url}),
    dataType: 'json',
    type: 'GET',
    url: '/image'
  }

  $.ajax(options)
    .done((data) => {
      console.log("in here")
      $('#img-preview').src(data.image_url)

    })
    .fail(($xhr) => {
      Materialize.toast($xhr.responseText, 3000);
    })

})
