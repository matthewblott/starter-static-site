#!/usr/bin/env bash

new_name=$1

this_dir=`pwd`

img_dir="${HOME}/Pictures"

img_filename=`ls -l -1 "${img_dir}" | tail -n 1`
last_file="${img_dir}/${img_filename}"

ymd=`date "+%F"`

factor=.282

width=`identify -ping -format %w "${last_file}"`

x=`bc -l <<< "${width}*${factor}"`

magick "${last_file}" -resize ${x} "${this_dir}/${ymd}-${new_name}.jpg"
