var require_dir = require( 'require-directory' );

module.exports = function( citizen, config ){
  if( ! config ) config = {};

  citizen.supervisor = {};
  config.pending_supervision_requests = {};
  
  require_dir( module, './modules/citizen', { visit: run_found_module, recurse: false });

  function run_found_module( found_module ){
    found_module( citizen, config );
  }
}