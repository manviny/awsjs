'use strict';

/**
 * @ngdoc function
 * @name awsjsApp.controller:UploadfileCtrl
 * @description
 * # UploadfileCtrl
 * Controller of the awsjsApp
 */
angular.module('awsjsApp')
  .controller('UploadfileCtrl', function ($scope) {
$scope.creds = {
  bucket: 'mnytemp',
  access_key: '',
  secret_key: ''
}
 
$scope.upload = function() {
  // Configure The S3 Object
  var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });
  AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
  AWS.config.region = 'eu-west-1';
 
  if($scope.file) {
    var params = { Key: $scope.file.name, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256' };
 
    bucket.putObject(params, function(err, data) {
      if(err) {
        // There Was An Error With Your S3 Config
        alert(err.message);
        return false;
      }
      else {
        // Success!
        alert('Upload Done');
      }
    })
    .on('httpUploadProgress',function(progress) {
          // Log Progress Information
          console.log(Math.round(progress.loaded / progress.total * 100) + '% done');
        });
  }
  else {
    // No File Selected
    alert('No File Selected');
  }
}
  });
