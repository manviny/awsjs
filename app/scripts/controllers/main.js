'use strict';

/**
 * @ngdoc function
 * @name awsjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the awsjsApp
 */
angular.module('awsjsApp')
  .controller('MainCtrl', function ($scope, fbSignin) {
		
		fbSignin.signIn();				// logea con facebook


        var fileChooser = document.getElementById('file-chooser');




		$scope.uploadObject = function(){
		
            var file = fileChooser.files[0];

            if (file) {
                results.innerHTML = '';

                //Object key will be facebook-USERID#/FILE_NAME
                var objKey = 'facebook-' + fbSignin.getfbUserId() + '/' + file.name;
                var params = {
                    Key: objKey,
                    ContentType: file.type,
                    Body: file,
                    ACL: 'public-read'
                };

                bucket.putObject(params, function (err, data) {
                    if (err) { console.log('ERROR: ' + err); } 
                });

            } else {
                results.innerHTML = 'Nothing to upload.';
            }
		
		}


        $scope.listObjects = function(){

            var prefix = 'facebook-' + fbSignin.getfbUserId();

            bucket.listObjects({
                Prefix: prefix
            }, function (err, data) {
                if (err) { console.log('ERROR: ' + err); } 
                else {
                    var objKeys = [];
                    data.Contents.forEach(function (obj) {  objKeys.push( { name: obj.Key} ); });
                    $scope.$apply(function () { $scope.imagenes = objKeys; });
                }
            });
        }



  });
