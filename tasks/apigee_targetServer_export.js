/*
 * grunt-apigee-kvm-export
 * https://github.com/grunt-apigee/grunt-apigee-kvm-export
 *
 * Copyright (c) 2015 dzuluaga
 * Licensed under the MIT license.
 */

'use strict';
var apigee = require('apigee-sdk-mgmt-api'),
    async = require('async'),
    _ = require('lodash');

module.exports = function(grunt) {
  grunt.registerMultiTask('apigee_targetServer_export', 'Exports Apigee Edge KVM entries to a directory.', function() {
    var done = this.async();
    var options = this.options({
      type: 'env',
      dest: './',
      match: /(.*?)$/
    });
    grunt.log.writeln('Retrieving targetServers at environment level...');
    apigee.getTargetServersList(
      grunt.config.get("apigee_profiles")[grunt.option('env')],
      options.type,
      getTargetServerList.bind( { grunt: grunt, options: options, done: done } ),
      grunt.option('curl'));
  });
};

function getTargetServerList(err, response, body){
  if(!err){
    async.each(
      JSON.parse(body),
      saveTargetServer.bind({ grunt : this.grunt, options : this.options }),
      function(err){
        this.done(err);
      }.bind({ done : this.done }));
  }
}

function saveTargetServer(targetServerName, cb){
    if(targetServerName.match(this.options.match)){
      apigee.getTargetServer(
        this.grunt.config.get("apigee_profiles")[this.grunt.option('env')],
        targetServerName,
        this.options.type,
        function(err, response, body) {
          // get substring of KvmName for forlder_name in directory
          //var folder_name = cacheName.substring(cacheName.indexOf('_') + 1);
          var directory = '/env-scripts/resources/global/targetservers/';
          //this.grunt.log.writeln('writing KVM config file: ' + this.options.dest + '/' + kvmName + '.json');
          //this.grunt.file.write(this.options.dest + '/' + kvmName + '.json', body);
          // modified default behavior to save KVMs to desired directory
          this.grunt.log.writeln('writing targetServer config file: ' + this.options.dest + directory + targetServerName + '.json');
          this.grunt.file.write(this.options.dest + directory + targetServerName + '.json', body);
          cb(err);
        }.bind( { grunt : this.grunt, options : this.options } ),
        this.grunt.option('curl'));
  }else{
    this.grunt.log.debug('skipping targetServer name: ' + targetServerName);
    cb();
  }
}

