/*
 * grunt-apigee-kvm
 * https://github.com/grunt-apigee/grunt-apigee-kvm
 *
 * Copyright (c) 2015 dzuluaga
 * Licensed under the Apache-2.0 license.
 */

'use strict';
var request = require('request');
var async = require('async');
var curl = require('curl-cmd');
var apigeeSdk = require('apigee-impexp-package');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('apigee_cache_import', 'Grunt plugin to import KVMs.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      type: 'env',
    });
    var done = this.async();
    // Iterate over all specified file groups.
    async.eachSeries(this.files,
      function(fileGroup, cb){
        async.eachSeries(fileGroup.src.map(function(filepath){ return {filepath : filepath, options : options};}),
          upsertCache,
          function(error){
            cb(error);
          });
      },
      function(error){
        done(error);
      }
    );
  });

  function upsertCache(filepath, cb2){
    if(filepath.options.type === 'env'){
      apigeeSdk.getCachesEnvironment(grunt.config.get("apigee_profiles")[grunt.option('env')],
        function(error, response, body){
          grunt.log.debug(response.statusCode);grunt.log.debug(body);
          upsertCacheList(body, filepath, cb2);
        }, grunt.option('curl'));
    }else if(filepath.options.type === 'org'){
      apigeeSdk.getCachesOrganization(grunt.config.get("apigee_profiles")[grunt.option('env')],/*{'test' : {url_mgmt : 'https://api.enterprise.apigee.com', org : grunt.option('org'), env : grunt.option('env'), username : grunt.option('username'), password : grunt.option('password')}, env : grunt.option('env')},*/
        function(error, response, body){
          grunt.log.debug(response.statusCode);grunt.log.debug(body);
          upsertCacheList(body, filepath, cb2);
        }, grunt.option('curl'));
    }
  }

  function upsertCacheList(body, filepath, cb2){//error, response, body){
    /*jshint validthis:true */
    var cacheImport = grunt.file.readJSON(filepath.filepath);
    var cacheExisting = JSON.parse(body);
    //var kvmIndex =  cacheExisting.indexOf(cacheImport.name);
    if(cacheExisting.indexOf(cacheImport.name) !== -1){ //kvm to be imported when it already exists
      updateCache(filepath, cb2);
    }
    else{
      createCache(filepath, cb2);
    }
  }

  function updateCache(filepath, cb2){ /*cacheImport,*/
      var cacheImport = grunt.file.readJSON(filepath.filepath);
      if(filepath.options.type === 'env'){
        apigeeSdk.updateCachesEnvironment(grunt.config.get("apigee_profiles"),/*{'test' : {url_mgmt : 'https://api.enterprise.apigee.com', org : grunt.option('org'), env : grunt.option('env'), username : grunt.option('username'), password : grunt.option('password')}, env : grunt.option('env')},*/
          cacheImport,
          function(error, response, body){
            grunt.log.debug(response.statusCode);grunt.log.debug(body);
            cb2(error);
          },
          grunt.option('curl'));
      }else if(filepath.options.type === 'org'){
        apigeeSdk.updateCachesOrganization(grunt.config.get("apigee_profiles"),/*{'test' : {url_mgmt : 'https://api.enterprise.apigee.com', org : grunt.option('org'), env : grunt.option('env'), username : grunt.option('username'), password : grunt.option('password')}, env : grunt.option('env')},*/
          cacheImport,
          function(error, response, body){
            grunt.log.debug(response.statusCode);grunt.log.debug(body);
            cb2(error);
          },
          grunt.option('curl'));
      }
  }

  function createCache(filepath, cb2){
      var uri;
      var cacheImport = grunt.file.readJSON(filepath.filepath);
      if(filepath.options.type === 'env'){
        //uri = "https://api.enterprise.apigee.com/v1/organizations/" + grunt.option("org") + "/environments/" + grunt.option("env") + "/keyvaluemaps";
        apigeeSdk.createCachesEnvironment(grunt.config.get("apigee_profiles"),/*{'test' : {url_mgmt : 'https://api.enterprise.apigee.com', org : grunt.option('org'), env : grunt.option('env'), username : grunt.option('username'), password : grunt.option('password')}, env : grunt.option('env')},*/
          cacheImport,
          function(error, response, body){
            grunt.log.debug(response.statusCode);grunt.log.debug(body);
            cb2(error);
          },
          grunt.option('curl'));
      }else if(filepath.options.type === 'org'){
        //uri = "https://api.enterprise.apigee.com/v1/organizations/" + grunt.option("org") + "/keyvaluemaps";
        apigeeSdk.createCachesOrganization(grunt.config.get("apigee_profiles"),/*{'test' : {url_mgmt : 'https://api.enterprise.apigee.com', org : grunt.option('org'), env : grunt.option('env'), username : grunt.option('username'), password : grunt.option('password')}, env : grunt.option('env')},*/
          cacheImport,
          function(error, response, body){
            grunt.log.debug(response.statusCode);grunt.log.debug(body);
            cb2(error);
        },
        grunt.option('curl'));
    }
  }
};
