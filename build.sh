#!/bin/bash

# build Docker image
docker build -t brmobi-web:latest .
if [[ $? -ne 0 ]]; then
  # remove built code directory
  rm -rf serverbuild
  rm -rf build
  exit 1
fi

# remove built code directory
rm -rf build
rm -rf serverbuild
