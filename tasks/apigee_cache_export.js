/*
 * grunt-apigee-kvm-export
 * https://github.com/grunt-apigee/grunt-apigee-kvm-export
 *
 * Copyright (c) 2015 dzuluaga
 * Licensed under the MIT license.
 */

'use strict';
var apigee = require('apigee_impexp'),
    async = require('async'),
    _ = require('lodash');

module.exports = function(grunt) {
  grunt.registerMultiTask('apigee_cache_export', 'Exports Apigee Edge KVM entries to a directory.', function() {
    var done = this.async();
    var options = this.options({
      type: 'env',
      dest: './',
      match: /(.*?)$/
    });
    grunt.log.writeln('Retrieving Caches at environment level...');
    apigee.getCacheList(
      grunt.config.get("apigee_profiles")[grunt.option('env')],
      options.type,
      getCacheList.bind( { grunt: grunt, options: options, done: done } ),
      grunt.option('curl'));
  });
};

function getCacheList(err, response, body){
  if(!err){
    async.each(
      JSON.parse(body),
      saveCache.bind({ grunt : this.grunt, options : this.options }),
      function(err){
        this.done(err);
      }.bind({ done : this.done }));
  }
}

function saveCache(cacheName, cb){
    if(cacheName.match(this.options.match)){
      apigee.getCache(
        this.grunt.config.get("apigee_profiles")[this.grunt.option('env')],
        cacheName,
        this.options.type,
        function(err, response, body) {
          // get substring of KvmName for forlder_name in directory
          //var folder_name = cacheName.substring(cacheName.indexOf('_') + 1);
          var directory = '../env-scripts/resources/global/cache/';
          //this.grunt.log.writeln('writing KVM config file: ' + this.options.dest + '/' + kvmName + '.json');
          //this.grunt.file.write(this.options.dest + '/' + kvmName + '.json', body);
          // modified default behavior to save KVMs to desired directory
          this.grunt.log.writeln('writing cache config file: ' + this.options.dest + directory + cacheName + '.json');
          this.grunt.file.write(this.options.dest + directory + cacheName + '.json', body);
          cb(err);
        }.bind( { grunt : this.grunt, options : this.options } ),
        this.grunt.option('curl'));
  }else{
    this.grunt.log.debug('skipping cache name: ' + cacheName);
    cb();
  }
}

