#! /bin/bash

cd $(dirname $0)/../

#PROTOC=./node_modules/grpc-tools/bin/protoc
SRC_DIR=./protos
DEST_DIR=./codegen

# protobuf.js
node_modules/.bin/pbjs \
--target static-module \
--wrap commonjs \
--keep-case \
--path ${SRC_DIR} \
--out ${DEST_DIR}/rpc.js \
${SRC_DIR}/**/*.proto

node_modules/.bin/pbts \
--out ${DEST_DIR}/rpc.d.ts \
${DEST_DIR}/rpc.js
