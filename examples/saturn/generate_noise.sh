#!/bin/bash -e

convert -size 2048x2048 xc:gray +noise random -colorspace gray noise.jpg

