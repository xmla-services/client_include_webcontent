#!/bin/sh
# get some vars from env and write to json
RUNTIME_CONF="{
  \"SENSINACT_INFO_ON\": $SENSINACT_INFO_ON,
  \"DAANSE_INFO_ON\": $DAANSE_INFO_ON
}"
echo $RUNTIME_CONF > /home/nonroot/docker/artifact/config.json
# start my app
node /home/nonroot/docker/artifact/start_server.js
