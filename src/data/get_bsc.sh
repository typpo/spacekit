#!/bin/bash -e

pushd $(dirname $0) &>/dev/null

curl -o bsc5-short.json https://raw.githubusercontent.com/brettonw/YaleBrightStarCatalog/master/bsc5-short.json

python process_bsc.py bsc5-short.json > bsc_processed.json

#rm bsc5-short.json

popd &>/dev/null

