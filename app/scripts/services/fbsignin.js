'use strict';

/**
 * @ngdoc service
 * @name awsjsApp.fbSignin
 * @description
 * # fbSignin
 * Factory in the awsjsApp.
 */
angular.module('awsjsApp')
  .factory('fbSignin', function () {

    var appId = '808625129180635';
    var roleArn = 'arn:aws:iam::565574552640:role/FB_login__mnytemp';
    var bucketName = 'mnytemp';
    var fbUserId;


    // API
    
    var getAppID = function(){ return appId; }
    var getRoleArn = function(){ return roleArn; }
    var getBucketName = function(){ return bucketName; }
    var getfbUserId = function(){ return fbUserId; }



    var signIn = function(){

        /*!
         * Login to your application using Facebook.
         * Uses the Facebook SDK for JavaScript available here:
         * https://developers.facebook.com/docs/javascript/gettingstarted/
         */

        window.fbAsyncInit = function () {
            FB.init({
                appId: appId
            });

            FB.login(function (response) {
                bucket.config.credentials = new AWS.WebIdentityCredentials({
                    ProviderId: 'graph.facebook.com',
                    RoleArn: roleArn,
                    WebIdentityToken: response.authResponse.accessToken
                });
                fbUserId = response.authResponse.userID;
                button.style.display = 'block';
            });

        };

         // Load the Facebook SDK asynchronously

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };

    return {
      signIn: signIn,               // logea al usuario y devuelve su ID
      getAppID: getAppID,           // devuleve la appID
      getRoleArn: getRoleArn,        // devuelve el roleArn
      getBucketName: getBucketName,  // devuelve el nombre del bucket
      getfbUserId: getfbUserId
    };   

  });
