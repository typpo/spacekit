#!/usr/bin/env python

import json
import sys

from astropy import units as u
from astropy.coordinates import Angle

lib = []
with open(sys.argv[1], 'r') as f:
    lib = json.loads(f.read())

entries = []
for star in lib:
    ra = float(Angle(star['RA']).to_string(decimal=True))
    dec = float(Angle(star['Dec']).to_string(decimal=True))
    if 'K' in star:
        k = int(star['K'])
    else:
        k = -1
    v = float(star['V'])
    entries.append('[%f,%f,%d,%f]' % (ra, dec, k, v))

print '[%s]' % ',\n'.join(entries)
