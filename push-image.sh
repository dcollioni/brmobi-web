#!/bin/bash
#
# Deploy/push Docker image to ENV (production|staging) container registry
#
# e.g.: $ push-image.sh production
#

PROJECT_ID=""
CONTAINER_REGISTRY=""
CLUSTER_NAME=""
CLUSTER_ZONE=""
case "$1" in
  production)
    PROJECT_ID="brmobi-168716"
    CONTAINER_REGISTRY="us.gcr.io/brmobi-168716/prd-brmobi-web"
    CLUSTER_NAME="prd-brmobi-web"
    CLUSTER_ZONE="us-central1-a"
  ;;

  staging)
    PROJECT_ID="brmobi-168716"
    CONTAINER_REGISTRY="us.gcr.io/brmobi-168716/stg-brmobi-web"
    CLUSTER_NAME="stg-brmobi-web"
    CLUSTER_ZONE="us-central1-a"
  ;;

  *)
    echo "[push-image] Usage: ./push-image.sh { production|staging }"
    exit 1
esac

echo "[push-image] Setting up credentials for $1 deployment"
gcloud container clusters get-credentials $CLUSTER_NAME --zone $CLUSTER_ZONE --project $PROJECT_ID
if [[ $? -ne 0 ]]; then
  echo "[push-image] Error while getting credentials for deployment"
  exit 1
fi

echo "[push-image] Tagging Docker image for $1"
docker tag brmobi-web $CONTAINER_REGISTRY
if [[ $? -ne 0 ]]; then
  echo "[push-image] Error while tagging image. Check Docker host machine or your shell"
  exit 1
fi

echo "[push-image] Pushing Docker image to $1 registry: $CONTAINER_REGISTRY"
gcloud docker -- push $CONTAINER_REGISTRY
if [[ $? -ne 0 ]]; then
  echo "[push-image] Error while pushing to registry!"
  exit 1
fi

echo "[push-image] Success!"
exit 0
