'use strict';

/* Services */
var SERVER = 'http://localhost:2403';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('services', [])
.factory('Users', function($http){
    return {
        get: function(id){
            if(id)
                return $http.get(SERVER+'/users/'+id);
            else
                return $http.get(SERVER+'/users');
        },
        update: function(id, user){
            return $http.put(SERVER+'/users/'+id, user);
        },
        create: function(user){
            return $http.post(SERVER+'/users', user);
        },
        delete: function(id){
            return $http.delete(SERVER+'/users/'+id);
        }
    }
})
