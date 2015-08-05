/*
 * grunt-apigee-kvm-export
 * https://github.com/grunt-apigee/grunt-apigee-kvm-export
 *
 * Copyright (c) 2015 dzuluaga
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var apigee_conf = require('./grunt/apigee-config.js');
  // Project configuration.
  grunt.initConfig({
    apigee_profiles : apigee_conf.profiles(grunt),
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },


    //This is to import KVMs to Apigee Env
    apigee_kvm_import: {
      "denz237-test" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/*/kvm/*.json', '!../env-scripts/resources/global/kvm/*.json']},
        ]
      },
      "denz237-prod" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/*/kvm/*.json', '!../env-scripts/resources/global/kvm/*.json']},
        ]
      },
      "pizzahut-nonprod-qat" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/*/kvm/*.json', '!../env-scripts/resources/global/kvm/*.json']},
        ]
      },
      "pizzahut-nonprod-dev" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/*/kvm/*.json', '!../env-scripts/resources/global/kvm/*.json']},
        ]
      },
      "pizzahut-nonprod-dev2" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/*/kvm/*.json', '!../env-scripts/resources/global/kvm/*.json']},
        ]
      },
      "pizzahut-nonprod-e2e" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/*/kvm/*.json', '!../env-scripts/resources/global/kvm/*.json']},
        ]
      },
      "pizzahut-prod-staging" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/*/kvm/*.json', '!../env-scripts/resources/global/kvm/*.json']},
        ]
      },
      "pizzahut-prod-prod" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/*/kvm/*.json', '!../env-scripts/resources/global/kvm/*.json']},
        ]
      },
      "dengran-test" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/*/kvm/*.json', '!../env-scripts/resources/global/kvm/*.json']},
        ]
      },
      "dengran-prod" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/*/kvm/*.json', '!../env-scripts/resources/global/kvm/*.json']},
        ]
      }
    },

    // get KVMs from apigee env to local directory
    apigee_kvm_export: {      
        "denz237-prod" : {
          options: {
            type: "env",
            match: /(.*?)$/ //  exports all KVMs by default or /(.*?)$/
          }
        },
        "denz237-test" : {
          options: {
            type: "env",
            match: /(.*?)$/ //  exports all KVMs by default or /(.*?)$/
          }
        },
        "pizzahut-nonprod-qat" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-nonprod-dev" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-nonprod-dev2" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-nonprod-e2e" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-prod-staging" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-prod-prod" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "dengran-test" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "dengran-prod" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        }
    },

    //This is to import caches to Apigee Env
    apigee_cache_import: {
      "denz237-test" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/cache/*.json']},
        ]
      },
      "denz237-prod" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/cache/*.json']},
        ]
      },
      "pizzahut-nonprod-qat" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/cache/*.json']},
        ]
      },
      "pizzahut-nonprod-dev" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/cache/*.json']},
        ]
      },
      "pizzahut-nonprod-dev2" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/cache/*.json']},
        ]
      },
      "pizzahut-nonprod-e2e" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/cache/*.json']},
        ]
      },
      "pizzahut-prod-staging" : {
        options: {
          type: "env"
        },
        files: [{src: ['env-scripts/resources/global/cache/*.json']},
        ]
      },
      "pizzahut-prod-prod" : {
        options: {
          type: "env"
        },
        files: [{src: ['env-scripts/resources/global/cache/*.json']},
        ]
      },
      "dengran-test" : {
        options: {
          type: "env"
        },
        files: [{src: ['env-scripts/resources/global/cache/*.json']},
        ]
      },
      "dengran-prod" : {
        options: {
          type: "env"
        },
        files: [{src: ['env-scripts/resources/global/cache/*.json']},
        ]
      }
    },

    apigee_cache_export:{      
        "denz237-prod" : {
          options: {
            type: "env",
            match: /(.*?)$/ //  exports all KVMs by default or /(.*?)$/
          }
        },
        "denz237-test" : {
          options: {
            type: "env",
            match: /(.*?)$/ //  exports all KVMs by default or /(.*?)$/
          }
        },
        "pizzahut-nonprod-qat" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-nonprod-dev" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-nonprod-dev2" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-nonprod-e2e" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-prod-staging" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-prod-prod" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "dengran-test" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "dengran-prod" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        }    
    },

    apigee_targetServer_import: {
      "denz237-test" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/targetservers/*.json']},
        ]
      },
      "denz237-prod" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/targetservers/*.json']},
        ]
      },
      "pizzahut-nonprod-qat" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/targetservers/*.json']},
        ]
      },
      "pizzahut-nonprod-dev" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/targetservers/*.json']},
        ]
      },
      "pizzahut-nonprod-dev2" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/targetservers/*.json']},
        ]
      },
      "pizzahut-nonprod-e2e" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/targetservers/*.json']},
        ]
      },
      "pizzahut-prod-staging" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/targetservers/*.json']},
        ]
      },
      "pizzahut-prod-prod" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/targetservers/*.json']},
        ]
      },
      "dengran-test" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/targetservers/*.json']},
        ]
      },
      "dengran-prod" : {
        options: {
          type: "env"
        },
        files: [{src: ['../env-scripts/resources/global/targetservers/*.json']},
        ]
      }
    },

    apigee_targetServer_export:{      
        "denz237-prod" : {
          options: {
            type: "env",
            match: /(.*?)$/ 
          }
        },
        "denz237-test" : {
          options: {
            type: "env",
            match: /(.*?)$/ //  exports all KVMs by default or /(.*?)$/
          }
        },
        "pizzahut-nonprod-qat" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-nonprod-dev" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-nonprod-dev2" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-nonprod-e2e" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-prod-staging" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "pizzahut-prod-prod" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "dengran-test" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        },
        "dengran-prod" : {
          options: {
            type: "env",
            match: /(.*?)$/
          }
        }         
    },
    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.

  //Switch target org or env
  grunt.task.registerTask('switchTarget', 'A sample task to switch the org.', function(target) {
    var profiles = grunt.config.get('apigee_profiles');
    if(grunt.option('targetorg') != null)
    {
        profiles[grunt.option('env')].org = grunt.option('targetorg'); // change org to new org
        profiles[grunt.option('env')].username = grunt.option('targetusername');
        profiles[grunt.option('env')].password = grunt.option('targetpassword');
    }  
    if(grunt.option('targetenv') != null)
    {
      profiles[grunt.option('env')].env = grunt.option('targetenv'); // same for env
    }    
    grunt.config.set('apigee_profiles',profiles);
  });
  //Apigee PH prod env
  grunt.task.registerTask('switchToStaging', 'A sample task to switch the org.', function(target) {
    var profiles = grunt.config.get('apigee_profiles');  
    profiles[grunt.option('env')].env = "staging"; // same for env
    grunt.config.set('apigee_profiles',profiles);
  });
  grunt.task.registerTask('switchToProd', 'A sample task to switch the org.', function(target) {
    var profiles = grunt.config.get('apigee_profiles');  
    profiles[grunt.option('env')].env = "prod"; // same for env
    grunt.config.set('apigee_profiles',profiles);
  });

  //Apigee PH nonprod envs
  grunt.task.registerTask('switchToQat', 'A sample task to switch the org.', function(target) {
    var profiles = grunt.config.get('apigee_profiles');  
    profiles[grunt.option('env')].env = "dev"; // same for env
    grunt.config.set('apigee_profiles',profiles);
  });
  grunt.task.registerTask('switchToDev', 'A sample task to switch the org.', function(target) {
    var profiles = grunt.config.get('apigee_profiles');  
    profiles[grunt.option('env')].env = "dev"; // same for env
    grunt.config.set('apigee_profiles',profiles);
  });

  grunt.task.registerTask('switchToDev2', 'A sample task to switch the org.', function(target) {
    var profiles = grunt.config.get('apigee_profiles');  
    profiles[grunt.option('env')].env = "dev2"; // same for env
    grunt.config.set('apigee_profiles',profiles);
  });

  grunt.task.registerTask('switchToE2E', 'A sample task to switch the org.', function(target) {
    var profiles = grunt.config.get('apigee_profiles');  
    profiles[grunt.option('env')].env = "e2e"; // same for env
    grunt.config.set('apigee_profiles',profiles);
  });

  //Code below is used to import KVMS to all env in PH prod
  grunt.registerTask('importKVMsToProdEnvs', [
    'apigee_kvm_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToStaging',
    'apigee_kvm_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToProd',
    'apigee_kvm_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env')
    ]
    );
  //Code below is used to import Caches to all env in PH prod
  grunt.registerTask('importCachesToProdEnvs', [
    'apigee_cache_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToStaging',
    'apigee_cache_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToProd',
    'apigee_cache_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env')
    ]
    );
  //Code below is used to import target servers to all env in PH prod
  grunt.registerTask('importTargetServersToProdEnvs', [
    'apigee_targetServer_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'),
    'switchToStaging',
    'apigee_targetServer_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'),
    'switchToProd',
    'apigee_targetServer_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env')
    ]
    );

  //Code below is used to import KVMS to all env in PH nonprod
  grunt.registerTask('importKVMsToNonprodEnvs', [
    'apigee_kvm_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToQat',
    'apigee_kvm_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToDev',
    'apigee_kvm_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToDev2',
    'apigee_kvm_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToDevE2E',
    'apigee_kvm_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env')
    ]
    );  
  //Code below is used to import Caches to all env in PH nonprod
  grunt.registerTask('importCachesToNonprodEnvs', [
    'apigee_cache_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToQat',
    'apigee_cache_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToDev',
    'apigee_cache_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToDev2',
    'apigee_cache_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToDevE2E',
    'apigee_cache_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env')
    ]
    );  
  //Code below is used to import target servers to all env in PH nonprod
  grunt.registerTask('importTargetServersToNonprodEnvs', [
    'apigee_targetServer_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToQat',
    'apigee_targetServer_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToDev',
    'apigee_targetServer_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToDev2',
    'apigee_targetServer_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'), 
    'switchToDevE2E',
    'apigee_targetServer_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env')
    ]
    );

  grunt.registerTask('test', ['clean', 'apigee_kvm_export', 'nodeunit']);
  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
  
  // get and send KVMs in Apigee cloud
  grunt.registerTask('importKVMs', 'apigee_kvm_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'));
  grunt.registerTask('exportKVMs', 'apigee_kvm_export:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'));
  // get and send Caches in Apigee cloud  
  grunt.registerTask('importCaches', 'apigee_cache_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'));
  grunt.registerTask('exportCaches', 'apigee_cache_export:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'));
  // send and send targetServers in Apigee cloud
  grunt.registerTask('importTargetServers', 'apigee_targetServer_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'));
  grunt.registerTask('exportTargetServers', 'apigee_targetServer_export:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'));

  //execute export only commands
  grunt.registerTask('exportTasks',['exportKVMs', 'exportCaches', 'exportTargetServers']);
  //execute import only commands
  grunt.registerTask('importTasks',['importKVMs', 'importCaches', 'importTargetServers']);
  //execute from export to import
  grunt.registerTask('expThenImpToSpecTarget',['exportTasks', 'switchTarget', 'importTasks']);

  
  //import KVMS, Caches, target servers to all PH nonprod envs
  grunt.registerTask('importToAllNonprodEnvs',['importKVMsToNonprodEnvs','importCachesToNonprodEnvs', 'importTargetServersToNonprodEnvs']);
  //import KVMs, Caches, target servers too all PH prod envs
  grunt.registerTask('importToAllProdEnvs',['importKVMsToProdEnvs','importCachesToProdEnvs', 'importTargetServersToProdEnvs']);
  
  //this code will export from an apigee org and env specified by user then import to PH nonprod envs
  grunt.registerTask('expThenImportToAllNonprodEnvs', ['exportTasks', 'switchTarget', 'importToAllNonprodEnvs']);
  //this code will export from an apigee org and env specified by user then import to PH prod envs
  grunt.registerTask('expThenImportToAllProdEnvs', ['exportTasks', 'switchTarget', 'importToAllProdEnvs']);

  //THIS CODE IS FOR TESTING 
  //In this testing test and prod environments only are used
  // switchToProd is already registered above since it is also used for Apigee PH specific task no need to create another one for test

  //when testing on your own org, you must add your own org in the properties above inside the grunt.initConfig
  grunt.task.registerTask('switchToTest', 'A sample task to switch the org.', function(target) {
    var profiles = grunt.config.get('apigee_profiles');  
    profiles[grunt.option('env')].env = "test"; // same for env
    grunt.config.set('apigee_profiles',profiles);
  });

  grunt.registerTask('importKVMsToTarget', [
    'apigee_kvm_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'),      
    'switchToTest',
    'apigee_kvm_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'),
    'switchToProd',
    'apigee_kvm_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env')
    ]);

  grunt.registerTask('importCachesToTarget', [
    'apigee_cache_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'),      
    'switchToTest',
    'apigee_cache_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'),
    'switchToProd',
    'apigee_cache_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env')
    ]);

  grunt.registerTask('importTargetServersToTarget', [
    'apigee_targetServer_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'),      
    'switchToTest',
    'apigee_targetServer_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env'),
    'switchToProd',
    'apigee_targetServer_import:' + grunt.config.get("apigee_profiles")[grunt.option('env')].org + '-' + grunt.option('env')
    ]);
  grunt.registerTask('importAllToTarget', ['importKVMsToTarget', 'importCachesToTarget', 'importTargetServersToTarget']);
  grunt.registerTask('expThenImport', ['exportTasks', 'switchTarget', 'importAllToTarget']);
};


  