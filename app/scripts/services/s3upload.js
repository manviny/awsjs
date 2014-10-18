'use strict';

/**
 * @ngdoc service
 * @name awsjsApp.S3Upload
 * @description
 * # S3Upload
 * Factory in the awsjsApp.
 */
angular.module('awsjsApp')
  .factory('S3Upload', function () {


            var appId = '808625129180635';
        var roleArn = 'arn:aws:iam::565574552640:role/FB_login__mnytemp';
        var bucketName = 'mnytemp';
        var fbUserId;
        var bucket = new AWS.S3({  params: { Bucket: bucketName }  });

        window.fbAsyncInit = function () {
            FB.init({  appId: appId });
            FB.login(function (response) {
                bucket.config.credentials = new AWS.WebIdentityCredentials({
                    ProviderId: 'graph.facebook.com',
                    RoleArn: roleArn,
                    WebIdentityToken: response.authResponse.accessToken
                });
                fbUserId = response.authResponse.userID;
                // button.style.display = 'block';
            });
        };

alert("jj")
    var uploadFile = function(id, role){ 

        var fileChooser = document.getElementById('file-chooser');
        var button = document.getElementById('upload-button');
        var results = document.getElementById('results');

        button.addEventListener('click', function () {
            var file = fileChooser.files[0];
console.debug("file",file);
            if (file) {
                results.innerHTML = '';

                //Object key will be facebook-USERID#/FILE_NAME
                var objKey = 'facebook-' + fbUserId + '/' + file.name;
                var params = {
                    Key: objKey,
                    ContentType: file.type,
                    Body: file,
                    ACL: 'public-read'
                };

                bucket.putObject(params, function (err, data) {
                    if (err) {
                        results.innerHTML = 'ERROR: ' + err;
                    } else {
                        listObjs();
                    }
                });

            } else {
                results.innerHTML = 'Nothing to upload.';
            }

        }, false);

        function listObjs() {

            var prefix = 'facebook-' + fbUserId;

            bucket.listObjects({
                Prefix: prefix
            }, function (err, data) {
                if (err) {
                    results.innerHTML = 'ERROR: ' + err;
                } else {
                    var objKeys = "";
                    data.Contents.forEach(function (obj) {
                        objKeys += obj.Key + "<br>";
                    });
                    results.innerHTML = objKeys;
                }
            });
        }
    };



    return {
      uploadFile: uploadFile               // logea al usuario y devuelve su ID

    };  


  });
