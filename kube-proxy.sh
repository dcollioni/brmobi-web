#!/bin/bash
#
# Starts `kubectl proxy` after setting up credentials for a given environment
#
# e.g.: $ kube-proxy.sh production
#

PROJECT_ID=""
CLUSTER_NAME=""
CLUSTER_ZONE=""
case "$1" in
  production)
    PROJECT_ID="brmobi-168716"
    CLUSTER_NAME="prd-brmobi-web"
    CLUSTER_ZONE="us-central1-a"
  ;;

  staging)
    PROJECT_ID="brmobi-168716"
    CLUSTER_NAME="stg-brmobi-web"
    CLUSTER_ZONE="us-central1-a"
  ;;

  *)
    echo "[kube-proxy] Usage: ./kube-proxy.sh { production|staging }"
    exit 1
esac

echo "[kube-proxy] Setting up credentials for $1"
gcloud container clusters get-credentials $CLUSTER_NAME --zone $CLUSTER_ZONE --project $PROJECT_ID
if [[ $? -ne 0 ]]; then
  echo "[kube-proxy] Error while getting credentials"
  exit 1
fi

echo "[kube-proxy] Starting"
kubectl proxy
